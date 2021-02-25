function nomeDoMes(number) {
    // Opção 1
    // switch (number) {
    //     case 1: 
    //         return 'Janeiro'
    //     case 2: 
    //         return 'Fevereiro'
    //     case 3: 
    //         return 'Março'
    //     case 4: 
    //         return 'Abril'
    //     case 5: 
    //         return 'Maio'
    //     case 6: 
    //         return 'Junho'
    //     case 7: 
    //         return 'Julho'
    //     case 8: 
    //         return 'Agosto'
    //     case 9: 
    //         return 'Setembro'
    //     case 10: 
    //         return 'Outubro'
    //     case 11: 
    //         return 'Novembro'
    //     case 12: 
    //         return 'Dezembro'
    //     default:
    //         return 'Mês Invalido'
    // }

    // Opção 2
    const meses = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril',
        'Maio', 'Junho', 'Julho', 'Agosto',
        'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ]

    return number < 13 && number > 0 ? meses[--number] : 'Mês Invalido'
}

nomeDoMes(3)
nomeDoMes(9)
console.log(nomeDoMes(3))
console.log(nomeDoMes(9))
console.log(nomeDoMes(26))
console.log(nomeDoMes(0))