console.log("Task 1");
setTimeout(() =>{console.log("Task 2")}, 0);

Promise.resolve().then(()=>{
    console.log("MicroTask 1");
})

console.log("Task 3");

Promise.resolve().then(()=>{
    console.log("MicroTask 2");
})

/*Cuando JS se ejecuta en el navegador se despliega un mecanismo  extra llamado EventLoop, 
para manejar las funciones no bloqueantes

->al EventLoop lo compone varias partes:
•La web API: metodos o funciones que tiene el mismo navegador que se lo inyecta a JS: setTimeout Promise setInterval
una API serian como acciones que puede ejecutar el navegador y añadir ala callstack
•La callstack
•La task QUEUE: cola de tareas
•El render pipeline: es una parte del eventLoop que controla el tiempo cuando se actualiza y
 como se renderiza la pagina(ese renderizado se llama frame)
•El eventLoop: comprueba si hay tareas pendientes, se fija el tiempo de ejecucion que dicto el render pipeline, yi
si no hay una tarea se mantiene en espera


Todo esto es para mejorar al rendimiento

Dentro de las WEB APIS tenemos 2 tipos de tareas:
Las tareas comunes y las microtareas

Una tarea es mas pesada que una microtarea, como setTimeout setInterval

Una tarea es una accion pesada que debe ejecutarse en el navegador y debe ordenarse por prioridades

La primer tarea pesada es leer codigo de js y la 2da es lo de la web api, el DOM y el fetch son tambien pertenecientes
a la web

La microtarea es especifica de las web API son mas sencillas, tienen mayor prioridad porque son mas livianas y
se ejecutan entre tareas, varias cosas pueden desencadenar una microtarea, un async, un await, callbacks, promesas

Hay prioridades:

1.Tareas de JavaScript
2.Microtareas
3.Tareas de la WEB API : setTimeout, setInterval, DOM, llamadas al fetch

Las tareas de JS van directo a la CallStack, se ejecutan primero
En las microtareas y tareas de la WEB API van a la task QUEUE, luego se renderizan (en el render pipeline) y luego 
pasan por el eventLoop y por ultimo a la CallStack

y a medida que la CallStack recibe tareas las va ejecutando
*/