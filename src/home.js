export function loadHome() {
  const main = document.createElement("main");
  const hero = document.createElement("div");
  hero.className = "hero";
  hero.innerHTML = `
    <h2>Bienvenidos a nuestra peluqueria</h2>
    <p>Mas de 20 anos cuidando tu imagen en Llucmajor</p>
    <a href="tel:+34971660000" class="cta-button">Llamar para cita</a>
  `;
  main.appendChild(hero);
  return main;
}
