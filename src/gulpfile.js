(function() {

	'use strict';

	var gulp = require('gulp'),
		sass = require('gulp-sass'),
		gutil = require('gulp-util'),
		rimraf = require('gulp-rimraf'),
		concat = require('gulp-concat'),
		uglify = require('gulp-uglify'),
		browserify = require('gulp-browserify'),
		bourbon = require('node-bourbon'),
		neat = require('node-neat'),
		source = './',
		destination = '../assets/';

	function errorHandler(error) {
		gutil.beep();
		gutil.log(
			gutil.colors.bgGreen(error.plug),
			gutil.colors.bgRed(gutil.colors.white(error.message.replace(/\r?\n|\r/g, '')))
		);
	}

	gulp.task('clean', function() {
		return gulp.src([
				destination + 'styles',
				destination + 'images',
				destination + 'scripts',
				destination + 'fonts'
			], {read: false})
			.pipe(rimraf({force: true}));
	});

	gulp.task('styles', function() {
		return gulp.src(source + 'styles/main.scss')
			.pipe(sass({
				outputStyle: 'compressed',
				includePaths: [source + 'styles'].concat(bourbon.includePaths, neat.includePaths),
				errLogToConsole: true
			}))
			.pipe(gulp.dest(destination + 'styles'))
			.on('error', errorHandler);
	});

	gulp.task('images', function() {
		return gulp.src(source + 'images/**/*')
			.pipe(gulp.dest(destination + 'images'))
			.on('error', errorHandler);
	});

	gulp.task('scripts', function() {

		gulp.src([
				source + 'bower_components/jquery/dist/jquery.min.js',
				source + 'bower_components/jquery-validation/dist/jquery.validate.min.js'
			])
			.pipe(concat('vendor.js'))
			.pipe(uglify())
			.pipe(gulp.dest(destination + 'scripts'))
			.on('error', errorHandler);

		return gulp.src(source + 'scripts/main.js')
			.pipe(browserify().on('error', errorHandler))
			.pipe(uglify())
			.pipe(gulp.dest(destination + 'scripts'))
			.on('error', errorHandler);
	});

	gulp.task('watch', ['styles', 'images', 'scripts'], function() {
		gulp.watch(source + 'styles/**/*.scss', ['styles']);
		gulp.watch(source + 'images/**/*', ['images']);
		gulp.watch(source + 'scripts/**/**.js', ['scripts']);
	});

	gulp.task('build', ['clean'], function() {
		gulp.start('styles', 'images', 'scripts');
	});

	gulp.task('default', ['watch']);

}());