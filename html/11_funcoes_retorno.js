     // Aula 11: Funções com retorno

     somar(9,3)
     

     // Funções com retorno e parâmetros
     function somar(n1,n2){
          let soma = n1 + n2
     console.log(`A soma de ${n1} e ${n2} é ${soma}`)
    
         
    }

     // Funções vazias (Void)
     function somarnumeros(){
         let n1 = 5
         let n2 = 7
         let soma = n1 + n2
     console.log(`A soma de ${n1} e ${n2} é ${soma}`)
    }

     function numeropositivo(){
         let n1 = 4
         let resposta = ""

         if(n1 >= 0){
            resposta = "Positivo"   
         } else{
            resposta = "Negativo"
         }

    console.log(`O número ${n1} é ${resposta}!`)     
         
    } 