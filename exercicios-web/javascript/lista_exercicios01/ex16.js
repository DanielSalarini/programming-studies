function simularCalculadora(num1, sigla, num2) {
    switch(sigla) {
        case '+':
            console.log(`${num1} ${sigla} ${num2} = ${num1 + num2}`)
            break
        case '-':
            console.log(`${num1} ${sigla} ${num2} = ${num1 - num2}`)
            break
        case '*':
            console.log(`${num1} ${sigla} ${num2} = ${num1 * num2}`)
            break
        case '/':
            console.log(`${num1} ${sigla} ${num2} = ${num1 / num2}`)
            break
        default:
            console.log('Operações inválidas')
    }
}

simularCalculadora(2, '+' , 3)
simularCalculadora(2, '-' , 3)
simularCalculadora(2, '*' , 3)
simularCalculadora(2, '/' , 3)
simularCalculadora(2, 'a' , 3)