// Importando Componente Lista
import Lista from "./componentes/Lista";

function App() {

  let estudos = [
    {
      id: 1,
      nome: 'Criar projeto utilizando create-react-app'
    },
    {
      id: 2,
      nome: 'Fragmentar o código-fonte em componentes'
    },
    {
      id: 3,
      nome: 'Intercambiar valorers a partir de propriedades'
    },
  ]

  // Retornando o Componente Lista em App
  return (
    <div className="container">
      <div className="row">
        <article className="pt-5 pb-2">
          <h1 className="h1">Todo List</h1>
        </article>
      </div>
      <div className="row g-3">
        <div className="col">
          <label
            className="visually-hidden"
            for="AddTaskInput"
          >
            Add Task
          </label>
          <input
            className="form-control form-control-lg"
            id="AddTaskInput"
            type="text"
            placeholder="Add Task..."
            aria-label="Add Task..."
            data-todo-target="input-task"
          />
        </div>
        <div className="col-auto">
          <button
            className="btn btn-lg btn-primary"
            data-todo-target="add"
          >
            +
          </button>
        </div>
      </div>

      <div className="row g-3">
        <div className="col">
          <Lista titulo="Meus estudos de React" itens={estudos} />
        </div>
      </div>

    </div>
  );
}

export default App;
