import * as NodePath from 'path';
const rootFolder = "./" + NodePath.basename(NodePath.resolve());
const buildFolder = './docs';
const srcFolder = './src';
export const path = {
    src: {
        html: `${srcFolder}/*.html`,
        scss: `${srcFolder}/scss/style.scss`,
        js: `${srcFolder}/js/app.js`,
        files: `${srcFolder}/.htaccess`,
    },
    build: {
        html: `${buildFolder}/`,
        css: `${buildFolder}/css`,
        files: `${buildFolder}/`,
        js: `${buildFolder}/js/`,
    },
    watch: {
        html: `${srcFolder}/**/*.html`,
        scss: `${srcFolder}/scss/**/*.scss`,
        files: `${srcFolder}/.htaccess`,
        js: `${srcFolder}/js/**/*.js`,
    },
    clean: `${buildFolder}/`,
};