function notas(notas) {
    for(let i = 0; i < notas.length; i++) {
        if(notas[i] > 10 || notas[i] < 0) notas[i] = 'Nota Invalida'
        if(notas[i] > 8.9) notas[i] = 'A'
        if(notas[i] > 6.9) notas[i] = 'B'
        if(notas[i] > 4.9) notas[i] = 'C'
        if(notas[i] >= 0) notas[i] = 'D'
    }

    console.log(notas)
}

const vetorNotas = [10, 13, 9, 8.2, 2.5, 7.7, 6.8, -2]

notas(vetorNotas)