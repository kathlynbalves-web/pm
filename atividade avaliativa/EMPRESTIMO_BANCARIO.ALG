algoritmo "emprestimo_bancario"

var
   salario, parcela: real

inicio
   escreva("Digite o salário: ")
   leia(salario)

   escreva("Digite o valor da parcela: ")
   leia(parcela)

   se (parcela <= salario * 0.3) entao
      escreva("Empréstimo aprovado")
   senao
      escreva("Empréstimo negado")
   fimse

fimalgoritmo