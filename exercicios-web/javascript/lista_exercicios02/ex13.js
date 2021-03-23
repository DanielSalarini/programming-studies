function filtrarNumeros(array) {
    return array.filter(num => typeof num === "number")
}

console.log(filtrarNumeros([1, 2, "3", 4]))
console.log(filtrarNumeros(["1", 2, "3", "4"]))
console.log(filtrarNumeros(["1", "2", "3", "4"]))