
const produto = {
    id: 1,
    nome: 'Leite',
    preco: 7
}

console.log('-- Acessando valores a partir da Chave');

console.log('id', produto['id']);
console.log('nome', produto['nome']);
console.log('preco', produto['preco']);

/* 
    Opção 2
    
    console.log(Produto.id);
    console.log(Produto.nome);
    console.log(Produto.preço);
*/

console.log('-- Estrutura de repetição');

for(let chave in produto) {
    console.log( chave, produto[chave] );
}

