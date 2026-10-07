# Principios de ingeniería e IA

- Sigue la estructura del monorepo: interfaces en `uis/`, API y procesos de backend en `services/`, datos y pipelines en `data/`, agentes en `agents/`, capacidades reutilizables en `skills/` y documentación transversal en `docs/`.
- Prefiere inicialmente una API central modular a separar dominios en microservicios; extrae workers o servicios separados solo cuando haya una necesidad operativa concreta.
- Mantén las decisiones de IA trazables y verificables. Para respuestas basadas en documentos, indica las fuentes y su versión; para recomendaciones, expón los datos y supuestos relevantes.
- La IA puede priorizar alertas y proponer acciones, pero no debe cambiar recetas aprobadas, aprobar pagos ni ejecutar acciones con impacto operativo o financiero sin autorización definida.
- Añade validaciones y evaluación específicas del dominio para ingesta, extracción OCR, anomalías y recuperación RAG; documenta límites y casos sin respuesta.
- Documenta cada app, servicio, agente o pipeline nuevo en su subcarpeta con instrucciones suficientes para probarlo.
