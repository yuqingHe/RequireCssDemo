"use strict";

module.exports = function (grunt) {
    grunt.initConfig({
        requirejs: {
            compile: {
                "options": {
                    paths: {
                        "module1": "app1/module1",
                        "module2": "app2/module2",
                    },
                    optimize: "uglify",
                    uglify: {
                        // 是否混淆变量名
                        mangle: false,
                        compress: {
                            //删除console.log
                            drop_console: true,
                            dead_code: true
                        },
                        //删除注释
                        preserveComments: false,
                    },
                    baseUrl: "./demo",
                    dir: 'built2',
                    modules: [{
                        name: 'module1',
                        exclude:["module2"]
                    }, {
                        name: 'module2',
                    }],
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.registerTask('default', ['requirejs']);
};