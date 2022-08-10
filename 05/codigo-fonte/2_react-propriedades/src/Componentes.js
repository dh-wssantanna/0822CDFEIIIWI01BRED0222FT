
function Item({ item }) {
    return <li>{item.id} - {item.nome}</li>;
}

/*
Opção 1:

function Lista(propriedades) {

    return <>{propriedades.titulo} {propriedades.descricao}</>;
}

Opção 2
function Lista(propriedades) {

    const { titulo } = propriedades;

    return <>{titulo}</>;
}
*/
function Lista({ titulo, itens }) {

    return (
        <>
            <h1>{titulo}</h1>
            <ul>
                <Item tarefa={itens[0]} />
                <Item tarefa={itens[1]} />
            </ul>
        </>
    );
}

export { Lista }