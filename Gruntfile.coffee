module.exports = (grunt) ->

  grunt.initConfig
  # uglify

    uglify:
      options:
        mangle: true
      my_target:
        files:
          'build/client/js/app.min.js': ['build/client/js/app.js']

  # Task to copy files from src to dest
    copy:
      build:
        files: [
          src: [
            'views/**/*'
            'client/js/lib/**/*'
            'client/css/**/*'
            'client/fonts/**/*'
          ]
          dest: 'build/'
        ]

  # Task to compile coffee files from src to dest
    coffee:
      build:
        options :
          bare: true
        expand: true
        src: [
          'server/**/*.coffee'
          'client/js/**/*.coffee'
        ]
        dest: 'build/'
        ext: '.js'

  # Task to removed files
    clean:
      build:
        src: ['build']

  # Task to run mocha test for server side
    mochaTest:
      test:
        options:
          reporter: 'xunit-file'
          colors: true
        src: [
          'test/**/*.coffee'
        ]


#  # Task to observe files and execute a or many tasks when these change
#    watch:
#      scripts:
#        files: [
#          '**/*.coffee'
#          '**/*.css'
#          '**/*.jade'
#        ]
#        tasks: ['clean', 'copy', 'coffee']
#        options:
#          debounceDelay: 250

  # load the tasks for build
  grunt.loadNpmTasks 'grunt-contrib-copy'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-clean'
  grunt.loadNpmTasks 'grunt-contrib-uglify'
#  grunt.loadNpmTasks 'grunt-contrib-watch'
  # load the tasks for test
  grunt.loadNpmTasks 'grunt-mocha-test'


  grunt.registerTask 'default', ['clean', 'copy','coffee']
  grunt.registerTask 'test', ['clean', 'copy', 'coffee', 'mochaTest']
