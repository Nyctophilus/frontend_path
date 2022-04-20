// FIXME we Overcame that with the arrow func 'es6' .. block scopes

const account = (function () {
  let balance = 1000; // this is how u implement private/Static props.. only available inside this IIFE scope!

  function getBalance() {
    return balance;
  }

  function addIntrest(intrest) {
    balance += intrest;
  }

  return {
    name: "Moo",
    getB: getBalance,
    add: addIntrest,
  };
})();

account.add(100);
console.log(account.getB());
