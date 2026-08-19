const PromptSync = require("prompt-sync")

let prompt = require("prompt-sync")()

let pao = parseFloat (prompt("Preço do pão: R$ "))
let salsicha = parseFloat  (prompt("Preço da salsicha: R$ "))
let pure  = parseFloat (prompt("Preço do purê: R$"))
let queijo = parseFloat (prompt("Preço do queijo: R$ "))
let bacon =  parseFloat (prompt("Preço do bacon: R$ "))
let porcentagem_lucro = parseFloat (prompt("Informe a porcentagem de lucro: % "))
let lucro = parseFloat (prompt("Qual o lucro desejado com a venda? "))
lucro = lucro / 100

let custo_do_pure = pao + salsicha + pure + queijo + bacon
let venda_pure = custo_do_pure * lucro

let custo_do_cremoso = pao+ (2 * salsicha) +queijo
let venda_do_cremoso = custo_do_cremoso * lucro

let custo_do_especial = pao + salsicha + pure + bacon
let venda_do_especial = venda_do_especial * lucro

console.log("======CADASTRO DE PREÇOS======")
console.log(" ingredientes: Pão, Purê, Bacon, Salsicha ")
