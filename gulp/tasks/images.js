import webp from 'gulp-webp';
import imagemin from 'gulp-imagemin';
import browserSync from 'browser-sync';
import { path } from '../config/path.js';
import gulpPlumber from 'gulp-plumber';
import notify from 'gulp-notify';
import gulp from 'gulp';
import newer from 'gulp-newer';
export const images = () => {
    return gulp.src(path.src.images, { sourcemaps:true })
    .pipe(gulpPlumber(
        notify.onError({
            title: "IMAGES",
            message: `Error: <%= error.message %>`
        })
    ))
        .pipe(newer(path.build.images))
        .pipe(webp())
        .pipe(gulp.dest(path.build.images))
        .pipe(gulp.src(path.src.images))
        .pipe(newer(path.build.images))
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false }],
            interlaced: true,
            optimizationLevel: 3
        }))
        .pipe(gulp.dest(path.build.images))
        .pipe(gulp.src(path.src.svg))
        .pipe(gulp.dest(path.build.images))
        .pipe(browserSync.stream());
}