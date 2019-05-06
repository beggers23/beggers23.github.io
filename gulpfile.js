const gulp = require('gulp');
const del = require('del');
const awspublish = require('gulp-awspublish');
const rename = require('gulp-rename');
const clc = require('cli-color');
const path = require('path');


const PATH = 'eggers.dev';

const S3 = awspublish.create(AWS_SECRET);
const APP = path.join(__dirname, './app/build/*');

gulp.task('publish', () => {
	return (
		gulp
			.src(APP)
			// This line sets the upload path for AWS S3.
			.pipe(
				rename((upPath) => {
					upPath.dirname = PATH;
				}),
			)
			.pipe(
				S3.publish('', {
					force: true,
				}),
			)
			.pipe(S3.cache())
			.pipe(awspublish.reporter())
			.on('end', () => {
				console.log(clc.red(`Published to: ${PATH}`));
			})
	);
});


gulp.task('clean', () => {
	return del([APP]);
});
