/*Prototipo
Es la base de donde se contruye algo mas
Antes del 2015 se utilizaban los prototipos como un mecanismo de herencia, aun se utilizan en los frameworks
 como angular y react

*/
//las funciones tambien son un tipo de dato en JS 
// En JS vanilla no existe que un atributo sea privado o no, entonces utilizaremos una convencion como en phyton 
// para simular el private utilizamos el "_" al principio del atributo
// Todos los objetos heredan del prototipo object

const objeto = {
    _nombre: "flor",
    _apellido: "mamani",

    mascota:{
        nombre: "Scooby",
        edad:5
    },
    items: [
        {id: 1, nombre: "item 1", price: 30},
        {id: 2, nombre: "item 2", price: 50},
        {id: 3, nombre: "item 3", price: 60}
    ],

    saludar: function(){
        console.log("Hola soy " + this._nombre);
    },

    set nombre(nuevoNombre){
        this._nombre = nuevoNombre;
        console.log("Desde el set")
    },

    get nombre(){
        return this._nombre + " " + this._apellido;
    }

    
}


/* console.log(objeto);
console.log(objeto.saludar());
 */

//#region prototipos
// Funcion constructora prototipica
//creo el constructor con los atributos
function Animal(nombre){
   this.nombre = nombre;
}

/*Prototype es una propiedad de mi objeto que funciona como mecanismo de herencia y me indica todos los prototipos
anteriores hasta llegar al mio*/
// creo un metodo
Animal.prototype.saludar = function(){
    console.log("Hola soy " + this.nombre);
}

// Cuando creamos un objeto el prototype le da las priopiedades del object, entonces cuando hacemos clase.prototype.saludar
//le indicamos al prototipo que va haber un metodo más en el, estamos modificando el prototipo

// Creo una instancia

const perro = new Animal("Scooby");
// console.log(perro);

function Gato(nombre, color){
    Animal.call(this, nombre); //call: metodo que me permite acceder a los metodos de otro objeto
    //this: hace referencia a las instancias de gato, cada instancia de gato va a usar el metodo call
// el primer parametro del objeto call : el objeto que va aplicar esa funcion
//el 2do parametrom, vienen los parametros del constructor padre
    this.color = color;
}

//para establecer que gato es una instancia mas de animal
Gato.prototype = Object.create(Animal.prototype); //Gato es parte de la instancia de Animal, gato "herede" de Animal

Gato.prototype.maullar = function(){
    console.log("Miau");
}

//Instancio un objeto gato
const gato = new Gato("Coco", "Atrigada");

// console.log(gato);

//#endregion


console.log(objeto.nombre); //llamamos ala funcion get nombre

objeto.nombre = "Rocio"; //llamamos al set

console.log(objeto.nombre); 
console.log(objeto["_nombre"]); //otra forma de llamar al valor de un atributo
objeto.saludar();

objeto.mascota.nombre = "Shaggy";

console.log(objeto.mascota);

const objeto2 = objeto; //objeto2 y objeto apuntan a la misma direccion de memoria
//, por lo tanto cualquier cambio q le haga a objeto2 se va a realizar 
//a objeto y me va a retornar que  son iguales
objeto2.nombre = "Florencia";
console.log(objeto2 == objeto); //true

console.log(objeto2 === objeto);//true

//para realizar una copia identica:
// metodo spread ... en los parametros
const objeto3 = {... objeto} //se realiza una copia de objeto llamada objeto3 con diferentes direccion de memoria
//ya al tener distinta direccion de memoria son distintos los objetos
console.log(objeto3 == objeto); //false 
console.log(objeto3 === objeto); //false


//desestructuracion de objetos
//creo 2 variables y le asigno los valores que tengan los atributos con MISMO NOMBRE en el objeto
const {_nombre, _apellido} = objeto;
console.log(_nombre);
console.log(_apellido);
//formas de agregar un atributo que no existe
//sino existe el atributo me lo crea
objeto.ciudad = "Pinamar" 
objeto["edad"] = 25;


console.log(objeto);

for(let atributo in objeto){
    console.log("\n Nombre del atributo: " + atributo);
    console.log("\n Valor del atributo: " + objeto[atributo]);
}

//eliminar un atributo de un objeto
delete objeto.ciudad;

let objetoArray = Object.values(objeto); //te crea un array con los atributos del objeto
console.log(objetoArray); 

//funcion constructora

function Persona(nombre, apellido, dni){
    this.nombre = nombre; //con el this identifica q esta es una funcion constructora
    this.apellido = apellido;
    this.dni = dni;
    this.saludar = function(){
        console.log("Hola soy " + this.nombre)
    }
}

const persona1 = new Persona("Adrian", "Mamani", 56788987);








