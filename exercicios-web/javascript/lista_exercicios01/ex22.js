function pagarAssociacao(mes, valor) {
    if(mes < 1 || mes > 12) return console.log('Mes invalido')

    const periodoDeAtraso = mes - 1
    const montante = (valor * (1 + 0.05) ** periodoDeAtraso).toFixed(2)
    console.log(`R$ ${montante}`)
}

pagarAssociacao(4, 100)
pagarAssociacao(15, 100)