import { Lista } from "./Componentes";

function App() {

  let tarefas = [
    {
      id: 1,
      nome: "Item 1"
    },
    {
      id: 2,
      nome: "Item 2"
    }
  ]

  return (
    <>
      <Lista titulo="Título da minha lista" itens={tarefas} />
    </>
  );
}

export default App;
