function numerosNegativos(vetor) {
    const negativo = e => e < 0

    const newArray = vetor.filter(negativo)

    console.log(`Existe ${newArray.length} numeros negativos`)
}

const vetor = [-1, 2, -3, 4, -5, 6]

numerosNegativos(vetor)