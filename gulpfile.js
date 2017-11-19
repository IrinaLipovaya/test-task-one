var gulp = require("gulp");

var nunjucksRender = require('gulp-nunjucks-render');
var data = require('gulp-data');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var imageminJpegtran = require('imagemin-jpegtran');

gulp.task('nunjucks', function() {
    return gulp.src('src/templates/*.nunjucks')
        .pipe(data(function() {
            return require('./src/data.json')
        }))
        .pipe(nunjucksRender({
            path: ['src/templates/']
        }))
        .pipe(gulp.dest('src'))
});

gulp.task('sass', function() {
    return gulp.src('src/css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('src/css'))
});

gulp.task('watch', function() {
    gulp.watch('src/css/*.scss', ['sass']);
});

gulp.task('fonts', function() {
    return gulp.src('src/fonts/*')
        .pipe(gulp.dest('build/fonts'))
});

gulp.task('moveTemplate', function() {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('build'))
});

gulp.task('compressScripts', function() {
    return gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));
});

gulp.task('compressStyles', function () {
    return gulp.src('src/css/*.css')
        .pipe(cssnano())
        .pipe(gulp.dest('build/css'));
});

gulp.task('compressImages', function(){
    return gulp.src('src/images/*.jpg')
        .pipe(imageminJpegtran({progressive: true})())
        .pipe(gulp.dest('build/images'));
});

gulp.task('build', ['sass', 'nunjucks', 'moveTemplate', 'fonts', 'compressScripts', 'compressStyles', 'compressImages'], function (){

});
