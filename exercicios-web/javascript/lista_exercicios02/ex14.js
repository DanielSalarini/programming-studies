function objetoParaArray(objeto) {
    const keys = Object.keys(objeto)
    const values = Object.values(objeto)
    const arrayTotal = []

    for(let i in keys) {
        let auxArray = []
        auxArray.push(keys[i], values[i])

        arrayTotal.push(auxArray)
    }
    
    return arrayTotal

}

console.log(objetoParaArray({
    a: 1,
    b: 2,
    c: 3,
    j: 25
}))