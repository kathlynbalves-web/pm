algoritmo "validacao_senha"

var
   senha: caractere
   tentativas: inteiro

inicio
   tentativas <- 0

   escreva("Digite a senha: ")
   leia(senha)

   enquanto (senha <> "1234") faca
      tentativas <- tentativas + 1
      escreva("Senha incorreta!")
      escreva("Digite a senha novamente: ")
      leia(senha)
   fimenquanto

   // Conta a última tentativa correta
   tentativas <- tentativas + 1

   escreva("Senha correta! Número de tentativas: ", tentativas)

fimalgoritmo