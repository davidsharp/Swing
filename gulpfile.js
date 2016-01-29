const gulp = require('gulp');
const $    = require('gulp-load-plugins')();

gulp.task('copy', function(){
  gulp.src('./node_modules/mdi/css/*.min.css')
    .pipe(gulp.dest('./assets/css'));
  gulp.src('./node_modules/mdi/fonts/**')
    .pipe(gulp.dest('./assets/fonts'));
});

gulp.task('stylus', function() {
  return gulp.src('./styles/*.styl')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
      .pipe($.stylus())
      .pipe($.autoprefixer())
      .pipe($.cssnano())
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./assets/css'))
    .pipe($.livereload());
});

gulp.task('jade', function(){
  return gulp.src('./layouts/*.jade')
    .pipe($.plumber())
    .pipe($.jade())
    .pipe($.htmlmin())
    .pipe(gulp.dest('./assets/html'))
    .pipe($.livereload());
});

gulp.task('watch', function() {
  $.livereload.listen();
  gulp.watch('./layouts/**', ['jade']);
  gulp.watch('./styles/**', ['stylus']);
});

gulp.task('electron', ['build'], function(){
  return gulp.src('')
    .pipe($.plumber())
    .pipe($.shell('npm start'));
});

gulp.task('default', ['watch', 'electron']);
gulp.task('build', ['jade', 'stylus', 'copy']);

