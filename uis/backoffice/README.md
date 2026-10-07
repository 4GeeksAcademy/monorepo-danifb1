# Brasaland internal backoffice

Initial internal workspace for Brasaland Digital. The first view summarizes company facts and known source-system constraints from `CONTEXT.md`; values are static context, not live restaurant data. The sidebar switches between overview, operations, purchasing, and training views.

This app uses native HTML, CSS, and JavaScript modules. No API or backend service is created because the repository does not yet define connected data sources or an API contract.

## Run locally

From the repository root:

```sh
python3 -m http.server 4174 --directory uis/backoffice
```

Open `http://localhost:4174/`. The root route is `index.html` in this app's document root. Google Fonts are optional; local sans-serif fallbacks are configured.

## Data integrity

The overview uses only facts in `CONTEXT.md`: 14 own restaurants, two markets, about 115 employees, and about 20 suppliers. Known workflow constraints are also surfaced. It intentionally shows no sales, inventory quantities, or live integrations that the source context does not provide.
