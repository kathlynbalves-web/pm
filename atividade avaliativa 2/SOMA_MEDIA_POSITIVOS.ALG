algoritmo "soma_media_positivos"

var
   numero: real
   soma: real
   contador: inteiro
   media: real

inicio
   soma <- 0
   contador <- 0

   escreva("Digite um número positivo (negativo para parar): ")
   leia(numero)

   enquanto (numero >= 0) faca
      soma <- soma + numero
      contador <- contador + 1

      escreva("Digite outro número positivo (negativo para parar): ")
      leia(numero)
   fimenquanto

   se (contador > 0) entao
      media <- soma / contador
      escreva("Soma dos números positivos: ", soma)
      escreva("Média dos números positivos: ", media:2)
   senao
      escreva("Nenhum número positivo foi digitado.")
   fimse

fimalgoritmo