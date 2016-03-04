Package.describe({
  name: 'jcheroske:less-parallax',
  version: '0.0.1',
  summary: 'Pure CSS Parallax Scrolling',
  git: 'https://github.com/jcheroske/meteor-less-parallax.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.addAssets('parallax.less', ['client']);
});

