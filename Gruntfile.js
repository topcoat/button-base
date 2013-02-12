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
                files: {
                    'button.css': 'style/button.styl'
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
    grunt.registerTask('default', ['stylus']);

};
