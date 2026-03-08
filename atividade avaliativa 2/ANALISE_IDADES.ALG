algoritmo "analise_idades"

var
   idade: inteiro
   somaIdades, qtdMaiores, qtdTotal: inteiro
   percentualMenores: real

inicio
   somaIdades <- 0
   qtdMaiores <- 0
   qtdTotal <- 0

   escreva("Digite a idade (0 para encerrar): ")
   leia(idade)

   enquanto (idade <> 0) faca
      somaIdades <- somaIdades + idade
      qtdTotal <- qtdTotal + 1

      se (idade >= 18) entao
         qtdMaiores <- qtdMaiores + 1
      fimse

      escreva("Digite a próxima idade (0 para encerrar): ")
      leia(idade)
   fimenquanto

   se (qtdTotal > 0) entao
      escreva("Média das idades: ", (somaIdades / qtdTotal):2)
      escreva("Quantidade de maiores de 18: ", qtdMaiores)
      percentualMenores <- ((qtdTotal - qtdMaiores) * 100) / qtdTotal
      escreva("Percentual de menores de idade: ", percentualMenores:2, "%")
   senao
      escreva("Nenhuma idade foi digitada.")
   fimse

fimalgoritmo