// Função do exemplo
function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve(), tempo)
    })
}

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(1), 5000)
    })
}

// Promise
esperarPor(2000)
    .then(() => console.log('Executando Promise 1...'))
    .then(esperarPor)   
    .then(() => console.log('Executando Promise 2...'))
    .then(esperarPor)
    .then(() => console.log('Executando Promise 3...'))

// Async/Await
async function executar() {
    let valor = await retornarValor()

    await esperarPor(1000)
    console.log(`Executando Async/Await ${valor}...`)
    await esperarPor(2000)
    console.log(`Executando Async/Await ${valor + 1}...`)
    await esperarPor(2000)
    console.log(`Executando Async/Await ${valor + 2}...`)

    return `Retornando valor ${valor + 3}`
}

executar().then(console.log)