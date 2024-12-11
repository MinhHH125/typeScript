let s: string = String(
  prompt("Hãy nhập vào các kí tự  '(', ')', '{', '}', '[', ']'")
);
let ss: string[] = s.split("");
let check: boolean = true;
for (let i: number = 0; i < ss.length; i++) {
  if (ss[i] === "(") {
    if (ss[i + 1] !== ")") {
      check = false;
    }
  } else if (ss[i] === "{") {
    if (ss[i + 1] !== "}") {
      check = false;
    }
  } else if (ss[i] === "[") {
    if (ss[i + 1] !== "]") {
      check = false;
    }
  }
}

console.log(check);
