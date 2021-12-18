const {
  override,
  fixBabelImports,
  // addLessLoader,
  addDecoratorsLegacy
} = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd", libraryDirectory: "es", style: 'css' // change importing css to less
  }),
  // addLessLoader({
  //   javascriptEnabled: true,
  //   modifyVars: { "@primary-color": "#1DA57A" }
  // })
  addDecoratorsLegacy()
);


// The "injectBabelPlugin" helper has been deprecated as of v2.0. You can use customize-cra plugins in replacement - https://github.com/arackaf/customize-cra#available-plugins
// 进到这里https://github.com/arackaf/customize-cra#available-plugins
//   ，就看到一句话：Override webpack configurations for create-react-app 2.0，react-scripts 升级到 2.1.2 以后破坏了 react-app-rewired，react-app-rewired的新版本删除所有方法injectBabelPlugin，这些方法被移动到一个名为’customize-cra’的新包中了

// const { injectBabelPlugin } = require("react-app-rewired");
// module.exports = function override(config, env) {
//   config = injectBabelPlugin(
//     // 在默认配置基础上注入
//     // 插件名，插件配置
//     ["import", { libraryName: "antd", libraryDirectory: "es", style: "css" }],
//     config
//   );
//
//   config = injectBabelPlugin(
//     ["@babel/plugin-proposal-decorators", { legacy: true }],
//     config
//   );
//
//   return config;
// };

