// globalThis will always refere to global object which is Window

const objW = {
  Gloob() {
    return globalThis;
  },
};

console.log(objW.Gloob());
