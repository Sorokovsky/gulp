import browserSync from "browser-sync";
import { path } from "../config/path.js";
export const server = () => {
     browserSync.init({
        server: {
            baseDir: path.clean,
        },
        notify: false,
        port: 3000,
    });
}