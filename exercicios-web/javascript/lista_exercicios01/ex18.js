// Número fora do intervalo.

const numeroExtenso = (numero) => {
    switch (numero) {
        case 0:
            console.log(`${numero}: Zero`)
            break
        case 1:
            console.log(`${numero}: Um`)
            break 
        case 2:
            console.log(`${numero}: Dois`)  
            break
        case 3:
            console.log(`${numero}: Tres`)  
            break
        case 4:
            console.log(`${numero}: Quatro`)  
            break
        case 5:
            console.log(`${numero}: Cinco`)  
            break
        case 6:
            console.log(`${numero}: Seis`)  
            break
        case 7:
            console.log(`${numero}: Sete`)  
            break
        case 8:
            console.log(`${numero}: Oito`)  
            break
        case 9:
            console.log(`${numero}: Nove`)  
            break
        case 10:
            console.log(`${numero}: Dez`)  
            break
        default:
            console.log('Número fora do intervalo.')
    }
}

for (let i = 0; i < 11; i++) {
    numeroExtenso(i)
}