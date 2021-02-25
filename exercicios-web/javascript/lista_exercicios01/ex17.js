function aumento (plano, salario)  {
    switch (plano) {
        case 'A':
            salario = salario + (salario * 0.10)
            console.log(`Com os ajustes do plano ${plano} o salario foi para ${salario}`)
            break
        case 'B':
            salario = salario + (salario * 0.15)
            console.log(`Com os ajustes do plano ${plano} o salario foi para ${salario}`)
            break
        case 'C':
            salario = salario + (salario * 0.20)
            console.log(`Com os ajustes do plano ${plano} o salario foi para ${salario}`)
            break
        default:
            console.log('Plano invalido')
    }
}

aumento('A', 1000)
aumento('B', 1000)
aumento('C', 1000)
aumento('F', 1000)