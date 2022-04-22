handler = {
  set(obj, prop, val) {
    if (obj.hasOwnProperty(prop)) {
      obj[prop] = val;
    } else {
      throw `prop ${prop} is not allowed in this object`;
    }
  },
  get(obj, prop) {
    if (prop in obj) return obj[prop];
    else throw `creating new property isn't allowed!`;
  },
};

target = {
  name: "axe",
  age: 22,
};

const p = new Proxy(target, handler);
