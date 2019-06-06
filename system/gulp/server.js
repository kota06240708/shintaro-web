import conf from '../config';
import gulp from 'gulp';

gulp.task('default', ['browser'], () => {
  gulp.watch(`./${conf.src}/**/${conf.pug}`, ['pug:dev', 'reload']);
  gulp.watch(`./${conf.src}/**/${conf.css}`, ['css:dev', 'reload']);
  gulp.watch(`./${conf.src}/**/${conf.js}`, ['reload']);
});
