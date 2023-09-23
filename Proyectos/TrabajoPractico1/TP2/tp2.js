/*1- Crear un objeto y mostrar propiedades
Crea un objeto que represente a una persona con propiedades como nombre, edad y
profesión. Luego, muestra estas propiedades utilizando alert. */

//Object Literals
const person = {
    name: "Flor",
    age: 25,
    profession: "Programmer"
};

//With constructor function
function Person1(name, age, profession){
    this.name = name;
    this.age = age;
    this.profession = profession;
}

const person2 = new Person1("Eze", 25, "Programmer")

// alert(`Hi, my name is ${person.name}, I am ${person.age} years old and I am a ${person.profession}.`);
// alert(`Hi, my name is ${person2.name}, I am ${person2.age} years old and I am a ${person2.profession}.`);

//----------------------------------------------------------------------------------------------------------------

/*2- Clase de Libro
Crea una clase llamada "Libro" que tenga propiedades como título, autor y año de
publicación. Crea un método que muestre la información del libro en un formato
legible y utiliza prompts para obtener la información del usuario. Luego, crea una
instancia de la clase y muestra la información utilizando alert.
 */

class Book{
    constructor(title, author, yearPublication){
        this.title = title;
        this.author = author;
        this.yearPublication = yearPublication;
    }
    
    showBook(){
        alert(`My title: ${this.title}\nAuthor: ${this.author}\nYear of Publication: ${this.yearPublication}`)
    }
}

const book1 = new Book("Music of my heart", "Martha", "2014");
// book1.showBook();

// const userTitle = prompt("Enter the title");
// const userAuthor = prompt("Enter the author");
// const userYearPublication = prompt("Enter the year of publication");

// const book2 = new Book(userTitle, userAuthor, userYearPublication);
// book2.showBook();

//----------------------------------------------------------------------------------------------------------------

/*3- Crear una Clase y sus Métodos
Utiliza la clase generada en el punto 1 añadiendo los siguientes metodos:
constructor(nombre, edad, profesión): Inicializa el nombre, la edad de la persona y su
profesión.
saludar(): Muestra un saludo en un alert que incluya el nombre y la edad de la
persona.
Luego, crea una instancia de la clase Persona utilizando los datos proporcionados
por el usuario a través de prompts y muestra el saludo utilizando el método
saludar().
 */
class Person{
    name = "no name";
    age = 0;
    profession = "no profession"
    constructor(name, age, profession){
        this.name = name;
        this.age = age;
        this.profession = profession;

    }
    
    greet(){
        alert(`Hi, my name is ${this.name}, I am ${this.age} years old`);
    }
}

// const userName = prompt("Enter your name");
// const userAge = prompt("Enter your age");
// const userProfession = prompt("Enter your profession");

// const person3 = new Person(userName, userAge, userProfession);
// person3.greet();

//----------------------------------------------------------------------------------------------------------------

/*4- Herencia con Superhéroes
Crea una clase base llamada Superheroe con los siguientes métodos:
constructor(nombre, poder): Inicializa el nombre y el poder del superhéroe.
presentarse(): Muestra un alert con el nombre del superhéroe y su poder.
Crea una clase que herede de Superheroe llamada Villano con un método adicional:
constructor(nombre, poder, plan): Inicializa el nombre, poder y plan del villano.
amenazar(): Muestra un alert con el plan del villano.
Crea instancias de ambas clases utilizando datos ingresados por el usuario a través
de prompts y muestra sus presentaciones y amenazas respectivas. */

class Superheroe{
    _name = "no name"; //! No se puede dar un valor por defecto de esta manera
    _power = "no power";

    constructor(name = "no name", power= "no power"){
        this._name = name;
        this._power = power;
    }

    introduceOneself(){
        alert(`Hi, my name is ${this.name} and my superpower is ${this.power}`);
    }

    get name(){return this._name;}
    set name(name){this._name = name;}

    get power(){return this._power;}
    set power(power){this._power = power;}

}

class Villano extends Superheroe{
    plan = "no plan";
    constructor(name, power, plan = "no plan"){
        super(name, power);
        this.plan = plan;
    }

    threaten(){
        alert(`My plan is ${this.plan}`)
    }


}

// const villanoName = prompt("Enter your villain name");
// const villanoPower = prompt("Enter your power");
// const villanoPlan = prompt("Enter your villain plan");

// const superheroeName = prompt("Enter your super name");
// const superheroePower = prompt("Enter your power");

// const villano1 = new Villano(villanoName, villanoPower, villanoPlan);
// villano1.introduceOneself();
// villano1.threaten();

// const superheroe = new Superheroe(superheroeName, superheroePower);
// superheroe.introduceOneself();

//----------------------------------------------------------------------------------------------------------------


/*5- Gestión de Libros
Utiliza la clase generada en el punto 1 añadiendo los siguientes metodos:
constructor(titulo, autor, año de publicación): Inicializa el título, el autor del libro y el
año en se lanzó el libro.
mostrarDetalles(): Muestra un alert con los detalles del libro.
Crea una clase que herede de Libro llamada LibroDigital con un método adicional:
constructor(titulo, autor, año de publicación, formato): Inicializa el título, autor, año
en que lanzó y formato del libro digital.
mostrarFormato(): Muestra un alert con el formato del libro digital.
Permite al usuario ingresar información sobre un libro físico y un libro digital a través
de prompts y muestra sus detalles y formatos respectivos utilizando los métodos
correspondientes.
 */

class DigitalBook extends Book{
    constructor(name, author, yearPublication, format = "without format"){
        super(name, author, yearPublication);
        this.format = format;
    }

    showFormat(){
        alert(`Formato del libro digital: ${this.format}`)
    }

}
// const digitalName = prompt("Enter the name");
// const digitalAuthor = prompt("Enter the author");
// const digitalYear = prompt("Enter the year of publication");
// const digitalFormat = prompt("Enter the format");
// const book3 = new DigitalBook(digitalName, digitalAuthor, digitalYear, digitalFormat);

// console.log(book3);

//----------------------------------------------------------------------------------------------------------------


/*6- Map para nombres en mayúsculas
Crea un array de nombres y utiliza el método map para convertir todos los nombres
a mayúsculas. Luego, muestra los nombres en mayúsculas utilizando alert.
 */
const names = ["Maria", "jorrge", "Pedro", "Juan", "Sofia"];
const namesUppercase = names.map((nombre) =>{
    return nombre.toUpperCase();
})

// alert(namesUppercase);

//----------------------------------------------------------------------------------------------------------------


/*7- Encontrar un número en un array
Crea un array de números y utiliza el método find para buscar un número específico
ingresado por el usuario utilizando un prompt. Si el número se encuentra, muestra un
mensaje utilizando alert.
 */

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// let sought = parseInt(prompt("Ingrese un numero a buscar, entre el 1 y el 15:"));
// let found = numbers.find((number) =>{
//     return number === sought;
// })

// if(Number.isInteger(found)){
//     alert("Se encontro el numero buscado: " + found);
// }

//----------------------------------------------------------------------------------------------------------------


/*8- Filtrar números pares
Crea un array de números y utiliza el método filter para obtener un nuevo array que
contenga solo los números pares. Muestra los números pares utilizando alert. */

const pairNumbers = numbers.filter((number) =>{
    return number % 2 == 0;
})

// alert(pairNumbers);