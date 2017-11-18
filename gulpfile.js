const gulp = require('gulp'),
    del = require('del'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync').create();

// Sass compiler task
gulp.task('sass', function () {
  return gulp.src('./public/app/styles/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(sourcemaps.write('.'))
    // TODO: Duplicate dest if we want a copy for the app
    .pipe(gulp.dest('public/pattern-library/assets/css'))
    .pipe(browserSync.stream());
});

// Static Server task + watching scss/html files
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: 'public/pattern-library'
    });

    gulp.watch('./public/app/styles/**/*.scss', ['sass']);
    gulp.watch('public/pattern-library/**/*.html')
    .on('change', browserSync.reload);
})

// TODO: Remade build task
// Sass build task
gulp.task('sass:build', function () {
  return gulp.src('sass/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('dist/pattern-library/assets/css'))
});

// Build task
gulp.task('build', ['clean-dist', 'sass:build'], function () {
  return gulp.src([
      'public/**/*.*',
      '!public/pattern-library/assets/css/*.*'
  ])
    .pipe(gulp.dest('dist'))
});

// Deleting any file inside the /dist folder
gulp.task('clean-dist', function () {
  return del('dist/**/*.*');
});

// Default task
gulp.task('default', function() {
  console.log('THERE ISN\'T DEFAULT TASK. View gulpfile.js for Gulp tasks');
});
