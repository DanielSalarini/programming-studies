const gulp = require('gulp')
const { series, parallel } = require('gulp')

const { appHTML, appCSS, appJS, appIMG } = require('./gulpTaskes/app')
const { depsCSS, depsFonts } = require('./gulpTaskes/deps')
const { monitorar, servidor } = require('./gulpTaskes/servidor')

module.exports.default = series(
    parallel(
        series(appHTML, appCSS, appJS, appIMG),
        series(depsCSS, depsFonts)
    ),
    servidor,
    monitorar
)