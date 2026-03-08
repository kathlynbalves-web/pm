algoritmo "analise_divisiveis"

var
   i, numero: inteiro
   div3, div5, divAmbos: inteiro

inicio
   div3 <- 0
   div5 <- 0
   divAmbos <- 0

   para i de 1 ate 25 passo 1 faca
      escreva("Digite o ", i, "º número: ")
      leia(numero)

      se (numero % 3 = 0) e (numero % 5 = 0) entao
         divAmbos <- divAmbos + 1
      fimse

      se (numero % 3 = 0) entao
         div3 <- div3 + 1
      fimse

      se (numero % 5 = 0) entao
         div5 <- div5 + 1
      fimse
   fimpara

   escreva("Quantidade de números divisíveis por 3: ", div3)
   escreva("Quantidade de números divisíveis por 5: ", div5)
   escreva("Quantidade de números divisíveis por 3 e 5: ", divAmbos)

fimalgoritmo