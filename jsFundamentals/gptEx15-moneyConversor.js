/* CONVERSOR DE MONEDAS CON API
Crea un conversor de monedas que consulte una API pública de divisas y convierta una cantidad de una moneda a otra.

Condiciones:
    1. Pedir al usuario la cantidad y las monedas (ej: “USD” a “COP”).
    2. Obtener la tasa de conversión de una API publica (ej: ExchangeRate API).
    3. Mostrar el resultado con dos decimales.
    4. Manejar errores si la API falla o si la moneda no existe.
*/

fetch("https://api.frankfurter.dev/v1/latest?base=USD")
    .then((response) => response.json())
    .then((data) => console.log(data))  
