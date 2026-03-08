algoritmo "crescimento_populacional"

var
   populacaoA, populacaoB: real
   anos: inteiro

inicio
   escreva("Digite a população inicial da Cidade A: ")
   leia(populacaoA)

   escreva("Digite a população inicial da Cidade B: ")
   leia(populacaoB)

   anos <- 0

   enquanto (populacaoA <= populacaoB) faca
      populacaoA <- populacaoA + (populacaoA * 0.03)    // cresce 3%
      populacaoB <- populacaoB + (populacaoB * 0.015)   // cresce 1.5%
      anos <- anos + 1
   fimenquanto

   escreva("Cidade A ultrapassará Cidade B em ", anos, " anos.")
   escreva("População final Cidade A: ", populacaoA:0)
   escreva("População final Cidade B: ", populacaoB:0)

fimalgoritmo