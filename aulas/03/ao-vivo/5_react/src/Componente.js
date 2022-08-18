/*

// Opção 1

function Componente(propriedade) {
    
    console.log(propriedade.titulo);

    return (
        <h1>Componente</h1>
    )
}*/

function Componente({ titulo, descricao }) {
    
    console.log(titulo, descricao);

    return (
        <h1>{titulo} - {descricao}</h1>
    )
}

export default Componente;