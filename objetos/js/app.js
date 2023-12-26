class Animal{
    constructor(especie,edad,color){//al constructor le pasamos los parametros
     this.especie = especie;
     this.edad = edad;
     this.color = color;
     this.info = `i am ${this.especie}, i have ${this.edad} Years
     i am of color ${this.color}`;
    }  
    verinfo(){
        document.write(this.info + "<br>")
    }
}

class Perro extends Animal{ //esto tendra las carateriticas de la clase animal mas las que agreges
  constructor(especie,edad,color,raza){
    super(especie,edad,color);
    this.raza =null;
  }
  set modificarraza(newName){
      this.raza = newName;     
  }
}
    /*
    ladrar(){
        if(this.especie =="perro"){
            document.write("wow <br>")
        }else{
            document.write("no puede ladrar ya que es un " + this.especie + "<br>")
        }*/
    
const Perro = new Perro("perro",5,"marron","doberman")
//const Perro = new Perro("perro",5,"red","doberman"); //cuando trabajen con objetos usar const
const gato = new Animal("gato",5,"black"); //cuando trabajen con objetos usar const
const panda = new Animal("panda",10,"white and black"); //cuando trabajen con objetos usar const

Perro.modificarraza = "Pedro";
document.write(Perro.raza)

/*
console.log(perro.info + "<br>")
document.write(gato.info + "<br>")
document.write(panda.info + "<br>")
*/
perro.verinfo();
gato.verinfo();
panda.verinfo();
