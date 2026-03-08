algoritmo "bonus_vendedores"

var
   i: inteiro
   venda, bonus, totalBonus, maiorVenda: real

inicio
   totalBonus <- 0
   maiorVenda <- 0

   para i de 1 ate 10 passo 1 faca
      escreva("Digite o valor total vendido pelo vendedor ", i, ": ")
      leia(venda)

      se (venda >= 5000) entao
         bonus <- venda * 0.10
      senao
         bonus <- venda * 0.05
      fimse

      totalBonus <- totalBonus + bonus

      se (venda > maiorVenda) entao
         maiorVenda <- venda
      fimse
   fimpara

   escreva("Total pago em bônus: ", totalBonus:2)
   escreva("Maior venda realizada: ", maiorVenda:2)

fimalgoritmo