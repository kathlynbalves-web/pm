algoritmo "desconto_compra"

var
   valor, valorFinal: real

inicio
   escreva("Digite o valor da compra: ")
   leia(valor)

   se (valor > 100) entao
      valorFinal <- valor - (valor * 0.10)
   senao
      valorFinal <- valor
   fimse

   escreva("Valor final da compra: ", valorFinal)

fimalgoritmo