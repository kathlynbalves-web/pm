algoritmo "contagem_por_intervalo"

var
   i, numero: inteiro
   intervalo1, intervalo2, acima50: inteiro

inicio
   intervalo1 <- 0
   intervalo2 <- 0
   acima50 <- 0

   para i de 1 ate 30 passo 1 faca
      escreva("Digite o ", i, "º número: ")
      leia(numero)

      se (numero >= 0) e (numero <= 25) entao
         intervalo1 <- intervalo1 + 1
      senao
         se (numero >= 26) e (numero <= 50) entao
            intervalo2 <- intervalo2 + 1
         senao
            se (numero > 50) entao
               acima50 <- acima50 + 1
            fimse
         fimse
      fimse
   fimpara

   escreva("Quantidade de números entre 0 e 25: ", intervalo1)
   escreva("Quantidade de números entre 26 e 50: ", intervalo2)
   escreva("Quantidade de números acima de 50: ", acima50)

fimalgoritmo