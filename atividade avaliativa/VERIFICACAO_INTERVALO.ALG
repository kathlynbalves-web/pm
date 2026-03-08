algoritmo "verificacao_intervalo"

var
   numero: real

inicio
   escreva("Digite um número: ")
   leia(numero)

   se (numero >= 10) e (numero <= 50) entao
      escreva("O número está entre 10 e 50.")
   senao
      escreva("O número não está entre 10 e 50.")
   fimse

fimalgoritmo