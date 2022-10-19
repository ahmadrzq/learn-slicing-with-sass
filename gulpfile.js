const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildStyles() {
    return src('shoso-dashboard/**/*.scss')
        .pipe(sass())
        .pipe(dest('css'))
}

function watchTask() {
    watch(['shoso-dashboard/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)