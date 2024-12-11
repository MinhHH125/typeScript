"use strict";
let s = String(prompt("Hãy nhập vào các kí tự  '(', ')', '{', '}', '[', ']'"));
let ss = s.split("");
let check = true;
for (let i = 0; i < ss.length; i++) {
    if (ss[i] === "(") {
        if (ss[i + 1] !== ")") {
            check = false;
        }
    }
    else if (ss[i] === "{") {
        if (ss[i + 1] !== "}") {
            check = false;
        }
    }
    else if (ss[i] === "[") {
        if (ss[i + 1] !== "]") {
            check = false;
        }
    }
}
console.log(check);
