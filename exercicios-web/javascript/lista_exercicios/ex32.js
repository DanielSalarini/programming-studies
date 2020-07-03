function media(vetor) {
    const resultado = vetor.reduce((numero, soma) => numero + soma) / vetor.length

    console.log(resultado)
}

const vetor = [2, 36, 49, 23, 198, 1, 20, 23]
const vetorGabarito = [1, 2, 3, 4, 5]

media(vetor)
media(vetorGabarito)