requirejs.config({
     map: {
      '*': {
        'css': '../css.min'
      }
    },
    paths: {
        "module1": "app1/module1",
        "module2": "app2/module2",
    },
    shim: {
        'module1': ['css!csss/css1'],
        'module2': ['css!csss/css2']
    }
});
define([
     "module1"
], function(require, factory) {
    'use strict';
    console.log(" main require exed!----");
});
