function tipoCarro(carro) {
    switch(carro) {
        case 'hatch':
            console.log('Compra efetuada com sucesso')
            break
        case 'sedans': 
        case 'motocicletas': 
        case 'caminhonetes':
            console.log('Tem certezaque não prefere este modelo?')
            break
        default:
            console.log('Não trabalhamos com este tipo de automóvel aqui')
            break
    }
}

tipoCarro('hatch')
tipoCarro('sedans')
tipoCarro('motocicletas')
tipoCarro('caminhonetes')
tipoCarro('outrotipo')
