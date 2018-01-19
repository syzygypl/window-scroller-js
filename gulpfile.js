const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('watch', () => gulp.watch('src/**', ['build']));

gulp.task('build', ['scripts']);

gulp.task('scripts', () => gulp.src('src/**')
    .pipe(babel({presets: ['env']}))
    .pipe(gulp.dest('dist'))
);
