import gulp from "gulp";
import browserSync from "browser-sync";
import gulpPlumber from "gulp-plumber";
import notify from 'gulp-notify';
import fileinclude from "gulp-file-include";
import replace from "gulp-replace";
import versionNumber from 'gulp-version-number';
import webpHtmlnovsg from 'gulp-webp-html-nosvg';
import autoPrefixer from "gulp-autoprefixer";
import gulpSass from "gulp-sass";
import sass from 'sass';
import gulpCssMediaQueries from 'gulp-group-css-media-queries';
import webpcss from 'gulp-webpcss'; 
import cleanCss from "gulp-clean-css";
import rename from "gulp-rename";
import del from "del";
import webpack from "webpack-stream";
import webp from 'gulp-webp';
import imagemin from 'gulp-imagemin';
import newer from 'gulp-newer';
import fs from 'fs';
import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';
import gulpIf from "gulp-if";
export const plugins = {
    gulp,
    browserSync,
    gulpPlumber,
    notify,
    fileinclude,
    replace,
    versionNumber,
    webpHtmlnovsg,
    autoPrefixer,
    gulpSass,
    sass,
    gulpCssMediaQueries,
    webpcss,
    cleanCss,
    rename,
    del,
    webpack,
    webp,
    imagemin,
    newer,
    fs,
    fonter,
    ttf2woff2,
    gulpIf
}