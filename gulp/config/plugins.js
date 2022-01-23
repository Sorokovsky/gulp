import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import browsersync from 'browser-sync';
import newer from 'gulp-newer';
import replace from 'gulp-replace';
import ifPlugin from 'gulp-if';
export const plugins = {
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    replace: replace,
    newer: newer,
    ifPlugin: ifPlugin
}