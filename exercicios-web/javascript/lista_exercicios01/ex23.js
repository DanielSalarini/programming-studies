function notaAluno(codigo, ...notas) {
    const nt = [...notas]
    nt.sort((a, b) => b - a)

    const media = (nt[0] * 4 + nt[1] * 3 + nt[2] * 3) / 10
    console.log(`
        Codigo do aluno: ${codigo}. 
        Notas: ${nt[0]}, ${nt[1]}, ${nt[2]}.
        ${media >= 5 ? 'APROVADO' : 'REPROVADO'}.
    `)
}

notaAluno(123, 2.8, 6, 3.5)
notaAluno(635, 5.2, 6.8, 9.1)