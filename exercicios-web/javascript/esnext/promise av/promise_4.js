function gerarNumerosEntre(min, max, tempo) {
    if(min > max) [min, max] = [max , min]

    return new Promise(resolve => {
        setTimeout(function() {
            const fator = Math.random() * (max - min + 1)
            const aleatorio = parseInt(fator) + min
            resolve(aleatorio)
        }, tempo)
    })
}

function gerarAllNumeros() {
    return Promise.all([
        gerarNumerosEntre(1, 100, 1000),
        gerarNumerosEntre(1, 100, 500),
        gerarNumerosEntre(1, 100, 300),
        gerarNumerosEntre(1, 100, 1500),
        gerarNumerosEntre(1, 100, 1800),
        gerarNumerosEntre(1, 100, 1000),
    ])
}

gerarAllNumeros()
    .then(numeros => numeros.sort((a, b) => a - b))
    .then(numeros => numeros.filter(value => value > 40))
    .then(console.log)