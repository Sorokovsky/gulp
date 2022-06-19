import { copy } from "./gulp/tasks/copy.js";
import { path } from "./gulp/config/path.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from './gulp/tasks/scss.js';
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { plugins } from './gulp/config/plugins.js';
import { ttfToWoff, otfToTtf, fontsStyle } from "./gulp/tasks/fonts.js";
import gulp from 'gulp'; 
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle)
const mainTasks = gulp.parallel(html, gulp.series(fonts, scss), images, copy, js);
function watcher() {
    gulp.watch(app.path.watch.files, copy);
    gulp.watch(app.path.watch.html, html);
    gulp.watch(app.path.watch.scss, scss);
    gulp.watch(app.path.watch.js, js);
    gulp.watch(app.path.watch.images, images);
    gulp.watch(app.path.watch.fonts, fonts);
}
const dev = gulp.series(reset, mainTasks, gulp.parallel(server, watcher));
const build = gulp.series(reset, mainTasks);
export {dev, build};
export const app = {
    plugins: plugins,
    path: path,
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
}
gulp.task('default', dev);