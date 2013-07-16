/*global module:false*/
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        gruntfile: {
            src: 'Gruntfile.js'
        },

        clean: {
            release: ['release']
        },

        stylus: {
            compile: {
                options: {
                    paths: ['src', 'src/mixins', 'node_modules/topcoat-utils/src/mixins'],
                    import: ['button-mixin', 'utils'],
                    compress: false
                },
                files: {
                    'release/css/button.css': ['src/copyright.styl', 'src/button.styl']
                }
            }
        },

        cssmin: {
            minify: {
                expand: true,
                cwd: 'release/css/',
                src: ['*.css', '!*.min.css'],
                dest: 'release/css/',
                ext: '.min.css'
            }
        },

        jade: {
            compile: {
                expand: true,
                cwd: 'test/perf',
                src: ['*.jade'],
                dest: 'test/perf/',
                ext: '.test.html'
            }
        },

        nodeunit: {
            tests: ['test/*.test.js']
        },

        watch: {
            files: 'src/**/*.styl',
            tasks: ['build']
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['clean', 'build']);
    grunt.registerTask('build', ['stylus', 'cssmin', 'jade', 'nodeunit']);

};
