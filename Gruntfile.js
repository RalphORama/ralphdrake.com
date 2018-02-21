module.exports = function (grunt) {
  // Module configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // CSS minification
    cssmin: {
      options: {},
      dist: {
        files: {
          'dist/css/site.min.css':
          [
            'src/css/inputfont.css',
            'src/css/metropolisfont.css',
            'src/css/font-awesome.min.css',
            'src/css/site.css'
          ]
        }
      }
    },
    // Javascript minification
    uglify: {
      options: {},
      dist: {
        options: {
          sourceMap: true,
          sourceMapName: 'dist/js/site.min.map'
        },
        files: {
          'dist/js/site.min.js': [
            'node_modules/showdown/dist/showdown.min.js',
            'node_modules/jquery/dist/jquery.min.js',
            'src/js/analytics.js',
            'src/js/homepage.js'
          ]
        }
      }
    },
    // Process our index.html to support minified files
    processhtml: {
      options: {},
      dist: {
        files: {
          'tmp/index.html': ['src/index.html']
        }
      }
    },
    // Minify our index.html file
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'dist/index.html': 'tmp/index.html'
        }
      }
    },
    // Copy over our files we don't modify
    copy: {
      dist: {
        files: [
          // Copy files from the base directory
          {
            expand: true,
            cwd: 'src/',
            src: ['*.json', '*.md', '*.ico', '*.png', '*.txt'],
            dest: 'dist/'
          },

          // Copy our images, fonts, and markdown files
          {
            expand: true,
            cwd: 'src/',
            src: ['img/**', 'fonts/**', 'markdown/**'],
            dest: 'dist/'
          }
        ]
      }
    },
    sitemap: {
      dist: {
        pattern: ['dist/**/*.html'],
        siteRoot: 'dist/'
      }
    },
    clean: {
      dist: ['dist/'],
      tmp: ['tmp/']
    },
    watch: {
      css: {
        files: ['src/css/*.css'],
        tasks: ['cssmin:dist']
      },
      js: {
        files: ['src/js/*.js'],
        tasks: ['uglify:dist']
      },
      html: {
        files: ['src/index.html'],
        tasks: ['processhtml:dist', 'htmlmin:dist', 'clean:tmp']
      },
      copy: {
        files: ['src/favicon.*', 'src/img/**', 'src/fonts/**', 'src/markdown/**'],
        tasks: ['copy:dist']
      }
    }
  })

  // Load all grunt plugins
  grunt.loadNpmTasks('grunt-contrib-cssmin')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-processhtml')
  grunt.loadNpmTasks('grunt-contrib-htmlmin')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-sitemap')
  grunt.loadNpmTasks('grunt-contrib-watch')

  // Default task(s).
  grunt.registerTask('default',
    ['clean:dist', 'cssmin', 'uglify', 'processhtml', 'htmlmin', 'copy', 'sitemap', 'clean:tmp'])
}
