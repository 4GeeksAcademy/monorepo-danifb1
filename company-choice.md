# Compañia
Nombre de la compañía del CONTEXT.es.md: Brasaland
El briefing de la empresa en español se encuentra en 'CONTEXT.es.md' y en ingles se encuentra en 'CONTEXT.md'

## Justificación
[Frase 1: Eligo esta cadena de restaurantes Brasaland porque trata con personas diariamente. (implica una mayor complejidad)]
[Frase 2: A la par indica que trabaja en multiples paises (Se comenta un problema de aislamiento entre restaurantes).]
[Frase 3: Se deba hacer un Organigrama con el nombre de los departamentos y personas que trabajan en ellos junto los años (sacados del briefing con ej. de datos, nº de empleados, sedes y herramientas que se utilizan o procedimientos...).]
[Frase 4: Detallar las funciones de cada departamente y sus problemas, aportando una solución que encaje para cada uno.]

## El reto
Brasaland opera una cadena de restaurantes distribuida en varios países, con procesos críticos que funcionan de manera aislada entre sí: operaciones, compras, formación y control de calidad. Esta falta de integración provoca ineficiencias operativas, duplicación de tareas, errores en la ejecución diaria, falta de visibilidad corporativa y dificultad para escalar la cadena de forma ordenada.

El reto consiste en diseñar e implementar un sistema de inteligencia artificial corporativo capaz de:
- Unificar datos dispersos en una plataforma centralizada.
- Estandarizar procesos operativos y de formación en todos los locales.
- Automatizar la detección de problemas y la generación de recomendaciones.
- Facilitar la toma de decisiones basada en datos en tiempo real.
- Reducir la dependencia de procesos manuales y documentos desorganizados.

## Departamentos que me interesan
 1) **Operaciones de restaurante**": Se observa que cada uno de los 14 locales opera en gran medida de forma aislada. **No hay visibilidad centralizada** por lo que provoca exceso de stock en algunos locales y roturas en otros.
 2) **Compras y proveedores**": Con alrededor de 20 proveedores entre Colombia y Florida, se entera de los cambios en el precio de las materias primas cuando llega la factura. No existe ningún dato consolidado de compras a nivel de cadena. 
 3) "**Formación y estándares de calidad**": Todos los locales deben seguir las mismas recetas, técnicas de preparación y estándares de presentación independientemente del país. Un Google Drive compartido que nadie sabe navegar que **cuando cambia una receta o un procedimiento**, comunicar la actualización a los 14 locales en dos idiomas lleva días y suele generar confusión.

## My AI Agent Idea
En los siguientes departamentos, la IA será un agente de soporte que realice las siguientes funciones, sin suponer que la información ya se encuentra entre restaurantes, dado que se encuentran aisladas.
1) **Operaciones de restaurante**" se busca **Implementar un data warehouse corporativo que consolide**:
        - Ventas por local y por categoría
        - Inventarios y rotación de productos
        - Previsiones de demanda
        - Métricas operativas en tiempo real
2) **Compras y proveedores**" se busca **Centralizar la información de compras mediante**:
        - OCR + extracción estructurada de facturas
        - Normalización de precios, unidades y categorías
        - Detección automática de variaciones y anomalías
        - Reportes ejecutivos y dashboards financieros + KPI
3) "**Formación y estándares de calidad**" se busca **Crear un repositorio estructurado y versionado de SOPs, recetas y estándares, con**:
        - Versionado automático de documentos
        - Traducción EN/ES integrada
        - Notificaciones automáticas a los locales
        - RAG para consultas operativas del personal