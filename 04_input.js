// Aula 04 : INPUT
 let prompt = require("prompt-sync")()

let nome = prompt('Olá, digite o seu nome: ')
let sobrenome = prompt("Diga seu sobrenome:")
let idade = prompt(" Diga sua idade:")




console.log("Seja bem-vindo(a) " +nome+ "digite seu sobrenome " +sobrenome+ "Digite sua idade " +idade+"\n\n")


let prompt = require("prompt-sync")
let produto = prompt("Digite o nome do produto:")
let preco = prompt("Digite o preço do produto:")
let produto2 = prompt("Digite o nome do outro produto:")
let preco_produto2 = prompt("Digite o preço de" +produto2)


console.log("--------RELATÓRIO---------")
console.log(+produto1 + " R$ " +preco)
console.log(+produto2 + "R$ " +preco_produto2)