function fatorial(numero) {
    let resultado = 1

    for (let i = numero; i > 1; i--) {
        resultado *= i
    }

    console.log(resultado)
}

fatorial(3)
fatorial(5)
fatorial(10)
fatorial(13)
