export function loadServices() {
  const main = document.createElement("main");
  main.innerHTML = `
    <h2 class="section-title">Nuestros Servicios</h2>
    <div class="services-grid">
      <div class="service-card"><h3>Corte Caballero</h3><p>Corte personalizado</p><div class="price">12 euros</div></div>
      <div class="service-card"><h3>Corte Senora</h3><p>Corte y acabado</p><div class="price">15 euros</div></div>
      <div class="service-card"><h3>Tinte</h3><p>Coloracion profesional</p><div class="price">desde 25 euros</div></div>
      <div class="service-card"><h3>Mechas</h3><p>Californianas o tradicionales</p><div class="price">desde 35 euros</div></div>
    </div>
  `;
  return main;
}
