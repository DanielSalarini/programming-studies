function somarNumeros(array) {
    return array.reduce((total, value) => total + value)
}

console.log(somarNumeros([10, 10, 10]))
console.log(somarNumeros([25, 25, 0]))