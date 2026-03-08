algoritmo "fibonacci_pares"

var
   n, i: inteiro
   a, b, proximo: inteiro
   qtdPares: inteiro

inicio
   escreva("Digite o número de termos N: ")
   leia(n)

   a <- 0
   b <- 1
   qtdPares <- 0

   escreva("Sequência de Fibonacci: ")

   para i de 1 ate n passo 1 faca
      escreva(a, " ")

      se (a % 2 = 0) entao
         qtdPares <- qtdPares + 1
      fimse

      proximo <- a + b
      a <- b
      b <- proximo
   fimpara

   escreva("\nQuantidade de termos pares: ", qtdPares)

fimalgoritmo