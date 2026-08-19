// Aula 05: Exemplos e condições

 let prompt = require("prompt-sync")()

 let usuario = prompt("Digite o seu usuário:")
 if(usuario == "Guilherme"){
console.log("Acesso concedido! ")
 } else{
    console.log("Acesso negado!")
 }


 let idade = parseInt  (prompt("Digite sua idade: "))
 if(idade > 99 ){
 console.log("Idade inválida , tente novamente")
 }

 console.log(" A idade digitada foi ")+idade



