/* CALCULADORA DE DESCUENTOS
Crea un programa que calcule el precio final de un producto después de aplicar un descuento.

Condiciones:
    1. El usuario deberá ingresar el precio original y el descuento
    2. El resultado debe mostrarse en consola y en un alert() con un mensaje claro.
    3. No aceptar precios negativos ni descuentos mayores al 100%.
    4. El precio final debe tener máximo dos decimales.
*/

let validatePrice = true, validateDiscount = true
let price = 0
let discount = 0
let result = 0

while (validatePrice) {
    price = parseFloat(prompt("Enter the original price:"))
    if (Number.isNaN(price)) {
        alert("Letters aren't valid. Please try again!")
    }
    else {
        if (price < 0) {
            alert("A negative number isn't valid. Please try again!")
        }
        else {
            validatePrice = false
        }
    }
}

while (validateDiscount) {
    discount = parseFloat(prompt("Enter the discount (0-100):"))
    if (Number.isNaN(discount)) {
        alert("Letters aren't valid. Please try again!")
    }
    else {
        if (discount < 0 || discount > 100) {
            alert("The discount must be between 0 and 100.")
        }
        else {
            validateDiscount = false
        }
    }
}

result = price - price * (discount / 100)

console.log(`The product price is $${price} and its discount is ${discount}%`)
console.log(`The final price is $${result.toFixed(2)}`)
alert(`The final price is $${result.toFixed(2)}`)