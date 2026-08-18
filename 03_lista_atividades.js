/*
### ----- Atividade 0:

Desenhe no terminal um retângulo usando apenas o comando do console.log
 _____
|     |
|     |
|     |
|_____|
*/

console.log(" _____ ")
console.log("|     |")           
console.log("|     |")
console.log("|     |")
console.log("|     |")
console.log ("_____")
/*
### ----- Atividade 1:

Crie uma variável chamada `cidade` e outra chamada `estado`.
Mostre na tela a frase: "Eu moro em X - Y"

Substitua X pelo valor da variável `cidade` e Y pelo valor da variável `estado`.

*/

let cidade = "São Carlos"
let estado = "São Paulo"
console.log("Eu moro em " +cidade+ " - " +estado)






/*
### ----- Atividade 2:

Crie duas variáveis chamadas `numero1` e `numero2`.
Atribua valores numéricos a elas.

Crie uma variável chamada `soma` para armazenar o resultado da soma dos dois números.

Mostre o resultado da soma na tela.

*/

 let numero1 = 5
 let numero2 = 10
 let soma = numero1+numero2
console.log("A soma de "  +numero1+ " com " +numero2+ " é " +soma)
/*
### ----- Atividade 3:

Crie uma variável chamada `idade`.
Mostre na tela a mensagem: "Olá, você tem X anos e daqui a 10 anos terá Y."

Substitua X pelo valor da idade atual e Y pela idade que a pessoa terá daqui a 10 anos.

*/
let idade = 19
let daqui_10 = idade + 10
console.log("Olá, sua idade é de " +idade+  " e daqui a 10 anos terá " +daqui_10+ " anos ")




/*
### ----- Atividade 4:

Crie uma variável chamada `numero`.

Calcule o dobro e o triplo desse número.
Armazene os resultados em duas novas variáveis.

Mostre na tela o número original, seu dobro e seu triplo.

*/

let numero = 19
let dobro = 19 * 2
let triplo = 19 * 3
console.log(" O número é " +numero+ " o dobro é " +dobro+ " o triplo é " +triplo)




/*
### ----- Atividade 5:

Crie variáveis para armazenar o nome e o preço de dois produtos diferentes.

Mostre na tela o nome e o preço de cada produto individualmente.
Em seguida, calcule e mostre o valor total dos dois produtos.

*/


let produto1 = "agua"
let produto2 = "café"
let custo_agua = 2000
let custo_café = 3000
let soma1 = custo_agua + "custo_café"

console.log(" No nósso mercado temos " +produto1+ " por apenas " +custo_agua+ " também temos " +produto2+ " por apenas " +custo_café )



/*
### ----- Atividade 6:

Crie uma variável chamada `salario`.

Considere que a pessoa receberá um aumento de R$ 500 e um desconto do INSS de R$ 250
Calcule o novo salário e armazene o resultado em uma nova variável.

Mostre na tela o salário atual e o novo salário.

*/
let salario = 3000
let aumento = 500
let INSS= 250
let salario_liq = salario + aumento - INSS

console.log(" Salário atual " +salario )
console.log(" O novo total é  " +salario_liq)




/*
### ----- Atividade 7:

João recebe R$ 100 de mesada e gastou R$ 35.

Crie variáveis para representar o valor da mesada e o valor gasto.
Calcule quanto dinheiro sobrou e armazene o resultado em uma nova variável.

Mostre na tela o valor da mesada, o valor gasto e quanto dinheiro sobrou.

*/

let mesada = 100
let gastou = 35
let sobrou = 100 - 35
console.log(" João recebeu uma mesada de R$ " +mesada+ " mas ele gastou " +gastou+ " com isso, ele ficou com " +sobrou)

/*
### ----- Atividade 8:

Crie duas variáveis chamadas `base` e `altura`.

Calcule a área de um retângulo utilizando esses dois valores.
Armazene o resultado em uma nova variável.

Mostre na tela o valor da base, da altura e da área calculada.

*/

let base = 10
let altura = 5
let area = base * altura

console.log(" A área do retângulo é igual " +base+ " * " +altura+ " que multiplicados dão " +area)



/*
### ----- Atividade 9:

Crie uma variável chamada `celsius` para armazenar uma temperatura em graus Celsius.
Converta essa temperatura para Fahrenheit e para Kelvin e mostre na tela os valores da conversão

*/
let celsius = 25
let fahrenheit = (celsius * 9/5) + 32
let kelvin = celsius + 273.15

console.log(" A temperatura fahrenheit é " +fahrenheit+ " e Kelvin é " +kelvin)


/*
### ----- Atividade 10:

Crie uma variável contendo uma quantidade de horas.

Calcule quantos minutos correspondem a essa quantidade de horas.
Calcule também quantos segundos correspondem a essa quantidade de horas.

Mostre na tela a quantidade de horas, de minutos e de segundos.

Exemplo:

3 horas correspondem a 180 minutos ou 10800 segundos.

*/
let hora = 10
let minutos = horas * 60
let segundos = minutos * 60




/*
### ----- Atividade 11:

Crie duas variáveis de qualquer tipo.

Em seguida, faça com que o valor da primeira variável seja armazenado na segunda variável,
e que o valor original da segunda variável seja armazenado na primeira variável.

Ao final, mostre o valor das duas variáveis na tela.

*/

let volor1 = "Groselha"
let valor2 = 99

console.log(" A variável 1 é : " +valor1+ " e a variável 2 é " +valor2)


/*
### ----- Atividade 12:

Crie variáveis para armazenar a distância percorrida por um carro,
a quantidade de litros de combustível utilizada e o preço do litro do combustível.

Calcule quantos quilômetros o carro percorreu para cada litro de combustível.

Calcule também quanto foi gasto com combustível durante a viagem.

Mostre na tela a distância percorrida, a quantidade de litros utilizados,
o consumo do carro e o valor total gasto com combustível.

*/

