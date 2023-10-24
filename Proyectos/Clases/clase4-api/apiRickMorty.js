//*con XMLHttpRequest!
// let datosJson;
// let xhr = new XMLHttpRequest();

// xhr.open('GET', "https://rickandmortyapi.com/api/character/2", true);//metodo open: inicializa una solicitud recien creada o reinicializa una existente
// //3parametro: para ver si es asincrono o no

// xhr.responseType = 'json'; //el tipo de response va a ser tipo json, el contenido es jsony lo parseo a json
// xhr.onload = function(){ //onload: evento que desencadena la solicitud XMLHTTPrequest, se le indica al codigo js que se ha recibido una respuesta exitosa
 
//     if(xhr.status === 200){
//         datosJson = xhr.response;
//         let texto = document.getElementById("nombre");
//         texto.textContent =  datosJson.name;

//     }
//     else{
//         console.log("Se maneja el error")
//     }
// }

// xhr.send(); //para que la solicitud se envie

//*con fetch!!
fetch("https://rickandmortyapi.com/api/character/10", {method: 'GET'})
.then(resp => resp.json())
.then(data =>{
    let imagen = document.getElementById("imagen");
    imagen.setAttribute("src", data.image);
    let texto = document.getElementById("nombre");
    texto.textContent = data.name;
    
}).catch(error => console.log("error"))

