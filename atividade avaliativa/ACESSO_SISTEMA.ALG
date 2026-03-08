algoritmo "acesso_sistema"

var
   usuario, senha: caractere

inicio
   escreva("Digite o usuário: ")
   leia(usuario)

   escreva("Digite a senha: ")
   leia(senha)

   se (usuario = "admin") e (senha = "1234") entao
      escreva("Acesso permitido")
   senao
      escreva("Acesso negado")
   fimse

fimalgoritmo
