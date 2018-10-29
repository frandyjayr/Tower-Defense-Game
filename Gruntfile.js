module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      dist: {
        src: [
          'lib/melonjs.js',
          'lib/plugins/**/*.js',
          'js/game.js',
          'build/js/resources.js',
          'js/**/*.js',
        ],
        dest: 'build/js/app.js'
      }
    },

    copy: {
      dist: {
        files: [{
          src: 'index.css',
          dest: 'build/index.css'
        },{
          src: 'main.js',
          dest: 'build/main.js'
        },{
          src: 'manifest.json',
          dest: 'build/manifest.json'
        },{
          src: 'package.json',
          dest: 'build/package.json'
        },{
          src: 'data/**/*',
          dest: 'build/',
          expand: true
        },{
          src: 'icons/*',
          dest: 'build/',
          expand: true
        }]
      }
    },

    clean: {
      app: ['build/js/app.js'],
      dist: ['build/','bin/'],
    },

    processhtml: {
      dist: {
        options: {
          process: true,
          data: {
            title: '<%= pkg.name %>',
          }
        },
        files: {
          'build/index.html': ['index.html']
        }
      }
    },

    replace : {
      dist : {
        options : {
          usePrefix : false,
          force : true,
          patterns : [
            {
              match : /this\._super\(\s*([\w\.]+)\s*,\s*["'](\w+)["']\s*(,\s*)?/g,
              replacement : '$1.prototype.$2.apply(this$3'
            },
          ],
        },
        files : [
          {
            src : [ 'build/js/app.js' ],
            dest : 'build/js/app.js'
          }
        ]
      },
    },

    uglify: {
      options: {
        report: 'min',
        preserveComments: 'some'
      },
      dist: {
        files: {
          'build/js/app.min.js': [
            'build/js/app.js'
          ]
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 8080,
          keepalive: false
        }
      }
    },

    'download-electron': {
      version: '1.4.6',
      outputDir: 'bin',
      rebuild: false,
    },

    asar: {
      dist: {
        cwd: 'build',
        src: ['**/*', '!js/app.js'],
        expand: true,
        dest: 'bin/' + (
          process.platform === 'darwin'
            ? 'Electron.app/Contents/Resources/'
            : 'resources/'
        ) + 'app.asar'
      },
    },

    resources: {
      dist: {
        options: {
          dest: 'build/js/resources.js',
          varname: 'game.resources',
        },
        files: [{
          src: ['data/bgm/**/*', 'data/sfx/**/*'],
          type: 'audio'
        },{
          src: ['data/img/**/*.png'],
          type: 'image'
        },{
          src: ['data/img/**/*.json'],
          type: 'json'
        },{
          src: ['data/map/**/*.tmx', 'data/map/**/*.json'],
          type: 'tmx'
        },{
          src: ['data/map/**/*.tsx'],
          type: 'tsx'
        },{
		  src: ['data/fnt/**/*.fnt'],
		  type: 'binary'
		},{
		  src: ['data/fnt/**/*.png'],
		  type: 'image'
		}]
      }
    },

    watch: {
      resources: {
        files: ['data/**/*'],
        tasks: ['resources'],
        options: {
          spawn: false,
        },
      },
    },
	  
	  express: {
		options: {
		  // Override defaults here
			cmd: process.argv[0],
		 	opts: [ ],
      		args: [ ],
		  // Setting to `false` will effectively just run `node path/to/server.js`
		  background: true,

		  // Called when the spawned server throws errors
		  fallback: function() {},

		  // Override node env's PORT
		  port: 3000,

		  // Override node env's NODE_ENV
		  node_env: undefined,

		  // Enable Node's --harmony flag
		  harmony: false,

		  // Consider the server to be "running" after an explicit delay (in milliseconds)
		  // (e.g. when server has no initial output)
		  delay: 0,

		  // Regular expression that matches server output to indicate it is "running"
		  output: ".+",

		  // Set --debug (true | false | integer from 1024 to 65535, has precedence over breakOnFirstLine)
		  debug: false,

		  // Set --debug-brk (true | false | integer from 1024 to 65535)
		  breakOnFirstLine: false,

		  // Object with properties `out` and `err` both will take a path to a log file and
		  // append the output of the server. Make sure the folders exist.
		  logs: undefined
		},
		dev: {
		  options: {
			script: 'path/to/dev/server.js'
		  }
		},
		prod: {
		  options: {
			script: 'path/to/prod/server.js',
			node_env: 'production'
		  }
		},
		test: {
		  options: {
			script: 'main.js'
		  }
		}
	  }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks("grunt-replace");
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-download-electron');
  grunt.loadNpmTasks('grunt-asar');
  grunt.loadNpmTasks('grunt-express-server');

  // Custom Tasks
  grunt.loadTasks('tasks');

  grunt.registerTask('default', [
    'resources',
    'concat',
    'replace',
    'uglify',
    'copy',
    'processhtml',
    'clean:app',
  ]);
  grunt.registerTask('dist', ['default', 'download-electron', 'asar']);
  grunt.registerTask('heroku', ['compass:dist', 'autoprefixer', 'imagemin']);
  grunt.registerTask('serve', ['resources', 'connect', 'watch']);
}
