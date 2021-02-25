function interval10To20(vetor) {
    let total = 0

    for(let i = 0; i <= vetor.length; i++) {
        if (vetor[i] >= 10 && vetor[i] <= 20) total += 1
    }

    console.log(total + ' numeros no intervalo de 10 a 20')
}

vetorNumeros = [7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]

interval10To20(vetorNumeros)