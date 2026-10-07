# Convenciones del repositorio

- `CONTEXT.md` y `CONTEXT.es.md` contienen el contexto de la empresa; consulta el briefing en español para los detalles de Brasaland.
- `agents/` contiene agentes concretos, cada uno documentado con objetivo, capacidades, conocimiento, herramientas y pruebas.
- `skills/` contiene capacidades reutilizables; cada skill se organiza en su propia carpeta con `SKILL.md` y, cuando sea necesario, recursos o scripts.
- `services/` aloja la API central y procesos backend; el README recomienda empezar con una API FastAPI modular en lugar de dividir prematuramente en microservicios.
- `data/` organiza fuentes, pipelines, datos procesados y evaluación. Documenta origen y reglas de privacidad para datos crudos.
- `uis/` contiene interfaces, `workflows/` automatización, `packages/` librerías reutilizables y `docs/` arquitectura y decisiones transversales.
- Documenta cada nuevo agente, app, servicio o pipeline en su subcarpeta. No asumas que el repositorio ya tiene aplicaciones ejecutables o un runner global.
