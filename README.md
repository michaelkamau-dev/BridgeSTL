# BridgeSTL

A mobile-first web app connecting households in St. Louis City, North County, and the Metro East (Illinois) to free and low-cost internet, devices, and in-person tech help.

Built for the 2026 Congressional App Challenge, Illinois 15th District.

## Why this exists

Roughly 1 in 4 households in the region gets online with a smartphone only. The City of St. Louis runs a strong digital inclusion program (ConnectSTL, Learning Labs, Digital Navigators), but it stops at the city line. North County and the Metro East, including East St. Louis, have no equivalent single front door. And since the federal Affordable Connectivity Program ended in 2024, figuring out which surviving discount programs a family qualifies for means reading three different provider websites.

This app does three things:

1. **Plan Matcher.** Enter household size, income, and any benefits (SNAP, school lunch, Medicaid, SSI). The app checks eligibility logic for Lifeline, AT&T Access, and Spectrum Internet Assist against the 2026 federal poverty guidelines, and shows the stacking math when discounts combine.
2. **Cross-border directory.** Learning labs, libraries, and help desks on both the Missouri and Illinois sides, filterable by area.
3. **Phone-only mode.** A filter built specifically for smartphone-only households: where to borrow a laptop, print from a phone, or sit down at a public computer.

## Tech

Plain HTML, CSS, and JavaScript. No frameworks, no build step, no server. All eligibility logic is readable if/else code in `index.html`. Installable as a Progressive Web App (add to home screen, runs full screen, works offline via a service worker).

## Data sources

- 2026 HHS Poverty Guidelines (Federal Register, January 2026)
- Provider program pages: AT&T Access, Spectrum Internet Assist, checklifeline.org
- ConnectSTL / St. Louis Development Corporation public program information

Program prices and site hours change. Entries marked "call ahead" have not been independently verified yet.

## License

MIT, copyright Michael Kamau.
