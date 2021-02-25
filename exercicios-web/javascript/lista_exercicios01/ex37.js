const { some } = require("lodash")

function progressaoAritmetica(posicaoTermo, primeiroTermo, razao) {
    let soma = 0

    for(let i = 1; i <= posicaoTermo; i++) {
        let termoAtual = primeiroTermo + (i - 1) * razao
        console.log(`${i}) ${termoAtual}`)
        soma += termoAtual
    }

    console.log(`Soma dos termos da P.A.: ${soma}`)
}

function progressaoGeometrica(posicaoTermo, primeiroTermo, razao) {
    let soma = 0

    for(let i = 1; i <= posicaoTermo; i++) {
        let termoAtual = primeiroTermo * razao ** (i - 1)
        console.log(`${i}) ${termoAtual}`)
        soma += termoAtual
    }

    console.log(`Soma dos termos da P.G.: ${soma}`)
}

progressaoAritmetica(10, 10, 15)
console.log('---------------')
progressaoGeometrica(10, 5, 3)