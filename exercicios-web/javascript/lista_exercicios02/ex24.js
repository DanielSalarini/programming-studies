const contar = (caractere, string) => {
    let resultado = 0
    string.split('').forEach(value => {
        if(value === caractere) resultado++
    })
    return resultado
}

console.log(contar("r", "A sorte favorece os audazes"))
console.log(contar("c", "Conhece-te a ti mesmo"))