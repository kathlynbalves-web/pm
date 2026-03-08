algoritmo "fatorial_com_validacao"

var
   numero, i, fatorial: inteiro

inicio
   // Leitura e validação
   escreva("Digite um número inteiro positivo: ")
   leia(numero)

   enquanto (numero < 0) faca
      escreva("Número inválido! Digite novamente um número positivo: ")
      leia(numero)
   fimenquanto

   // Cálculo do fatorial
   fatorial <- 1
   para i de 1 ate numero passo 1 faca
      fatorial <- fatorial * i
   fimpara

   escreva("O fatorial de ", numero, " é: ", fatorial)

fimalgoritmo