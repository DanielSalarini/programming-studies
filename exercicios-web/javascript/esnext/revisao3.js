// ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na Notação Literal
const nome = 'Carla'
const idade = 39
const pessoa = {
    nome,
    idade,
    ola() {
        console.log(`Ola me chamo ${nome} tenho ${idade} anos`)
    }
}
pessoa.ola()
console.log(pessoa.nome, pessoa.idade)

// Class
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au au'
    }
}
console.log(new Cachorro().falar())