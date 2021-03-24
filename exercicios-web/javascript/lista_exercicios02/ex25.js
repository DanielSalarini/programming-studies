const buscarPalavras = (parte, palavras) => {
    return palavras.filter(palavra => palavra.includes(parte))
}

console.log(buscarPalavras("pro", ["programação", "mobile", "profissional"]))