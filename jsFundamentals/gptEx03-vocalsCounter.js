/* CONTADOR DE VOCALES
El usuario ingresará una frase y el programa contará cuántas vocales contiene.

Condiciones:
    1. Pedir al usuario una frase.
    2. Contar las vocales que contiene el mensaje del usuario. 
    3. No distinguir entre mayúsculas y minúsculas, ni en vocales acentuadas.
    4. Debes mostrar el resultado de forma clara.
*/

let vowels = ['a', 'e', 'i', 'o', 'u']
let vowelsCount = [0, 0, 0, 0, 0]
let vowelsAccent = ['á', 'é', 'í', 'ó', 'ú']
let globalCount = 0
let userInput = prompt("Enter your phrase:").toLowerCase()

for (let i = 0; i < vowels.length; i++) {
    userInput = userInput.replaceAll(vowelsAccent[i], vowels[i])
}

for (let v = 0; v < vowels.length; v++) {
    for (let i = 0; i < userInput.length; i++) {
        if (userInput[i] == vowels[v]) {
            globalCount++
            vowelsCount[v]++
        }
    }

    if (vowelsCount[v] == 0) {
        console.log(`There's no any '${vowels[v]}' in the phrase`)
    } else if (vowelsCount[v] == 1) {
        console.log(`There is ${vowelsCount[v]} '${vowels[v]}' in the phrase`)
    } else {
        console.log(`There are ${vowelsCount[v]} '${vowels[v]}' in the phrase`)
    }
}

alert(`${globalCount} vowels found!`)