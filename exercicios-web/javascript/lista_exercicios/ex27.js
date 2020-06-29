function previsao(crianca1, crianca2) {
    const maiorAltura = crianca1.altura > crianca2.altura ? crianca1 : crianca2
    const menorAltura = crianca1.altura < crianca2.altura ? crianca1 : crianca2

    if (crianca1.altura === crianca2.altura) {
        console.log('As crianças tem a mesma altura')
    } else if(crianca1.taxa === crianca2.taxa) {
        console.log('A criança menor não vai ultrapassar a maior')
    } else {
        const anos = tempo(maiorAltura, menorAltura)
        console.log(`${anos} anos`)
    }

    function tempo(maiorAltura, menorAltura) {
        let tempo = 0
        
        while (menorAltura.altura <= maiorAltura.altura) {
            menorAltura.altura += menorAltura.taxa
            maiorAltura.altura += maiorAltura.taxa
            tempo += 1
        }

        return tempo
    }
    
}

const criancas = {
    joao: {
        altura: 150,
        taxa: 2
    },
    maria: {
        altura: 130,
        taxa: 4
    }
}

// Em 10anos ela igual em 11anos passa
// O Exercicios pede em quantos anos ela ultrapassara e não quando igualar
previsao(criancas.joao, criancas.maria)