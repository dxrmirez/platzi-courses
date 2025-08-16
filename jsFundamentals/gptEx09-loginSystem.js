/* SISTEMA DE LOGIN SIMPLE
Simula un sistema de inicio de sesión donde el usuario debe ingresar nombre y contraseña correctos.

Condiciones:
    1. Usar credenciales predefinidas (ej: usuario = "admin", contraseña = "1234").
    2. Permitir máximo 3 intentos.
    3. Si acierta, mostrar “Acceso concedido”. Si falla 3 veces, mostrar “Acceso bloqueado”.
*/

let database = { user: "admin", password: "1234" }
let attempts = 0
let match=false

do {
    let userAttempt = prompt("Enter your user:")
    let passwordAttempt = prompt("Enter your password:")
    if (userAttempt == database.user) {
        if (passwordAttempt == database.password) {
            alert("Successful login!")
            attempts = 3
            match=true
        }
        else { alert("Password is incorrect. Try again!"); attempts++ }
    }
    else { alert("This user doesn't exist. Try again!"); attempts++ }
} while (attempts < 3)

if(match==false){
    alert("You've tried 3 times. Access blocked.")
}