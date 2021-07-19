const { addBabelPlugin, override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addBabelPlugin([
    'babel-plugin-root-import',
    {
      rootPathSuffix: 'src',
    },
  ]),
  addWebpackAlias({
    ['@']: path.resolve(__dirname, 'src'),
    ['@components/']: path.resolve(__dirname, 'src/components/'),
    ['@images/']: path.resolve(__dirname, 'src/assets/images/'),
    ['@styles/']: path.resolve(__dirname, 'src/styles/'),
  })
);
