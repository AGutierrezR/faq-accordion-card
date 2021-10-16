const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const browserSync = require('browser-sync').create()

const scssTask = () => {
  return src('./scss/main.scss', { sourcemaps: true })
    .pipe(sass())
    .pipe(dest('css', { sourcemaps: '.' }))
    .pipe(browserSync.stream())
}

const browsersyncServe = (cb) => {
  browserSync.init({
    server: {
      baseDir: './',
    },
  })

  cb()
}

const browserSyncReload = (cb) => {
  browserSync.reload()
  cb()
}

const watchTask = () => {
  watch('./index.html', browserSyncReload)
  watch('./js/app.js', browserSyncReload)
  watch('./scss/**/*.scss', scssTask)
}

exports.scss = scssTask
exports.browserSync = browsersyncServe
exports.default = series(scssTask, browsersyncServe, watchTask)
