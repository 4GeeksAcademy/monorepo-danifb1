# Contexto de interfaces de usuario

## Propósito

`uis/` agrupa los proyectos frontend de Brasaland. La estructura objetivo separa la experiencia pública de la aplicación interna:

- `uis/website/`: sitio corporativo de cara al público.
- `uis/BackOffice/`: aplicación interna con layout y navegación propios, independiente del sitio público.

## Principios y restricciones

- La marca y el contenido público deben seguir el briefing corporativo aprobado; no inventar posicionamiento, ofertas ni mensajes de marca.
- La empresa opera en español e inglés, en Colombia y Florida. La interfaz debe considerar ambos idiomas y contextos sin asumir traducciones o requisitos regulatorios que aún no estén definidos.
- No se ha seleccionado un framework frontend ni una plataforma de despliegue.
- Mantener los límites entre ambas experiencias: el sitio público no debe compartir el layout de la aplicación interna.

## Estado conocido

Existen `uis/website/` y `uis/backoffice/` en el repositorio. La segunda ruta está actualmente en minúsculas; no existe `uis/BackOffice/` con la capitalización solicitada. La presencia de archivos frontend no confirma por sí sola que las aplicaciones estén completas o desplegadas.