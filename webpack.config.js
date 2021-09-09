const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "var",
    library: "[name]",
  },
  resolve: {
    modules: [path.resolve("./src"), "node_modules"],
  },
  module: {
    rules: [
      {
        test: /\.js/,
        use: ["babel-loader"],
      },
    ],
  },
  externals: {
    gtk: '(() => { imports.gi.versions.Gtk = "4.0"; return imports.gi.Gtk })()',
    glib: "imports.gi.GLib",
  },
};
