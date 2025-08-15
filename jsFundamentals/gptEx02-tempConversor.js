/* CONVERSOR DE TEMPERATURA
El usuario podrá elegir si desea convertir de Celsius a Fahrenheit o de Fahrenheit a Celsius.

Logica:
    - Debes mostrar el resultado de forma clara.
Condiciones:
    1. Validar que el valor ingresado sea numérico.
    2. Usar estructuras condicionales (if o switch).
    3. Mostrar un mensaje distinto si el usuario ingresa algo inválido.
*/

let scale = 0
let tempOriginal = { temp: 0, scale: "", degree: "" }
let tempConverted = { temp: 0, scale: "", degree: "" }
let validateScale = true
let validateTemp = true

while (validateScale) {
    scale = Number.parseInt(prompt("Select the conversion:\n(1) = Fahrenheit to Celsius\n(2) = Celsius to Fahrenheit"))
    switch (scale) {
        case 1:
            alert("You're selected °F to °C")
            tempOriginal.scale = "Fahrenheit"
            tempOriginal.degree = "°F"
            tempConverted.scale = "Celsius"
            tempConverted.degree = "°C"
            validateScale = false
            break
        case 2:
            alert("You're selected °C to °F")
            tempConverted.scale = "Fahrenheit"
            tempConverted.degree = "°F"
            tempOriginal.scale = "Celsius"
            tempOriginal.degree = "°C"
            validateScale = false
            break
        default:
            alert("Select a valid option. Try again!")
    }
}

while (validateTemp) {
    tempOriginal.temp = parseInt(prompt(`Enter the temperature (in ${tempOriginal.scale}):`))
    if (Number.isInteger(tempOriginal.temp)) {
        switch (scale) {
            case 1:
                tempConverted.temp = (tempOriginal.temp - 32) * 5 / 9
                validateTemp = false
                break
            case 2:
                tempConverted.temp = (tempOriginal.temp * 9 / 5) + 32
                validateTemp = false
                break
        }
    } else {
        alert("Letters aren't valid. Please try again!")
    }
}

console.log(`The convertion of ${tempOriginal.temp}${tempOriginal.degree} in ${tempConverted.scale} degree was ${tempConverted.temp}${tempConverted.degree}`)