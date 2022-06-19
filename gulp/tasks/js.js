import webpack from "webpack-stream";
import gulp from 'gulp';
import { path } from "../config/path.js";
import gulpPlumber from "gulp-plumber";
import notify from "gulp-notify";
import browserSync from "browser-sync";
export const js = async() => {
    return gulp.src(path.src.js, {sourcemaps: true})
    .pipe(gulpPlumber(
        notify.onError({
            title: "JS",
            message: `Error: <%= error.message %>`
        })
    ))
    .pipe(webpack({
        mode: 'development',
        output: {
            filename: 'app.min.js'
        }
    }))
    .pipe(gulp.dest(path.build.js))
    .pipe(browserSync.stream());
}