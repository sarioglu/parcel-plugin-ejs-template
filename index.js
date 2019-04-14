module.exports = function(bundler) {
  bundler.addAssetType('ejs', require.resolve('./EjsAsset'));
};
