let ciudad = "Mar del plata";

let juntadaAmigos = () =>{
    console.log("Entrando en el bar");
    let bar = "Fichin";

    let tomar = () =>{
        let bebida = "Gin tonic";
        console.log(`Bebiendo ${bebida} en ${bar}`);
    }

    let comer = function(){
        console.log("Comiendo papas");
    }

    tomar();
    comer();
}

juntadaAmigos();