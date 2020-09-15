function gerarNumerosEntre(min, max, numRep) {
    if(min > max) [min, max] = [max , min]

    return new Promise((resolve, reject) => {
        const fator = Math.random() * (max - min + 1)
        const aleatorio = parseInt(fator) + min

        if(numRep.includes(aleatorio)) {
            // Se n tiver o Try/Catch aparece o erro do reject
            reject('Numero repetido!')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtdeNumeros, tentativas = 1) {
    try {
        const numeros = []
        for(let _ of Array(qtdeNumeros).fill()) {
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        
        return numeros
    } catch(e) {
        if(tentativas > 10) throw 'Quantidade muito grande!'
        else return gerarMegaSena(qtdeNumeros, tentativas + 1)
    }
    
}

gerarMegaSena(15)
    .then(console.log)
    .catch(console.log)