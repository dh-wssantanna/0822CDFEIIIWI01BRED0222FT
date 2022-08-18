import Cabecalho from "./componentes/Cabecalho";

/**
 * Vanilla JavaScript
 
  let Aplicativo = document.getElementById("root");
  let Componente = document.createElement('h1');
  let ComponenteTexto = document.createTextNode('Hello World');
  Componente.appendChild(ComponenteTexto);
  Componente.classList.add('Componente');
  Aplicativo.appendChild(Componente);
*/
function App() {
  return (
    // JSX JavaScript XML
    <>
      <Cabecalho />
      <p>Hello World</p>
    </>
  );
}

export default App;
