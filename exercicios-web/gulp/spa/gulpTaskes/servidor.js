const gulp = require('gulp')
const web = require('gulp-webserver')
const watch = require('gulp-watch')

function monitorar(callback) {
    gulp.src('build')
        .pipe(web({
            port: 8080,
            open: true,
            livereload: true
        }))
    
    return callback()
}

function servidor(callback) {
    watch('src/**/*.html', () => gulp.series('appHTML')())
    watch('src/**/*.scss', () => gulp.series('appCSS')())
    watch('src/**/*.js', () => gulp.series('appJS')())
    watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG')())

    return callback()
}

module.exports = {
    monitorar,
    servidor
}