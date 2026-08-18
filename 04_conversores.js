// Aula 04: Convereter variáveis
 let prompt = require("prompt-sync")()

 let numero1 = prompt("Digite um numero:")
 numero1 = parseInt(numero1)

 let numero2  = parseInt (prompt("Digite outro numero:"))


 let soma = numero1 + numero2
 console.log(" O resultado é : " +soma)


 //----------------------------------------------------------------------------------------------------------------------

let nascimento = prompt ("Digite o ano de seu nascimento: ")
nascimento = parseInt(nascimento)
let idade = nascimento - 2026
console.log("Sua idade é " +idade)

let nota1 = prompt("Digite sua  primeira nota: ")
nota1 = parseInt(nota1)
let nota2 = prompt("Digite sua segunda nota: ")
nota2 =parseInt(nota2)
let nota3 = prompt("Digite sua terceira nota:")
nota3 = parseInt(nota3)
let media = (nota1 + nota2 + nota3) /3
console.log(" Sua média geral é " +media)

let produto = prompt ("Digite o nome do produto" )
let preco = prompt("Digite o valor:" +produto+ " ")
preco = parseInt (preco)
let estoque = prompt("quantidade do  " +produto+ " ")
estoque =  parseInt (estoque)
let fatura = preco * estoque
console.log(" Seu faturamento da venda é "+fatura )

