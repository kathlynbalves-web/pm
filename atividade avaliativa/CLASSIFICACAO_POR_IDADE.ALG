algoritmo "classificacao_por_idade"

var
   idade: inteiro

inicio
   escreva("Digite a idade: ")
   leia(idade)

   se (idade >= 0) e (idade <= 12) entao
      escreva("Criança")
   senao
      se (idade >= 13) e (idade <= 17) entao
         escreva("Adolescente")
      senao
         se (idade >= 18) e (idade <= 59) entao
            escreva("Adulto")
         senao
            escreva("Idoso")
         fimse
      fimse
   fimse

fimalgoritmo