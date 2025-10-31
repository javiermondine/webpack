// index.js - Punto de entrada principal
import './styles.css';
import { greet, welcomeMessage } from './greeting.js';
import OdinLogo from './odin.png';

console.log(greet('Estudiante de Odin Project'));
console.log(welcomeMessage);

// Crear un elemento en el DOM para mostrar el mensaje
const heading = document.createElement('h1');
heading.textContent = greet('Mundo');
heading.classList.add('main-heading');

const paragraph = document.createElement('p');
paragraph.textContent = welcomeMessage;

document.body.appendChild(heading);
document.body.appendChild(paragraph);

// Agregar la imagen de Odin Project
const imageContainer = document.createElement('div');
imageContainer.classList.add('image-container');

const odinImage = document.createElement('img');
odinImage.src = OdinLogo;
odinImage.alt = 'The Odin Project Logo';
odinImage.classList.add('odin-logo');

imageContainer.appendChild(odinImage);
document.body.appendChild(imageContainer);

console.log('Webpack funcionando correctamente');
