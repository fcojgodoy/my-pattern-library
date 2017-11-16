const gulp = require('gulp'),
    del = require('del'),
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
    .pipe(sass({outputStyle: 'nested'}).on('error', sass.logError))
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest('public/pattern-library/assets/css'))
    .pipe(browserSync.stream());
});

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
