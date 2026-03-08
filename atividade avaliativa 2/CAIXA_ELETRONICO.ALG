algoritmo "caixa_eletronico"

var
   saque, restante: inteiro
   notas100, notas50, notas20, notas10, notas5, notas2, notas1: inteiro

inicio
   // Inicializa contadores
   notas100 <- 0
   notas50 <- 0
   notas20 <- 0
   notas10 <- 0
   notas5 <- 0
   notas2 <- 0
   notas1 <- 0

   escreva("Digite o valor do saque (positivo): ")
   leia(saque)

   // Validação
   enquanto (saque <= 0) faca
      escreva("Valor inválido! Digite um valor positivo: ")
      leia(saque)
   fimenquanto

   restante <- saque

   // Calcula quantidade de cada nota
   se (restante >= 100) entao
      notas100 <- restante / 100
      restante <- restante % 100
   fimse

   se (restante >= 50) entao
      notas50 <- restante / 50
      restante <- restante % 50
   fimse

   se (restante >= 20) entao
      notas20 <- restante / 20
      restante <- restante % 20
   fimse

   se (restante >= 10) entao
      notas10 <- restante / 10
      restante <- restante % 10
   fimse

   se (restante >= 5) entao
      notas5 <- restante / 5
      restante <- restante % 5
   fimse

   se (restante >= 2) entao
      notas2 <- restante / 2
      restante <- restante % 2
   fimse

   se (restante >= 1) entao
      notas1 <- restante / 1
      restante <- restante % 1
   fimse

   // Mostra resultado
   escreva("Notas de 100: ", notas100)
   escreva("Notas de 50: ", notas50)
   escreva("Notas de 20: ", notas20)
   escreva("Notas de 10: ", notas10)
   escreva("Notas de 5: ", notas5)
   escreva("Notas de 2: ", notas2)
   escreva("Notas de 1: ", notas1)

fimalgoritmo