
module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        watch: {
            options: {
                livereload: true
            },
            files: ['src/**/*'],
            tasks: ['build-debug'],
        },
        clean: {
            debug: {
                src: 'src/assets/css'
            }
        },
        sass: {
            debug: {
                options: {
                    style: 'expanded',
                    sourcemap: 'none'
                },
                files: {
                    'src/assets/css/main.css': 'src/assets/scss/main.scss'
                }
            }
        },
        connect: {
            debug: {
                port: 80,
                // base: 'src/'
            }
        },
        open: {
            debug: {
                path: 'http://localhost/index.html',
                app: 'Chrome'
            }
        },
        concurrent: {
            debug: ['watch', 'connect:debug', 'open:debug']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-connect');

    grunt.registerTask('build-debug', [
        'clean:debug',
        'sass:debug'
    ]);

    grunt.registerTask('run-debug', ['build-debug', 'concurrent:debug']);

    grunt.registerTask('default', ['run-debug']);
};

