// FIXME importing that in other files
// import { add, circleArea as cArea, sqrtVal } from "./modules.js";

import Lone, * as mod from "./modules.js";

console.log(mod.add(5, 10));

console.log(mod.circleArea(5));

console.log(mod.sqrtVal(25));

const l = new Lone("new Muhammed", 26, "BEng");
console.log(l);

// console.log(l[password]); //can't be reached!
