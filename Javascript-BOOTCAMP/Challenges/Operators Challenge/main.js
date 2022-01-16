/*
          Challenge 1
        */

let a = 10;
let b = "20";
let c = 80;

// console.log(++a + +b++ + +c++ - +a++);
/*
          [++a] [+] [+b++]
          - Value: 11 + 20 = 31
          - Explain: +b cast b to num then apply post inc to it, so it will be 20 then +1 after the return
          [+] [+c++] [-] [+a++]
          - Value:     80  - 11  = 69
          - Explain:    both are applying post inc so the increment happens after the return value.
                        a is 11 from the previous pre increment so it returns 11 then apply the post inc afterwards.


          final output: 31 + 70 = 100
        */

// console.log(++a + -b + +c++ - -a++ + +a);
/*
      [++a] + [-b]
      - Value: 11 + -20 = -9
      - Explain: pre inc , type casting 
      [+] [+c++] - [-a++]
      - Value:   80 - -11 = 91
      - Explain:  c returns 80 then post inc...   a returns 11 and type-cast negation, then post inc
      [+] [+a]
      - Value:  12
      - Explain: a is -12 now , applys type-cast to 12 

      final-output: -10 + 91 + 12 = 93
*/

console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
/*
            [--c] + [+b]
            - Value:    79 + 20 = 99
            - Explain:  pre decrement to c so the value is 79 then add [casted b] to it
            [+] [--a] * [+b++]
            - Value:    9 * 20 = 180
            - Explain:  pre dec to a val is 9, then muliply it to [casted b] with post inc which returns 20 then inc +1
            [-] [+b] * [a]
            - Value:    21 * 9 = 189
            - Explain:  multiply casted b to a 
            [+] [--a] [-] [+true]
            - Value:    8 - 1 = 7
            - Explain:  pre decrement to a will result 8, and subtract [casted true] which return 1


            final-output: 99 + 180 - 189 + 7 = 97
*/

/*
          Challenge 2
        */

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d * e); // 2000
console.log(++g * ++e + ++f + -d); // 173
