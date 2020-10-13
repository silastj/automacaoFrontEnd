const Jimp = require('jimp');
const fs = require('fs');
const imagens = fs.readdirSync('./img/');

imagens.forEach(function(arquivo) {

    Jimp.read('img/' + arquivo).then(function(imagem){
        console.log(imagem);
        //Preto e Branco
        imagem
        .cover(400,400)
        .quality(60)
        .greyscale().write('img/final/' + arquivo);

    }).catch(function(err){
        console.log(err)
    });
});

const gulp = require('gulp');
const svgo = require('gulp-svgo');
 
gulp.task('images', () => {
 
    return gulp.src('Geral/svg/*')
        .pipe(svgo())
        .pipe(gulp.dest('svgFinal/'));
});

