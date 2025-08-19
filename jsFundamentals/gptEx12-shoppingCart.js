/* CARRITO DE COMPRAS 
Construye un carrito de compras donde el usuario pueda agregar productos con nombre, precio y cantidad. El sistema calculará el total de la compra.

Condiciones de cumplimiento:

    1. Solicitar al usuario los datos del producto (nombre, precio, cantidad).
    2. Validar que el precio y la cantidad sean números positivos.
    3. Calcular el total usando .reduce().
    3. Mostrar el total con dos decimales.
*/

let formProduct = document.getElementById("form-product")
let formAmount = document.getElementById("form-amount")
let formCost = document.getElementById("form-cost")
let addButton = document.getElementById("add-button")
let clearButton = document.getElementById("clear-button")
let list = document.getElementById("list")
let result = document.getElementById("result")
let resultText = ''
let cart = []

let regexProduct
let regexNums
function cleaner(text) {
    regexProduct = /^[a-zA-ZáéíóúÁÉÍÓÚ0-9\s]+$/g
    regexNums = /^[0-9]+$/g
    text = text.replace(/\s+/g, " ").trim()
}

class Item {
    constructor(product, amount, cost) {
        this.product = product
        this.amount = amount
        this.cost = cost
    }
}

function verify(newProduct, newAmount, newCost) {
    let validProduct = false
    let validAmount = false
    let validCost = false

    cleaner(newProduct)
    if (regexProduct.test(newProduct)) { validProduct = true } else {
        return "Invalid product! Symbols aren't accepted."
    }

    cleaner(newAmount)
    if (validProduct && (regexNums.test(newAmount)) && newAmount > 0 && newAmount <= 100) { validAmount = true } else {
        return "Invalid amount! Please enter a number between 1-100."
    }

    cleaner(newCost)
    if (validAmount && (regexNums.test(newCost)) && newCost >= 0) { validCost = true } else {
        return "Invalid cost! Please enter a number greater than 0."
    }

    if (validProduct && validAmount && validCost) {
        cart.push(new Item(newProduct, newAmount, newCost))
        formProduct.value = ''
        formAmount.value = ''
        formCost.value = ''
        return "New item added!"
    }
}

addButton.addEventListener('click', () => {
    alert(verify(formProduct.value, formAmount.value, formCost.value))
    cart.sort((a, b) => b.cost - a.cost);

    result.textContent = ''
    resultText = Number(cart.reduce((acc, each) => {
        return acc + (each.amount * each.cost)
    }, 0)).toLocaleString('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 2,
    })
    result.textContent = resultText

    list.textContent = ''
    for (let item of cart) {
        let li = document.createElement("li")
        const formattedCost = Number(item.cost).toLocaleString('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0,
        });
        li.textContent = item.product + ". qnt.: " + item.amount + " | Cost: " + formattedCost
        list.appendChild(li)
    }
})

clearButton.addEventListener('click', () => {
    list.textContent = ''
    formProduct.value = ''
    formAmount.value = ''
    formCost.value = ''
    cart = []
})