import { app } from "../../gulpfile.js";
export const otfToTtf = () => {
    return app.plugins.gulp.src(`${app.path.srcFolder}/fonts/*.otf`, {})
        .pipe(app.plugins.fonter({
            formats: ['ttf']
        }))
        .pipe(app.plugins.gulp.dest(`${app.path.srcFolder}/fonts/`))
        
}
export const ttfToWoff = () => {
    return app.plugins.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {})
        .pipe(app.plugins.fonter({
            formats: ['woff']
        }))
        .pipe(app.plugins.ttf2woff2())
        .pipe(app.plugins.gulp.dest(`${app.path.build.fonts}`))
        .pipe(app.plugins.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
        .pipe(app.plugins.ttf2woff2())
        .pipe(app.plugins.gulp.dest(`${app.path.build.fonts}`));
}
export const fontsStyle = async() => {
    let fontsFile = `${app.path.srcFolder}/scss/fonts.scss`;
    app.plugins.fs.readdir(app.path.build.fonts, function(err, fontsFiles){
        if (fontsFiles === undefined) {
            return false;
        }
        if(fontsFile){
            if(!app.plugins.fs.existsSync(fontsFile)){
                app.plugins.fs.writeFile(fontsFile, '', cb)
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