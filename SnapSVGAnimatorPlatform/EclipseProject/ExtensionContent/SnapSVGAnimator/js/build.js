/**
 * Build File for minification
 * r.js -o build.js
 */

 ({
    baseUrl: './',
    paths: {
        snap: 'vendor/snap.svg/dist/snap.svg'
    },
    findNestedDependencies: true,
    optimize: 'uglify2',
    include: ['main'],
    name: "vendor/almond/almond",
    out: "main.min.js"
})