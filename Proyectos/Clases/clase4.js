//* Promesas: una promesa es un objeto, que representa la resolución o el fracaso de una operacion asincronica
//* representa un valor  o una operación q puede estar disponible actualmente o en el futuro
//* tiene 3 estados: resuelto, pendiente y rechazado
//* es una MICROTAREA

/*
* el constructor de la promesa recibe un callback
* ese callback a su vez recibe 2 callback mas
* De estos 2 callback que se pasan por parametro, el primero es el resuelto y el 2do es el rechazado
* la primer funcion se va a ejecutar cuando se resuelve, y el 2do cuando se rechaza
*/
let promesa = new Promise(function(resolve, reject){ 

    let condition = true;

    if(condition){
        resolve("Se resolvió correctamente") //solo se le puede pasar un(1) parametro a resolve
    }
    else{
        reject("Ocurrio un error");
    }
});

promesa.then(exito => console.log(exito)) //*pasamos por parametro la funcion resolve, la funcion que se ejecute cuando se resuelve la promesa
.catch(error => console.log(error)); //* esta es la funcion para el reject
/*
* Cuando yo hago promesa.then estoy dandole cuerpo a la funcion resolve y en el catch le doy cuerpo a la funcion reject
 Cuando consumamos una API el resolve nos va a retornar un objeto o una lista de objetos
*/

let promesa2 = new Promise((resolve) =>{
    console.log("Inicio de la promesa");
    resolve("Promesa sin timeout");
    // setTimeout(() => resolve("Promesa con timeout"), 3000) //*aca se resuelve la promesa con un delay de 3seg.
    console.log("Fin de la promesa");
})

promesa2.then(mensaje => console.log(mensaje)); //como aca no tengo un reject, solamente llamo al then

let promesa3 = new Promise((aceptado, rechazado)=>{
    let numero = 5;

    if(numero % 2 === 0){
        aceptado("El número es par");

    }else{
        rechazado("El número es impar");
    }
})


promesa3.then(result => console.log(result)).catch(error => console.log("Surgio un error" + error));

/*
*Es una buena practica utilizar el catch, para el software se puede recuperar de un determinado evento
*/
/*
* async: (no bloqueante) toda funcion asincronica retorna una promesa 
* Va a retornar la promesa RESUELTA
*Cuando uso ASYNC no hace falta poner un RESOLVE

*Formas distintas de manejar una promesa
*/

async function miFuncion(){
    // resolve("Saludos desde mi funcion async con promesa"); //no hace falta el resolve
    return "Saludos desde mi funcion async con promesa" //*el retorno, es el parametro que recibe el metodo THEN
}

miFuncion().then(valor => console.log(valor)); //* estoy llamando a then desde una funcion, porq cuando hago una 
//*funcion asincrona implicitamente le estoy diciendo q voy a retornar una promesa


//* Si yo tengo distintas jerarquias de ejecucion de tareas, a veces a mi me interesa esperar que algo se resuelva
//* para seguir con otras cosas, por ej.: tengo que esperar q esa promesa me devuelve un recurso y sino espero
//* se va a seguir ejecutando, ya que es no bloqueante, entonces necesito que algo me haga ESPERAR que se resuelva algo

//* Await: espera a q se resuelva la promesa

async function funcionAsyncronaAwait(){

    let promesa = new Promise(resolve => {
        resolve("Promesa con await");
    })

    let mensaje = await promesa;

    console.log(mensaje)
}
funcionAsyncronaAwait(); //*Porq no tengo que usar el then, solo llamo a esta funcion y ya me imprime "Promesa con await"??
//*Await: manda a llamar a la promesa y espera que se resuelva, por eso no se usa el then
//* cuando usamos el await nos ahorramos un then, el await es como un then
//* si se resuelve, retorno algo
//* para atrapar el error utilizaremos el try-catch


//*utilizar promesas de forma concurrente(al mismo tiempo)
async function asynConcurrente(){

    let promesa1 = new Promise(resolve =>{
        setTimeout(()=>resolve("Hello ", 4000));
    });

    let promesa2 = new Promise(resolve =>{
        setTimeout(()=>resolve("World!"), 2000);
    })

    const[dato, dato2] = await Promise.all([promesa1, promesa2]);
    console.log(dato + dato2);
}

// asynConcurrente();

//*API: son mecanismos que permite a 2 componentes de sotfwate comunicarse entre si, a traves de un conjunto de 
//*definiciones o protocolos
//*El API es una interfaz, que conecta 2 extremos mediante un contrato, en el cual cada uno debe cumplir
//*Son aplicaciones que separa un poco la logica entre el fronted y el backend.
//* cliente -> servidor(API) -> backend
//*         <-               <-

//*una API permite conectar la informacion o funcionalidades con los requerimientos de una aplicación

//*hay distintos tipos de API, nosotros vamos a ver la API REST: sus protocolos de solicitud
//*son a través de los protocolos HTTP

//*verbos http que se utilizan para realizar peticiones:

//*GET: para obtener información
//*HEAD: funciona igual que el get pero se utiliza para testear
//*POST: yo quiero crear un recurso nuevo, crear un usuario
//*PUT:
//*PATCH:
