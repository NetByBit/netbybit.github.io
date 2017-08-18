const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const image = require('gulp-image');
const cache = require('gulp-cache');
const del = require('del');
const runSequence = require('run-sequence');
const gulpIf = require('gulp-if');
const ghPages = require('gulp-gh-pages');
const lazypipe = require('lazypipe');
const sass = require('gulp-sass');
const rename = require("gulp-rename");
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const merge = require('merge2');
const htmlReplace = require('gulp-html-replace');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

// Tasks

gulp.task('sass', function () {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(rename('styles.css'))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('styles', function () {
    const plugins = [
        autoprefixer({browsers: ['last 1 version']}),
        cssnano()
    ];
    return gulp.src('css/**/*.css')
        .pipe(concat('styles.min.css'))
        .pipe(postcss(plugins))
        .pipe(gulp.dest('dist/css'));
});


gulp.task('html', function () {
    return gulp.src('*.html')
        .pipe(htmlReplace({
            'css': 'css/styles.min.css',
            'js': 'js/main.js',
            'vendor': 'js/vendor.js'
        }))
        .pipe(gulp.dest('dist/'));
});

gulp.task('js', function () {
    var main = gulp.src(['js/jquery-3.2.1.min.js', 'js/popper.min.js', 'js/bootstrap.min.js'])
        .pipe(concat('vendor.js'))

    var sec = gulp.src('js/main.js')
        .pipe(rename('main.js'))

    return merge(main, sec)
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});


gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: './'
        },
    });
});

gulp.task('images', function () {
    return gulp.src('img/**/*.+(png|jpg|jpeg|gif|svg)')
        .pipe(cache(image()))
        .pipe(gulp.dest('dist/img'))
});

gulp.task('fonts', function () {
    return gulp.src('fonts/**/*')
        .pipe(gulp.dest('dist/fonts'));
});

gulp.task('clean:dist', function () {
    return del.sync('dist');
});

gulp.task('deploy', function () {
    return gulp.src('./dist/**/*')
        .pipe(ghPages({
            branch: 'master'
        }));
});

gulp.task('watch', ['browserSync', 'sass'], function () {
    gulp.watch('css/**/*.css', browserSync.reload);
    gulp.watch('scss/**/*.scss', ['sass']);
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('*.html', browserSync.reload);
    gulp.watch('js/**/*.js', browserSync.reload);
});

gulp.task('build', function () {
    runSequence('clean:dist',
        ['styles', 'html', 'js', 'images', 'fonts']
    );
});

gulp.task('default', function () {
    runSequence(['browserSync', 'watch']
    );
});
