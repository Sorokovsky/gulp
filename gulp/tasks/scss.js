import { path } from "../config/path.js";
import gulp from "gulp";
import browserSync from "browser-sync";
import gulpPlumber from "gulp-plumber";
import notify from 'gulp-notify';
import autoPrefixer from "gulp-autoprefixer";
import gulpSass from "gulp-sass";
import sass from 'sass';
import replace from "gulp-replace";
import gulpCssMediaQueries from 'gulp-group-css-media-queries';
import webpcss from 'gulp-webpcss'; 
import cleanCss from "gulp-clean-css";
import rename from "gulp-rename";
const s = gulpSass(sass);
export const scss = () => {
    return gulp.src(path.src.scss, { sourcemaps:true })
    .pipe(gulpPlumber(
        notify.onError({
            title: "SCSS",
            message: `Error: <%= error.message %>`
        })
    ))
    .pipe(replace(/@img\//g, '../img/'))
    .pipe(s({outputStyle: 'expanded'}))
    .pipe(gulpCssMediaQueries())
    .pipe(webpcss({
        webpClass: '.webp',
        noWebp: '.no-webp'
    }))
    .pipe(autoPrefixer({
        grid: true,
        overrideBrowsersList: ['last 3 versions'],
        cascade: true,
    }))
    .pipe(gulp.dest(path.build.css))
    .pipe(cleanCss())
    .pipe(rename({
        extname: '.min.css'
    }))
    .pipe(gulp.dest(path.build.css))
    .pipe(browserSync.stream());
}