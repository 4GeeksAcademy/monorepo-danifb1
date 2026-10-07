# Brief del proyecto

## Negocio

Brasaland es una cadena de restaurantes de cocina a la brasa fundada en Medellín en 2008. Opera 14 locales propios en Colombia y Florida (Estados Unidos), cuenta con aproximadamente 115 empleados y trabaja con alrededor de 20 proveedores. La sede está en Medellín y una oficina en Miami coordina las operaciones de Florida.

La empresa debe ofrecer comida y servicio consistentes entre locales y mantener una operación ágil. Su operación es multinacional: maneja COP y USD, contextos regulatorios distintos y comunicación en español e inglés.

## Problema que resuelve el proyecto

Los locales y departamentos trabajan con información y herramientas fragmentadas. Los sistemas POS varían por país, los pedidos de materias primas se coordinan por teléfono o WhatsApp, las compras se gestionan con correo y hojas de cálculo, y las recetas y procedimientos viven en un Google Drive difícil de consultar. La dirección recibe informes periódicos, pero carece de visibilidad operativa unificada y oportuna.

Esta fragmentación dificulta detectar faltantes y excesos de inventario, entender el gasto consolidado, comunicar cambios de procedimientos y tomar decisiones basadas en datos comparables.

## Objetivos

- Diseñar un data warehouse corporativo que consolide ventas por local y categoría, inventarios, rotación, previsiones y métricas operativas, sin asumir que las fuentes ya están integradas.
- Habilitar tableros por local, recomendar pedidos de ingredientes con base en ventas históricas y stock actual, y alertar cuando no se registren ventas durante el horario de apertura, verificando primero el horario y el estado de la integración.
- Centralizar facturas y compras mediante OCR y extracción estructurada; normalizar productos, precios, unidades y categorías; detectar variaciones comparables y ofrecer dashboards financieros y KPIs.
- Crear un repositorio estructurado y versionado de SOPs, recetas y estándares, con traducción EN/ES, notificaciones a los locales y consultas RAG con referencias a documentos aprobados.
- Automatizar alertas y recomendaciones con procedencia y confianza visibles; requerir revisión humana en decisiones de impacto operativo o financiero.

## Alcance inicial

Los dominios priorizados son Operaciones de Restaurante, Compras y Proveedores, y Formación y Estándares de Calidad. La solución debe primero identificar fuentes, cobertura y calidad de datos. Las capacidades de OCR, analítica, previsión y RAG son objetivos del proyecto, no sistemas que el briefing indique que ya están desplegados.

El briefing también plantea necesidades para Marketing y Experiencia Digital, Personas y Cultura, y Dirección Ejecutiva. No forman parte del foco inicial seleccionado, pero deben tenerse en cuenta al definir contratos y límites de la plataforma corporativa.
