import { path } from "../config/path.js";
import gulp from "gulp";
import browserSync from "browser-sync";
import gulpPlumber from "gulp-plumber";
import notify from 'gulp-notify';
import fileinclude from "gulp-file-include";
import replace from "gulp-replace";
export const html = () => {
    return gulp.src(path.src.html)
    .pipe(gulpPlumber(
        notify.onError({
            title: "HTML",
            message: `Error: <%= error.message %>`
        })
    ))
    .pipe(fileinclude())
    .pipe(replace(/@img\//g, 'img/'))
    .pipe(gulp.dest(path.build.html))
    .pipe(browserSync.stream());
}