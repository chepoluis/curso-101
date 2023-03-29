/**
 * El "switch" en JavaScript es una estructura de control de flujo que permite ejecutar diferentes bloques de código según
 * el valor de una expresión.
 * Es una alternativa a múltiples sentencias "if" cuando se necesita comparar una variable con diferentes valores posibles.
 */

// 1. La expresion es evaluada una vez al inicio del switch.
// 2. Cada "case" representa un valor posible para la expresión.
//    Si la expresión coincide con algún valor de los "case", se ejecutará el código que sigue a ese "case".
// 3. La sentencia "break" se utiliza para salir del bloque "switch" después de ejecutar el
//    código correspondiente a un caso particular. Si no se incluye un "break", el código continuará
//    ejecutándose hasta que encuentre un "break" o llegue al final del bloque "switch".
// 4. La sentencia "default" es opcional y se ejecuta si ninguno de los casos anteriores coincide con la expresion

/*
switch (expresion) {
    case valor1:
      Código a ejecutar si la expresión es igual a valor1
      break;
    case valor2:
      Código a ejecutar si la expresión es igual a valor2
      break;
     ... más casos
    default:
        Código a ejecutar si la expresión no coincide con ninguno de los valores anteriores
  }
*/

// ... Actividad, que agreguen los demas dias
/**
 * Donde:
 * Lunes = 1
 * Martes = 2
 * Miercoles = 3
 * Jueves = 4
 * Viernes = 5
 * Sabado = 6
 * Domingo = 7
 */

/**
 * Actividad:
 * Restringir el acceso al switch, basado en la hora.
 *
 * 1. Crear una variable
 * 2. Encerrar el switch dentro de un if donde cumpla la siguiente validacion
 *    el usuario podra acceder al switch si la hora es entre las 10 y las 20
 */

let weekDay = 2;
let hour = 10; // Formato 24 horas 0 - 24

if (hour >= 10 && hour <= 20) {
  switch (weekDay) {
    case 1:
      console.log("Es lunes");
      break;
    case 2:
      console.log("Es martes, ve al gym");
      break;
    case 2:
      console.log("Es miercoles");
      break;
    default:
      console.log("Ingresa un dia valido");
  }
} else {
  console.log("NO tienes permiso");
}
