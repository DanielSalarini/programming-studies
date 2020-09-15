// Aulas avançadas de Promises

let p1 = new Promise(function(cumprirPromessa) {
    cumprirPromessa(3)
})

p1.then(function(valor) {
    console.log(valor)
})


let p2 = new Promise(function(cumprirPromessa) {
    cumprirPromessa(['Ana', 'Bia', 'João', 'Alex'])
})

p2.then(valor => console.log(valor))


let p3 = new Promise((resolve, reject) => resolve(['Ana', 'Bia', 'João', 'Alex']))

const primeiraLetra = string => string[0]

// O resultado de um then passa para outro then
p3
    .then(valor => valor[0])
    // Pode passar um function no then sem o uso das ()
    .then(primeiraLetra)
    .then(letra => letra.toLowerCase())
    .then(letraMinuscula => console.log(letraMinuscula))
