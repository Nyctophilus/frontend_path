const obj = {
  name: "Muhammed",
  info: {
    address: "123 Main Street",
    city: "Boston",
  },
  getInfo: function () {
    return this.info;
  },
};

// Avoiding error of not found props

console.log(obj.info.type?.ofof);

console.log(obj.info?.());
