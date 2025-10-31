export function loadContact() {
  const main = document.createElement("main");
  main.innerHTML = `
    <h2 class="section-title">Contacto</h2>
    <div class="contact-info">
      <h3>Informacion de Contacto</h3>
      <div class="contact-item"><strong>Direccion:</strong> Carrer Major, 45 - Llucmajor</div>
      <div class="contact-item"><strong>Telefono:</strong> 971 66 00 00</div>
      <div class="contact-item"><strong>Email:</strong> info@peluqueriallucmajor.com</div>
    </div>
  `;
  return main;
}
