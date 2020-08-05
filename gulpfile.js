"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");

const rename = require("gulp-rename");
const del = require("del");

const gulpStylelint = require("gulp-stylelint");
const inject = require("gulp-inject");
const server = require("browser-sync").create();

const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const csso = require("gulp-csso");

const webp = require("gulp-webp");

sass.compiler = require("node-sass");

const stylelint = function () {
    return gulp.src("source/styles/**/*.scss")
        .pipe(gulpStylelint({
            reporters: [
                {formatter: 'string', console: true}
            ],
            failAfterError: true
        }))
};

const clean = function () {
    return del("build");
};

const reloadServer = function (cb) {
    server.reload();
    cb();
};

const runServer = function () {
    server.init({
        server: "build/",
        notify: false,
        open: true,
        cors: true,
        ui: false
    });

    gulp.watch("source/styles/**/*.{scss,sass}", gulp.series(processSass, reloadServer));
    gulp.watch("source/*.html", gulp.series(processHtml, reloadServer));
};

const processCopyImg = function () {
    return gulp.src(["source/img/**"], {
        base: "source"
    })
        .pipe(gulp.dest("build"))
};

const processWebp = function () {
    return gulp.src("source/img/**/*.{png,jpg,jpeg}")
        .pipe(webp({quality: 90}))
        .pipe(gulp.dest("build/img"))
};

const processSass = function () {
    return gulp.src("source/styles/main.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(csso())
        .pipe(rename("style.min.css"))
        .pipe(gulp.dest("build/css"));
};

const processHtml = function () {
    const sources = gulp.src(["build/js/*.js", "build/css/*.css"], {read: false, base: "build/"});
    return gulp.src("source/index.html")
        .pipe(inject(sources, {
            transform: function (filepath, file) {
                const fileName = filepath.replace('/' + file.base + '/', '');
                return inject.transform.call(inject.transform, fileName);
            }
        }))
        .pipe(gulp.dest("build"))
};

const build = gulp.series(clean, processWebp, processCopyImg, processSass, processHtml);

exports.build = build;
exports.start = gulp.series(build, runServer);
exports.autolint = stylelint;
