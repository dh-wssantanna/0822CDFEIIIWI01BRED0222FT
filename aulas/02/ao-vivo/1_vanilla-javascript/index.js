

// SPA - Single Page Application
let aplicativo = document.getElementById('root');
// let aplicativo = document.querySelector('#root');

let componente = document.createElement('h1');

let texto = document.createTextNode('Hello World');

componente.appendChild(texto);

aplicativo.appendChild(componente);