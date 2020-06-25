// pessoa -> 123 -> objeto
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa.nome)

/*  pessoa -> 456 -> objeto
 *  pessoa = { nome: 'Ana'}
 *  console.log(pessoa.nome)*/
Object.freeze(pessoa)

pessoa.nome = 'Maria'
console.log(pessoa.nome)

const pessoaConstante = Object.freeze({ nome: 'Jorge' })
pessoaConstante.nome = 'Maria' 
console.log(pessoaConstante)