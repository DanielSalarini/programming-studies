const sorteio = num => {
    let numeroDoSorteio = Math.floor(Math.random() * (10 - 1)) + 1

    if(numeroDoSorteio === num) return `Parabéns! O número sorteado foi o ${numeroDoSorteio}`
    else return `Que Pena! O número sorteado foi o ${numeroDoSorteio}`
}

console.log(sorteio(5))
console.log(sorteio(10))