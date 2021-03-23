function copiaDeDados(object, param) {
    const copia = object
    delete copia[param]

    return copia
}

console.log(copiaDeDados({a:1, b:2}, "b"))