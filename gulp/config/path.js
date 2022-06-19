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
        fonts: `${srcFolder}/fonts/**/*.{ttf,otf}`
    },
    build: {
        html: `${buildFolder}/`,
        css: `${buildFolder}/css`,
        files: `${buildFolder}/`,
        js: `${buildFolder}/js/`,
        images: `${buildFolder}/img/`,
        fonts: `${buildFolder}/fonts/`
    },
    watch: {
        html: `${srcFolder}/**/*.html`,
        scss: `${srcFolder}/scss/**/*.scss`,
        files: `${srcFolder}/.htaccess`,
        js: `${srcFolder}/js/**/*.js`,
        fonts: `${srcFolder}/fonts/**/*.{ttf,otf}`,
        images: `${srcFolder}/img/**/*.{png,jpg,jpeg,ico,gif,svg}`,
    },
    clean: `${buildFolder}/`,
    srcFolder: srcFolder,
};