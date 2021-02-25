function pedido (codigo, quantidade) {
    function formatacao (numero) {
        return numero.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    }

    let preco = 0

    switch (codigo) {
        case 100:
            preco = 3 * quantidade
            console.log(`${quantidade} Cachorro Quente são ${formatacao(preco)}`)
            break
        case 200:
            preco = 4 * quantidade
            console.log(`${quantidade} Hambúrguer Simples são ${formatacao(preco)}`)
            break
        case 300:
            preco = 5.5 * quantidade
            console.log(`${quantidade} Cheeseburguer são ${formatacao(preco)}`)
            break
        case 400:
            preco = 7.5 * quantidade
            console.log(`${quantidade} Bauru são ${formatacao(preco)}`)
            break
        case 500:
            preco = 3.5 * quantidade
            console.log(`${quantidade} Refrigerante são ${formatacao(preco)}`)
            break
        case 600:
            preco = 2.8 * quantidade
            console.log(`${quantidade} Suco são ${formatacao(preco)}`)
            break
        default:
            console.log('produto não existente.')
    }
}

pedido(100, 2)
pedido(200, 4)
pedido(300, 6)
pedido(400, 4)
pedido(500, 2)
pedido(600, 1)
pedido(156, 1)