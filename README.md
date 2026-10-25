# BridgeSTL

A mobile-first web app connecting households in St. Louis City, St. Louis County, and the Metro East (Illinois) to free and low-cost internet, devices, and local tech help.

**Live site:** https://michaelkamau-dev.github.io/BridgeSTL/

Built for the 2026 Congressional App Challenge, Illinois 15th District.

## Why this exists

Roughly 1 in 4 households in the region gets online with a smartphone only. The City of St. Louis runs a strong digital inclusion program (ConnectSTL, Learning Labs, Digital Navigators), but it stops at the city line. North County and the Metro East, including East St. Louis, have no equivalent single front door. And since the federal Affordable Connectivity Program ended in 2024, figuring out which surviving discount programs a family qualifies for means reading three different provider websites.

The app has three sections:

1. **Home.** Two entry points: get a device or home internet, or find help nearby.
2. **Get connected.** Choose a computer to keep, a device to borrow, or home internet, then a location and only the questions that matter for that need. Results explain why each program may fit (checked against the 2026 federal poverty guidelines and each program's published rules), what it costs, what to have ready, and link to the official application. Unknown income or benefits are shown as "may fit", never as confirmed.
3. **Nearby help.** A map of St. Louis City, St. Louis County, and Madison and St. Clair counties with libraries and help desks that offer public computers, Wi-Fi, printing, and tech help.

"Use my location" finds a person's area on the device itself from the map's own borders; the location is never sent anywhere.

## Tech

Plain HTML, CSS, and JavaScript. No frameworks, no build step, no server. All resource data lives in one `RESOURCES` list in `index.html`, and the eligibility logic is readable code next to it. The map is hand-built SVG drawn from real latitude and longitude points. Installable as a Progressive Web App; a network-first service worker loads fresh pages online and the saved copy when offline. Public Sans (SIL Open Font License) is bundled in `fonts/`.

To preview locally: `node .claude/serve.js` and open http://localhost:8765.

## Data sources

Every program and location was read on the organization's own website or a government site, and each listing shows its official source link and the date it was checked (October 2026). Examples:

- 2026 HHS Poverty Guidelines; lifelinesupport.org (Lifeline)
- Provider pages for Access from AT&T, Spectrum Internet Assist, T-Mobile Project 10Million, and Assurance Wireless
- PCs for People, Human-I-T, Computers for the Blind, and St. Louis BWorks
- St. Louis Public Library, St. Louis County Library, and Metro East library websites

Program prices and site hours change. Listings that could not be confirmed online are labeled as unconfirmed.

## License

MIT, copyright Michael Kamau.
