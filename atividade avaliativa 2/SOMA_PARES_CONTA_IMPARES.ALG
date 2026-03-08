algoritmo "soma_pares_conta_impares"

var
   i, numero: inteiro
   somaPares, qtdImpares: inteiro

inicio
   somaPares <- 0
   qtdImpares <- 0

   para i de 1 ate 20 passo 1 faca
      escreva("Digite o ", i, "º número: ")
      leia(numero)

      se (numero % 2 = 0) entao
         somaPares <- somaPares + numero
      senao
         qtdImpares <- qtdImpares + 1
      fimse
   fimpara

   escreva("Soma dos números pares: ", somaPares)
   escreva("Quantidade de números ímpares: ", qtdImpares)

fimalgoritmo