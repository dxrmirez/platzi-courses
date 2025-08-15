/* DETECTOR DE PALINDROMOS 
Crea un programa que determine si una palabra o frase es un palíndromo (se lee igual de izquierda a derecha y viceversa).

Condiciones:
    1. Solicitar al usuario una palabra o frase.
    2. Ignorar espacios, mayúsculas y signos de puntuación.
    3. Mostrar un mensaje indicando si es o no un palíndromo.
*/

let vowels = ['a', 'e', 'i', 'o', 'u']
let vowelsAccent = ['á', 'é', 'í', 'ó', 'ú']

let reversePhrase = ""
let normalPhrase = prompt("Enter your phrase/word:").toLowerCase().replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑ]/g, "")

for (let i = 0; i < vowels.length; i++) {
    normalPhrase = normalPhrase.replaceAll(vowelsAccent[i], vowels[i])
}
console.log(`NORMAL PHRASE: ${normalPhrase}`)

for (let i = 0; i < normalPhrase.length; i++) {
    reversePhrase = normalPhrase[i] + reversePhrase
    console.log(`Letter #${i + 1}: ${reversePhrase}`)
}
console.log(`REVERSE PHRASE: ${reversePhrase}`)

if (normalPhrase === reversePhrase) {
    alert(`This is a palindrome of ${normalPhrase.length} letters.`)
} else {
    alert(`This isn't a palindrome. Try again!`)
}
