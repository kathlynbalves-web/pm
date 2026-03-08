algoritmo "maior_numero"

var
   num1, num2: real

inicio
   escreva("Digite o primeiro número: ")
   leia(num1)

   escreva("Digite o segundo número: ")
   leia(num2)

   se (num1 > num2) entao
      escreva("O maior número é: ", num1)
   senao
      se (num2 > num1) entao
         escreva("O maior número é: ", num2)
      senao
         escreva("Os dois números são iguais.")
      fimse
   fimse

fimalgoritmo