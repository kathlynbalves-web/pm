algoritmo "triangulo_valido"

var
   a, b, c: real

inicio
   escreva("Digite o primeiro lado: ")
   leia(a)

   escreva("Digite o segundo lado: ")
   leia(b)

   escreva("Digite o terceiro lado: ")
   leia(c)

   se (a + b > c) e (a + c > b) e (b + c > a) entao
      escreva("Os lados formam um triângulo válido.")
   senao
      escreva("Os lados não formam um triângulo.")
   fimse

fimalgoritmo