'use strict';

module.exports = function(grunt) {
  const sass = require('node-sass');
  const webpackConfig = require('./webpack.config.js');

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    sass: {
      dist: {
        options: {
          implementation: sass,
          style: 'expanded'
        },

        files: {
          'dist/css/style.css': 'src/sass/style.scss'
        }
      }
    },

    postcss: {
      options: {
        processors: [require('autoprefixer')]
      },

      dist: {
        src: 'dist/css/style.css'
      }
    },

    csso: {
      compress: {
        files: {
          'dist/css/style.min.css': ['dist/css/style.css']
        }
      }
    },

    clean: {
      dist: {
        src: ['dist/']
      },
      icons: {
        src: ['dist/img/icons']
      }
    },

    copy: {
      dist: {
        files: [
          {
            expand: true,
            cwd: 'src',
            src: ['fonts/**', 'img/**'],
            dest: 'dist/'
          }
        ]
      }
    },

    watch: {
      style: {
        files: ['src/sass/**/*.scss'],
        tasks: ['sass', 'postcss']
      }
    },

    browserSync: {
      dev: {
        bsFiles: {
          src: ['dist/css/style.css', '*.html', 'dist/main.js']
        },

        options: {
          watchTask: true,
          server: './'
        }
      }
    },

    webpack: {
      options: {
        stats: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
      },
      prod: webpackConfig,
      dev: Object.assign(
        {
          watch: true,
          mode: 'development'
        },
        webpackConfig
      )
    }
  });

  grunt.registerTask('build', [
    'clean:dist',
    'copy',
    'clean:icons',
    'sass',
    'postcss',
    'csso'
  ]);
  grunt.registerTask('serve', ['browserSync', 'watch']);
};
