/* TEMPORIZADOR
Crea un temporizador que reciba un número de segundos y haga una cuenta regresiva hasta llegar a 0.

Condiciones:
    1. Solicitar al usuario un número de segundos.
    2. Mostrar el tiempo restante en consola o en el DOM.
    3. Cuando llegue a 0, usar clearInterval() y mostrar un mensaje: “¡Tiempo finalizado!”. 
*/

let validSecond = false
let seconds = 0

while (!validSecond) {
    seconds = parseInt(prompt("Enter the seconds:"))
    if (seconds >= 0) {
        console.log("Timer setted")
        console.log(seconds)
        validSecond = true
    } else {
        console.log("Letters aren't accepted. Try again!")
    }
}

let timer = setInterval(() => {
    seconds--
    console.log(seconds);
    if (seconds <= 0) { clearInterval(timer); console.log("It's time!") }
}, 1000)

