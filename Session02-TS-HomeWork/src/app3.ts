// Viết chương trình khởi tạo nhập vào một mảng số nguyên và đảo ngược các phần tử trong mảng đó
let numberArray3: number[];

function reverse(arr: number[]): number[] {
  for (let i: number = 0; i < arr.length / 2; i++) {
    let tmp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = tmp;
  }
  return arr;
}

let result3 = reverse([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(result3);
