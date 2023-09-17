/*DOM: arbol de nodos, en el que existe una jerarquia

Nodo padre: Document, todo el documento
Elemento raiz: html
Los elementos son las etiquetas q uso en html: head, body, h1, p, h2, etc
a partir de los elementos pueden surgir los atributos: class, id, type, name
Los atributos tienen valores
Lo que se encuentra dentro del elemento es el texto.

Comment tambien es un nodo de html
Documento-> tiene elementos -> tiene atributos -> tienen valores
los elementos tambien tienen -> el contenido(texto)

Metodos para seleccionar elementos

*/

/* 

Global execution context: contexto de ejecucion global
donde se genera un entorno lexico(lexical environment), donde se guardan 
todas los valores de las variables, 
en la primera fase de creación todas las variables se encuentran indefinidas(hoisting)
luego de que se crea
building: cuando se agrega un valor a this
this hace referencia al contexto de ejecución
existen 2 fases: creación y ejecución

function execution context: cuando se encuentra con una llamada a una funcion,
vuelve al principio y se crea este contexto
Un contexto de ejecucion de funcion se destruye cuando se termina de ejecutar 
la funcion

Los registros se generan al mismo tiempo que el contexto de ejecucion

callstack: pila de llamadas, donde se guardan las ejecuciones de las funciones 
llamadas

*/

/*
1. Tareas javascript 
2. Microtareas 
3. Tareas de la web api

*/
