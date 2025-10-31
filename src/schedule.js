export function loadSchedule() {
  const main = document.createElement("main");
  main.innerHTML = `
    <h2 class="section-title">Horario</h2>
    <div class="schedule-info">
      <h3>Horario de Atencion</h3>
      <table><tbody>
        <tr><td>Lunes a Viernes</td><td>9:00 - 13:00 / 16:00 - 20:00</td></tr>
        <tr><td>Sabados</td><td>9:00 - 14:00</td></tr>
        <tr><td>Domingos</td><td>Cerrado</td></tr>
      </tbody></table>
    </div>
  `;
  return main;
}
