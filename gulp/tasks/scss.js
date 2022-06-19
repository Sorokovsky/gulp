import { app } from "../../gulpfile.js";
const s = gulpSass(app.plugins.sass);
export const scss = () => {
    return gulp.src(app.path.src.scss, { sourcemaps:true })
    .pipe(app.plugins.gulpPlumber(
        app.plugins.notify.onError({
            title: "SCSS",
            message: `Error: <%= error.message %>`
        })
    ))
    .pipe(app.plugins.replace(/@img\//g, '../img/'))
    .pipe(s({outputStyle: 'expanded'}))
    .pipe(app.plugins.gulpCssMediaQueries())
    .pipe(app.plugins.webpcss({
        webpClass: '.webp',
        noWebp: '.no-webp'
    }))
    .pipe(app.plugins.autoPrefixer({
        grid: true,
        overrideBrowsersList: ['last 3 versions'],
        cascade: true,
    }))
    .pipe(app.plugins.gulp.dest(app.path.build.css))
    .pipe(app.plugins.cleanCss())
    .pipe(app.plugins.rename({
        extname: '.min.css'
    }))
    .pipe(app.plugins.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browserSync.stream());
}