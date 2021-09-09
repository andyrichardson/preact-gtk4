const GLib = require("glib");

window.setTimeout = function (func, delay, ...args) {
  return GLib.timeout_add(GLib.PRIORITY_DEFAULT, delay, () => {
    func(...args);
    return GLib.SOURCE_REMOVE;
  });
};

window.clearTimeout = GLib.source_remove;
