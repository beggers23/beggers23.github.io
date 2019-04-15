const gulp = require('gulp');
const del = require('del');
const awspublish = require('gulp-awspublish');
const rename = require('gulp-rename');
const clc = require('cli-color');
const path = require('path');

const APP = path.join(__dirname, './build/*');

gulp.task('clean', () => {
    return del([APP]);
});