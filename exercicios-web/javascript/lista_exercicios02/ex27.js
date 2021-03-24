function inverte(obj) {
    const paresDeChaveValorInvertidos = Object.entries(obj).map( parChaveValor => parChaveValor.reverse())  
    return Object.fromEntries(paresDeChaveValorInvertidos)
}

console.log(inverte({
    a: 1,
    b: 2,
    c: 3
}))