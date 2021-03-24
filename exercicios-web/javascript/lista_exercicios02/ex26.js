const removerVogais = palavra => {
    return palavra.replace(/[aeiou]/ig, '')
}

console.log(removerVogais("Cod3r"))
console.log(removerVogais("Fundamentos"))