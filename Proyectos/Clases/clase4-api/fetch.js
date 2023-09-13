let datosJson;

fetch('persona.json', {method: 'GET'}) //retorna una promesa
.then(resp => resp.json())//el fetch si la promesa se resuelve se retorna el recurso que estamos buscando o lo que la promesa resolvio
.then(salida =>{
    datosJson = salida;

    let texto = document.getElementById("nombre");
    texto.textContent = datosJson.nombre;
})
