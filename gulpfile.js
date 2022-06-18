import { copy } from "./gulp/tasks/copy.js";
import { path } from "./gulp/config/path.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import gulp from 'gulp';
console.log(path);
const mainTasks = gulp.parallel(html, copy);
function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
}
const dev = gulp.series(reset, mainTasks, gulp.parallel(server, watcher));
gulp.task('default', dev);