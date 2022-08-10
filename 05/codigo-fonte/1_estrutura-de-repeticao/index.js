

let frutas = ["abacate", "açai", "mamão", "uva"];
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Mapeando
let sacola = frutas.map((fruta) => fruta.toUpperCase());

console.log("Array original", frutas);
console.log("Cópia modificada da Array", sacola);

// Buscando o primeiro número maiores que 5
let resultadoBusca = numeros.find((numero) => numero > 5);
// Filtrando todos os valores maiores que 5
let resultadoFiltro = numeros.filter((numero) => numero > 5);

console.log("Resultado da busca número > cinco", resultadoBusca);
console.log("Resultado do filtro de número > cinco", resultadoFiltro);


/**
 * Reduzir os valores para um único valor.
 *  
 * resultado = 0 += 1
 * resultado = 1 += 2
 * resultado = 3 += 3
 * resultado = 6 += 4
 * ...
 * 
 */
let somar = numeros.reduce((resultado, valorAtual) => resultado += valorAtual);

console.log("Resultado da soma", somar);
