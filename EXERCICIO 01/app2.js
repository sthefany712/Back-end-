//Comentário em linha
/*
Comentário
    em
bloco
*/

//Imprime no terminal um conteúdo
console.log('Testando o print do console') // ; PONTO E VIRGULA É OPCIONAL

//Permite criar uma variavel
var nome = 'Sthefany'

console.log(nome) //para aparecer no terminal

//Formas de concatenar variaveis e texto
console.log('O nome do usuário é: ' + nome) 
console.log(`O nome do usuário é: ${nome}`) //colocando a crase se torna uma variavel. Boa p/ linhas de cód grandes.

//Import da biblioteca para captar entrada de dados via terminal
var readline = require('readline')

//Cria uma interface para entrada e saída de dados pelo terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Função para retornar o nome digitado no terminal
    //O método question após a digitação chama a sua função "CALL BACK"
    //para entregar o que foi digitado no terminal, através do argumento
    //nomeUsuario
entradaDeDados.question('Favor digitar o seu nome:',function(nomeUsuario){
    console.log('O nome do usuário é: ' + nomeUsuario)
    //Entrada de dados para o Email
    entradaDeDados.question('Favor digitar o seu email:', function(emailUsuario){
        console.log(`O email informado é: ${emailUsuario}`)

        //Ao invés de printar e lançar a pergunta posso fazer como um comentário no final
        //console.log('O nome do usuário é: ' + nomeUsuario)
        //console.log(`O email informado é: ${emailUsuario}`)
    })
})

