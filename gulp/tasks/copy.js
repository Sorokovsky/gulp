import { app } from '../../gulpfile.js'; 
export const copy = () => {
    const files = app.path.src.files;
    return app.plugins.gulp.src(files, { allowEmpty: true}).pipe(app.plugins.gulp.dest(app.path.build.files));
}