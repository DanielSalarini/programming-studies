function despesas(array) {
    return array.reduce((total, value) => total.preco + value.preco)
}

console.log(despesas([  
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},  
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
]))