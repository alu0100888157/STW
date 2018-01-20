/* Use SystemJS as our module loader */
(function(global) {
    // Tells SystemJS about our application package
    var packages = {
        app: {
            main: './bootstrap.js',
            defaultExtension: 'js'
        }
    };
    // Tells SystemJS from where to load the Angular and Rx modules
    var map = {
        '@angular': 'lib/@angular',
        'rxjs': 'lib/rxjs'
    };
    // Describe the main file for each package of Angular *********
    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'forms',
        'http',
        'router',
        'platform-browser',
        'platform-browser-dynamic',
    ];
    // We ask it to load the UMD file of each package.
    ngPackageNames.forEach(function(pkgName) {
        packages['@angular/' + pkgName] = {
            main: '/bundles/' + pkgName + '.umd.js',
            defaultExtension: 'js'
        };
    });
    // ****************************************************************
    // System.config method to configure SystemJS.
    System.config({
        defaultJSExtensions: true,
        transpiler: null,
        packages: packages,
        map: map
    });
}) (this);