// Object.preventExtensions
// Não deixa acrescenta
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

// Testa se ele é Extensível
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal
// Não deixa acrescenta e excluir
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)

// Testa se ele foi criado com .seal
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome 
pessoa.idade = 29
console.log(pessoa)

// Object.freeze
// Não deixa acrescenta, excluir e modificar

const carro = {marcar: 'Ferrari', modelo: 'F40'}
Object.freeze(carro)

// Testa se ele foi criado com .freeze
console.log('Congelado:', Object.isFrozen(carro))

carro.velMax = 200
delete carro.modelo
carro.marcar = 'Honda'
console.log(carro)