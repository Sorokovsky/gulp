import { app } from "../../gulpfile.js";
//
export const scss = () => {
    const s = app.plugins.gulpSass(app.plugins.sass);
    return app.plugins.gulp.src(app.path.src.scss, { sourcemaps:true })
    .pipe(app.plugins.gulpIf(app.isDev, app.plugins.gulpPlumber(
        app.plugins.notify.onError({
            title: "SCSS",
            message: `Error: <%= error.message %>`
        })
    )))
    .pipe(app.plugins.replace(/@img\//g, '../img/'))
    .pipe(app.plugins.gulpIf(app.isBuild, s({outputStyle: 'expanded'})))
    .pipe(app.plugins.gulpIf(app.isBuild, app.plugins.gulpCssMediaQueries()))
    .pipe(app.plugins.gulpIf(app.isBuild, app.plugins.webpcss({
        webpClass: '.webp',
        noWebp: '.no-webp'
    })))
    .pipe(app.plugins.gulpIf(app.isBuild, app.plugins.autoPrefixer({
        grid: true,
        overrideBrowsersList: ['last 3 versions'],
        cascade: true,
    })))
    .pipe(app.plugins.gulp.dest(app.path.build.css))
    .pipe(app.plugins.gulpIf(app.isBuild, app.plugins.cleanCss()))
    .pipe(app.plugins.rename({
        extname: '.min.css'
    }))
    .pipe(app.plugins.gulpIf(app.isBuild, app.plugins.gulp.dest(app.path.build.css)))
    .pipe(app.plugins.gulpIf(app.isDev, app.plugins.browserSync.stream()));
}