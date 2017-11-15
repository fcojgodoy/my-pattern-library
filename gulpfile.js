const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync').create();

// Static Server task + watching scss/html files
// gulp.task('serve', ['sass'], function() {
//
//     browserSync.init({
//         server: 'public/pattern-library'
//     });
//
//     gulp.watch('sass/**/*.scss', ['sass']);
//     gulp.watch('public/pattern-library/**/*.html').on('change', browserSync.reload);
// });
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

// Sass compiler task with:
// - Sass output styles
// - Sass error log
// - autoprefiser
// - sourcemaps
// - browser-sync stream
gulp.task('sass', function () {
  return gulp.src('sass/*.scss')
    // .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest('public/pattern-library/assets/css'))
    .pipe(browserSync.stream());
});

// Watch task
// gulp.task('sass:watch', function () {
//   gulp.watch('sass/**/*.scss', ['sass']);
// });
// gulp.task('watch', ['serve'], function () {
//     gulp.watch('sass/**/*.scss', ['sass']);
//     gulp.watch('public/pattern-library/**/*.html').on('change', browserSync.reload);
// });

// Default task
gulp.task('default', function() {
  console.log('View gulpfile for Gulp tasks');
});
