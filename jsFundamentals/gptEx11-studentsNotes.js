/* REGISTRO DE ESTUDIANTES
Crea un sistema para registrar estudiantes con sus datos: nombre, edad y nota final. Al final, se debe poder mostrar la lista de estudiantes ordenada por nota, de mayor a menor.

Condiciones:
    1. Pedir datos al usuario (nombre, edad, nota).
    2. Validar que la edad y la nota sean números positivos.
    3. Repetir hasta que el usuario pulse 'Finalizar'.
    4. Mostrar la lista completa ordenada de mayor a menor nota.
*/

let formName = document.getElementById("form-name")
let formAge = document.getElementById("form-age")
let formNote = document.getElementById("form-note")
let addButton = document.getElementById("add-button")
let clearButton = document.getElementById("clear-button")
let list = document.getElementById("list")
let students = []

let regex
function cleaner(text) {
    regex = /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/g
    text = text.replace(/\s+/g, " ").trim()
}

class Student {
    constructor(name, age, note) {
        this.name = name
        this.age = age
        this.note = note
    }
}

function verify(newName, newAge, newNote) {
    let validName = false
    let validAge = false
    let validNote = false

    cleaner(newName)
    if (regex.test(newName)) { validName = true } else {
        return "Invalid name! Numbers and symbols aren't accepted."
    }

    cleaner(newAge)
    if (validName && (!regex.test(newAge)) && newAge > 0 && newAge <= 100) { validAge = true } else {
        return "Invalid age! Please enter a number between 1-100."
    }

    cleaner(newNote)
    if (validAge && (!regex.test(newNote)) && newNote >= 0 && newNote <= 5) { validNote = true } else {
        return "Invalid note! Please enter a number between 0-5."
    }

    if (validName && validAge && validNote) {
        students.push(new Student(newName, newAge, newNote))
        formName.value = ''
        formAge.value = ''
        formNote.value = ''
        return "New student added!"
    }
}

addButton.addEventListener('click', () => {
    alert(verify(formName.value, formAge.value, formNote.value))
    students.sort((a, b) => b.note - a.note);

    list.textContent = ''
    for (let student of students) {
        let li = document.createElement("li")
        li.textContent = student.name + ", " + student.age + " years old — Note: " + student.note
        list.appendChild(li)
    }
})

clearButton.addEventListener('click', () => {
    list.textContent = ''
    formName.value = ''
    formAge.value = ''
    formNote.value = ''
    students = []
})