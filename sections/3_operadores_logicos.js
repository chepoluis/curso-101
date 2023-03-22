// Operadores
// == y ===

console.log('Operadores de igualdad');
console.log(2 == '2'); // Compara solo el valor
console.log(2 === '2'); // Compara el valor y el tipo de dato
console.log(2 === 2);

// Operadores de comparacion
/**
 * < > <= >=
 */
console.log('Operadores de comparacion');
// Mayor que >
// Compara si el valor de la izquierda es mayor 
// que el valor de la derecha
console.log('Mayor que >');
console.log("2 > 1", 2 > 1); // True
console.log("1 > 2", 1 > 2); // False
console.log("2 > 2", 2 > 2); // False

// Mayor o igual que >=
/**
 * Compara si el valor de la izquierda es mayor o igual al valor de la derecha
 */
console.log('Mayor o igual que >=');
console.log("2 >= 2", 2 >= 2);
console.log("2 >= 4", 2 >= 4);
console.log("4 >= 2", 4 >= 2);

// Menor que <
/**
 * Compara si el valor de la izquierda es menor que el valor de la derecha
 */
console.log('Menor que <');
console.log("2 < 1", 2 < 1);
console.log("1 < 2", 1 < 2);

// Menor o igual que
/**
 * Compara si el valor de la izquierda es menor o igual al valor de la derecha
 */
console.log('Menor o igual que <=');
console.log("1 <= 1", 1 <= 1);
console.log("1 <= -1", 1 <= -1);
console.log("-1 <= 1", -1 <= 1);

/**
 * En JavaScript, && y || son operadores lógicos que se utilizan para combinar expresiones booleanas:
 * &&: Operador AND (y) lógico. Devuelve true si ambas expresiones a su izquierda y derecha son verdaderas (true). Si alguna de las expresiones es falsa (false), devuelve false.
 * ||: Operador OR (o) lógico. Devuelve true si al menos una de las expresiones a su izquierda o derecha es verdadera (true). Si ambas expresiones son falsas (false), devuelve false.
 */

let valor1 = true;
let valor2 = true;
// AND - &&
console.log("AND &&");
console.log(valor1 && valor2);

let valorOr1 = true;
let valorOr2 = false;
// OR - ||
console.log("OR ||");
console.log(valorOr1 || valorOr2);