const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const pump = require('pump');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const uncss = require('postcss-uncss');
const browserSync = require('browser-sync').create();

gulp.task('js', (callback) => {
  pump(
    [
      gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/owl.carousel/dist/owl.carousel.min.js',
        'js/scripts.js'
      ]),
      concat('scripts.js'),
      gulp.dest('public/assets'),
      browserSync.stream(),
    ],
    callback
  );
});

gulp.task('sass', (callback) => {
  pump(
    [
      gulp.src('scss/styles.scss'),
      sass(),
      autoprefixer({
        browsers: ['last 3 versions'],
        cascade: false,
      }),
      // postcss([
      //   uncss({
      //     html: ['public/index.html'],
      //   }),
      // ]),
      gulp.dest('public/assets'),
      browserSync.stream(),
    ],
    callback
  );
});

gulp.task('default', () => {
  browserSync.init({
    server: './public/',
    host: '0.0.0.0',
  });

  gulp.watch(['scss/*.scss'], ['sass']);
  gulp.watch(['js/*.js'], ['js']);

  gulp
    .watch('public/*.html')
    .on('change', browserSync.reload);
});