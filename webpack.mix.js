const mix = require("laravel-mix");
const path = require("node:path");
require('mix-tailwindcss');

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
