function dinheiro(valor) {
    valorFormatado = valor.toFixed(2).replace('.', ',')
    console.log(`R$ ${valorFormatado}`)
}

dinheiro(0.1 + 0.2)