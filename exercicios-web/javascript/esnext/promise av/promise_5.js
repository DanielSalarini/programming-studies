function yesOrNo(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceErro) {
            // No
            reject('Ocorreu um erro!')
        } else {
            // Yes
            resolve(valor)
        }
    })
}

yesOrNo('Carro', 0.8)
    .then(valor => console.log(`Valor: ${valor}`))
    .catch(err => console.log(`Erro: ${err}`))

yesOrNo('Barco', 0.5)
    .then(valor => console.log(`Valor: ${valor}`))
    .catch(err => console.log(`Erro: ${err}`))

yesOrNo('Bola', 0.2)
    .then(valor => console.log(`Valor: ${valor}`))
    .catch(err => console.log(`Erro: ${err}`))