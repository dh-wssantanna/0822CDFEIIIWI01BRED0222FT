

const frutas = ["banana", "pêra", "maçã", "mamão"];

const itemA = frutas[0];
const itemB = frutas[1];
const itemC = frutas[2];
const itemD = frutas[3];

console.log(itemA, itemB, itemC, itemD);

console.log('-- Destruction da Array');

const [ item1, item2, item3, item4 ] = frutas;

console.log(item1, item2, item3, item4);

console.log('-- Destruction da Objeto Literal');

const produto = {
    id: 1,
    nome: 'Leite',
    preco: 7
}

const { id, nome, preco, descricao } = produto;

console.log(id, nome, preco, descricao);
