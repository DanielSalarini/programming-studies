const gulp = require('gulp')
const { series, parallel } = require('gulp')

const antes1= callback => {
    console.log('Tarefa Antes 1!')

    return callback()
}

const antes2= callback => {
    console.log('Tarefa Antes 2!')

    return callback()
}

const copiar = callback => {
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt']) //modo especifico

    gulp.src('pastaA/**/*.txt') // modo generico
        .pipe(gulp.dest('pastaB')) // .pipe é transformação

    return callback()
}

const fim= callback => {
    console.log('Tarefa Fim!')

    return callback()
}

module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim
)