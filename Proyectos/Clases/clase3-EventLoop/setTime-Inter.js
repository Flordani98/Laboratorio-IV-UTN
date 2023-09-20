//2 funciones importantes: setTimeOut  -  setInterval  ->son asincronicas
//se ejecutan en el mismo orden en el que estan en el codigo
//las funciones ASINCRONICAS son NO BLOQUEANTES, permite ejecutar el codigo SIN ESPERAR que se resuelva una tarea
//el orden no va como yo lo tengo escrito en el codigo
console.log("Ejecucion sincronica 1");

setTimeout(() => console.log("Ejecucion ASINCRONICA 1"), 3000); //no es de JS, 1er parametro: callback, 
// 2do parametro: cant de milisegundos q va a tardar en empezar
console.log("Ejecucion sincronica 2");

//set interval: ejecuta un codigo cada intervalo
// setInterval(() => console.log("Ejecución ASINCRONICA 2", 200));

let contador = 0;

let reloj = () =>{
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
    contador++;

    if(contador == 5){
        clearInterval(intervalo)
    }


}


let intervalo = setInterval(reloj, 1000);
