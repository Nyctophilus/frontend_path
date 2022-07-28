// -HL assign8
// Write The Function Here

const printInConsole = (
  ...msg: (string | number | boolean)[]
): string => {
  msg.map((m) =>
    console.log(
      `The Value Is ${m} And Type Is ${typeof m} `
    )
  );

  return `Done!`;
};

// Using The Function => Do Not Edit
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));
