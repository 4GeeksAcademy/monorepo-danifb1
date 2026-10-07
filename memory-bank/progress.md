# Estado del proyecto

**Actualizado:** 2026-10-07

## Estado actual

El repositorio está en fase de definición y preparación; todavía no hay una aplicación funcional desplegada.

- Está documentado el contexto de Brasaland y el reto corporativo, con foco en operaciones, compras y formación/calidad.
- Se crearon reglas de trabajo para el dominio, la integridad de datos y el uso responsable de IA.
- Se definieron skills de referencia para inteligencia operativa, análisis de facturas y conocimiento de SOPs.
- `memory-bank/` contiene contexto de empresa, visión de solución, convenciones del repositorio y estos documentos de planificación.
- No hay API, pipelines de ingesta, base de datos, interfaz, agente ejecutable ni datasets de proyecto implementados. Tampoco hay stack de despliegue o CI configurado.

## Próximos pasos previstos

1. Confirmar el MVP, usuarios, métricas de éxito y permisos para los tres dominios priorizados.
2. Inventariar fuentes reales o de prueba, su disponibilidad por local, calidad, frecuencia, formatos y restricciones de privacidad.
3. Acordar contratos de datos comunes para locales, ventas, inventario, proveedores, facturas y SOPs; definir reglas de moneda, unidades, horarios y procedencia.
4. Aprobar el stack pendiente y diseñar la API central modular, el modelo del data warehouse corporativo y los pipelines con configuración de ejecución y pruebas.
5. Implementar una primera ingesta verificable y un caso operativo acotado (tablero de ventas, recomendación de pedidos basada en historial y stock, y alerta de falta de registros); después añadir análisis OCR de facturas y repositorio/RAG de SOPs con traducciones y notificaciones controladas.
6. Medir cobertura, calidad, utilidad de alertas y recuperación documental antes de ampliar a los 14 locales.

## Dependencias y riesgos abiertos

- Acceso a exportaciones POS e inventario representativas de ambos países.
- Definición de responsables para validar precios, facturas, procedimientos y traducciones.
- Decisiones pendientes sobre base de datos, almacenamiento documental, modelos/proveedor de IA, interfaz y despliegue.
- Validación de privacidad y controles de acceso para información financiera, de clientes y de empleados.
