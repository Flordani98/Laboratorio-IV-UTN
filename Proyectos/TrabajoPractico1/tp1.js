

function isNumber(dato){ /* Comentar bloque de codigo shift + alt + A */
    let resp = true;
    if(isNaN(dato) || dato == undefined || dato == null){
        resp = false;
    }
    return resp;
}

function validaEdad(edad){
    let boolean = false;
    if(edad>=0 && edad<110){
        boolean = true;
    }
    return boolean;
}


/*
1- Recibir una edad y mostrar si es mayor de edad o no.*/

//*Funcion que retorna un booleano
// const esMayor = (edad = 0) => {
//     let resp = false;
//     if(edad>=18 && edad<110){
//         resp = true;
//     }else if(!isNumber(edad)){
//         alert("ingrese un dato númerico");
//     }
//     return resp;
// }
// TODO falta refactorizar esta funcion ya que añadi el metodo "validaEdad"
const esMayor = (edad = 0) => {
    let resp = -1;

    if(validaEdad(edad)){
        if(edad>=18 && edad<110){
            resp = 1;
        }else if(!isNumber(edad)){
            alert("ingrese un dato númerico");
        }
    }
    return resp;
}

//let undfn; //probando undefined, declaro una variable y no la inicializo para
//luego pasarlo como parametro al metodo esMayor, NO funciona si en el parametro
//de la funcion lo inicializo primero, por ej.: (edad = 0)
// let result = esMayor(undfn);
// console.log(result);




/*
2- Recibir una nota y mostrar su calificación correspondiente.
● 0-3: Muy deficiente
● 3-5: Insuficiente
● 5-6: Suficiente
● 6-7: Bien
● 7-9: Notable
● 9-10: Sobresaliente */ 

const calificaNota = (nota) =>{
    let resp;
    const calificacion  = new Map();
    calificacion.set(0, "Muy deficiente");
    calificacion.set(1, "Muy deficiente");
    calificacion.set(2, "Muy deficiente");
    calificacion.set(3, "Insuficiente");
    calificacion.set(4, "Insuficiente");
    calificacion.set(5, "Suficiente")
    calificacion.set(6, "Bien")
    calificacion.set(7, "Notable")
    calificacion.set(8, "Notable")
    calificacion.set(9, "Sobresaliente")
    calificacion.set(10, "Sobresaliente")

    if(nota >=0 && nota<=10){
        resp = calificacion.get(nota);
    }else{
        resp = "Por favor, ingrese un numero valido, entre 1 y 10"
    }

    return resp;
}

// console.log(calificaNota(1));

function Persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
}


/*
3- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el
nombre del mayor.*/
let devuelvePersonaMayor = (nombre1, edad1, nombre2, edad2, nombre3, edad3) => {
    let arrPersonas;
    let personaMayor;

    arrPersonas = [new Persona(nombre1, edad1), new Persona(nombre2, edad2), new Persona(nombre3, edad3)];    
    personaMayor = arrPersonas[0];

    for(let i = 0; i<arrPersonas.length-1; i++){
        if(personaMayor.edad < arrPersonas[i+1].edad){
            personaMayor = arrPersonas[i+1];
            console.log(personaMayor)
        }
        
    }
    return personaMayor;
}



// console.log(devuelvePersonaMayor("eze", 25, "flor", 15, "adri", 55));

/*
4- Realiza un script que pida un texto y lo muestre en mayúsculas.
*/
let cconvertTextToUppercase = (text) =>{
    return text.toUpperCase();
}
/*5- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :
1
22
333
4444
55555*/

const writePyramid = (firstNumber, lastNumber) => {
    // const numero = firstNumber.toString();
    const numero = "";
    for(let i= firstNumber-1; i<lastNumber; i++){
        console.log(numero.padStart(i+1, i+1));
    }
}


// writePyramid(1, 30);

/*
6- Realiza un script que escriba los números del 1 al 500, que indique cuáles son
múltiplos de 4 y de 9.*/
const multiples4and9 = () =>{
    for(let i=0; i<500; i++){
        // console.log(i);
        //que cuando divida el numero por 4 y 9 el resto sea 0
        if(((i+1) % 4 == 0) && ((i+1) % 9 == 0)){
            console.log(i+1);
        }
    }
}

// multiples4and9();
/*

7- Realiza un script que pida números hasta que se ingrese 0. Si no es un número
deberá indicarse con un «alert» y seguir pidiendo. Al salir con 0 deberá indicarse la
suma total de los números introducidos.*/



/*
8- Realiza un script que pida cadenas de texto hasta que se ingrese “fin”. Al salir
con “fin” deben mostrarse todas las cadenas concatenadas con un guión (-).*/
 /*
9- Realiza un script que cuente el número de vocales que tiene un texto.*/

const countVowelsString = (text) =>{
    let cont = 0;
    text = text.toLowerCase();

    for(let i = 0; i<text.length; i++){
        if(text[i] == "a" || text[i] == "e" || text[i] == "i" || text[i] == "o" || text[i] == "u") {
            cont++;
        }
    }

    return cont;
}

// console.log(countVowelsString("HolaAaaaa"));
/*

 

10- Realiza un script que pida una cadena de texto y la devuelva al revés.
Ej: si tecleo “buenas” deberá mostrar “saneub”*/

const upsideDownText = (text) =>{
    let newText = "";
        for(let j=text.length; j>0; j--){
                newText = newText + text[j-1];
        }
    return newText;
}

// console.log(upsideDownText("Holaaa"));


 /*
11- Crea un programa que calcule el área de un círculo. Pide al usuario que ingrese
el radio y muestra el resultado.*/
 
const calculateAreaCircle = (radius = 0) =>{
    return Math.PI * (Math.pow(radius, 2));
}

// console.log(calculateAreaCircle(3));
/*

12- Crea un programa que verifique si un número ingresado por el usuario es
positivo, negativo o cero.*/

const positiveNegativeOrZero = (number) =>{
    let result = -1;
    if(number > 0){
        result = 1
    }else if(number<0){
        result = -1;
    }else{
        result = 0;
    }

    return result;
}

// console.log(positiveNegativeOrZero(-4));

 /*
13- Crea un programa que tome un arreglo de nombres ingresados por el usuario
y muestre la lista ordenada alfabéticamente.*/

const sortArrangement = (arrString) =>{
    return arrString.sort();
}

// console.log(sortArrangement(["flor", "adrian", "eze", "milagros"]))

 /*
14- Crea un programa que encuentre el número más pequeño y el más grande en
un arreglo de números ingresados por el usuario.*/

function findSmallerNumber(arrayNumbers){
    let minor = arrayNumbers[0];
    for(let i = 0; i<arrayNumbers.length-1; i++){
        if(minor > arrayNumbers[i+1]){
            minor = arrayNumbers[i+1];
        }
    }
    return minor;
}

// console.log(findSmallerNumber([2,4,1,2]));

function findLargestNumber(arrayNumbers){
    let major = arrayNumbers[0];
    for(let i = 0; i<arrayNumbers.length-1; i++){
        if(major < arrayNumbers[i+1]){
            major = arrayNumbers[i+1];
        }
        
    }
    return major;
}
// console.log(findLargestNumber([0,4,10,8]));

const findSmallestAndLargestNumber = (arrayNumbers) => {
    let smallAndLargeNumber = new Array(2);
    smallAndLargeNumber[0] = findSmallerNumber(arrayNumbers);
    smallAndLargeNumber[1] = findLargestNumber(arrayNumbers);
    // let smallAndLargeNumber = new Map();
    // smallAndLargeNumber.set("Numero mayor", 2)
    // smallAndLargeNumber.set("Numero menor", 3)
    return smallAndLargeNumber;

}

// console.log(findSmallestAndLargestNumber([10,4,1,2,0]));

 /*
15- Crea un programa que tome una frase ingresada por el usuario y cuente
cuántas palabras contiene
*/

const wordCounter = (text) =>{
    let newArray = text.split(" ");
    return newArray.length;
}

// console.log(wordCounter("Hola mundo soy florencia"));


//-------------------------------------utilizando DOM
//TODO: validar metodos cuando el input esta vacio y presiono el boton enviar
document.getElementById("btn-exercise-1").addEventListener("click", function (evento){
    let edad = document.getElementById("edad").value;
    if(esMayor(edad) == 1){
        document.getElementById("result-exercise-1").innerHTML = "Usted es mayor de edad";
    }else if(esMayor(edad) == 0){
        document.getElementById("result-exercise-1").innerHTML = "Usted es menor de edad";
        
    }else{
        document.getElementById("result-exercise-1").innerHTML = "Ingrese una edad valida";
    }
});

document.getElementById("btn-exercise-2").addEventListener("click", function(evento){
    let notaInput = document.getElementById("nota").value;
    let nota = parseInt(notaInput);
    document.getElementById("result-exercise-2").innerHTML = calificaNota(nota);

});
//TODO: falta implementar metodo para validar la edad ingresada
document.getElementById("btn-exercise-3").addEventListener("click", function(evento){
    let nombre1 = document.getElementById("name-1").value;
    let edad1 = parseInt(document.getElementById("edad-1").value);

    let nombre2 = document.getElementById("name-2").value;
    let edad2 = parseInt(document.getElementById("edad-2").value);

    let nombre3 = document.getElementById("name-3").value;
    let edad3 = parseInt(document.getElementById("edad-3").value);

    let persona = devuelvePersonaMayor(nombre1, edad1, nombre2, edad2, nombre3, edad3);
    document.getElementById("result-exercise-3").innerHTML = "La persona mayor es: " + persona.nombre + " y su edad es: " + persona.edad;
})

document.getElementById("btn-exercise-4").addEventListener("click", function(evento){
    let texto = document.getElementById("text-ex4").value;
    document.getElementById("result-exercise-4").innerHTML = cconvertTextToUppercase(texto);

})



