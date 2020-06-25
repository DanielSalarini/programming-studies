//função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // NaN
imprimirSoma(2, 3, 4, 5, 6) // soma os dois primeiro e ignora o resto
imprimirSoma() //NaN

//função com retorno
function soma(a, b = 0) {
    return a + b
}

console.log(soma(2,3)) // 2 + 3
console.log(soma(2)) // 2 + 0
console.log(soma()) // NaN