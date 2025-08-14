/* RETO DE LOG-IN

Condiciones:
    1. El usuario debe poder ingresar su usuario y contraseña
    2. El sistema debe ser capaz de validar si el usuario y contraseña ingresados por el usuario existen en la base de datos
    3. Si el usuario y contraseña son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.
    4. Si el usuario y contraseña son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningun timeline.
*/

const usersDatabase = [
    {
        username: "dxrmirez",
        password: "123",
    },
    {
        username: "ynavarro",
        password: "456",
    },
    {
        username: "mmarriaga",
        password: "789",
    },
];

const usersTimeline = [
    {
        username: "Carlos",
        timeline: "I love Javascript!",
    },
    {
        username: "Oscar",
        timeline: "Bebeloper is the best!",
    },
    {
        username: "Mariana",
        timeline: "I like a coffee more than a tea",
    },
    {
        username: "Andres",
        timeline: "I don't want to work today :(",
    },
];

const loginUsername = prompt("Enter your username: ")
const loginPassword = prompt("Enter your password: ")
let validateUsername, validatePassword = 0

for (i = 0; i < usersDatabase.length; i++) {
    if (loginUsername == usersDatabase[i].username) {
        validateUsername = 1
        if (loginPassword == usersDatabase[i].password) {
            validatePassword = 1
            break
        }
    }
}
if (validateUsername) {
    if (validatePassword) {
        alert("Successful login!")
        for (i = 0; i < usersTimeline.length; i++) {
            console.log(usersTimeline[i].username+" says: "+usersTimeline[i].timeline)
        }
    } else {
        alert("Incorrect password. Please try again!")
    }
}
else {
    alert("This user doesn't exist. Please create a new account.")
}