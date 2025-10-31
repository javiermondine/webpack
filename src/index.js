import './styles.css';
import { loadHome } from './home.js';
import { loadServices } from './services.js';
import { loadSchedule } from './schedule.js';
import { loadContact } from './contact.js';

function createHeader() {
  const header = document.createElement('header');
  header.innerHTML = `
    <h1>Peluqueria Llucmajor</h1>
    <p>Tu peluqueria de confianza en el corazon de Llucmajor</p>
  `;
  return header;
}

function createNav() {
  const nav = document.createElement('nav');
  nav.innerHTML = `
    <ul>
      <li><button id="home-btn" class="active">Inicio</button></li>
      <li><button id="services-btn">Servicios</button></li>
      <li><button id="schedule-btn">Horario</button></li>
      <li><button id="contact-btn">Contacto</button></li>
    </ul>
  `;
  return nav;
}

function createFooter() {
  const footer = document.createElement('footer');
  footer.innerHTML = `
    <p>Peluqueria Llucmajor - Carrer Major, 45 - 07620 Llucmajor</p>
    <p>Tel: 971 66 00 00</p>
  `;
  return footer;
}

function loadPage(pageLoader) {
  const content = document.getElementById('content');
  content.innerHTML = '';
  content.appendChild(createHeader());
  content.appendChild(createNav());
  content.appendChild(pageLoader());
  content.appendChild(createFooter());
  initializeNavigation();
}

function setActiveButton(buttonId) {
  document.querySelectorAll('nav button').forEach(btn => {
    btn.classList.remove('active');
  });
  document.getElementById(buttonId)?.classList.add('active');
}

function initializeNavigation() {
  document.getElementById('home-btn')?.addEventListener('click', () => {
    loadPage(loadHome);
    setActiveButton('home-btn');
  });
  document.getElementById('services-btn')?.addEventListener('click', () => {
    loadPage(loadServices);
    setActiveButton('services-btn');
  });
  document.getElementById('schedule-btn')?.addEventListener('click', () => {
    loadPage(loadSchedule);
    setActiveButton('schedule-btn');
  });
  document.getElementById('contact-btn')?.addEventListener('click', () => {
    loadPage(loadContact);
    setActiveButton('contact-btn');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  loadPage(loadHome);
});
