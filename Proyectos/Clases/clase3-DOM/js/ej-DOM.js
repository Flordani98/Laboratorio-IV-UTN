
// let paragraph = document.getElementById("paragraph-i"); para acceder al elemento completo
// let paragraph = document.getElementById("paragraph-i").innerHTML;  //para acceder al contenido del elemento
/* 
//para modificar el contenido del elemento
let paragraph = document.getElementById("paragraph-i");
paragraph.innerHTML = "Parrafo cambiado";

//Para obtener todos los elementos de determinada etiqueta
let parrafos = document.getElementsByTagName("p");
console.log("Hay " + parrafos.length + " elemento/s de tipo parrafo");

parrafos[0].innerHTML = "Holaaaaaaaaaaaaaaaa";

// Para  obtener elementos segun clase

let elementosRojos = document.getElementsByClassName("rojo");
console.log("Hay " + elementosRojos.length + " elemento/s rojos");


// Para obtener segun: etiqueta y clase

let parrafosRojos = document.querySelectorAll("p.rojo"); //tag p, clase rojo
console.log("Hay " + parrafosRojos.length + " parrafo/s rojo/s"); */


//#region Obtener un formulario
// let form = document.forms["formulario"];

//Para obtener el input del form mediante el name o id
// let inputUsuario = form["username"];
//para obtener el atributo del input -> type
// console.log(inputUsuario.getAttribute("type"));
//1er parametro: especifico que atributo voy a modificar, 2do parametro: le indico el valor que va a tomar ese atributo
// inputUsuario.setAttribute("type", "number");


//#endregion

//obtener el primer elemento de una clase
// let btn = document.querySelector(".btn");
// btn.setAttribute("contenteditable", "true");

//Setear un input desde cero
// let inputPrueba = document.getElementById("input-prueba");

//agregar una clase al input
// inputPrueba.className = "prueba";

//cambio el atributo type:
// inputPrueba.type = "color";
// inputPrueba.type = "file";

//le agrego un valor por defecto
// inputPrueba.value = "#00AAFF";

//al input que es tipo file, le indico que tipos de archivo puede aceptar
// inputPrueba.accept = "image/png"

// console.log(inputPrueba);


//#region Crear NODOS
// const contenedor = document.querySelector(".contenedor");
// //creamos un elemento
// const item = document.createElement("li");
// //creamos un nodo de texto
// const textItem = document.createTextNode("Item 1");
// //Le agrego un hijo al elemento q creamos(nodo texto)
// item.appendChild(textItem);
// //al contenedor q obtuvimos le agregamos el (elemento) hijo item
// contenedor.appendChild(item);

//Para crear un bloque de nodos  y enlazarlo a un elemento padre
//creamos un fragmento de documento
// const fragmento = document.createDocumentFragment();

// for(let i=2; i<5; i++){
//     const item2 = document.createElement("li");
//     const textItem2 = document.createTextNode("Item " + i);

//     item2.appendChild(textItem2);

//     fragmento.appendChild(item2);
// }

// contenedor.appendChild(fragmento);

//#endregion

// // si yo accedo un nodo es para agregar mas nodos
// const contenedorNodos = document.querySelector(".cont-nodos");
// const primerNodo = contenedorNodos.firstChild;
// console.log(primerNodo); //Aparece text por el salto de linea de p 
// const ultimoNodo = contenedorNodos.lastChild;
// console.log(ultimoNodo); //Aparece text por el salto de linea de p
// console.log(contenedorNodos.lastElementChild);

// console.log(contenedorNodos.parentElement);
// console.log(contenedorNodos.nextElementSibling);
// console.log(contenedorNodos.children);
// console.log(contenedorNodos.childNodes); //Aca se muestran TODOS los NODOS hijos de ese elemento

//#region FUNCIONES
// function changeTextColor(){
//     let paragraph = document.getElementById("paragraph-i")
//     paragraph.style.color == "black" ? paragraph.style.color = "blue" : paragraph.style.color = "black";
// } 

//#endregion
