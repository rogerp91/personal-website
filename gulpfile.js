// Dependencias
var    gulp = require('gulp'),
     concat = require('gulp-concat'),
     uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
  minifycss =require('gulp-minify-css');

// Tarea 1 llamada minify-js
gulp.task('minify-js', function () {
  gulp.src('source/*.js')
  .pipe(concat('minify.js'))
  .pipe(uglify())
  .pipe(gulp.dest('build/'))
});

// Tarea 2 llamada minify-css
gulp.task('minify-css', function () {
  gulp.src('source/*.css')
  .pipe(concat('minify.css'))
  .pipe(minifycss())
  .pipe(gulp.dest('build/'))
})
// Comprimimos las imagenes y luego las guardamos en el directorio
gulp.task('minify-imagemin', function() {
    gulp.src(['img/*.jpg','img/*.svg','img/*.jpeg'])
        .pipe(imagemin())
        .pipe(gulp.dest('build/'))
});
