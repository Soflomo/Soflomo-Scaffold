module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    outputStyle: 'compressed'
                },
                files: {
                    'public/styles/css/styles.css': 'public/styles/scss/styles.scss'
                }
            },
            dev: {
                options: {
                    outputStyle: 'expanded',
                    sourceComments: 'normal'
                },
                files: {
                    'public/styles/css/styles.css': 'public/styles/scss/styles.scss'
                }
            }
        },

        watch: {
            grunt: { files: ['gruntfile.js'] },

            sass: {
                files: 'public/styles/scss/**/*.scss',
                tasks: ['sass']
            }
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'public/scripts/main.js',
                dest: 'public/scripts/main.min.js'
            }
        },

        browser_sync: {
            files: {
                src : [
                    'public/styles/css/*.css',
                    'public/images/**/*.jpg',
                    'public/images/**/*.png',
                    'public/images/**/*.svg',
                    'public/scripts/**/*.js',
                    'module/**/*.phtml',
                    'module/**/*.php',
                ],
            },
            options: {
                watchTask: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('build', ['sass:dist', 'uglify']);
    grunt.registerTask('default', ['browser_sync', 'sass:dev', 'watch']);
}