algoritmo "maior_menor_valor"

var
   i, numero: inteiro
   maior, menor: inteiro

inicio
   escreva("Digite o 1º número: ")
   leia(numero)
   maior <- numero
   menor <- numero

   para i de 2 ate 10 passo 1 faca
      escreva("Digite o ", i, "º número: ")
      leia(numero)

      se (numero > maior) entao
         maior <- numero
      fimse

      se (numero < menor) entao
         menor <- numero
      fimse
   fimpara

   escreva("O maior valor digitado foi: ", maior)
   escreva("O menor valor digitado foi: ", menor)

fimalgoritmo