import { path } from "../config/path.js";
import gulp from "gulp";
import browserSync from "browser-sync";
import gulpPlumber from "gulp-plumber";
import notify from 'gulp-notify';
import fileinclude from "gulp-file-include";
import replace from "gulp-replace";
import versionNumber from 'gulp-version-number';
import webpHtmlnovsg from 'gulp-webp-html-nosvg';
export const html = () => {
    return gulp.src(path.src.html, {sourcemaps: true})
    .pipe(gulpPlumber(
        notify.onError({
            title: "HTML",
            message: `Error: <%= error.message %>`
        })
    ))
    .pipe(fileinclude())
    .pipe(replace(/@img\//g, 'img/'))
    .pipe(webpHtmlnovsg())
    .pipe(versionNumber({
        'value': '%DT%',
        'append': {
            'key': '_v',
            'cover': 0,
            'to': ['css', 'js']
        },
        'output': {'file': 'gulp/versions.json'}
    }))
    .pipe(gulp.dest(path.build.html))
    .pipe(browserSync.stream());
}