
const path = require("path");

module.exports = {
  productionSourceMap: false,
  devServer: {
     https:false,
     hotOnly:false,
     disableHostCheck:true,
  },
  css: {
    requireModuleExtension: true,
    sourceMap: true,
    loaderOptions: {
      scss: {
        /*sass-loader 8.0语法 */
        //prependData: '@import "~@/styles/variables.scss";',

        /*sass-loader 9.0写法，感谢github用户 shaonialife*/
        additionalData(content, loaderContext) {
          const { resourcePath, rootContext } = loaderContext;
          const relativePath = path.relative(rootContext, resourcePath);
          if (
            relativePath.replace(/\\/g, "/") !== "src/styles/variables.scss"
          ) {
            return '@import "~@/styles/variables.scss";' + content;
          }
          return content;
        },
      },
    },
  },
};
