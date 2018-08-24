// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': /^(?!app)/, // Files that are not in `app` dir.
      'app.js': /^app/
    }
  },
  stylesheets: { joinTo: {
      'app.css': /^app/
    }
  }
};

exports.plugins = {
  babel: {
    presets: ['latest']
  },
  sass: {
    options: {
      includePaths: ['./node_modules/bootstrap/scss/'],
      precision: 8
    }
  },
  pug: {
    doctype: 'html',
    basedir: 'app',                 // or wherever Brunch config says
    staticBasedir: 'app/assets',    // basedir for static compilation (see bellow)
    staticPretty: true,             // "pretty" for files in staticBasedir
    inlineRuntimeFunctions: false,  // will use the global `pug` variable
    compileDebug: true,             // except for brunch `optimize` mode (production)
    sourceMap: true                 // ...if Brunch sourceMaps option is enabled
  }
};

exports.npm = {
  globals: {
    $: 'jquery',
    jQuery: 'jquery'
  }
}
