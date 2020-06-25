import Pessoa from './pessoa'
import './assets'

import './modulos/moduloA'
import dev from './modulos/teste'

const atendente = new Pessoa
atendente.cumprimentar()

console.log(`Meu nome é ${dev.nome} ${dev.sobrenome} tenho ${dev.idade}`)
console.log(`Acredita em Deus? ${dev.crente ? 'sim' : 'não'}`)