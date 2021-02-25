function inverso(valor) {
    if(typeof valor === 'number') return valor * -1
    if(typeof valor === 'boolean') return !valor

    return `booleano ou número esperados, mas o parâmetro é do tipo ${typeof valor}`
}

console.log(inverso(2))
console.log(inverso(false))
console.log(inverso('256'))
console.log(inverso({oi: 236}))