function numeroImpares(inicio, fim) {
    const vetorResultado = []

    const start = inicio < fim ? inicio : fim
    const end = fim > inicio ? fim : inicio

    for(let i = start; i < end; i++) {
        i % 2 == 1 ? vetorResultado.push(i) : ''
    }

    console.log(vetorResultado)
}

numeroImpares(0 , 100)
numeroImpares(36, 25)