const isTest = String(process.env.NODE_ENV) === "test";
module.exports = function (api) {
  api.cache(true);

  const presets = [
    ["@babel/preset-env", {modules: isTest ? "commonjs" : false}],
  ];

  // const plugins = [
  //   "@babel/plugin-transform-runtime",
  // ];

  return {
    presets,
    // plugins
  };
};
