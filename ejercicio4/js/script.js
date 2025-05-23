// funcion que realiza el calculo del IMC
function calcular_imc_dom(in_peso, in_estatura) {
    if (in_estatura <= 0) {
        return null 
    }
    const imc = in_peso / (in_estatura * in_estatura)
    return imc
}

// incorporo las declaraciones de los elementos
const input_peso = document.getElementById("input_peso")
const input_estatura = document.getElementById("input_estatura")
const boton_calcular = document.getElementById("boton_calcular")

//al hacer click en el boton calcular ingresa a esta funcion flecha
boton_calcular.addEventListener("click", () => {
    const in_peso_valor = parseFloat(input_peso.value)
    const in_estatura_valor = parseFloat(input_estatura.value)

    // verifico las entradas no nulas
    if (isNaN(in_peso_valor) || isNaN(in_estatura_valor)) {
        alert("Por favor, ingrese números válidos para peso y estatura.")
        return
    }

    // verifico si las entradas son mayores a cero
    if (in_peso_valor > 0 && in_estatura_valor > 0) {
        const resultado = calcular_imc_dom(in_peso_valor, in_estatura_valor)

        // si resultado es null entonces arrojo una alerta
        if (resultado === null) { 
            alert("No se pudo calcular el IMC. Asegúrese de que la estatura sea mayor que cero.")
        } else {
            // solo imprimo 2 cáracteres del nro flotante
            alert("El IMC es: " + resultado.toFixed(2))
        }
    } else {
        // mensaje si los números no son positivos
        alert("El peso y la estatura deben ser valores mayores que cero.")
        input_peso.value = ""
        input_estatura.value = ""
    }
})