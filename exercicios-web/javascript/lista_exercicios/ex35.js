const vetorPilha = [1, 2, 3, 4, 5]
const vetorAdiciona = [6, 7, 8, 9, 10]

function add(vetorPilha, vetorAdiciona) {
    for(let i = 0; i < vetorAdiciona.length; i++) {
        vetorPilha.push(vetorAdiciona[i])
    }

    console.log('Vetor Adicionado: ' + vetorPilha)
}

add(vetorPilha, vetorAdiciona)