function maiorMenor(vetor) {
    let maior = Math.max(...vetor)
    let menor = Math.min(...vetor)

    console.log(`Maior numero: ${maior} e o menor numero: ${menor}`)
}

const vetor = [25, 32, 15, 190, 63, 78, 11, 2, 23, 189]

maiorMenor(vetor)