require("./polyfills");
const { h, render } = require("preact");
const hooks = require("preact/hooks");
const Gtk = require("gtk");
const { createNode, gtk } = require("./gtk-react");
const { App } = require("./App");

const application = new Gtk.Application({
  application_id: "org.gtk.ExampleApp",
});
window.document.application = application;
application.connect("activate", () => {
  render(<App />, createNode());
});

application.run([]);
