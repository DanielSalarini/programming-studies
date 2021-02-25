function simboloMais(qtdaRepetir) {
    let resultado = ''
    for(let i = 0; i < qtdaRepetir; i++) {
        resultado += '+'
    }

    return resultado
}

console.log(simboloMais(2))
console.log(simboloMais(4))