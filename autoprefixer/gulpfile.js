const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

// make a task
gulp.task('styles', function(done) {
    // get source file
    gulp.src('css/styles.css')
        .pipe(autoprefixer())
        .pipe(gulp.dest('build'));
    done();
});

// Watch task
gulp.task('watch', function() {
    // We watch css/styles.css file, every time we save, we run the styles task
    gulp.watch('css/styles.css', gulp.series('styles'));
});
