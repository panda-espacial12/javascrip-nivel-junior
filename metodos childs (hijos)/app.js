const contenedor = document.querySelector(".contenedor");

const parrafo = document.createElement("p").innerHTML = "parrafo";
const h2_nuevo = document.createElement("h2");
h2_nuevo.innerHTML = ("titulo");

h2_antiguo = document.querySelector(".h2");
//replaceChild replaza uno por otro
//contenedor =document.replaceChild(h2_antiguo,h2_nuevo)


let respuesta = contenedor.hasChildNodes();

if (respuesta) {
    document.write("el elemento  tiene hijos");
} else {
    document.write("el elemento tiene hijos")
}
