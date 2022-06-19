import { app } from "../../gulpfile.js";
export const html = () => {
    return app.plugins.gulp.src(app.path.src.html, {sourcemaps: true})
    .pipe(app.plugins.gulpIf(app.isDev, app.plugins.gulpPlumber(
        app.plugins.notify.onError({
            title: "HTML",
            message: `Error: <%= error.message %>`
        })
    )))
    .pipe(app.plugins.fileinclude())
    .pipe(app.plugins.replace(/@img\//g, 'img/'))
    .pipe(app.plugins.gulpIf(app.isBuild, app.plugins.webpHtmlnovsg()))
    .pipe(app.plugins.gulpIf(app.isBuild, app.plugins.versionNumber({
        'value': '%DT%',
        'append': {
            'key': '_v',
            'cover': 0,
            'to': ['css', 'js']
        },
        'output': {'file': 'gulp/versions.json'}
    })))
    .pipe(app.plugins.gulp.dest(app.path.build.html))
    .pipe(app.plugins.gulpIf(app.isDev, app.plugins.browserSync.stream()));
}