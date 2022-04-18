//3-Crie um objeto JSON que abriga todas as operações do exercício 2.
const op = require('./exercicio2')

exports.operacoes = {
    "adicao": op.adicao,
    "subtracao": op.subtracao,
    "divisao": op.divisao,
    "multiplicacao": op.multiplicacao
}



