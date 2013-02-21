/*global module:false*/
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        // Task configuration.
        gruntfile: {
            src: 'Gruntfile.js'
        },
        stylus: {
            compile: {
                options: {
                    compress: false
                },
                files: {
                    'release/button.css': ['style/copyright.styl', 'style/button.styl']
                }
            },
            minify: {
                files: {
                    'release/button-min.css': ['style/copyright.styl', 'style/button.styl']
                }
            }
        },
        nodeunit: {
            tests: ['test/*_test.js']
        },
        watch: {
            files: 'style/*.styl',
            tasks: ['default']
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    // Default task.
    grunt.registerTask('default', ['stylus:compile', 'stylus:minify', 'nodeunit']);

};
