const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync').create();

// Static Server task + watching scss/html files
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: 'public/pattern-library'
    });

    gulp.watch('sass/**/*.scss', ['sass']);
    gulp.watch([
        'public/pattern-library/assets/css/*.css',
        'public/pattern-library/**/*.html'
    ]).on('change', browserSync.reload);
})

// Sass compiler task
gulp.task('sass', function () {
  return gulp.src('sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest('public/pattern-library/assets/css'))
    .pipe(browserSync.stream());
});

// Default task
gulp.task('default', function() {
  console.log('THERE ISN\'T DEFAULT TASK. View gulpfile.js for Gulp tasks');
});
