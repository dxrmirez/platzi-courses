/* LISTA DE COMPRAS
Crea un sistema que permita al usuario armar una lista de compras. El usuario podrá agregar productos y, al final, mostrar la lista de compras.

Condiciones:

1. Permitir al usuario escribir "fin" para dejar de agregar productos.
2. No permitir valores vacíos o repetidos.
3. Mostrar la lista final ordenada alfabeticamente.
*/

let item = document.getElementById("item")
let enter = document.getElementById("enter")
let finish = document.getElementById("finish")
let list = document.getElementById("finalList")
let itemsList = []

enter.addEventListener("click", () => {
    let itemClean = item.value.replace(/\s+/g, " ").trim()
    let itemCheck = itemClean.toLowerCase()
    let itemsLowerCase = itemsList.map(i => i.toLowerCase())
    if (itemsLowerCase.includes(itemCheck)) {
        alert("This product exist in your list. Enter a new item!")
    } else if (itemCheck == "") {
        alert("Empty text isn't valid. Try again!")
    } else {
        itemsList.push(itemClean)
        itemsList.sort()
        alert("Item added successfuly!")
        console.log(itemsList)
        item.value = ""
    }
})

finish.addEventListener("click", () => {
    for (let i = 0; i < itemsList.length; i++) {
        let li = document.createElement("li")
        li.textContent = itemsList[i]
        list.appendChild(li)
    }
    alert("List finished!")
})

