const { override, fixBabelImports,addLessLoader,addPostcssPlugins  } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
      libraryName: 'antd-mobile',
      style: 'css',
    }),
    addLessLoader({
      strictMath:true,
      noIeCompat:true,
      cssModules:{
            localIdentName: "[path][name]__[local]--[hash:base64:5]", // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
      }
    }),
    addPostcssPlugins([require('postcss-pxtorem')({
      rootValue: 16,
      propList: ['*']
      // propList: ['*', '!border*', '!font-size*', '!letter-spacing'],
      // propWhiteList: []
   })])
);