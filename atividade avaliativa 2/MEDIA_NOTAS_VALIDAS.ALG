algoritmo "media_notas_validas"

var
   i: inteiro
   nota, soma, media: real

inicio
   soma <- 0

   para i de 1 ate 5 passo 1 faca
      escreva("Digite a ", i, "ª nota (0 a 10): ")
      leia(nota)

      // verifica validade da nota
      enquanto (nota < 0) ou (nota > 10) faca
         escreva("Nota inválida! Digite novamente (0 a 10): ")
         leia(nota)
      fimenquanto

      soma <- soma + nota
   fimpara

   media <- soma / 5

   escreva("A média das notas é: ", media:2)

fimalgoritmo