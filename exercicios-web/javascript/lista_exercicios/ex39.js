function trocarTamanhosDiferentes(vetorA, vetorB) {
    const maior = vetorA.length > vetorB.length ? vetorA : vetorB
    const menor = vetorA.length < vetorB.length ? vetorA : vetorB

    const maiorTamanho = maior.length
    const menorTamanho = menor.length

    for(let i = 0; i < menorTamanho; i++) {
        maior.push(menor[i])
    }

    for(let i = 0; i < maiorTamanho; i++) {
        menor.push(maior[i])
    }

    for(let i = 0; i < menorTamanho; i++) {
        menor.shift()
    }

    for(let i = 0; i < maiorTamanho; i++) {
        maior.shift()
    }
}

function trocarTamanhosIguais(vetorC, vetorD) {
    for(let i = 0; i < vetorC.length; i ++) {
        vetorC[i] = vetorC[i] + vetorD[i]
        vetorD[i] = vetorC[i] - vetorD[i]
        vetorC[i] = vetorC[i] - vetorD[i]
    }
}

const vetorA = [10, 20, 30, 50, 80]
const vetorB = [2, 5, 3, 5]
const vetorC = [3, 6, 9]
const vetorD = [2, 4, 8]

trocarTamanhosDiferentes(vetorA, vetorB)
trocarTamanhosIguais(vetorC, vetorD)

console.log(`vetorA: ${vetorA}`)
console.log(`vetorB: ${vetorB}`)
console.log(`vetorC: ${vetorC}`)
console.log(`vetorD: ${vetorD}`)
