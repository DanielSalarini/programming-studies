function repetir(elemento, qtda) {
    const arrayDeRepeticao = []

    for(let i = 0; i < qtda; i++) {
        arrayDeRepeticao.push(elemento)
    }

    return arrayDeRepeticao
}

console.log(repetir('codigo', 2))
console.log(repetir(7, 3))