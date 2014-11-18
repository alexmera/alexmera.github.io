module.exports = function (grunt) {
    // load time-grunt and all grunt plugins found in the package.json
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        csslint: {
            test: {
                options: {
                    import: 2
                },
                src: ['css/blog.css']
            }
        },

        concat: {
            css: {
                src: ['css/styles.css', 'css/solarized-light.css'],
                dest: 'css/blog.css'
            }
        },

        cssmin: {
            dist: {
                src: 'css/blog.css',
                dest: 'css/blog.min.css'
            }
        },

        less: {
            compileCore: {
                options: {
                    strictMath: true,
                    sourceMap: true,
                    outputSourceFiles: true,
                    sourceMapURL: 'styles.css.map',
                    sourceMapFilename: 'css/styles.css.map'
                },
                files: {
                    'css/styles.css': '_less/styles.less'
                }
            }
        },

        shell: {
            jekyllBuild: {
                command: 'jekyll build'
            },
            jekyllServe: {
                command: 'jekyll serve'
            }
        },

        watch: {
            files: ['_less/*.less'],
            tasks: ['compileCss'],
            options: {
                spawn: false,
                interrupt: true,
                atBegin: true,
                livereload: true
            }
        }
    });

    // register custom grunt tasks
    grunt.registerTask('test', ['csslint']);
    grunt.registerTask('compileCss', ['less', 'concat']);
    grunt.registerTask('minCss', ['compileCss', 'cssmin']);
    grunt.registerTask('server', ['minCss', 'shell:jekyllServe'])
    grunt.registerTask('build', ['minCss', 'shell:jekyllBuild'])
};
