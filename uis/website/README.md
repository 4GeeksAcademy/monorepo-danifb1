# Brasaland public website

Public, static corporate website for Brasaland. It presents company facts from the repository context and uses native HTML, CSS, JavaScript modules, and Web Components; there is no frontend framework or API dependency.

## Run locally

From the repository root:

```sh
python3 -m http.server 4173 --directory uis/website
```

Open `http://localhost:4173/`. The root route is `index.html` in this app's document root. Google Fonts and Unsplash photography require an internet connection; system fallbacks and background colors remain available offline.

## Components

- `brasa-header`: responsive navigation with an accessible mobile menu.
- `market-card`: reusable market panel for Colombia and Florida.
- `brasa-footer`: shared brand and contact footer.

The page contains only the company facts stated in `CONTEXT.md`; it does not imply online ordering, location-level inventory, or real-time integrations are available.
