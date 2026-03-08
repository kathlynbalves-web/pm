algoritmo "soma_ate_n"

var
   n, i, soma: inteiro

inicio
   escreva("Digite um número inteiro N: ")
   leia(n)

   soma <- 0

   para i de 1 ate n passo 1 faca
      soma <- soma + i
   fimpara

   escreva("A soma dos números de 1 até ", n, " é: ", soma)

fimalgoritmo