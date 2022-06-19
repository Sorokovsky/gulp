import { copy } from "./gulp/tasks/copy.js";
import { path } from "./gulp/config/path.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from './gulp/tasks/scss.js';
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { ttfToWoff, otfToTtf, fontsStyle } from "./gulp/tasks/fonts.js";
import gulp from 'gulp';
console.log(path);
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle)
const mainTasks = gulp.parallel(html, fonts, images, scss,copy, js);
function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
    gulp.watch(path.watch.fonts, fonts);
}
const dev = gulp.series(reset, mainTasks, gulp.parallel(server, watcher));
gulp.task('default', dev);