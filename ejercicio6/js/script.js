const input_nombre = document.getElementById("input_nombre")
const input_apellido = document.getElementById("input_apellido")
const input_edad = document.getElementById("input_edad")
const input_altura = document.getElementById("input_altura")
const input_correo = document.getElementById("input_email")
const boton_calcular = document.getElementById("boton_enviar")
const section_element = document.getElementById("section_principal")

boton_calcular.addEventListener("click", () => {
    
    console.log("Comienza el proceso de validación. . .")
    //Elimino por si quedo un elemento <p> de ejecuciones anteriores
    const parrafo_antiguo = document.getElementById("mensaje_parrafo")
    if(parrafo_antiguo) {
        console.log("INFO : Se borra elemento <p> de ejecuciones pasadas.")
        parrafo_antiguo.remove()}

    //Limpio la variable mensaje de ejecuciones pasadas
    let mensaje = ""

    //Declaro contantes de los inputs
    const in_valor_nombre = input_nombre.value 
    const in_valor_apellido = input_apellido.value
    const in_valor_edad = parseInt(input_edad.value)
    const in_valor_altura = parseFloat(input_altura.value)
    const in_valor_correo = input_correo.value

    // verifico las entradas no nulas
    // El nombre y apellido no pueden estar vacíos y deben ser de un máximo de 50 caracteres.
    if ((in_valor_nombre.trim() == '' || in_valor_apellido.trim() == '') || (in_valor_nombre == null || in_valor_apellido.length == null)) {
        console.log("ERROR : Nombre/Apellido null o ''")
        mensaje = mensaje + "Ingrese un nombre y un apellido válido.\n"
    }
    if(in_valor_nombre.length > 50 || in_valor_apellido.length > 50){
        console.log("ERROR : Nombre/Apellido con mas de 50 carácteres")
        mensaje = mensaje + "Ingrese un nombre y un apellido con menos de 50 carácteres.\n"
    }


    // La edad no debe ser negativa pero también validar que no sea menor de edad.
    if (isNaN(in_valor_edad)) { 
        console.log("ERROR : Edad no es un número.");
        mensaje = mensaje + "La edad debe ser un número válido.\n";
    } else if (in_valor_edad < 0) { 
        console.log("ERROR : Edad negativa.");
        mensaje = mensaje + "La edad no puede ser negativa.\n";
    } else if (in_valor_edad < 18) { 
        console.log("ERROR : Menor de edad.");
        mensaje = mensaje + "Debe ser mayor de edad (18 años o más).\n";
    }


    // La altura no puede ser negativa y no puede ser mayor a 230 (cm).
    if (in_valor_altura > 230 || in_valor_altura <= 0 || isNaN(in_valor_altura)) {
        console.log("ERROR : Altura null, negativa o mayor a 230cm")
        mensaje = mensaje + "Ingrese una altura válida.\n"
    }
    
    //  El correo electrónico no puede estar vacío y debe incluir el ‘@’.
    if(!in_valor_correo.includes('@') || in_valor_correo == '') {
        console.log("ERROR : Correo nulo o sin '@'")
        mensaje = mensaje + "Ingrese un valor de correo válido.\n"
    }

    //----------------- en caso de ser validos los cracteres -----------------------//
    console.log("Llega hasta aqui . . .")
    let valor = false
    if(mensaje.trim() === ""){
        console.log("INFO : Mensaje correcto!")
        mensaje = "¡Ingreso exitosamente los datos!"
        valor = true
    }

    // Creo el elemento p en el html y añado el text generado con los resultados
    const nuevo_parrafo = document.createElement("p")
    nuevo_parrafo.innerText = mensaje
    section_element.appendChild(nuevo_parrafo)
    nuevo_parrafo.id = 'mensaje_parrafo'
    
    if(valor){
        console.log("INFO :Se aplican propiedades de 'éxito'")
        nuevo_parrafo.className = "mensaje_exito"
    }
    else{
        console.log("INFO :Se aplican propiedades de 'error'")
        nuevo_parrafo.className = "mensaje_error"
    }
})