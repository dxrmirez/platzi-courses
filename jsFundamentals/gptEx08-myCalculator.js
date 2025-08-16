/* CALCULADORA DE FUNCIONES ARITMETICAS
Construye una calculadora que pueda sumar, restar, multiplicar y dividir dos números.

Condiciones:
1. El usuario debe elegir qué operación realizar.
2. Cada operación debe estar definida como una función independiente.
3. Validar que el divisor no sea cero en la división.
4. El usuario debe ver el resultado en pantalla
*/

let cButton = document.getElementById('c')
let acButton = document.getElementById('ac')
let divButton = document.getElementById('div')
let sevenButton = document.getElementById('7')
let eightButton = document.getElementById('8')
let nineButton = document.getElementById('9')
let mulButton = document.getElementById('mul')
let fourButton = document.getElementById('4')
let fiveButton = document.getElementById('5')
let sixButton = document.getElementById('6')
let difButton = document.getElementById('dif')
let oneButton = document.getElementById('1')
let twoButton = document.getElementById('2')
let threeButton = document.getElementById('3')
let sumButton = document.getElementById('sum')
let zeroButton = document.getElementById('0')
let equalButton = document.getElementById('eq')
let historial = document.getElementById('historial')
let editor = document.getElementById('editor')

let editNumber = ''
let operatorSelected = ' + '
let clearFlag = 0;
let clearAllFlag = 0;

let actualNumber = 0
let result = 0

function clear() {
    if (clearFlag) {
        editor.innerHTML = '0'
        editNumber = ''
    }
    clearFlag = 0
}

function clearAll() {
    if (clearAllFlag) {
        clear()
        historial.innerHTML = ''
        editNumber = ''
    }
    clearFlag = 0
    clearAllFlag = 0
    previousNumber = 0
    actualNumber = 0
    result = 0
}

function refresh() {
    if (historial.innerHTML == '') {
        historial.innerHTML = actualNumber + operatorSelected
    } else {
        historial.innerHTML = historial.innerHTML + actualNumber + operatorSelected
    }
    clearFlag = 1
}

//Actions
cButton.addEventListener('click', () => {
    clearFlag = 1
    clear()
})
acButton.addEventListener('click', () => {
    clearFlag = 1
    clearAllFlag = 1
    clearAll()
})

equalButton.addEventListener('click', () => {
    switch (operatorSelected) {
        case ' + ':
            if (historial.innerHTML == '') {
                historial.innerHTML = actualNumber + operatorSelected
            } else {
                historial.innerHTML = historial.innerHTML + actualNumber + operatorSelected
            }
            clearFlag = 1
            result = actualNumber
            actualNumber = parseInt(editor.innerHTML)
            result = result + actualNumber
            editor.innerHTML = result
            clearFlag = 1
            operatorSelected = ''
            break;

        default:
            break;
    }
})

//Operations
divButton.addEventListener('click', () => {

})
mulButton.addEventListener('click', () => {

})
difButton.addEventListener('click', () => {

})
sumButton.addEventListener('click', () => {
    operatorSelected = ' + '
    actualNumber = parseInt(editor.innerHTML)
    refresh()
})

//Numbers

oneButton.addEventListener('click', () => {
    clear()
    editNumber = editNumber + '1'
    editor.innerHTML = editNumber
})
twoButton.addEventListener('click', () => {
    clear()
    editNumber = editNumber + '2'
    editor.innerHTML = editNumber
})
threeButton.addEventListener('click', () => {
    clear()
    editNumber = editNumber + '3'
    editor.innerHTML = editNumber
})
fourButton.addEventListener('click', () => {
    clear()
    editNumber = editNumber + '4'
    editor.innerHTML = editNumber
})
fiveButton.addEventListener('click', () => {
    clear()
    editNumber = editNumber + '5'
    editor.innerHTML = editNumber
})
sixButton.addEventListener('click', () => {
    clear()
    editNumber = editNumber + '6'
    editor.innerHTML = editNumber
})
sevenButton.addEventListener('click', () => {
    clear()
    editNumber = editNumber + '7'
    editor.innerHTML = editNumber
})
eightButton.addEventListener('click', () => {
    clear()
    editNumber = editNumber + '8'
    editor.innerHTML = editNumber
})
nineButton.addEventListener('click', () => {
    clear()
    editNumber = editNumber + '9'
    editor.innerHTML = editNumber
})
zeroButton.addEventListener('click', () => {
    clear()
    editNumber = editNumber + '0'
    editor.innerHTML = editNumber
})
