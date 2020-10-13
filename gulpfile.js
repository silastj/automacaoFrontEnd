const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');

const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

function compilaSass() {
    return gulp
    .src('css/scss/*.scss')
    .pipe(sass({
        outputStyle:'compressed'
    }))
    //autoprefixer css de outros navegadores
    .pipe(autoprefixer({
        overrideBrowserslist: [
            "last 2 versions"],
        cascade: false
    }))
    .pipe(gulp.dest('css/'))
    
}

//ativar função, podemos usar o default como nome da função
gulp.task('default', compilaSass);


// função de acompanhamento
function watch() {
    gulp.watch('css/scss/*.scss', compilaSass)
}

//Função para juntar o JS
function gulpJS() {
    return gulp.src('js/*.js')
    .pipe(concat('all.js'))
    .pipe(babel({
        presets: ['env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('finalJS/'))
}

gulp.task('default', gulpJS);


gulp.task('default', watch);

// EXECUTANDO TAREFAS PARARELAS UMA DE CADA VEZ
function watch() {
     gulp.watch('css/scss/*.scss', gulp.parallel('compilaSass','gulpJS'))
}