function paresImpares(...numeros) {
    const array = [...numeros]
    const pares = array.filter((e) => e % 2 == 0)
    const impares = array.filter((e) => e % 2 != 0)

    console.log(`Pares: ${pares} Impares: ${impares}`)
}

paresImpares(2, 5, 16, 27, 58, 191)