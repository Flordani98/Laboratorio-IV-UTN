//*Al igual que XMLHTTPrequest se utiliza para realizar solicitudes http de manera asincronica, es una alternativa mas
//*moderna y mas limpia que XMLHTTPrequest
//*Fetch recibe como paramtro la url del recurso y devuelve una promesa

// let datosJson;
// //*feth es un metodo de la web api, en el 1er parametro le indicamos que va a ingresar al archivo tal
// //*, y en el2do parametro le vamos a decir a través de un objeto literal: method: 'GET', al cual le podemos poner
// //*mas atributos
// fetch('persona.json', {method: 'GET'}) //*retorna una promesa
// .then(resp => resp.json())//el fetch si la promesa se resuelve se retorna el recurso que estamos buscando o lo que la promesa resolvio
// //en el resp.json, parseo a json el recurso devuelto por la promesa
// .then(salida =>{ //una vez q se parseo el recurso, hago lo siguiente:
//     datosJson = salida;

//     let texto = document.getElementById("nombre");
//     texto.textContent = datosJson.nombre;
// })

//---------------------------------------------------------------------------------------------------------
//*Voy a consumir una api y crear un elemento:
//cuando queremos hacer un post nosotros tenemos que mandar un objeto, el objeto a crear
let datosJson;
fetch('https://api.examble.com/create',{
    method:'POST',
    body: JSON.stringify({//en el cuerpo, le vamos a pasar un objeto literal js y el metodo stringidfy lo pasa a formato json
        nombre: "Ezequiel",
        edad: 25,
        esEstudiante: true,
        direccion: {
            calle: "calle falsa 123",
            ciudad: "mar del plata"
        },
        telefonos:[
            "223-455-333",
            "223-222-111"
        ]
    }),
    headers:{
        'Content-Type': 'application/json'// le indico que le paso los datos en formato json//para informarle al servidor que le estoy mandando datos tipo json
    }

}).then()

//*query params: 
//pasamos 1 parametro por la query params ->     /character/2 
//ó pasamos varios parametros ->    /?name=rick&status=alive 