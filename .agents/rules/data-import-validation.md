# Validación de datos de entrada

**Alcance: siempre activa** cuando una tarea inspeccione, importe, transforme o analice archivos de datos estructurados (por ejemplo CSV, JSON o exportaciones de POS, inventario y facturas). No aplica a tareas exclusivamente de documentación, interfaz o código que no procese esos datos.

- Conserva intacto el archivo fuente; cualquier transformación debe producir una salida separada y describir las reglas aplicadas.
- Comprueba el esquema esperado, campos obligatorios, tipos, valores ausentes, claves duplicadas y filas que no se puedan parsear. No completes datos por inferencia ni descartes filas silenciosamente.
- Conserva la procedencia de cada dato y, cuando existan, el local, país, fecha/hora y zona horaria, moneda y unidad originales.
- En datos Brasaland, no agregues COP con USD ni compares cantidades con unidades incompatibles. Señala campos desconocidos, moneda no reconocida o conversión sin tipo de cambio fechado.
- Informa los conteos de registros procesados, válidos, inválidos y excluidos; identifica cada excepción por número de fila o clave estable.
- No declares los datos válidos si falta el esquema necesario para comprobarlos. En ese caso, informa el resultado como bloqueado y solicita el esquema o las reglas de validación.
