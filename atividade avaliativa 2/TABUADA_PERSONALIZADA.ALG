algoritmo "tabuada_personalizada"

var
   numero, limite, i, resultado: inteiro

inicio
   escreva("Digite o número para a tabuada: ")
   leia(numero)

   escreva("Digite o limite da tabuada: ")
   leia(limite)

   para i de 1 ate limite passo 1 faca
      resultado <- numero * i
      escreva(numero, " x ", i, " = ", resultado)
   fimpara

fimalgoritmo