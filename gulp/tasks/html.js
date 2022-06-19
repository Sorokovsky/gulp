import { app } from "../../gulpfile.js";
export const html = () => {
    return gulp.src(app.path.src.html, {sourcemaps: true})
    .pipe(gulpPlumber(
        notify.onError({
            title: "HTML",
            message: `Error: <%= error.message %>`
        })
    ))
    .pipe(app.plugins.fileinclude())
    .pipe(app.plugins.replace(/@img\//g, 'img/'))
    .pipe(app.plugins.webpHtmlnovsg())
    .pipe(app.plugins.versionNumber({
        'value': '%DT%',
        'append': {
            'key': '_v',
            'cover': 0,
            'to': ['css', 'js']
        },
        'output': {'file': 'gulp/versions.json'}
    }))
    .pipe(gulp.dest(app.path.build.html))
    .pipe(app.plugins.browserSync.stream());
}