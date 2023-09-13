let promesa = new Promise(function(resolve, reject){ 

    let condition = true;

    if(condition){
        resolve("Se resolvió correctamente") //solo se le puede pasar un parametro a resolve
    }
    else{
        reject("Ocurrio un error");
    }
});

promesa.then(exito => console.log(exito)); //pasamos por parametro la funcion resolve, la funcion que se ejecute cuando se resuelve la promesa



let promesa2 = new Promise((aceptado, rechazado)=>{
    let numero = 5;

    if(numero % 2 === 0){
        aceptado("El número es par");

    }else{
        rechazado("El número es impar");
    }
})


promesa2.then(result => console.log(result)).catch(error => console.log("Surgio un error" + error));

/* async: toda funcion asincronica retorna una promesa */

async function miFuncion(){
    return "Saludos desde mi funcion async con promesa" //esto que retorno es el parametro que reciba el then
}

miFuncion().then(valor => console.log(valor));

async function funcionAsyncronaAwait(){

    let promesa = new Promise(resolve => {
        resolve("Promesa con await");
    })

    let mensaje = await promesa;

    console.log(mensaje)
}
funcionAsyncronaAwait();


//await: espera que se resuelva la promesa

async function asynConcurrente(){

    let promesa1 = new Promise(resolve =>{
        setTimeout(()=>resolve("Hello ", 4000));
    });

    let promesa2 = new Promise(resolve =>{
        setTimeout(()=>resolve("World!"), 2000);
    })

    const[dato, dato2] = await Promise.all([promesa, promesa2]);
    console.log(dato + dato2);
}

asynConcurrente();
