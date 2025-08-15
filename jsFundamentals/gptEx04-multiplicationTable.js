/* TABLA DE MULTIPLICAR
Crea un programa que muestre la tabla de multiplicar de un número dado, desde 1 hasta 10.

Condiciones:
    1. Solicitar un número entero.
    2. Solo dejar ingresar números positivos.
    3. Mostrar en consola la tabla de multiplicar en un formato claro (ej: 5 x 3 = 15).
*/
let validateNumber = true
let number = 0

while (validateNumber) {
    number = parseInt(prompt("Enter a positive integer:"))
    if (Number.isInteger(number) && number >= 0) {
        validateNumber = false
    }
    else {
        alert("Letters and negative numbers aren't valid. Please try again!")
    }
}
alert(`You chose the ${number} multiplication table!`)
console.log(`Multiplication table of ${number}:`)

for (let i = 1; i <= 10; i++) {
    let result = 0
    result = number * i
    console.log(number + " x " + i + " = " + result)
}