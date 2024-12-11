"use strict";
// palindrome
let str = "radar";
let arrString = str.split("");
function reverseString(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let tmp = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = tmp;
    }
    return arr;
}
let result8 = reverseString(arrString).join("");
if (result8 === str) {
    alert("true");
}
else {
    alert("false");
}
