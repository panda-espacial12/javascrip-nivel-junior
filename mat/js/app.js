/*
numero = Math.sqrt(25); //el sqrt lo que hace es mostrar la raiz cuadrada del numero indicado
document.write(numero);
/*

/*
numero = Math.cbrt(25); //el sbrt lo que hace es mostrar la raiz cubica
document.write(numero);
*/

/*
numero = math.max(25,103,240,105,199); //el max lo que hace es mostrar el numero mas grande
document.write(numero);
*/

/*
numero = Math.min(25,103,240,105,199); //el min lo que hace es mostrar el numero mas pequeño
document.write(numero);
*/

/*
numero = Math.random()*100;
numero = Math.floor(2.968); //el floor lo que hace es redondear el numero
document.write(numero);
*/

for (var i = 0; i <10000000; i++){ //esto genera un numero
    let numero =Math.random()*99;  //   entre 1 y 10000 
    numero = Math.floor(numero+1);
    document.write(numero +"<br>")
}






