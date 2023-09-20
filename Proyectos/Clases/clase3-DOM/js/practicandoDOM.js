document.getElementById("btn-change-color").addEventListener("click", function(evento){
    let paragraph = document.getElementById("paragraph-i");
    paragraph.style.color == "black" ? paragraph.style.color = "blue" : paragraph.style.color = "black";
})
// document.getElementById("btn-change-size").addEventListener("click", function(evento){
//     let paragraph = document.getElementById("paragraph-i");
//     console.log(paragraph.style.fontSize);
//     let sizeMax = size+1;
//     paragraph.style.fontSize == size ? paragraph.style.fontSize == sizeMax : paragraph.style.fontSize = size;
//ver: https://desarrolloweb.com/articulos/controles-javascript-cambiar-tamano-texto
// })

document.getElementById("btn-off-foco").addEventListener("click", function(evento){
    document.getElementById("img-foco").src="../img/focoa.png"

})

document.getElementById("btn-on-foco").addEventListener("click", function(evento){
    document.getElementById("img-foco").src="../img/focob.png"

})

// let btnOff = document.getElementById("btn-off-foco");
// let btnOn = document.getElementById("btn-on-foco");
// let image = document.getElementById("img-foco");

// btnOff.onclick = function() {
//     image.src = "Clase"
// }

// btnOn.onclick = function() {
//     image.src = "../img/focob.png"
// }