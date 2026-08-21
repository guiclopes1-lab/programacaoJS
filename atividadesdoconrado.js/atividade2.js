//Atividade 2 
let prompt = require("prompt-sync")()

let numero1 = parseFloat (prompt("Digite o primeiro número: "))
let numero2 = parseFloat(prompt("Digite o segundo número: "))

    if(numero1 > numero2){
        console.log("O primeiro número é maior que o segundo!")
    } else{
        console.log("Esse número é menor que o primeiro!")
    }