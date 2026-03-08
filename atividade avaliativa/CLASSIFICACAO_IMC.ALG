algoritmo "classificacao_imc"

var
   peso, altura, imc: real

inicio
   escreva("Digite o peso (kg): ")
   leia(peso)

   escreva("Digite a altura (m): ")
   leia(altura)

   imc <- peso / (altura * altura)

   escreva("IMC = ", imc:2)  // mostra com 2 casas decimais

   se (imc < 18.5) entao
      escreva("Classificação: Abaixo do peso")
   senao
      se (imc >= 18.5) e (imc < 25) entao
         escreva("Classificação: Peso normal")
      senao
         se (imc >= 25) e (imc < 30) entao
            escreva("Classificação: Sobrepeso")
         senao
            escreva("Classificação: Obesidade")
         fimse
      fimse
   fimse

fimalgoritmo