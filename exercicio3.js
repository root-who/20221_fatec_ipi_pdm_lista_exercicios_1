//3-Crie um objeto JSON que abriga todas as operações do exercício 2.
import {adicao, divisao, multiplicacao, subtracao} from "./exercicio2.js"

const operacoes = {
    "adicao": adicao(2,3),
    "subtracao": subtracao(2,3),
    "divisao": divisao(2,3),
    "multiplicacao": multiplicacao(2,3)
}

console.log(operacoes.adicao)