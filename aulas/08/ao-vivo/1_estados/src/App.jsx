import { useState } from 'react';

function App() {

  let [contador, definirContador] = useState(0);
  let [nome, definirNome] = useState("");

  function adicionarMaisUm() {
    definirContador(contador + 1);
    //contador += 1;
    //console.log(contador);
  }

  return (
    <>
      <input
        type="text"
        placeholder='Digite seu nome'
        onChange={(evento) => definirNome(evento.target.value)}
      />
      <br />
      {nome}
      <br />
      <hr />
      {contador}
      <br />
      <button onClick={adicionarMaisUm}>+1</button>
      {console.log('renderizou!')}
    </>
  )
}

export default App
