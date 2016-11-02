var browserSync = require('browser-sync');
var gulp = require('gulp')
var run = require('gulp-run')

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "_book"
        }
    });
});

gulp.task('build-doc', function () {
    run('npm run docs:build').exec('', function() {
        run('echo docs:build DONE!').exec().pipe(browserSync.reload({stream:true}));
    });

})

gulp.task('watch', function() {
    gulp.watch(['**/*.adoc','**/*.less','**/*.css','!_book/**'], ['build-doc']);
})

gulp.task('default', ['build-doc', 'browser-sync', 'watch']);