const { h } = require("preact");
const { gtk } = require("./gtk-react");
const { useState, useEffect } = require("preact/hooks");

export const App = () => {
  const [state, setState] = useState(true);

  useEffect(() => {
    setTimeout(() => setState(false), 2000);
  }, []);

  log(state);

  return (
    <gtk.ApplicationWindow>
      <gtk.Button>Hello</gtk.Button>
    </gtk.ApplicationWindow>
  );
};
