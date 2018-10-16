import * as cons from './constants';
import gulp from 'gulp';

gulp.task('vendors', () => {
    return gulp.src([
        // Jquery
        `${cons.vendor}/jquery/dist/jquery.js`,

        // Jquery Mask
        // `${cons.vendor}/jquery-mask-plugin/dist/jquery.mask.js`,

        // Magnific Popup
        // `${cons.vendor}/magnific-popup/dist/jquery.magnific-popup.js`,

        // Swiper
        `${cons.vendor}/swiper/dist/js/swiper.jquery.js`,

        // Axios
        // `${cons.vendor}/axios/dist/axios.js`
    ])
    .pipe(cons.$.newer(`${cons.tmp}/scripts`))
    .pipe(cons.$.sourcemaps.init())
    .pipe(cons.$.sourcemaps.write())
    .pipe(cons.$.concat('vendors.min.js'))
    .pipe(cons.$.uglify({preserveComments: 'some'}))
    .pipe(gulp.dest(`${cons.tmp}/scripts`))
    .pipe(cons.$.size({title: '[vendors]'}));
});