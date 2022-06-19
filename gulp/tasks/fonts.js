import fs from 'fs';
import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';
import { path } from '../config/path.js';
export const otfToTtf = () => {
    return app.gulp.src(`${path.srcFolder}/fonts/*.otf`, {})
        .pipe(fonter({
            formats: ['ttf']
        }))
        .pipe(app.gulp.dest(`${path.srcFolder}/fonts/`))
        
}
export const ttfToWoff = () => {
    return app.gulp.src(`${path.srcFolder}/fonts/*.ttf`, {})
        .pipe(fonter({
            formats: ['woff']
        }))
        .pipe(ttf2woff2())
        .pipe(app.gulp.dest(`${path.build.fonts}`))
        .pipe(app.gulp.src(`${path.srcFolder}/fonts/*.ttf`))
        .pipe(ttf2woff2())
        .pipe(app.gulp.dest(`${path.build.fonts}`));
}
export const fontsStyle = () => {
    let fontsFile = `${path.srcFolder}/scss/fonts.scss`;
    fs.readdir(path.build.fonts, function(err, fontsFiles){
        if (fontsFiles === undefined) {
            return false;
        }
        if(fontsFile){
            if(!fs.existsSync(fontsFile)){
                fs.writeFile(fontsFile, '', cb)
                let newFileOnly;
                for(let i = 0; i < fontsFiles.length; i++){
                    let fontFileName = fontsFiles[i].split('.')[0];
                    if(newFileOnly !== fontFileName){
                        let fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName;
                        let fontWeight = fontFileName.split('-')[1] ? fontFileName.split('-')[1] : fontFileName;
                        if(fontWeight.toLowerCase() === 'thin'){
                            fontWeight = 100;
                        }
                        else if(fontWeight.toLowerCase() === 'extralight'){
                            fontWeight = 200;
                        }
                        else if(fontWeight.toLowerCase() === 'light'){
                            fontWeight = 300;
                        }
                        else if(fontWeight.toLowerCase() === 'medium'){
                            fontWeight = 500;
                        }
                        else if(fontWeight.toLowerCase() === 'semibold'){
                            fontWeight = 600;
                        }
                        else if(fontWeight.toLowerCase() === 'bold'){
                            fontWeight = 700;
                        }
                        else if(fontWeight.toLowerCase() === 'extrabold' || fontWeight.toLowerCase() === 'heavy'){
                            fontWeight = 800;
                        }
                        else if(fontWeight.toLowerCase() === 'black'){
                            fontWeight = 900;
                        } 
                        else{
                            fontWeight = 400;
                        }
                        fs.appendFile(fontsFile, `\n@font-face{\n\tfont-family: "${fontName}";\n\tfont-display: swap;\n\tsrc: url('../fonts/${fontFileName}.woff2') format("woff2"), url("../fonts/${fontFileName}.woff") format("woff");\n\tfont-weight: ${fontWeight};\n\tfont-style: normal;\n}`,cb    
                        );
                        newFileOnly = fontFileName
                    }
                }
            } else{
                console.log("Файл scss/fonts/scss нжу существует. Для обновления файла нужно его удалить");
            }
        }
    });
    function cb(){

    }
}
export const fonts = () => {
    return gulp.src(path.src.fonts, {sourcemaps: true})
    .pipe(gulpPlumber(
        notify.onError({
            title: "FONTS",
            message: `Error: <%= error.message %>`
        })
    ))
    .pipe(otfToTtf())
    .pipe(ttfToWoff())
    .pipe(fontsStyle())
    .pipe(gulp.dest(path.build.fonts))
    .pipe(browserSync.stream());
}