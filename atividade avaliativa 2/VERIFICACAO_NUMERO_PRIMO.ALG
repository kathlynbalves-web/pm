algoritmo "verificacao_numero_primo"

var
   numero, i: inteiro
   primo: logico

inicio
   // Leitura e validação
   escreva("Digite um número inteiro maior que 1: ")
   leia(numero)

   enquanto (numero <= 1) faca
      escreva("Número inválido! Digite um número maior que 1: ")
      leia(numero)
   fimenquanto

   primo <- verdadeiro

   para i de 2 ate numero - 1 passo 1 faca
      se (numero % i = 0) entao
         primo <- falso
         pare  // sai do laço, não é primo
      fimse
   fimpara

   se (primo) entao
      escreva(numero, " é um número primo.")
   senao
      escreva(numero, " não é um número primo.")
   fimse

fimalgoritmo