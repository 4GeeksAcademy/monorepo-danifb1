# Contexto de APIs y servicios

## Propósito

`services/` aloja las APIs y los servicios backend de la plataforma corporativa. La guía del repositorio recomienda comenzar con una API central modular y extraer workers o servicios separados solo cuando exista una necesidad concreta.

## Arquitectura recomendada y estado de decisión

- FastAPI es la tecnología recomendada por la guía del monorepo para la API; la implementación y el stack final siguen pendientes de aprobación.
- Organizar la API por dominios y evitar microservicios prematuros.
- Diseñar explícitamente las integraciones con POS y otros sistemas locales: cobertura, calidad y frecuencia deben validarse antes de prometer datos oportunos o en tiempo real.
- No asumir decisiones aún pendientes sobre base de datos, almacenamiento documental, proveedor de IA o despliegue.

## Requisitos de datos y operación

- Conservar local, país, fecha y hora con zona horaria, moneda, unidad, fuente y procedencia.
- Comparar precios solo tras validar producto, presentación y unidad equivalentes.
- Aplicar controles de acceso y revisión de privacidad a datos financieros, de clientes y de empleados.
- OCR, previsiones y respuestas generativas deben exponer incertidumbre y permitir revisión humana cuando corresponda.

## Estado conocido

`services/` existe, pero actualmente contiene documentación README y no una API implementada.