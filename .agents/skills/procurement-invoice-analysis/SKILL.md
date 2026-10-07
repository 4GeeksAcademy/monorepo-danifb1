---
name: procurement-invoice-analysis
description: Extrae y normaliza datos de facturas y compras de proveedores Brasaland, y detecta cambios de precio o anomalías comparables.
---

# Análisis de compras y facturas

## Objetivo

Ayudar a Compras y Proveedores a centralizar información de aproximadamente 20 proveedores de Colombia y Florida sin ocultar diferencias de mercado, moneda o presentación.

## Procedimiento

1. Registra el archivo y la página de origen, proveedor, país, número y fecha de factura, moneda y nivel de confianza de OCR.
2. Extrae, cuando estén presentes, SKU o descripción, cantidad, unidad, precio unitario, impuestos, descuentos y total. Distingue los campos ausentes de los valores cero.
3. Conserva el texto original y vincula cada campo extraído con su evidencia en el documento. No completes datos por inferencia silenciosa.
4. Normaliza proveedor, categoría y unidades mediante un catálogo explícito; conserva siempre el valor original. No equipares productos solo por similitud textual.
5. Compara precios únicamente para productos y unidades equivalentes, dentro del mismo mercado y moneda. Si conviertes moneda, informa tipo de cambio y fecha.
6. Marca duplicados, totales inconsistentes y variaciones relevantes frente al historial comparable. Incluye periodo de comparación y umbral aplicado.
7. Solicita revisión humana ante baja confianza, discrepancias de total, proveedor no reconocido o cambios que puedan afectar pagos o negociación.

## Salida

Devuelve registros estructurados con procedencia y confianza, excepciones para revisión y un resumen de variaciones comparables. Una anomalía es una señal para investigar, no una conclusión de fraude o error.
