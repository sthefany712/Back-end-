var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Favor digitar o seu nome:', function(nomeUsuario){
    console.long('O nome do usuário é:' + nomeUsuario)
})


