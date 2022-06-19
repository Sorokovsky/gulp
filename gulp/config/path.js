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
        images: `${srcFolder}/img/**/*.{png,jpg,jpeg,ico,gif}`,
        svg: `${srcFolder}/img/**/*.svg`,
    },
    build: {
        html: `${buildFolder}/`,
        css: `${buildFolder}/css`,
        files: `${buildFolder}/`,
        js: `${buildFolder}/js/`,
        images: `${buildFolder}/img/`,
    },
    watch: {
        html: `${srcFolder}/**/*.html`,
        scss: `${srcFolder}/scss/**/*.scss`,
        files: `${srcFolder}/.htaccess`,
        js: `${srcFolder}/js/**/*.js`,
        images: `${srcFolder}/img/**/*.{png,jpg,jpeg,ico,gif,svg}`,
    },
    clean: `${buildFolder}/`,
};