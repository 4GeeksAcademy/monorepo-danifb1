---
name: validate-operational-export
description: Valida un archivo CSV o JSON de ventas, inventario o compras contra un esquema antes de importarlo o analizarlo.
---

# Validación de exportaciones operativas

## Objetivo

Determinar si una exportación operativa puede consumirse conforme al esquema declarado, sin modificar el archivo fuente ni ocultar registros problemáticos.

## Cuándo usarla

Úsala antes de importar o analizar un archivo CSV/JSON de ventas, inventario o compras. No sustituye la revisión funcional de métricas ni la aprobación de una factura.

## Entradas

- **Archivo fuente:** ruta a un archivo CSV o JSON accesible.
- **Esquema esperado:** campos obligatorios/opcionales, tipo por campo, política de nulos, formato de fechas, clave única y restricciones o enumeraciones aplicables. Debe especificar reglas para todos los campos que se evaluarán.
- **Reglas externas (condicional):** catálogos o referencias autorizadas para restricciones que no estén incluidas en el esquema, como locales, monedas o unidades aceptadas. Son obligatorias cuando el esquema remite a ellas.
- **Política de exclusión:** declarar `ninguna` o especificar una regla determinista para registros fuera del alcance. Si no se proporciona, se asume `ninguna`.
- **Opciones de parseo (condicional):** formato, codificación, delimitador, presencia de cabecera, separador decimal, formato/zona horaria u otras convenciones cuando difieran de los defaults indicados abajo.

Defaults reproducibles: CSV UTF-8, delimitador coma, primera fila como cabecera, separador decimal punto y sin conversión implícita de zona horaria; JSON UTF-8 con un array de objetos en la raíz. Los datos con otro formato requieren opciones explícitas. No infieras dialectos alternativos del contenido.

Si falta el archivo, el esquema o una regla externa requerida, devuelve `BLOCKED`. Puedes inspeccionar encabezados para describir el bloqueo, pero no emitas aprobación. Si el archivo es inaccesible, indica qué input falta o no se puede leer.

## Procedimiento

1. Comprueba que están disponibles todos los inputs obligatorios y registra archivo, esquema/version, defaults u opciones de parseo y política de exclusión. No escribas sobre el original.
2. Parsea el archivo con las opciones declaradas o los defaults. CSV: la cabecera no cuenta como registro; cada fila de datos sí. JSON: cada objeto del array raíz es un registro. Las filas vacías de CSV se informan y cuentan como excluidas; cualquier otra exclusión debe coincidir con la política declarada.
3. Verifica cabeceras/campos, tipos, nulabilidad, formatos, claves únicas, restricciones del esquema y reglas externas aplicables. No normalices ni conviertas valores durante la validación.
4. Identifica cada registro por clave única válida; si esta falta o está duplicada, usa el número de fila CSV o índice JSON como identificador del informe.
5. Clasifica cada registro de datos exactamente una vez como válido, inválido o excluido. Registra la causa de cada registro inválido y la regla que justifica cada exclusión. Nunca descartes registros silenciosamente.
6. Si hay datos Brasaland, comprueba local, país, fecha/hora, moneda y unidad contra las reglas provistas. No agregues COP con USD ni conviertas zonas horarias o unidades implícitamente.
7. Devuelve un informe con estado, conteos reconciliados, incidencias y normalizaciones sugeridas por separado. No ejecutes la normalización sobre el archivo fuente.

## Criterios de aceptación

Emite exactamente uno de estos estados:

- `PASS`: todos los inputs requeridos están disponibles; el archivo se parseó completamente; todas las cabeceras y reglas del esquema se comprobaron; `total = válidas + inválidas + excluidas`; `inválidas = 0`; cada exclusión cumple la política declarada; el archivo fuente permanece intacto.
- `FAIL`: los inputs requeridos están disponibles, pero el archivo no se puede parsear completamente, falta una cabecera/campo exigido, hay una violación del esquema, una clave duplicada, un registro inválido o una exclusión no permitida. Todas las filas deben seguir contabilizadas y cada incidencia debe tener identificador y motivo.
- `BLOCKED`: falta o no está accesible un input obligatorio, el esquema no define una regla necesaria o falta un catálogo externo requerido. Indica exactamente qué se necesita para continuar; no afirmes que los datos son válidos o inválidos.

No emitas `PASS` si hay errores de parseo, incidencias sin clasificar o errores de validación, aunque estén enumerados en el informe. Los registros excluidos solo son aceptables si cada uno coincide con la política declarada; de otro modo el resultado es `FAIL`.

## Salida

Entrega el estado, el archivo y versión/hash del esquema evaluados cuando estén disponibles, formato y opciones de parseo, `total`, `válidas`, `inválidas` y `excluidas`, incidencias por fila/índice con regla incumplida, política de exclusión aplicada y limitaciones. Comprueba que los conteos reconcilien antes de finalizar. Mantén el informe conciso y reproducible.
