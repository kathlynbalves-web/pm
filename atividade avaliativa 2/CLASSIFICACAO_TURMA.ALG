algoritmo "classificacao_turma"

var
   i: inteiro
   media: real
   aprovados, recuperacao, reprovados: inteiro
   percAprov, percRec, percRep: real

inicio
   aprovados <- 0
   recuperacao <- 0
   reprovados <- 0

   para i de 1 ate 20 passo 1 faca
      escreva("Digite a média do aluno ", i, ": ")
      leia(media)

      se (media >= 7) entao
         aprovados <- aprovados + 1
      senao
         se (media >= 5) e (media < 7) entao
            recuperacao <- recuperacao + 1
         senao
            reprovados <- reprovados + 1
         fimse
      fimse
   fimpara

   percAprov <- (aprovados * 100) / 20
   percRec <- (recuperacao * 100) / 20
   percRep <- (reprovados * 100) / 20

   escreva("Percentual de Aprovados: ", percAprov:2, "%")
   escreva("Percentual de Recuperação: ", percRec:2, "%")
   escreva("Percentual de Reprovados: ", percRep:2, "%")

fimalgoritmo