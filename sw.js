// Minimal service worker. Caches the app shell so it opens even with no signal,
// which matters for the exact audience this app serves.
//
// Network first: when online, people always get the latest version and the
// saved copy is refreshed. The saved copy is only used when the network fails.
const CACHE = "bridgestl-v12";
const ASSETS = [
  "./", "./index.html", "./manifest.json", "./icons/icon-192.png", "./icons/icon-512.png", "./icons/bridgestl-logo.png",
  "./fonts/public-sans-latin-wght-normal.woff2", "./fonts/public-sans-latin-wght-italic.woff2"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting(); // take over right away instead of waiting for old tabs to close
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  // Only handle this app's own files; anything else goes straight to the network
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;

  e.respondWith(
    fetch(req)
      .then(res => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy));
        }
        return res;
      })
      .catch(() =>
        caches.match(req, { ignoreSearch: true })
          // Offline and this exact page isn't saved: fall back to the app itself
          .then(cached => cached || (req.mode === "navigate" ? caches.match("./index.html") : undefined))
          .then(cached => cached || Response.error())
      )
  );
});
