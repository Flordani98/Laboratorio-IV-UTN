let numero2 = 20;
const numero = 50;

console.log(typeof numero); //para saber el tipo de dato de la instancia

console.log(Number.isFinite(12));

//si un numero es muy grande, se dice que es mas "inseguro"
console.log(Number.isSafeInteger(5));

let simbolo1 = Symbol("Soy un simbolo"); // Es un dato primitivo para generar valores unicos, un simbolo NO es igual a otro
let simbolo2 = Symbol("Soy un simbolo");
let simbolo3 = Symbol.for("Soy un simbolo");
let simbolo4 = Symbol.for("Soy un simbolo");
console.log(simbolo1 == simbolo2); //retorna FALSE
console.log(simbolo3 == simbolo4); //si los creo con el .for, si reconoce que son iguales si el contenido es el mismo 
//retorna TRUE 
//Los simbolos se utilizan para declarar atributos UNICOS, es como una key-value (maps)

//para acceder al "contenido" del simbolo(en realidad es una descripción del simbolo):
console.log(Symbol.keyFor(simbolo1)); 
let nombre = Symbol.for("Identifico el nombre de la personau");

let obj = {};

obj[nombre] = "Juan";
console.log(obj); 

//Diferencia entre null y undefined
//undefined: variable no declarada
//null: variable vacia

//NaN
let numero1 = 0/0;
let texto = "hola";
let num = parseInt(texto);
console.log(num);

//literal templates /forma literal de escribir un String

let texto2 = "Hola " + "soy " + "Agustin";

let nombre2 = "Flor"
let texto3 = `Hola soy ${nombre2}`;
console.log(texto3);

//unicode : similar al codigo ascii, codigo único

let z = "\u{007a}";

//Métodos de String

let cadena = "Cadena de prueba";
console.log(cadena.concat(" ---- ")) //retorna el string con la concatenación, pero no la modifica, lo copia
console.log(cadena.startsWith("Ca")); //retorna booleano, verifica si empieza con el string ingresado por parámetro
console.log(cadena.endsWith("Ca"));
console.log(cadena.includes("de"));

console.log(cadena.indexOf("de"));
console.log(cadena.lastIndexOf("de"));

console.log(cadena.replace(cadena, "alala"));
console.log(cadena.split(" ")); //importante, me lo separa segun el string que le pase, es decir el string cadena me lo 
//separo en otro 3 string: "cadena" "de" "prueba"

console.log(cadena.substring(0,6));

//Arreglos

//existen 3 tipos de metodos de arreglos
//-> mutadores: los que sacan, agregan, elementos
//-> accesores: ej. join, slice,concat, no modifican el arreglo original sino que devuelven un arreglo modificado(copia)
//-> 
let comidas = ["Pizza", "Hamburguesa","Milanesa", "Pancho", "Ensalada", "Polenta"]
console.log(comidas[0]);
console.log(comidas.length);
console.log(comidas.indexOf("Pancho"));
comidas.push("Ñoquis");
comidas.unshift("Fideos"); //agrega un dato al principio del arreglo
comidas.pop();//eliminar el ultimo elemento
comidas.shift(); //elimina el primero

comidas.sort();
comidas.reverse();

comidas.splice(0, 2); //el primer parametro es el indice, desde donde se va a eliminar, el segundo parametro indica la
//cantidad de elementos que se van a eliminar

let cadena4 = comidas.join(";"); //une los elementos en un string con el caracter que le pasemos por parametro, 
//en medio de los elementos
console.log(comidas);

for(const comida of comidas){ //recorrer con el valor
    console.log(comida);
}
for(const i in comidas){   //recorrer con el indice, devuelve el indice
    console.log(comidas[i]);
}

//Destructuracion de arreglos

let comidas2 = ["Pizza", "Hamburguesa","Milanesa"];

//const [a, b, c] = comidas;
//const [a, ,b] = comidas; //para tomar el primer y el ultimo valor y no el del medio 
const [a, ...resto] = comidas; //para solo agarrar el primer elemento y los demas dejarlo en un arreglo

console.log(a);
console.log(resto);

//set: tipo de estructura de datos (como el arreglo), para evitar elementos repetidos
const set = new Set([1,2, "hola", "chau", true, 2,"hola"]);//cuando se declara, borra los repetidos
console.log(set.size);
set.add(2);
console.log(set.has(2)); //retorna true o false si es q tiene ese dato en el set
//pasar un set a un arreglo
let setFromArray = Array.from(set) //metodo accesor
setFromArray.push("hola");
console.log(setFromArray);

//map 
const map = new Map();
map.set("Nombre", "Nahuel");
console.log(map.get("Nombre"));
map.size;
map.has("Nombre"); //si la clave existe retorna un booleano

let mapFromArray = Array.from(map);
console.log(mapFromArray);

//funciones

function funcion(a){
    console.log(a);
}

funcion("JavaScript");

//funciones anonimas, se guardan en variables, para poder utilizar los callbacks
//callbacks: funcion que recibe como parametro otra funcion

//no tiene nombre por lo tanto lo almaceno en una variable para poder llamarla
const miFuncion = function(a){console.log(a)}
miFuncion("mi funcion anonima");

//arrow functions
const miFuncion2 = (a) => console.log(a);

const miFuncion3 = (a, b) => {
    console.log(a);
    console.log(b);
};

const add = (a = 0, b = 0) => a + b;