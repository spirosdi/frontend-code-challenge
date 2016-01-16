/**
 * Created by Spiros on 15/01/16.
 */
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: ['app/js/rules.js', 'app/js/app.js'],
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        jasmine: {
            customTemplate: {
                src: ['app/js/rules.js', 'app/js/app.js'],
                options: {
                    specs: 'spec/*Spec.js'
                }
            }
        },
        watch: {
            files: ['app/js/rules.js', 'app/js/app.js'],
            tasks: ['uglify']
        }
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'jasmine']);

};
