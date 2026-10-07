class BrasaHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="site-header">
        <a class="wordmark" href="#inicio" aria-label="Brasaland, inicio">
          <span class="wordmark-mark" aria-hidden="true">B</span>
          <span>BRASALAND</span>
        </a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-nav" aria-label="Abrir menú">
          <span></span><span></span>
        </button>
        <nav id="primary-nav" class="primary-nav" aria-label="Navegación principal">
          <a href="#historia">Nuestra brasa</a>
          <a href="#mercados">Dónde estamos</a>
          <a class="nav-contact" href="#contacto">Hablemos <span aria-hidden="true">↗</span></a>
        </nav>
      </header>`;

    const toggle = this.querySelector(".menu-toggle");
    const nav = this.querySelector(".primary-nav");
    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Abrir menú" : "Cerrar menú");
      nav.classList.toggle("is-open", !isOpen);
    });
    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Abrir menú");
        nav.classList.remove("is-open");
      }
    });
  }
}

class MarketCard extends HTMLElement {
  connectedCallback() {
    const market = this.getAttribute("market") ?? "";
    const currency = this.getAttribute("currency") ?? "";
    const detail = this.getAttribute("detail") ?? "";
    const marker = this.getAttribute("marker") ?? "";
    this.innerHTML = `
      <article class="market-card">
        <div class="market-card-top"><span>${marker}</span><span class="market-currency">${currency}</span></div>
        <h3>${market}</h3>
        <p>${detail}</p>
      </article>`;
  }
}

class BrasaFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="site-footer" id="contacto">
        <a class="wordmark wordmark-footer" href="#inicio">
          <span class="wordmark-mark" aria-hidden="true">B</span>
          <span>BRASALAND</span>
        </a>
        <p>Una misma brasa. Una mesa abierta.</p>
        <a class="footer-link" href="mailto:hola@brasaland.com">Contacto <span aria-hidden="true">↗</span></a>
        <small>Colombia · Florida</small>
      </footer>`;
  }
}

customElements.define("brasa-header", BrasaHeader);
customElements.define("market-card", MarketCard);
customElements.define("brasa-footer", BrasaFooter);

document.querySelector("#app").innerHTML = `
  <brasa-header></brasa-header>
  <section class="hero" id="inicio" aria-labelledby="hero-title">
    <img class="hero-image" src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=2200&q=85" alt="Carne a la brasa sobre una parrilla encendida" fetchpriority="high" />
    <div class="hero-shade"></div>
    <div class="hero-content">
      <p class="eyebrow"><span class="eyebrow-line"></span> Medellín · Florida</p>
      <h1 id="hero-title">El fuego<br />nos reúne.</h1>
      <p class="hero-copy">Cocina a la brasa, servicio cercano y el mismo sabor en cada mesa.</p>
      <a class="button button-light" href="#mercados">Conoce Brasaland <span aria-hidden="true">↓</span></a>
    </div>
    <p class="hero-index"><span>01</span> / 14 RESTAURANTES</p>
    <div class="hero-caption"><span class="caption-dot"></span> Una historia que empezó en Medellín, 2008</div>
  </section>

  <section class="intro-band" aria-label="Brasaland en cifras">
    <p>Una marca, dos mercados</p>
    <div class="intro-stat"><strong>14</strong><span>restaurantes propios</span></div>
    <div class="intro-stat"><strong>115</strong><span>personas en el equipo</span></div>
    <div class="intro-stat"><strong>2008</strong><span>nuestra primera mesa</span></div>
  </section>

  <section class="story section-wrap" id="historia">
    <div class="story-photo-wrap">
      <img src="https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1200&q=85" alt="Plato de carne a la brasa servido para compartir" loading="lazy" />
      <span class="photo-stamp">DESDE<br />2008</span>
    </div>
    <div class="story-copy">
      <p class="eyebrow eyebrow-dark"><span class="eyebrow-line"></span> Nuestra manera de hacer las cosas</p>
      <h2>El sabor viaja.<br /><em>La esencia se queda.</em></h2>
      <p>Desde una mesa familiar en Medellín hasta nuestros restaurantes en Florida, cuidamos lo que nos trajo hasta aquí: comida que sabe igual, una bienvenida cálida y una cocina que no se detiene.</p>
      <a class="text-link" href="#mercados">Dos mercados, una misma brasa <span aria-hidden="true">↗</span></a>
    </div>
  </section>

  <section class="markets" id="mercados">
    <div class="section-wrap markets-inner">
      <div class="markets-heading">
        <div>
          <p class="eyebrow eyebrow-dark"><span class="eyebrow-line"></span> Brasaland hoy</p>
          <h2>De aquí.<br /><em>Y de allá.</em></h2>
        </div>
        <p class="markets-intro">Crecimos sin perder el gusto por reunir a las personas alrededor de una buena brasa.</p>
      </div>
      <div class="market-grid">
        <market-card market="Colombia" currency="COP" marker="01" detail="Nuestra casa. La historia comienza en Medellín." ></market-card>
        <market-card market="Florida" currency="USD" marker="02" detail="Un nuevo capítulo, con la misma calidez de siempre." ></market-card>
      </div>
      <div class="market-footnote"><span>14</span> restaurantes propios entre ambos mercados</div>
    </div>
  </section>

  <section class="promise section-wrap">
    <p class="eyebrow eyebrow-dark"><span class="eyebrow-line"></span> Lo que nunca cambia</p>
    <div class="promise-grid">
      <article><span class="promise-number">01</span><h3>El mismo sabor</h3><p>Una cocina a la brasa reconocible en cada visita, en cada ciudad.</p></article>
      <article><span class="promise-number">02</span><h3>Una bienvenida cálida</h3><p>Servicio cercano, hecho de personas y pensado para compartir.</p></article>
      <article><span class="promise-number">03</span><h3>Ritmo de cocina</h3><p>La energía para servir bien y seguir moviéndonos hacia delante.</p></article>
    </div>
  </section>

  <section class="closing-banner">
    <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1800&q=85" alt="Parrilla encendida durante el servicio" loading="lazy" />
    <div class="closing-overlay"></div>
    <div class="closing-copy"><p class="eyebrow"><span class="eyebrow-line"></span> Brasaland</p><h2>Nos vemos<br />alrededor del fuego.</h2><a class="button button-light" href="#contacto">Conversemos <span aria-hidden="true">↗</span></a></div>
  </section>
  <brasa-footer></brasa-footer>
`;