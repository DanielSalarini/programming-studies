function planoDeSaude(idade) {
    let valorPago = 100

    if(idade > 60) valorPago += 130
    else if(idade > 30) valorPago += 95
    else if (idade >= 10) valorPago += 50
    else if (idade >= 0) valorPago += 80  
    else valorPago = 'Idade Invalida'

    console.log(valorPago)
}

planoDeSaude(2)
planoDeSaude(15)
planoDeSaude(50)
planoDeSaude(80)
planoDeSaude(-1)