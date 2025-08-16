/* CONTADOR DE PALABRAS
Crea un programa que cuente cuántas palabras tiene una frase ingresada por el usuario.

Condiciones:
1. Solicitar al usuario una frase.
2. Ignorar espacios extra al inicio, entre palabras y al final.
3. No contar palabras vacías (ejemplo: “Hola mundo” debe contar 2).
4. Mostrar la cantidad de palabras obtenida. 
*/

let cleanText = prompt("Enter a new phrase:").replace(/\s+/g, " ").trim()
let blankSpacePosition = []
let wordsSliced=[]
let separator=-1

for (i = 0; i < cleanText.length; i++) {
    if (cleanText[i] == " ") {
        blankSpacePosition.push(i)
    }
}
console.log(blankSpacePosition);

for (i = 0; i <= blankSpacePosition.length; i++) {
    wordsSliced.push(cleanText.slice(separator+1,blankSpacePosition[i]))
    console.log(wordsSliced)
    separator=blankSpacePosition[i]
}

alert(`This phrase has ${wordsSliced.length} words`)
console.log(`This phrase has ${wordsSliced.length} words`)