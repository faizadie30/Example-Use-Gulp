'use strict';

let gulp = require('gulp'),
	concat = require('gulp-concat'),
	terser = require('gulp-terser'),
	header = require('gulp-header');

var pkg = require('./package.json');
var banner = ['/**',
	' * <%= pkg.name %> - <%= pkg.description %>',
	' * @version v<%= pkg.version %>',
	' * @author <%= pkg.author %>',
	' * @license <%= pkg.license %>',
	' */',
	''
].join('\n');

// Example bundle js
gulp.task('example-task', function () {
	return gulp.src(['js/example/*.js'])
		.pipe(concat('example/example.bundle.js'))
		.pipe(terser())
		.pipe(header(banner, {
			pkg: pkg
		}))
		.pipe(gulp.dest('js'))
});

// Css Builder
gulp.task('css-builder', function () {
	gulp.src([
			'assets/plugins/animate/animate.min.css',
			'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.min.css',
			'assets/plugins/bootstrap-social/bootstrap-social.css',
			'assets/plugins/flag-icon-css/assets/docs.css',
			'assets/plugins/flag-icon-css/css/flag-icon.css',
			'assets/plugins/fancybox/dist/jquery.fancybox.min.css',
			'assets/plugins/bootstrap-select/dist/css/bootstrap-select.min.css'
		])
		.pipe(concat('plugins-employee.bundle.css'))
		.pipe(header(banner, {
			pkg: pkg
		}))
		.pipe(gulp.dest('assets/plugins/employee'))
});

// Watcher
gulp.task('watcher', function () {
	gulp.watch('js/example/*.js', gulp.series(['example-task']));
});

// Default
gulp.task('default', gulp.series('watcher'));