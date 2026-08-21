let prompt = require("prompt-sync")()

let peso = parseFloat (prompt("Digite seu peso: "))
let altura = parseFloat (prompt("Digite sua altura: "))
let imc = peso / (altura * altura)

console.log("Seu IMC é " +imc)

if(imc < 18.5){
    console.log("Voce esta abaixo do peso ideal. ")
} else{
    console.log("Voce esta com o peso ideal. ")
}




