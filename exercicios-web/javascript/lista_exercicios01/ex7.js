function formulaBhaskara(ax2, bx, c) {
    let delta = (bx ** 2) - (4 * ax2 * c)

    if(delta < 0) {
        return console.log(`Delta é negativo: ${delta}`)
    }

    let x1 = (-bx + Math.sqrt(delta)) / 2 * ax2
    let x2 = (-bx - Math.sqrt(delta)) / 2 * ax2

    console.log(`Resultado: ${x1} e ${x2}`)
}

formulaBhaskara(1, 3, 2)
formulaBhaskara(3, 1, 2)