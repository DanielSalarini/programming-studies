const gulp = require('gulp')
const { series, parallel } = require('gulp')
const sass = require('gulp-sass')
const uglifyCSS = require('gulp-uglifycss')
const concat = require('gulp-concat')

function transformacaoSASS(callback) {
    gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifyCSS({ "uglifyComments": true }))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))

    return callback()
}

function copiarHTML(callback) {
    gulp.src('src/index.html')
        .pipe(gulp.dest('build'))

    return callback()
}

exports.default = parallel(transformacaoSASS, copiarHTML)