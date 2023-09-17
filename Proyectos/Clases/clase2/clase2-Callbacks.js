//Callback: son funciones que se pasan por parametro a otras funciones
//se utiliza mucho para ejecutar codigo asincrono
function miFuncion(callback){
    console.log("Desde mi funcion");
    callback(); //callback es una funcion
}

const funcCallback = function(){
    console.log("Hola desde mi funcion callback");
}

miFuncion(funcCallback);

function mostrarResultado(resultado){
    console.log(resultado);
}

function sumar(a, b, callback){
    const resultado = a +b;
    callback(resultado);
}


sumar(2, 5, mostrarResultado);