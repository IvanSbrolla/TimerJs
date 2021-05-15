const gulp = require('gulp')
const uglifyJs = require('gulp-uglify')
const uglifyCss = require('gulp-uglifycss')
const sass = require('gulp-dart-sass')
const strip = require('gulp-strip-comments')
const concat = require('gulp-concat')
const htmlMin = require('gulp-htmlmin')

function appHtml() {
    return gulp.src('../build/**/*.html')
        .pipe(htmlMin({ collapseWhitespace: true }))
        .pipe(gulp.dest('../root/html'))
}
function appCss() {
    return gulp.src('../build/sass/index.scss')
        .pipe(sass())
        .pipe(uglifyCss({ "uglyComments": true }))
        .pipe(concat('styles.min.css'))
        .pipe(gulp.dest('../root/css'))
}
function appJs() {
    return gulp.src('../build/**/*.js')
        .pipe(uglifyJs())
        .pipe(strip())
        .pipe(concat('scripts.min.js'))
        .pipe(gulp.dest('../root/javascript'))
}

module.exports = { appHtml, appJs, appCss }