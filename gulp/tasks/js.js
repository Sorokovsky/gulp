import { app } from "../../gulpfile.js";
export const js = async() => {
    return app.plugins.gulp.src(app.path.src.js, {sourcemaps: true})
    .pipe(app.plugins.gulpPlumber(
        pipe(app.plugins.notify.onError({
            title: "JS",
            message: `Error: <%= error.message %>`
        })
    )))
    .pipe(app.plugins.webpack({
        mode: 'development',
        output: {
            filename: 'app.min.js'
        }
    }))
    .pipe(app.plugins.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browserSync.stream());
}