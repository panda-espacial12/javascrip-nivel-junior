let free = false;

const validarCliente = (time) => {
    let edad = prompt("cual es tu edad");
    if (edad > 18) {
        if (time >= 2 && time < 7 && free == false) {
            alert("podes pasar gratis perry");
            free = true;
        } else {
            alert('Podes pasar Pero tenes que Pagar la Entrada');
        }
    } else {
        alert("no sos mayor de edad y me caes mal ");

    } 
}


validarCliente(23);