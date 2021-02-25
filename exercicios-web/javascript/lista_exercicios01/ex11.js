function bissextos(ano) {
    if (ano <= 0) {
        console.log(`O ano ${ano} é bissexto: ${false}`)
    } else if (ano % 400 == 0) {
        console.log(`O ano ${ano} é bissexto: ${true}`)
    } else if (ano % 100 == 0) {
        console.log(`O ano ${ano} é bissexto: ${false}`)
    } else if (ano % 4 == 0) {
        console.log(`O ano ${ano} é bissexto: ${true}`)
    } else {
        console.log(`O ano ${ano} é bissexto: ${false}`)
    }
}

bissextos(0)
bissextos(4)
bissextos(100)
bissextos(400)
bissextos(800)
bissextos(2020)
bissextos(2021)