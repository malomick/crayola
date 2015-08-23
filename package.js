Package.describe({
  name: 'mickm:crayola',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Crayola color library for Sass',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/mickmalowany/crayola.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use('fourseven:scss@3.2.0');
  api.addFiles('scss.json', 'server');
  api.addFiles('_crayola.scss', 'server', {isAsset: true});
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('fourseven:scss@3.2.0');
  api.use('mickm:crayola');
  api.addFiles('crayola-tests.js');
});
