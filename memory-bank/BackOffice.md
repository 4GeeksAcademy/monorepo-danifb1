# Contexto de la aplicación BackOffice

## Propósito

`uis/BackOffice/` es la aplicación interna de Brasaland. Debe ser una experiencia separada del sitio público, con layout propio y una vista de entrada en `/`.

## Dominios prioritarios

El foco inicial de la plataforma corporativa comprende:

- Operaciones de restaurante: ventas, inventario, rotación y métricas por local.
- Compras y proveedores: facturas, precios comparables y reportes.
- Formación y calidad: recetas, SOPs versionados, consultas con referencias y comunicación de cambios.

Estas capacidades son objetivos del proyecto, no evidencia de que ya estén implementadas o conectadas a fuentes reales.

## Restricciones

- Mostrar cobertura, actualidad y procedencia de los datos; no presentar como tiempo real una integración que no se haya validado.
- No consolidar COP y USD sin una conversión explícita y fechada.
- Las recomendaciones con consecuencias operativas o financieras deben conservar incertidumbre y revisión humana.
- Roles, permisos, framework frontend y despliegue siguen sin definirse.

## Estado conocido

La carpeta existente es `uis/backoffice/` en minúsculas, no `uis/BackOffice/`. Hay archivos frontend en esa carpeta, pero no se ha confirmado que la aplicación sea funcional o esté desplegada.