// Escreva um script que apresenta as seguintes operações para o usuário:
// 1- Soma
// 2- Subtração
// 3-Multiplicação
// 4- Divisão
// 5- Sair
// O programa deve ficar em loop até que o usuário digite 5. Se o usuário digitar uma opção
// inválida, o programa deve informá-lo disso e mostrar o menu de opções novamente. Use
// o objeto JSON do exercício 3 para realizar as operações aritméticas.
const operacoes =  require('./exercicio3')

const readline = require('readline-sync');

const notNumber=(num)=>{
    if(isNaN(num)){
        console.log("Digite apenas numeros!!\n")
        return false;
    }
    return true;
}

const operations = [operacoes.operacoes.adicao,
                    operacoes.operacoes.subtracao,
                    operacoes.operacoes.multiplicacao,
                    operacoes.operacoes.divisao
                    ]
var num = 0;
while(num != 5){
    num = readline.question("Digite 1 para Adicao!\nDigite 2 para Subtracao!\nDigite 3 para Multiplicacao\nDigite 4 para Divisao!\nDigite 5 Para Sair!\n")
    num = parseInt(num)
    if(num!=5 && notNumber(num) && num < 6){
        var num1 =  parseFloat(readline.question("Digite o primeiro numero: "));
        var num2 =  parseFloat(readline.question("Digite o segundo numero: "));
        if(notNumber(num1) && notNumber(num2)){
            console.log("Resultado: " + operations[num - 1](num1, num2))
        }else continue;        
    }
}


