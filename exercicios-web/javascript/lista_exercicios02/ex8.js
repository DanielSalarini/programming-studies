const { totalmem } = require("os")

function multiplicar(num1, num2) {
    if(num1 < 0 || num2 < 0) return 'Não aceitamos numeros negativos'

    //Com o operador de multiplicação
    //return num1 * num2

    //Sem o operador de multiplicação
    let total = 0
    for(let i = 0; i < num2; i++) total += num1 
    return total
}

console.log(multiplicar(5, 5))
console.log(multiplicar(0, 7))
console.log(multiplicar(3, -10))