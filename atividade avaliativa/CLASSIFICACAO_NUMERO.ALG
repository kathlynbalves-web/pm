algoritmo "classificacao_numero"

var
   numero: real

inicio
   escreva("Digite um número: ")
   leia(numero)

   se (numero > 0) entao
      escreva("Número positivo")
   senao
      se (numero < 0) entao
         escreva("Número negativo")
      senao
         escreva("O número é zero")
      fimse
   fimse

fimalgoritmo