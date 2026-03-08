algoritmo "simulacao_emprestimo"

var
   valorEmprestimo, taxaJuros, valorFinal, jurosTotais: real
   nParcelas, i: inteiro

inicio
   escreva("Digite o valor do empréstimo: R$ ")
   leia(valorEmprestimo)

   escreva("Digite a taxa de juros mensal (em %): ")
   leia(taxaJuros)

   escreva("Digite o número de parcelas: ")
   leia(nParcelas)

   valorFinal <- valorEmprestimo

   // Converte taxa de juros percentual para decimal
   taxaJuros <- taxaJuros / 100

   para i de 1 ate nParcelas passo 1 faca
      valorFinal <- valorFinal * (1 + taxaJuros)
   fimpara

   jurosTotais <- valorFinal - valorEmprestimo

   escreva("Valor final a pagar: R$ ", valorFinal:2)
   escreva("Total de juros pagos: R$ ", jurosTotais:2)

fimalgoritmo