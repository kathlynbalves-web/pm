algoritmo "eleicao_simples"

var
   voto, totalVotos, vencedor: inteiro
   votos1, votos2, votos3: inteiro
   perc1, perc2, perc3: real

inicio
   votos1 <- 0
   votos2 <- 0
   votos3 <- 0
   totalVotos <- 0

   escreva("Digite o número do candidato (1, 2, 3) ou 0 para encerrar: ")
   leia(voto)

   enquanto (voto <> 0) faca
      escolha voto
         caso 1:
            votos1 <- votos1 + 1
         caso 2:
            votos2 <- votos2 + 1
         caso 3:
            votos3 <- votos3 + 1
         caso contrario:
            escreva("Voto inválido!")
      fimescolha

      totalVotos <- totalVotos + 1

      escreva("Digite o número do candidato (1, 2, 3) ou 0 para encerrar: ")
      leia(voto)
   fimenquanto

   se (totalVotos > 0) entao
      perc1 <- (votos1 * 100) / totalVotos
      perc2 <- (votos2 * 100) / totalVotos
      perc3 <- (votos3 * 100) / totalVotos

      escreva("Total de votos do candidato 1: ", votos1, " (", perc1:2, "%)")
      escreva("Total de votos do candidato 2: ", votos2, " (", perc2:2, "%)")
      escreva("Total de votos do candidato 3: ", votos3, " (", perc3:2, "%)")

      // Determinar o vencedor
      se (votos1 > votos2) e (votos1 > votos3) entao
         vencedor <- 1
      senao
         se (votos2 > votos1) e (votos2 > votos3) entao
            vencedor <- 2
         senao
            se (votos3 > votos1) e (votos3 > votos2) entao
               vencedor <- 3
            senao
               vencedor <- 0 // empate
            fimse
         fimse
      fimse

      se (vencedor <> 0) entao
         escreva("O vencedor é o candidato ", vencedor)
      senao
         escreva("Houve empate entre os candidatos.")
      fimse
   senao
      escreva("Nenhum voto foi registrado.")
   fimse

fimalgoritmo