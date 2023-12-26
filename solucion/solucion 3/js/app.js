class  Celular {
    constructor(color, peso, rdp, rdc, ram) {
        this.color = color;
        this.peso = peso;
        this.rdp = rdp;
        this.ResolucionDeCamara = rdc;
        this.ram = ram;
        this.encendido = false;

    }
    precionarBotonEncendido() {
        if (this.encendido == false) {
            alert("celular apagado");
            this.encendido = true;
        } else {
            ElementInternals("el Celular esta Encendido")
            this.encendido = false;
       }
    }

    reiniciar(){
        if (this.encendido == true){
            alert("reiniciando celular");
        }else{
            alert("el Celular Esta Apagado");
        }
    }
    tomarFotos(){
        alert(`foto tomada en una Resolución de:${this.ResolucionDeCamara}`)
    }
    grabarVideo(){
        alert(`grabando video en una Resolución de:${this.ResolucionDeCamara}`)
    }
    mobileinfo(){
       return '
       color:<b>${this.color}</b>
       peso: <b>${this.peso}</b><br>
       tamaño:<b>${this.}</b><br>
       ResolucionDeCamara:<b>${this.ResolucionDeCamara}</b><br>
       Resolucióndevideo:<b>${this.ResolucionDeCamara}</b><br>
       memoriaram:<b>${this.ram}</b><br>
       ';
    }
}

celular1 = new celular("rojo","100g",5,"hd","1GB")
celular2 = new celular("negro","155g",5.4,"full hd","2GB")
celular3 = new celular("rojo","156g",5.9,"full hd","2GB")




//celular1.precionarBotonEncendido();
//celular1.tomarFotos();
//celular1.grabarVideo();
//celular1.reiniciar();
//celular1.precionarBotonEncendido();