algoritmo "controle_estoque"

var
   i, venda, diaMaiorVenda, totalVendido: inteiro
   maiorVenda: inteiro

inicio
   totalVendido <- 0
   maiorVenda <- 0
   diaMaiorVenda <- 0

   para i de 1 ate 30 passo 1 faca
      escreva("Digite a quantidade vendida no dia ", i, ": ")
      leia(venda)

      totalVendido <- totalVendido + venda

      se (venda < 5) entao
         escreva("Alerta: Estoque baixo no dia ", i, "!")
      fimse

      se (venda > maiorVenda) entao
         maiorVenda <- venda
         diaMaiorVenda <- i
      fimse
   fimpara

   escreva("Total vendido nos 30 dias: ", totalVendido)
   escreva("Maior venda ocorreu no dia ", diaMaiorVenda, " com ", maiorVenda, " unidades.")

fimalgoritmo