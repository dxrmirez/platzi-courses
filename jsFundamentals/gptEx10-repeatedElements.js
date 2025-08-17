/* ELIMINADOR DE ELEMENTOS REPETIDOS
Dado un array con elementos repetidos, crea un programa que devuelva otro array con solo los elementos únicos.

Condiciones:
    1. No usar librerías externas.
    2. Debe funcionar con números o texto.
    3. Mostrar ambos arrays (original y sin duplicados).
*/

let elements = ["FI29", "1", "3", "FI09", "JM15", "FI29", "DR06", "JM15", "12", "1"]
let newElements = []

for (let i of elements) {
    if (newElements.includes(i) == false) {
        newElements.push(i)
    }
}

console.log("Original array: " + elements);
console.log("New array: " + newElements);
