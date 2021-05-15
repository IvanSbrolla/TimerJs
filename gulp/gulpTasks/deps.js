const gulp = require('gulp')
const uglifyJs = require('gulp-uglify')
const uglifyCss = require('gulp-uglifycss')
const strip = require('gulp-strip-comments')
const concat = require('gulp-concat')
const sass = require('gulp-dart-sass')

function depFontAwesomeCss() {
    return gulp.src('../node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss')
        .pipe(sass())
        .pipe(uglifyCss({ "uglyComments": true }))
        .pipe(concat('depsFontAwesome.min.css'))
        .pipe(gulp.dest('../root/css'))
}
function depFontAwesomeJs() {
    return gulp.src('../node_modules/@fortawesome/fontawesome-free/js/all.js')
        .pipe(uglifyJs())
        .pipe(strip())
        .pipe(concat('depsFontAwesome.min.js'))
        .pipe(gulp.dest('../root/javascript'))
}
function depJquery(){
    return gulp.src('../node_modules/jquery/dist/jquery.js')
        .pipe(uglifyJs())
        .pipe(strip())
        .pipe(concat('jQuery.min.js'))
        .pipe(gulp.dest('../root/javascript/'))
}

module.exports = {
    depJquery,
    depFontAwesomeCss,
    depFontAwesomeJs
}