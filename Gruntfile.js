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
                    'button.css': ['style/copyright.styl','style/button.styl']
                }
            },
            minify: {
                files: {
                    'button-min.css': ['style/copyright.styl','style/button.styl']
                }
            }
        },
        watch: {
            files: 'style/*.styl',
            tasks: ['default']
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-stylus');

    // Default task.
    grunt.registerTask('default', ['stylus:compile', 'stylus:minify']);

};
