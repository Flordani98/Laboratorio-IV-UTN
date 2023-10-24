//*Una forma de hacer peticiones en js, con XMLHTTPRequest
//*una forma facil de obtener la informacion de una URL sin tener que recargar la pagina completa
//*La URL es una forma de comunicarme con el backend

let datosJson;
let xhr = new XMLHttpRequest();

xhr.open('GET', "persona.json", true);//metodo open: inicializa una solicitud recien creada o reinicializa una existente
//3parametro: para ver si es asincrono o no

xhr.responseType = 'json'; //el tipo de response va a ser tipo json, el contenido es json
xhr.onload = function(){ //onload: evento que desencadena la solicitud XMLHTTPrequest, se le indica al codigo js que se ha recibido una respuesta exitosa
 
    if(xhr.status === 200){
        datosJson = xhr.response;
        let texto = document.getElementById("nombre");
        texto.textContent =  datosJson.nombre;

    }
    else{
        console.log("Se maneja el error")
    }
}

xhr.send(); //para que la solicitud se envie