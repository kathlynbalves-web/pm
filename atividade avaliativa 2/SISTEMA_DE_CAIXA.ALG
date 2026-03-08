algoritmo "sistema_de_caixa"

var
   valor, desconto: real
   faturamentoBruto, totalDescontos: real

inicio
   faturamentoBruto <- 0
   totalDescontos <- 0

   escreva("Digite o valor da compra (0 para sair): ")
   leia(valor)

   enquanto (valor <> 0) faca
      faturamentoBruto <- faturamentoBruto + valor

      se (valor > 100) entao
         desconto <- valor * 0.05
         totalDescontos <- totalDescontos + desconto
      fimse

      escreva("Digite o valor da próxima compra (0 para sair): ")
      leia(valor)
   fimenquanto

   escreva("Faturamento bruto: R$ ", faturamentoBruto:2)
   escreva("Total de descontos aplicados: R$ ", totalDescontos:2)

fimalgoritmo