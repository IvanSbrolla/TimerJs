const gulp = require('gulp')
const uglifyJs = require('gulp-uglify')
const strip = require('gulp-strip-comments')
const concat = require('gulp-concat')

function depJquery(){
    return gulp.src('../node_modules/jquery/dist/jquery.js')
        .pipe(uglifyJs())
        .pipe(strip())
        .pipe(concat('jQuery.min.js'))
        .pipe(gulp.dest('../root/javascript/'))
}

module.exports = {
    depJquery
}