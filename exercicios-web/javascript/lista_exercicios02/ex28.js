const filtrar = (numeros, digito) => {
    let resultado = []

    for(numero of numeros){    
        const quantidadeDeDigitos = String(numero).length    
        if(quantidadeDeDigitos === digito)      
        resultado.push(numero)  
    }  
    
    return resultado
}

console.log(filtrar([38, 2, 365, 10, 125, 11], 2))