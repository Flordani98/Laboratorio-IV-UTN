
const userInput = prompt("Ingrese un número");

const numberInput = parseFloat(userInput);

const result = numberInput * 3;
if(isNaN(numberInput)){
    alert("Ingrese un número")
}

alert("El resultado es: " + result);