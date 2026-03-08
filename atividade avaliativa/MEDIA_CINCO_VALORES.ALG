algoritmo "media_cinco_valores"

var
   i: inteiro
   numero, soma, media: real

inicio
   soma <- 0

   para i de 1 ate 5 passo 1 faca
      escreva("Digite o ", i, "º número: ")
      leia(numero)
      soma <- soma + numero
   fimpara

   media <- soma / 5

   escreva("A média dos 5 números é: ", media:2)

fimalgoritmo