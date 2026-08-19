// Aula 5 - Condições

let prompt = require("prompt-sync")()

console.log("Bem - vindo ao DETRAN!")
let idade = prompt( "Digite sua idade: ")

// Comparadores
// > Maior
// < menor
// == igual
// >= Maior ou igual
// <= Menor ou igual
// != Diferente

if(idade >= 18){
   console.log("Voce já tem idade para tirar a CNH")

} else { 
    console.log("Voce não tem a idade para avançar")
}
 


