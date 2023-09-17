import { clientesArreglo } from "./clase2-clientes.js";

// console.log(clientesArreglo);

//! uso del map:
//el map toma cada elemento de mi arreglo y lo modifica, sin modificar el original(metodo accesor, realiza una copia)
//map es un metodo de los arreglosque me va a recibir una funcion como parametro
//siemrpe un map necesita un return
const nombres = clientesArreglo.map((cliente) =>{ 
    return cliente.nombre//por cada cliente q voy a recorrer devolveme el nombre del cliente
});

// console.log(nombres);//arreglo con los nombres de los clientes

const items1 = clientesArreglo.map((cliente) =>{ 
    return cliente.items//por cada cliente q voy a recorrer se devuelve el arreglo item cada uno con sus objetos dentro
});

console.log(items1);//arreglo con los items de los objetos clientes


const items = clientesArreglo.map((cliente) =>{
    return cliente.items.map((item) =>{return item.producto}) //por cada objeto del arreglo cliente, retorname los items
    //y por cada arreglo de item voy a concatenar un map y le voy a decir q me retorne el nombre del producto
    //devuelve un arreglo, pero en cada arreglo ya no contiene a todo el objeto completo dentro sino, SOLO los productos

});


console.log(items);


//! Uso del metodo find:

const clienteId2 = clientesArreglo.find((cliente) =>{
    return cliente.id == 2; //condicion, encuentra al cliente que cumpla la condición, retorna 1 solo elemento
});
console.log(clienteId2);


//! Uso del metodo filter:
const mayores = clientesArreglo.filter((cliente) =>{
    return cliente.edad >= 30; //me crea un arreglo con los objetos me cumplan la condición
}).map((cliente) =>{return cliente.nombre});

console.log(mayores);
