/*
    Opção 1

    export default function Item({ item }) {
        return (
            <li className="list-group-item">
                {item.id} {item.nome}
            </li>
        )
    }
*/

/* 
    Opção 2 
    
    Nessa refatoração eu desconstruo as propriedades id e nome
    de item para omitir item das propriedades no componente.

    Caso a propriedade mude de nome, precisarei alterar apenas na linha 
    22 e na 24 seu nome.
*/
export default function Item({ item }) {

    const { id, nome } = item;

    return (
        <li className="list-group-item">
            {id} - {nome}
        </li>
    )
}