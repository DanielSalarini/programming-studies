function segundoMaior(array) {
    const numerosOrdenados = array.sort((numeroA, numeroB) => numeroB - numeroA)
    const segundoMaior = numerosOrdenados[1]

    return segundoMaior
}

console.log(segundoMaior([12, 16, 1, 5]))