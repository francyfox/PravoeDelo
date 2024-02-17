const mix = require("laravel-mix");
const path = require("node:path");
require('mix-tailwindcss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */
//  mix.js('resources/js/app.js', 'public/js')
//  .postCss('resources/css/app.css', 'public/css', [
//      //
//  ]);
mix.webpackConfig({
    devServer: {
        overlay: true,
    },
})

mix.alias({
    '#root': path.join(__dirname, 'resources/js'),
    '#module': path.join(__dirname, 'resources/js/module'),
    '#pages': path.join(__dirname, 'resources/js/Pages')
});

mix.postCss('resources/css/app.pcss', 'public/css')
    .tailwind();

mix.js("resources/js/app.js", "public/js")
    .vue()
    .disableSuccessNotifications()
