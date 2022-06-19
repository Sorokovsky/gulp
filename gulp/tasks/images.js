import { app } from "../../gulpfile.js";
export const images = async() => {
    return app.plugins.gulp.src(app.path.src.images, { sourcemaps:true })
    .pipe(app.plugins.gulpIf(app.isDev, app.plugins.gulpPlumber(
        app.plugins.notify.onError({
            title: "IMAGES",
            message: `Error: <%= error.message %>`
        })
    )))
        .pipe(app.plugins.gulpIf(app.isBuild, app.plugins.newer(app.path.build.images)))
        .pipe(app.plugins.gulpIf(app.isBuild, app.plugins.webp()))
        .pipe(app.plugins.gulpIf(app.isBuild, app.plugins.gulp.dest(app.path.build.images)))
        .pipe(app.plugins.gulpIf(app.isBuild, app.plugins.gulp.src(app.path.src.images)))
        .pipe(app.plugins.gulpIf(app.isBuild, app.plugins.newer(app.path.build.images)))
        .pipe(app.plugins.gulpIf(app.isBuild, app.plugins.imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false }],
            interlaced: true,
            optimizationLevel: 3
        })))
        .pipe(app.plugins.gulp.dest(app.path.build.images))
        .pipe(app.plugins.gulp.src(app.path.src.svg))
        .pipe(app.plugins.gulp.dest(app.path.build.images))
        .pipe(app.plugins.browserSync.stream());
}