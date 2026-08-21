 // Aula 06: Práticas com condições

  let prompt = require("prompt-sync")()

  let preco_sao_paulo = 125.00
  let preco_araraquara  = 68.90
  let preco_do_seguro = 42.50

 let total = 0  

 console.log("EScolha seu destino: ")
 console.log("1 - São Paulo por R$ " +preco_sao_paulo)
 console.log("2 - Araraquara por R$ " +preco_araraquara)
 let resposta = parseInt (prompt("Digite uma opção: "))

 if(resposta == "1"){
 total = preco_sao_paulo
 } else{
 total = preco_araraquara
 }

 let seguro = prompt("Deseja adicionar um seguro por mais R$ 42.50? : ")
 if(seguro == "Sim"){
 total = total + preco_do_seguro
 }
 

 let cupom =  prompt("Digite seu cumpom de desconto: " )
 
 if(cupom == "Conradito10" ){
    console.log("Cupom de 10% aplicado! ")
    let desconto = total  * 10
    total = total - desconto

    
 } else{
    console.log("Este cupom não existe! ")
 }

 let promocao = prompt("Voce gostaria de receber promoções no seu e-mail? ")
 if (promocao == "Sim"){
    console.log("Obrigado por se registrar, voce receberá novos e-mails em breve! ")
 } else{
    console.log("Ok, voce não recebera e-mails de promeções.")
 }
 
 console.log("\n total da viagem é de: R$ "+total )
 console.log("Formas de pagamento")
 console.log("1 - Cartão de crédito (acréscimo de 5%) ")
 console.log(" 2 - Pix (desconto de 5%")
 resposta = prompt ("Escolha uma opção: ")

 if( resposta == 1 ){
     let acréscimo = total * 0.05
 total = total + desconto

 } else( resposta == 2)
    let desconto = total * 0.05
    total = total - desconto
 
    console.log("O valor total é " +total)
 

 console.log("Obrigado (a), volte sempre! ")
 
