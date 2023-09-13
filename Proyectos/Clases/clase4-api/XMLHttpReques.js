let datosJson;
let xhr = new XMLHttpRequest();

xhr.open('GET', "personas.js", true);
xhr.responseType = 'json';
xhr.onload = function(){
    datosJson = hxr.response;
    let texto = document.getElementById("Nombre");
    texto.textContent =  datosJson.nombre;
}