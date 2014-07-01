var gulp         = require('gulp');
var sass         = require('gulp-sass');
var watch        = require('gulp-watch');
var plumber      = require('gulp-plumber');
var browserSync  = require('browser-sync');
var prefix       = require('gulp-autoprefixer');
var uglify       = require('gulp-uglify');
var notify       = require("gulp-notify");

gulp.task('sass', function(){
    gulp.src(['public/styles/scss/styles.scss','public/styles/scss/ie.scss', 'public/styles/scss/admin/admin.scss'])
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(sass())
        .pipe(prefix('last 3 versions', "ie 9"))
        .pipe(gulp.dest('public/styles/css'))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('script', function(){
    gulp.src('public/scripts/src/*.js')
        .pipe(gulp.dest('public/scripts/dist'))
        .pipe(browserSync.reload({stream:true, once: true}));
});

gulp.task('browser-sync', function() {
    browserSync.init([
        'public/styles/css/*.css',
        'public/images/**/*.jpg',
        'public/images/**/*.png',
        'public/images/**/*.svg',
        'public/scripts/dist/**/*.js',
        'module/**/*.phtml',
        'module/**/*.php'
    ], {
        proxy: 'ella.dev',
        ghostMode: false,
        notify: false,
        open: false
    });
});

gulp.task('build', function(){
    gulp.src(['public/styles/scss/styles.scss','public/styles/scss/ie.scss', 'public/styles/scss/admin/admin.scss'])
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(prefix('last 2 versions', "ie 9"))
        .pipe(gulp.dest('public/styles/css'));

    gulp.src('public/scripts/src/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('public/scripts/dist'));
});

gulp.task('default', ['sass', 'browser-sync'], function () {
    gulp.watch("public/styles/scss/**/*.scss", ['sass']);
    gulp.watch("public/scripts/src/**/*.js", ['script']);
});