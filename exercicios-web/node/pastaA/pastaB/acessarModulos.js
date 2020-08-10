// exemplo de require de arquivo para arquivo
const moduloA = require('../../moduloA')
console.log(moduloA.ola)

// exemplo de require do node_modules/terceiros
// const saudacao = require('saudacao')
// console.log(saudacao.ola)

// exemplo de require de padrao index.js do modulo
const c = require('./pastaC')
console.log(c.ola2)

// exemplo de require de module core do node
const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)