//2. Refaça o exercício 1 usando arrow functions.

exports.adicao = (num1, num2) => num1 + num2

exports.subtracao = (num1, num2)=> num1 - num2

exports.divisao = (num1, num2)=>{
     if(num2 == 0) return "Divisão não pode ser feita por zero!"
     return num1 / num2
}

exports.multiplicacao = (num1, num2)=> num1 * num2

