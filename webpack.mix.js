const mix = require('laravel-mix');
const fs = require('fs');
const path = require('path');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Shopify theme. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// Compile all SCSS files from src/scss to assets
const scssDir = 'src/scss';
if (fs.existsSync(scssDir)) {
  fs.readdirSync(scssDir)
    .filter(file => file.endsWith('.scss'))
    .forEach(file => {
      const filePath = path.join(scssDir, file);
      mix.sass(filePath, 'assets');
    });
}

// Compile all JS files from src/js to assets
const jsDir = 'src/js';
if (fs.existsSync(jsDir)) {
  fs.readdirSync(jsDir)
    .filter(file => file.endsWith('.js'))
    .forEach(file => {
      const filePath = path.join(jsDir, file);
      mix.js(filePath, 'assets');
    });
}

mix.options({
     processCssUrls: true,
     postCss: [],
     autoprefixer: {
       enabled: true,
       options: {
         browsers: [
           'last 2 versions',
           '> 1%'
         ],
         cascade: true,
         grid: true
       }
     }
   })
   .sourceMaps(false);

// Disable mix-manifest.json generation
Mix.manifest.refresh = _ => void 0;

