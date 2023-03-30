// Ciclo while

/**
 * El ciclo while en JavaScript es una estructura de control
 * que permite repetir un bloque de código mientras se cumpla una condición especificada.
 * La estructura básica del ciclo while es la siguiente:
 */

// while (condicion) {
//     Bloque de código que se ejecuta mientras la condición sea verdadera
// }

/**
 *  El ciclo while funciona de la siguiente manera:

    1. Evalúa la condición.
    2. Si la condición es verdadera (true), ejecuta el bloque de código.
    3. Si la condición es falsa (false), termina el ciclo y continúa con el resto del programa.
    4. Después de ejecutar el bloque de código, vuelve al paso 1.
 */

/**
 * ACTIVIDAD:
 *
 * 1. Incrementar la variable "contador" en 1 en 1.
 * 2. El ciclo se tiene que ejecutar 50 veces.
 *
 * :)
 *
 * Ejemplo:
 * La salida del programa tendria que ser:
 *
 * Contador: 0
 * Contador: 1
 * Contador: 2
 * Contador: 3
 * Contador: 4
 * ... los 45 mensajes restantes
 *
 * ¡Suerte!
 *
 * Posdata: si llegan a hacer un ciclo infinito que trabe su computadora,
 * den "Control C" en la consola para que termine de ejecutarse su programa. :b
 */

// ? SOLUCION ACTIVIDAD 1
// let contador = 0;

// while(contador <= 49) {
//     console.log('Contador: ', contador);
//     contador++;
// }

// Salida:
// Contador: 0
// Contador: 1
// Contador: 2
// Contador: 3
// Contador: 4

/**
 * En este ejemplo, la condición del ciclo while es contador <= 49. El ciclo se ejecutará mientras
 * la variable contador sea menor que 50. En cada iteración del ciclo, mostramos el valor actual de
 * contador y luego lo incrementamos en 1. Cuando contador alcanza el valor de 50, la condición contador <= 49 ya no se
 * cumple y el ciclo termina.
 *
 * Es importante tener en cuenta que si la condición siempre se cumple, el ciclo while se ejecutará indefinidamente,
 * lo que podría causar que el programa se bloquee o se quede en un bucle infinito. Por lo tanto, es esencial asegurarse
 * de que la condición del ciclo eventualmente se vuelva falsa para que el programa pueda continuar. :p
 */

/**
 * ACTIVIDAD 2
 *
 * Imprimir los numeros pares del 0 al 50
 *
 * Dentro del ciclo while que ya tienen hacer lo siguiente:
 *
 * 1. Colocar un if con la siguiente validacion "numero % 2 === 0" <- valida si el numero es par
 *
 */

// ? SOLUCION ACTIVIDAD 2
let contador = 0;

while (contador <= 50) {
  if (contador % 2 === 0) {
    console.log("Contador: ", contador);
  }

  contador++;
}
