// let start = 10;
// let end = 100;
// let exclude = 40;

// // Output
// // 10
// // 20
// // 30
// // 50
// // 60
// // 70
// // 80
// // 90
// // 100

// for (let i = start; i <= end; i += start) {
//   if (i === 40) continue;
//   console.log(`${i}`);
// }

// ===================================================
// part2
// let start = 10;
// let end = 0;
// let stop = 3;

// // Output
// // 10
// // 09
// // 08
// // 07
// // 06
// // 05
// // 04
// // 03
// for (i = start; i > end; i--) {
//   if (i < start) {
//     console.log(`${end}${i}`);
//   } else {
//     console.log(i);
//   }
//   if (i === stop) break;
// }

// =====================================================
// part3
// let start = 1;
// let end = 6;
// let breaker = 2;

// // Output
// // 1
// // -- 2
// // -- 4
// // 2
// // -- 2
// // -- 4
// // 3
// // -- 2
// // -- 4
// // 4
// // -- 2
// // -- 4
// // 5
// // -- 2
// // -- 4
// // 6
// // -- 2
// // -- 4

// for (i = start; i <= end; i++) {
//   console.log(i);
//   for (let j = breaker; j < end; j += breaker) {
//     console.log(`-- ${j}`);
//   }
// }

// =====================================================
// part4
// let index = 10;
// let jump = 2;
// let end = 0;

// for (;;) {
//   if (index > end) console.log(index);

//   index -= jump;

//   if (index == jump) break;
// }
// Output
// 10
// 8
// 6
// 4

// =====================================================
// part5
// let friends = [
//   "Ahmed",
//   "Sayed",
//   "Eman",
//   "Mahmoud",
//   "Ameer",
//   "Osama",
//   "Sameh",
// ];
// let letter = "a";

// for (
//   i = friends.indexOf("Ahmed");
//   i < friends.length;
//   i++
// ) {
//   if (
//     friends[i]
//       .charAt(friends.indexOf("Ahmed"))
//       .toLowerCase() === letter
//   )
//     continue;

//   console.log(`${i} => ${friends[i]}`);
// }

// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"

// =====================================================
// part6
// let start = 0;
// let swappedName = "elZerO";

// let swap = "";

// for (i = start; i < swappedName.length; i++) {
//   if (swappedName[i] === swappedName[i].toUpperCase()) {
//     swap += swappedName[i].toLowerCase();
//   } else {
//     swap += swappedName[i].toUpperCase();
//   }
// }
// console.log(swap);

// Output
// ("ELzERo");

// =====================================================
// part7
let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

// Output
// 2;
// 3;
// 4;
for (i = start; i < mix.length; i++) {
  if (i === start) continue;

  if (typeof mix[i] !== "string") console.log(mix[i]);
}
