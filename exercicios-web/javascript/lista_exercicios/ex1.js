function interacao(valor1, valor2) {
    let soma = valor1 + valor2
    let sub = valor1 - valor2
    let mult = valor1 * valor2
    let div = valor1 / valor2
    
    const int = ['+', '-', '*', '/']
    const resultados = [soma, sub, mult, div]

    for (let i = 0; i < int.length; i++) {
        console.log(`${valor1} ${int[i]} ${valor2} = ${resultados[i]}`)
    }

    console.log('/////')
}

interacao(15, 20)
interacao(2, 9)