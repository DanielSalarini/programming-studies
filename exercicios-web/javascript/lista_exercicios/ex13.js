function diaUtil(dia) {
    switch(dia) {
        case 1:
            return 'Domingo: Fim de semana'
        case 2:
            return 'Segunda: Dia útil'
        case 3:
            return 'Terça: Dia útil'
        case 4:
            return 'Quarta: Dia útil'
        case 5:
            return 'Quinta: Dia útil'
        case 6:
            return 'Sexta: Dia útil'
        case 7:
            return 'Sabado: Fim de semana'
        default:
            return 'Dia Inválido'
    }
}

console.log(diaUtil(1))
console.log(diaUtil(2))
console.log(diaUtil(3))
console.log(diaUtil(4))
console.log(diaUtil(5))
console.log(diaUtil(6))
console.log(diaUtil(7))
console.log(diaUtil(56))