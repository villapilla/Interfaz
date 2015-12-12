/*jslint
    node: true */

module.exports = function (grunt) {
    "use strict";
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            }
        },
        jslint: {
            src: ['gruntfile.js', 'js/*.js']
        },
        less: {
            development: {
                options: {
                    compress: false,
                    yuicompress: false,
                    optimization: 2
                },
                files: {
                    "css/screen960.css": "less/screen960.less"
                }
            }
        },
        watch: {
            styles: {
                files: ['less/*.less'],
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            },
        }
    });

    grunt.registerTask('default', ['less']);
};
