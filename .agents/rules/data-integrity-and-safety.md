# Integridad y seguridad de datos

- No supongas que ventas, inventarios, compras o documentos están integrados entre locales: las fuentes actuales están aisladas y parte de los procesos se realiza por WhatsApp, teléfono, correo o hojas de cálculo.
- Antes de comparar o agregar datos, conserva su origen, local, país, fecha/hora, moneda y unidad de medida. Normaliza solo con reglas explícitas y conserva el valor original para auditoría.
- No sumes COP y USD ni compares precios de unidades, mercados o periodos incompatibles sin una conversión documentada y fechada.
- Trata facturas, registros de empleados y datos de clientes como información sensible: limita los datos recolectados y expuestos a lo necesario para la tarea.
- OCR, extracción y detección de anomalías deben conservar evidencia y nivel de confianza. Solicita revisión humana cuando falten campos críticos, la confianza sea baja o una discrepancia pueda afectar pagos, inventario o cumplimiento.
- No inventes datos faltantes ni conviertas una ausencia de datos en cero. Identifica explícitamente los valores desconocidos, incompletos o estimados.
