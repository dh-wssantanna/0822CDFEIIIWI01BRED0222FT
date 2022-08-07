
const frutas = ["banana", "pêra", "maçã", "mamão"];

frutas.push('morango');

console.log(
    '-- Váriavel modificada', 
    frutas
);

const novaSacolaFrutas = [...frutas, 'côco'];

console.log(
    '-- Nova variável definida a partir do valor anterior', 
    NovaSacolaFrutas
);