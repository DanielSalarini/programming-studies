function somentePares(array) {
    return array.filter(num => num % 2 === 0)
}

console.log(somentePares([0, 1, 2, 4, 5]))
console.log(somentePares([22, 32, 46, 98, 101]))
console.log(somentePares([3, 17, 35, 99, 102]))