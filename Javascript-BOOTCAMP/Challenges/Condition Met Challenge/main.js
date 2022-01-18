let st = "Elzero2222 web School";

if (
  st.charAt(st.indexOf("W")).toLowerCase() ||
  st.charAt(st.indexOf("w")) === "w"
) {
  console.log("Good");
}

if (st.slice() !== "string") {
  console.log("Good");
}

if (st.replace(st, "number") === "number") {
  console.log("Good");
}

if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}
