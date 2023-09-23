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
    document.getElementById("img-foco").src="img/focoa.png"

})

document.getElementById("btn-on-foco").addEventListener("click", function(evento){
    document.getElementById("img-foco").src="img/focob.png"

})

document.getElementById("btn-foco").addEventListener("click", function(evento){
    let img = document.getElementById("img-foco2");
    let dirOn = "http://127.0.0.1:5500/Clases/clase3-DOM/img/focob.png";
    // let dirOn = "img/focob.png";
    let dirOff = "img/focoa.png";

    img.src == dirOn ? img.src = dirOff : img.src = dirOn;

    console.log(img.src);

})