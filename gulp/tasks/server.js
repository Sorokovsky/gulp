import { app } from "../../gulpfile.js";
export const server = () => {
     app.plugins.browserSync.init({
        server: {
            baseDir: app.path.clean,
        },
        notify: false,
        port: 3000,
    });
}