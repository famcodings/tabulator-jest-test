// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

module.exports = (path, options) => {
  // Call the defaultResolver, so we leverage its cache, error handling, etc.
  // if (path === "tabulator-tables") {
    // console.log(options);
    // options.conditions = path === "tabulator-tables" ? ["browser"] : options.conditions;
    // options.paths = ["node_modules/tabulator-tables/src/js/core/TabulatorFull.js"]
    // console.log(options);
  // }
  return options.defaultResolver(path, {
    ...options,
    // conditions: path === "tabulator-tables" ? ["browser"] : options.conditions,
    pathFilter: (pkg, path, relativePath) => {
      // if (pkg.name === "tabulator-tables") {
      if (relativePath === "dist/js/tabulator.js") {
        console.log(path.main, pkg.module);
        console.log("relativePath", relativePath);
        console.log("path", path);
        // return "node_modules/tabulator-tables/src/js/core/TabulatorFull.js";
      }
      return path;
    },
    packageFilter: pkg => {
      if (pkg.name === "tabulator-tables") {
        // console.log(path.main, pkg.module);
        // pkg.main = pkg.module;
      }
      return pkg;
    },
  });
};
