// Including the components
let gulp = require("gulp")
let sass = require("gulp-sass")
let rename = require("gulp-rename")
let header = require("gulp-header")

// Importing the header text
let buildHeaderText = require("./src/header.js")

// Building the minified version
gulp.task("build-min", () => {
	return setTimeout(() => {
	    return gulp.src(["src/index.scss"])
	        .pipe(sass({
	        	outputStyle: "compressed"
	        }))
	        .pipe(header(buildHeaderText))
	        .pipe(rename("style.min.css"))
	        .pipe(gulp.dest("build"))
    }, 100)
})

// Building the developer version
gulp.task("build-dev", () => {
	return setTimeout(() => {
	    return gulp.src(["src/index.scss"])
	        .pipe(sass({
	        	outputStyle: "expanded",
	        	indentType: "space",
	        	indentWidth: 2
	        }))
	        .pipe(header(buildHeaderText))
	        .pipe(rename("style.dev.css"))
	        .pipe(gulp.dest("build"))
    }, 100)
})

// Building both files
gulp.task("build", ["build-dev", "build-min"])

// Starting the autobuild session
gulp.task("autobuild", ["build-dev", "build-min"], () => {
    gulp.watch(["src/**"], ["build-dev", "build-min"])
})
