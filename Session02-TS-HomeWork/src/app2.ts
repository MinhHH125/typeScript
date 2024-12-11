// Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử khác nhau.
// Chương trình hiển thị ra được phần tử có giá trị lớn nhất và nhỏ nhất trong mảng và vị trí của các phần tử đó.
let numberArray1: [
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number
];

numberArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function max(arr: number[]): [number, number] {
  let tmp: number = arr[0];
  let idx: number = 0;
  for (let index in arr) {
    if (tmp < arr[index]) {
      tmp = arr[index];
      idx = +index;
    }
  }
  return [tmp, idx];
}

function min(arr: number[]): [number, number] {
  let tmp: number = arr[0];
  let idx: number = 0;
  for (let index in arr) {
    if (tmp > arr[index]) {
      tmp = arr[index];
      idx = +index;
    }
  }
  return [tmp, idx];
}

let result = max(numberArray1);
let result1 = min(numberArray1);
console.log(result);
console.log(result1);
