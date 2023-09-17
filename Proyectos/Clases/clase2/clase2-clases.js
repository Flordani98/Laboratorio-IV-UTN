class Persona{
    static contadorPersonas = 0;
    _pais = "Argentina";
    constructor(nombre, edad, dni){
        //los atributos se declaran solo una vez, dentro del constructor
        //se los puede poner fuera si es que al atributo se le quiere dar un valor por defecto o si el atributo es
        //estatico
        this._nombre = nombre;
        this._edad = edad;
        this._dni = dni;        
        Persona.contadorPersonas++;
    }

    get nombre(){return this._nombre;}
    set nombre(nombre){this._nombre = nombre}

    datos(){return `${this._nombre}, ${this._edad}, ${this._dni}`};

    toString(){return this.datos}

    static saludar(){console.log("Hola soy una persona")}

    equals(otraPersona){
        return this._dni = otraPersona.dni;
    }

}


Persona.saludar();
let persona = new Persona("Agustin", 25, "12345678");

let persona2 = new Persona("Agustin", 35, "12345678");
// console.log(persona.equals(persona2));
console.log(persona2);
Persona.ciudad ="Mar del plata" //Como llamo desde la clase, me va a crear un atributo estatico

class Empleado extends Persona{ //para heredar una clase
    constructor(nombre, edad, dni, sueldo){
        super(nombre, edad, dni, sueldo)
        this._sueldo = sueldo;
    }

    get sueldo(){return this._sueldo}
    set sueldo(sueldo){this._sueldo = sueldo}

    datos(){return `${super.datos}, ${this._sueldo}`};

    toString(){return this.datos()}
}

let empleado = new Empleado("Tomas", 22, "12345678", 150000);
console.log(empleado);

if(empleado instanceof Empleado){
    console.log("Es una instancia de empleado")
}

if(empleado instanceof Persona){
    console.log("Es una instancia porque es hija de Persona")
}

