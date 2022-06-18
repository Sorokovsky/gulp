import { path } from "../config/path.js";
import gulp from 'gulp';
export const copy = () => {
    const files = path.src.files;
    return gulp.src(files, { allowEmpty: true}).pipe(gulp.dest(path.build.files));
}