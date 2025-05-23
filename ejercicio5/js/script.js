function calcular_area(in_valor_a, in_valor_b,in_valor_c) {
    if (in_valor_a <= in_valor_c){
        return null
    }
    const area = (in_valor_b*in_valor_c) + (((in_valor_a-in_valor_c)*in_valor_b)/2)
    return area
}


const input_a = document.getElementById("input_a")
const input_b = document.getElementById("input_b")
const input_c = document.getElementById("input_c")
const boton_calcular = document.getElementById("boton_calcular")

boton_calcular.addEventListener("click", () => {
    const in_valor_a = parseFloat(input_a.value) 
    const in_valor_b = parseFloat(input_b.value)
    const in_valor_c = parseFloat(input_c.value)

    // verifico las entradas no nulas
    if (isNaN(in_valor_a) || isNaN(in_valor_b) || isNaN(in_valor_c)) {
        alert("Por favor, ingrese números válidos.")
        return 
    }

    // verifico si las entradas son mayores a cero
    if (in_valor_a > 0 && in_valor_b > 0 && in_valor_c > 0) {
        const resultado = calcular_area(in_valor_a, in_valor_b, in_valor_c)

        // si resultado es null entonces arrojo una alerta
        if (resultado === null) { 
            alert("No se pudo calcular el área. Asegúrese de que el lado A sea mayor al lado C.")
        } else {
            // solo imprimo 2 cáracteres del nro flotante
            alert("El Área es: " + resultado.toFixed(2))
        }
    } else {
        // mensaje si los números no son positivos
        alert("No se pudo calcular el área. Asegúrese de que los valores sean mayores a 0.")
        input_a.value = ""
        input_b.value = ""
        input_c.value = ""
    }
})