# Contexto técnico

## Estado confirmado del repositorio

- El repositorio es una plantilla monorepo organizada por responsabilidades: `uis/`, `services/`, `data/`, `agents/`, `skills/`, `workflows/`, `packages/`, `shared/` y `docs/`.
- La guía recomienda una API central en FastAPI, organizada por módulos de dominio, y extraer workers solo si existe una necesidad concreta.
- `packages/shared/` contiene el paquete privado `@repo/shared-types` (versión `0.0.1`), con un `index.ts` como entrada declarada. Su `package.json` no define scripts.
- No se encontraron manifests Python, servicios implementados, datasets bajo `data/` ni un runner de workspace en la raíz.

## Stack y arquitectura

### Base documentada

- **Backend/API:** FastAPI es la tecnología recomendada explícitamente por la guía del monorepo; todavía no hay una API implementada.
- **Tipos compartidos:** TypeScript en `packages/shared/`; el paquete existe, pero no hay scripts de build o test declarados.
- **Datos:** la plantilla propone separar fuentes sin modificar (`data/raw/`), pipelines (`data/pipelines/`), salidas procesadas (`data/process/`) y evaluación (`data/eval/`).
- **Interfaz, base de datos, alojamiento, proveedor/modelo de IA y plataforma vectorial:** no están seleccionados ni configurados en el repositorio.

### Decisiones de arquitectura de la plantilla

- Mantener una API central modular al inicio, con módulos para dominios como locales, menús, ventas y telemetría; evitar microservicios prematuros.
- Diseñar como objetivo un data warehouse corporativo que consolide datos de locales y departamentos; mantener pipelines y artefactos en `data/`, y consumir los datos desde servicios, interfaces o agentes según el caso de uso.
- Tratar la ingesta desde los POS y sistemas locales como una integración explícita, validando cobertura y frecuencia antes de ofrecer métricas como tiempo real.
- Separar agentes, skills reutilizables y herramientas MCP en sus carpetas respectivas.
- Documentar cada aplicación, servicio, agente o pipeline en su propia subcarpeta.

### Propuesta pendiente de aprobación

Para la primera implementación se recomienda usar Python 3 + FastAPI para la API y pipelines, TypeScript para contratos compartidos, y una base relacional PostgreSQL para entidades y métricas operativas. La elección de almacenamiento de documentos, búsqueda vectorial, proveedor de modelos, framework de interfaz y despliegue debe tomarse antes de implementar esos componentes; no se consideran decisiones vigentes todavía.

## Restricciones técnicas y de dominio

- Las fuentes POS y los procesos actuales difieren por país y están aislados; la integración, cobertura y frecuencia de cada fuente deben comprobarse.
- Los datos deben conservar local, país, fecha/hora y zona horaria, moneda, unidad, fuente y procedencia. No mezclar COP y USD sin una conversión explícita y fechada.
- Productos y precios solo son comparables después de validar equivalencia de producto, presentación y unidad.
- Facturas, datos de clientes y registros de empleados requieren acceso limitado y revisión de privacidad antes de cargar datos reales.
- OCR, previsiones y RAG deben exponer incertidumbre, conservar referencias y permitir revisión humana cuando la confianza sea insuficiente.
- La operación requiere español e inglés; los procesos laborales y regulatorios también varían entre Colombia y Florida.
- No existe configuración de ejecución o CI en la raíz según la guía del proyecto; comandos de build, tests y despliegue deberán definirse al incorporar código ejecutable.
