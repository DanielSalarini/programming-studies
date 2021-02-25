function classificacaoAluno(nota) {
    function arredondamento(nota) {
        if (nota % 5 > 2) {
            return nota = nota + ((nota % 5 - 1))
        } else {
            return nota
        }
    }

    let notaCorrigida = arredondamento(nota)

    if (notaCorrigida >= 40){
        console.log(`Aluno Aprovado com a nota ${notaCorrigida}`)
    } else {
        console.log(`Aluno Reprovado com a nota ${notaCorrigida}`)
    }
}


classificacaoAluno(100)
classificacaoAluno(30)
classificacaoAluno(38)
classificacaoAluno(88)
classificacaoAluno(61)