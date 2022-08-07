import Componente from "./Componente";

function App() {
  // JSX JavaScript XML
  return (
    <>
      <h1>Texto</h1>
      <Componente 
        titulo="Título 1" 
        descricao="Uma descrição generica" 
      />
      <Componente 
        titulo="Título 2" 
        descricao="Uma outra descrição generica" 
      />
    </>
  );
}

export default App;
