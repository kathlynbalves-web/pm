algoritmo "maior_positivo_menor_negativo"

var
   i, numero: inteiro
   maiorPositivo, menorNegativo: inteiro

inicio
   maiorPositivo <- -999999   // valor inicial baixo para positivos
   menorNegativo <- 999999    // valor inicial alto para negativos

   para i de 1 ate 15 passo 1 faca
      escreva("Digite o ", i, "º número: ")
      leia(numero)

      se (numero > 0) e (numero > maiorPositivo) entao
         maiorPositivo <- numero
      fimse

      se (numero < 0) e (numero < menorNegativo) entao
         menorNegativo <- numero
      fimse
   fimpara

   se (maiorPositivo = -999999) entao
      escreva("Não foi digitado nenhum número positivo.")
   senao
      escreva("O maior número positivo é: ", maiorPositivo)
   fimse

   se (menorNegativo = 999999) entao
      escreva("Não foi digitado nenhum número negativo.")
   senao
      escreva("O menor número negativo é: ", menorNegativo)
   fimse

fimalgoritmo