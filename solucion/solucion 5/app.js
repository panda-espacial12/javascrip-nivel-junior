const contendor =document.querySelector(".flex_container");
let contador = 0;
function crearllave(nombre,modelo,precio){
    contador++;
    Img="<'img src='llave.png'>";
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3 id>${modelo}</h3>`;
    precio = `<p>precio: <b>$${precio}</b></p>`;
    return[img,nombre,modelo,precio];
}
let div = document.createElement(".DIV")
div.classList.add("flex-item")
form (var i = 0; i < 20; i++) {
     let modeloramdom =mat.ramdom()*1000;
     let   precioramdom =mat.ramdom()*10+30;
     let llave =createllave(`llave ${i}`,'modelo ${modeloramdom}',$precioramdom)
     contenedor.innerHTML += llave   
    }