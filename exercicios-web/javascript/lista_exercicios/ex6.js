function jurosSimples(capitalInicial, taxaDeJuros, tempo) {
    let juros = capitalInicial + (capitalInicial * taxaDeJuros * tempo)
    console.log(`Juros Simples: ${juros}`)
}

function jurosComposto(capitalInicial, taxaDeJuros, tempo) {
    let juros = capitalInicial * (1 + taxaDeJuros) ** tempo
    console.log(`Juros Composto: ${juros}`)
}

jurosSimples(100, 10/100, 2);
jurosComposto(100, 10/100, 2);