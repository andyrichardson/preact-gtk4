const Gtk = require("gtk");

export const createNode = (ex = {}) => {
  const name = ex?.ref?.constructor?.name;
  let self = {};
  self.ref = ex.ref;
  self.childNodes = [];
  self.appendChild = (child) => {
    log(`${name}: appending child`);
    ex?.appendChild?.(child);
    self.childNodes.push(child);
    return self;
  };
  self.setAttribute = (...args) => {
    log(`${name}: setting attribute`);
    ex?.setAttribute?.(...args);
    return self;
  };
  self.addEventListener = (...args) => {
    log(`${name}: adding event`);
    ex?.addEventListener?.(...args);
    return self;
  };
  self.removeEventListener = (...args) => {
    log(`${name}: removing event`);
    ex?.removeEventListener?.(...args);
    return self;
  };
  return self;
};

const createApplicationWindow = (props) => {
  log("ApplicationWindow: create");
  const ref = new Gtk.ApplicationWindow({
    application: window.document.application,
  });
  ref.present();

  const appendChild = (child) => ref.set_child(child.ref);

  return createNode({
    ref,
    appendChild,
  });
};

const createGestureClick = (props) => {
  log("Gesture: create");
  const ref = null;

  return createNode({ ref });
};

const createButton = (props) => {
  log("Button: create");
  const ref = new Gtk.Button({ label: "Hello, World!" });

  const addEventListener = (event) => {
    log(event);
  };
  return createNode({ ref, addEventListener });
};

export const createElement = (element, props) => {
  log("CREATING ELEMENT");
  return {
    ["gtk.ApplicationWindow"]: createApplicationWindow,
    ["gtk.Button"]: createButton,
    ["gtk.GestureClick"]: createGestureClick,
  }[element](props);
};

export const createTextNode = () => createNode({});

export const gtk = new Proxy(
  {},
  {
    get: (_, prop) => `gtk.${prop}`,
  }
);

if (!window.document) {
  window.document = {};
}
window.document = { createElement, createTextNode };
