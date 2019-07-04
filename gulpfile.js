const { src, dest, series } = require('gulp'),
      replace               = require('gulp-replace'),
      beautify              = require('gulp-pretty-html'),
      exec                  = require('child_process').exec,
      imagemin              = require('gulp-imagemin'),
      imgconv               = require('gulp-imgconv'),
      del                   = require('del');

function reset() {
  return del('public')
}

function hugo(fetch) {
  return exec('hugo', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    fetch(err);
  })
}

function html() {
  return src('public/**/*.html')
    .pipe(beautify({
      indent_size: 2,
      preserve_newlines: false,
      extra_liners: []
    }))
    .pipe(replace('&laquo;', '&laquo;&#160;'))
    .pipe(replace('&raquo;', '&#160;&raquo;'))
    .pipe(replace(' :', '&#160;:'))
    .pipe(replace(' ;', '&#160;;'))
    .pipe(replace(' !', '&#160;!'))
    .pipe(replace(' ?', '&#160;?'))
    .pipe(replace(' %', '&#160;%'))
    .pipe(replace(' €', '&#160;€'))
    .pipe(replace(' <i ', '&#160;<i '))
    .pipe(replace('</i> ', '</i>&#160;'))
    .pipe(dest('public'))
}

function imgGlobal() {
  return src('public/img/**/*.*')
    .pipe(imagemin([
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 7}),
    ]))
    .pipe(dest('public/img'))
}

function imgClients(done) {
  src('public/img/clients/*.*')
    .pipe(imgconv({
      width: 200
    }))
    .pipe(dest('public/img/clients'))
    done();
};

exports.default = series(reset, hugo, html, imgGlobal, imgClients);
