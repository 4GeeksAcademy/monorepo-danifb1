const contextSnapshot = {
  metrics: [
    { label: "Restaurantes", value: "14", note: "locales propios" },
    { label: "Mercados", value: "02", note: "Colombia · Florida" },
    { label: "Equipo", value: "~115", note: "personas" },
    { label: "Proveedores", value: "~20", note: "entre ambos mercados" },
  ],
  sources: [
    { name: "Sistemas POS", detail: "Sistemas distintos por país", status: "Sin integración", kind: "warn" },
    { name: "Pedidos de materia prima", detail: "WhatsApp y teléfono", status: "Proceso manual", kind: "manual" },
    { name: "Recetas y procedimientos", detail: "Google Drive compartido", status: "Búsqueda difícil", kind: "manual" },
  ],
};

const viewCopy = {
  overview: {
    eyebrow: "Vista general",
    title: "Panorama de la compañía",
    description: "La operación está distribuida entre Colombia y Florida. Las cifras de esta vista son contexto corporativo, no telemetría en vivo.",
    sourcesTitle: "Fuentes y procesos actuales",
    sourcesDescription: "Estado descrito en el briefing de Brasaland",
  },
  operations: {
    eyebrow: "Operaciones",
    title: "14 restaurantes, sin vista unificada",
    description: "Cada local gestiona su cocina, equipo y pedidos. El briefing no incluye conexión en vivo a los POS ni inventario consolidado.",
    sourcesTitle: "Visibilidad operativa",
    sourcesDescription: "Integraciones que deben validarse antes de habilitar métricas en tiempo real",
  },
  purchasing: {
    eyebrow: "Compras y proveedores",
    title: "Unificar compras entre mercados",
    description: "El equipo trabaja con alrededor de 20 proveedores. El gasto de la cadena no está consolidado y los precios se gestionan por correo y Excel.",
    sourcesTitle: "Flujo de compras actual",
    sourcesDescription: "Puntos a resolver antes de comparar precios o automatizar alertas",
  },
  training: {
    eyebrow: "Formación y calidad",
    title: "Una misma receta en cada cocina",
    description: "Los materiales están en un Google Drive compartido. Los cambios a recetas y procedimientos tardan en llegar a los 14 locales y pueden generar confusión.",
    sourcesTitle: "Conocimiento operativo",
    sourcesDescription: "Base documentada para un catálogo versionado y consultable",
  },
};

const sourceViews = {
  overview: contextSnapshot.sources,
  operations: [
    contextSnapshot.sources[0],
    { name: "Inventario", detail: "Pedidos por WhatsApp o teléfono", status: "Sin dato central", kind: "warn" },
    { name: "Reportes de turno", detail: "Papel o Excel; envío semanal", status: "Proceso manual", kind: "manual" },
  ],
  purchasing: [
    { name: "Registro de compras", detail: "Correo electrónico y Excel", status: "No consolidado", kind: "warn" },
    { name: "Cambios de precios", detail: "Se conocen al recibir la factura", status: "Sin alerta previa", kind: "manual" },
    { name: "Proveedores", detail: "~20 entre Colombia y Florida", status: "Mercados separados", kind: "manual" },
  ],
  training: [
    { name: "Recetas y SOPs", detail: "Google Drive compartido", status: "Búsqueda difícil", kind: "manual" },
    { name: "Actualizaciones", detail: "Comunicación manual a los locales", status: "Puede tardar días", kind: "warn" },
    { name: "Idiomas", detail: "Español e inglés", status: "Dos mercados", kind: "manual" },
  ],
};

const navItems = [
  { id: "overview", label: "Resumen", marker: "01" },
  { id: "operations", label: "Operaciones", marker: "02" },
  { id: "purchasing", label: "Compras", marker: "03" },
  { id: "training", label: "Formación", marker: "04" },
];

function metricCard({ label, value, note }) {
  return `<article class="metric-card">
    <p>${label}</p>
    <strong>${value}</strong>
    <span>${note}</span>
  </article>`;
}

function sourceRow({ name, detail, status, kind }) {
  return `<div class="source-row">
    <div class="source-identity"><span class="source-glyph" aria-hidden="true"></span><div><strong>${name}</strong><small>${detail}</small></div></div>
    <span class="source-status status-${kind}"><i aria-hidden="true"></i>${status}</span>
  </div>`;
}

function renderView(viewId) {
  const view = viewCopy[viewId] ?? viewCopy.overview;
  const sources = sourceViews[viewId] ?? sourceViews.overview;
  const isOverview = viewId === "overview";
  return `
    <section class="view-heading" aria-labelledby="page-title">
      <div><p class="eyebrow">${view.eyebrow}</p><h1 id="page-title">${view.title}</h1><p class="view-description">${view.description}</p></div>
      <div class="data-state"><span class="state-mark" aria-hidden="true"></span><span>Contexto documentado<br /><strong>Sin conexión de datos en vivo</strong></span></div>
    </section>
    ${isOverview ? `<section class="metric-grid" aria-label="Datos de Brasaland">${contextSnapshot.metrics.map(metricCard).join("")}</section>` : ""}
    <section class="source-panel" aria-labelledby="sources-title">
      <div class="panel-heading"><div><h2 id="sources-title">${view.sourcesTitle}</h2><p>${view.sourcesDescription}</p></div><span class="panel-count">${String(sources.length).padStart(2, "0")} ELEMENTOS</span></div>
      <div class="source-list">${sources.map(sourceRow).join("")}</div>
    </section>
    <section class="next-step"><div class="next-step-icon" aria-hidden="true">↗</div><div><p class="eyebrow">Siguiente paso del proyecto</p><h2>Validar fuentes, cobertura y frecuencia antes de mostrar datos operativos.</h2></div></section>
    <p class="data-note">Esta pantalla presenta información del contexto corporativo. No representa ventas, inventario ni estado actual de ningún restaurante.</p>
  `;
}

document.querySelector("#app").innerHTML = `
  <div class="app-shell">
    <aside class="sidebar" id="sidebar">
      <a class="brand" href="#overview" aria-label="Brasaland Digital, resumen"><span class="brand-symbol">B</span><span>BRASALAND<small>DIGITAL</small></span></a>
      <div class="workspace-label">COMPAÑÍA</div>
      <div class="workspace-choice"><span class="workspace-dot"></span><span>Brasaland</span><span class="choice-chevron">⌄</span></div>
      <nav class="side-nav" aria-label="Secciones internas">
        <p class="nav-label">ESPACIOS DE TRABAJO</p>
        ${navItems.map(({ id, label, marker }) => `<button class="nav-item${id === "overview" ? " active" : ""}" type="button" data-view="${id}" aria-current="${id === "overview" ? "page" : "false"}"><span class="nav-marker">${marker}</span><span>${label}</span></button>`).join("")}
      </nav>
      <div class="sidebar-bottom"><span class="avatar">BD</span><span class="user-label">Brasaland Digital<small>Equipo interno</small></span><button class="more-button" type="button" aria-label="Más opciones">···</button></div>
    </aside>
    <main class="main-shell">
      <header class="topbar"><button class="mobile-nav" type="button" aria-label="Mostrar navegación" aria-expanded="false">☰</button><div class="breadcrumb">Brasaland <span>/</span> <strong id="breadcrumb-current">Resumen</strong></div><div class="topbar-meta"><span class="market-chip">CO <i></i> US</span><span class="topbar-date">Perfil corporativo</span></div></header>
      <div class="content" id="main-content" aria-live="polite">${renderView("overview")}</div>
    </main>
  </div>
`;

document.querySelectorAll("[data-view]").forEach((button) => {
  button.addEventListener("click", () => {
    const viewId = button.dataset.view;
    document.querySelectorAll("[data-view]").forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-current", isActive ? "page" : "false");
    });
    document.querySelector("#breadcrumb-current").textContent = button.querySelector("span:last-child").textContent;
    document.querySelector("#main-content").innerHTML = renderView(viewId);
    document.querySelector("#sidebar").classList.remove("sidebar-open");
    document.querySelector(".mobile-nav").setAttribute("aria-expanded", "false");
  });
});

document.querySelector(".mobile-nav").addEventListener("click", (event) => {
  const isOpen = event.currentTarget.getAttribute("aria-expanded") === "true";
  event.currentTarget.setAttribute("aria-expanded", String(!isOpen));
  document.querySelector("#sidebar").classList.toggle("sidebar-open", !isOpen);
});