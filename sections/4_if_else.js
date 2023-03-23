// Estructuras de control - if, if - else, if - else if

/**
 * Estos son elementos de control de flujo que nos permiten
 * tomar decisiones en nuestro código en función de ciertas condiciones.
 */

// if
// if: Se utiliza para ejecutar un bloque de código si una condición es verdadera.

// if(condicion) {
//     codigo a ejcutar si la condicion es verdadera
// }

let edad = 18;

console.log("Inicio");

if (edad >= 18) {
  console.log("Eres mayor de edad");
}

console.log("Final");

console.log("-----------------------");

// if-else
/**
 * if-else: Se utiliza para ejecutar un bloque de código
 * si una condición es verdadera, y otro bloque de código si la condición es falsa.
 */

// if (condición) {
//   Código a ejecutar si la condición es verdadera
// } else {
//   Código a ejecutar si la condición es falsa
// }

if (edad >= 18) {
  console.log("Eres mayor de edad.");
} else {
  console.log("Eres menor de edad.");
}

// if-else if
/**
 * if-else if: Se utiliza para probar múltiples condiciones en secuencia. Si una condición es verdadera,
 * se ejecuta el bloque de código correspondiente y se ignoran las condiciones restantes.
 */

// if (condición1) {
//   Código a ejecutar si la condición1 es verdadera
// } else if (condición2) {
//   Código a ejecutar si la condición1 es falsa pero la condición2 es verdadera
// } else {
//   Código a ejecutar si todas las condiciones anteriores son falsas
// }
console.log("------------");

/**
 * Ejercicio:
 * Realizar un programa que muestre la nota del alumno como: A, B, C, D , F
 * donde:
 *
 * A >= 90,
 * B >= 80,
 * C >= 70,
 * D >= 60,
 * F < 60
 */

let calificacion = 90;

if (calificacion >= 90) {
  console.log("Tú calificación es: A");
} else if (calificacion >= 80) {
  console.log("Tú calificación es: B");
} else if (calificacion >= 70) {
  console.log("Tú calificación es: C");
} else if (calificacion >= 60) {
  console.log("Tú calificación es: D");
} else {
  console.log("F Reprobaste :(");
}
// O tambien se podria de la siguiente pero seria muy redundante
// else if (calificacion < 60) {
//     console.log('Reprobaste :(');
// }
