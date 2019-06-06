import conf from '../config';
import gulp from 'gulp';

gulp.task('build', () => {
  gulp.run('pug:prod');

  gulp
    .src(`./${conf.src}/**/*.+(jpg|jpeg|png|gif|svg)`)
    .pipe(gulp.dest(process.env.NODE_ENV));

  gulp
    .src(`./${conf.src}/font/**`)
    .pipe(gulp.dest(`${process.env.NODE_ENV}/fonts`));

  gulp.run('js:prod');

  gulp.run('css:prod');
});
