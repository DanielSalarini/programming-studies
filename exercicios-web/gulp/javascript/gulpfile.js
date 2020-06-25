const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformacaoJS(callback){
    return gulp.src('src/**/*.js')
        .pipe(babel({  // retirar os comentarios do codigo e usar a ultima versao do JS compativel
            comments: false,
            presets: ["env"]
        }))
        .pipe(uglify()) // mimificado
        .on('error', err => console.log(err)) // tratar erro
        .pipe(concat('codigo.min.js')) // vai pegar todos os arquivos e juntar
        .pipe(gulp.dest('build')) // destino do arquivo transformado

    // return callback() // ou return aqui ou la emcima
}

function fim (callback) {
    console.log('FIM!')
    return callback()
}

exports.default = series(transformacaoJS, fim)