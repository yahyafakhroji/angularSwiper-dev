var packageName = 'yahyafakhroji:angular-swiper-dev';
var where = 'client';
var version = '0.0.1';
var summary = 'Angular directive for iDangero.us Swiper re-packaged for Meteor.';
var gitLink = 'https://github.com/yahyafakhroji/angular-swiper-dev';
var documentationFile = 'README.md';

// Meta-data
Package.describe({
    name: packageName,
    version: version,
    summary: summary,
    git: gitLink,
    documentation: documentationFile
});

Package.onUse(function(api) {
    api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']);

    api.use('angular:angular@1.3.0', where);
    api.use('swiper:swiper@3.0.5', where);

    api.addFiles('dist/angular-swiper.js', where);
});
