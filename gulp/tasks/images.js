import { app } from "../../gulpfile.js";
export const images = async() => {
    return app.plugins.gulp.src(app.path.src.images, { sourcemaps:true })
    .pipe(app.plugins.gulpPlumber(
        notify.onError({
            title: "IMAGES",
            message: `Error: <%= error.message %>`
        })
    ))
        .pipe(app.plugins.newer(path.build.images))
        .pipe(app.plugins.webp())
        .pipe(app.plugins.gulp.dest(path.build.images))
        .pipe(app.plugins.gulp.src(path.src.images))
        .pipe(app.plugins.newer(path.build.images))
        .pipe(app.plugins.imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false }],
            interlaced: true,
            optimizationLevel: 3
        }))
        .pipe(app.plugins.gulp.dest(app.path.build.images))
        .pipe(app.plugins.gulp.src(app.path.src.svg))
        .pipe(app.plugins.gulp.dest(app.path.build.images))
        .pipe(app.plugins.browserSync.stream());
}