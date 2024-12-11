// palindrome

let str: string = "radar";
let arrString: string[] = str.split("");

function reverseString(arr: string[]): string[] {
  for (let i: number = 0; i < arr.length / 2; i++) {
    let tmp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = tmp;
  }
  return arr;
}
let result8: string = reverseString(arrString).join("");
if (result8 === str) {
  alert("true");
} else {
  alert("false");
}
