---
name: operational-intelligence
description: Consolida y analiza ventas, inventario y métricas operativas de los restaurantes Brasaland; úsala para tableros, alertas y previsiones de demanda.
---

# Inteligencia de operaciones

## Objetivo

Apoyar a Operaciones de Restaurante con visibilidad por local y cadena, controlando explícitamente las fuentes desconectadas y la calidad de los datos.

## Procedimiento

1. Identifica las fuentes disponibles (POS, inventario, reportes de turno) y documenta su cobertura por local y periodo. No asumas que los 14 locales reportan de forma completa o en tiempo real.
2. Conserva el identificador del local, país, fecha/hora local y zona horaria, moneda, categoría y unidad originales.
3. Valida duplicados, periodos faltantes, ventas negativas o anulaciones, y unidades incompatibles antes de agregar métricas.
4. Presenta ventas por local y categoría en la moneda de origen. Para consolidar COP y USD, muestra por separado los importes originales y declara la fuente, fecha y método del tipo de cambio.
5. Calcula inventario, rotación y cobertura solo cuando estén disponibles las cantidades y unidades compatibles. Separa datos observados de estimaciones.
6. Genera previsiones únicamente con suficiente historial y estacionalidad representativa; muestra horizonte, supuestos e incertidumbre. No rellenes periodos faltantes como demanda cero.
7. Para alertas de falta de ventas, comprueba horario de apertura, estado de integración y retraso de ingestión antes de atribuirlo a un problema del local.

## Salida

Entrega métricas agregadas con periodo y cobertura, hallazgos accionables, fuentes utilizadas y limitaciones. Cada alerta debe incluir local, hora, señal detectada y motivo de confianza o revisión.
