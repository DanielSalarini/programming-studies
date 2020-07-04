function mostrarResultado(vetor, multiplicador) {
    function multiplicacao(vetor) {
        const resultado = vetor.map(mult)
        console.log(resultado)
    }
    
    function multiplicacaoMaior5(vetor) {
        const resultado = vetor.filter(maior5).map(mult)
        console.log(resultado)
    }

    const mult = e => e * multiplicador
    const maior5 = e => e > 5

    multiplicacao(vetor, multiplicador)
    multiplicacaoMaior5(vetor, multiplicador)
}

const vetorNumerico = [1, 2, 3, 4, 5, 6, 7, 8, 9]

mostrarResultado(vetorNumerico, 2)