const { src, dest, watch, series } = require( 'gulp' );

// CSS y SASS
const sass = require( 'gulp-sass' )( require( 'sass' ) );
const postcss = require( 'gulp-postcss' );
const autoprefixer = require( 'autoprefixer' );
const sourcemaps = require( 'gulp-sourcemaps' );
const cssnano = require( 'cssnano' );
const plumber = require( 'gulp-plumber' );

// Imagenes
const imagemin = require( 'gulp-imagemin' );
const webp = require( 'gulp-webp' );
const avif = require( 'gulp-avif' );

//js
const terser = require( 'gulp-terser' );

function css ( done )
{
    src( 'src/scss/app.scss' )
        .pipe( plumber() )
        .pipe( sourcemaps.init() )
        .pipe( sass() )
        // .pipe( postcss([ autoprefixer(), cssnano() ]) )
        .pipe( postcss( [autoprefixer()] ) )
        .pipe( sourcemaps.write( '.' ) )
        .pipe( dest( 'build/css' ) );

    done();
}

function scripts ()
{
    return src( 'src/js/**/*.js' )
        .pipe( sourcemaps.init() )
        .pipe( terser() )
        .pipe( sourcemaps.write( '.' ) )
        .pipe( dest( 'build/js' ) );
}

function imagenes ()
{
    return src( 'src/img/**/*' )
        .pipe( imagemin( { optimizationLevel: 3 } ) )
        .pipe( dest( 'build/img' ) );
}

function versionWebp ()
{
    const opciones = {
        quality: 50
    };
    return src( 'src/img/**/*.{png,jpg}' )
        .pipe( webp( opciones ) )
        .pipe( dest( 'build/img' ) );
}
function versionAvif ()
{
    const opciones = {
        quality: 50
    };
    return src( 'src/img/**/*.{png,jpg}' )
        .pipe( avif( opciones ) )
        .pipe( dest( 'build/img' ) );
}

function dev ()
{
    watch( 'src/scss/**/*.scss', css );
    watch( 'src/**/*.js', scripts );
}


exports.scripts = scripts;
exports.css = css;
exports.dev = dev;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.default = series( scripts, css, dev );
