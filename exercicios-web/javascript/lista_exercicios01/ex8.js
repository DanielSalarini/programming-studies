function desempenho(pontuacoes) {
    const resultados = pontuacoes.split(', ')
    // console.log(resultados)

    let maiorRecorde = 0
    let numeroVezesBateuRecorde = 0

    let piorRecorde = resultados[0]
    let posicaoMenorRecorde = 0
    
    for (let i = 1; i < resultados.length; i++) {

        if (resultados[i] > maiorRecorde) {
            maiorRecorde = resultados[i]
            numeroVezesBateuRecorde++
        }

        if (resultados[i] < piorRecorde) {
            piorRecorde = resultados[i]
            posicaoMenorRecorde = i + 1
        }
        
    }

        console.log(`Bateu o seu proprio recorde ${numeroVezesBateuRecorde} vezes e o pior foi o ${posicaoMenorRecorde}º jogo`)
}

let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"

desempenho(stringPontuacoes)