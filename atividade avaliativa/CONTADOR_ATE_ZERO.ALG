algoritmo "contador_ate_zero"

var
   numero, soma: inteiro
   contador: inteiro

inicio
   soma <- 0
   contador <- 0

   escreva("Digite números (0 para parar): ")
   leia(numero)

   enquanto (numero <> 0) faca
      soma <- soma + numero
      contador <- contador + 1
      escreva("Digite outro número (0 para parar): ")
      leia(numero)
   fimenquanto

   escreva("Quantidade de números digitados: ", contador)
   escreva("Soma total dos números: ", soma)

fimalgoritmo