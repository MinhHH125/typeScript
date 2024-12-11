//Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử.
//  Chương trình thực hiện tính và hiển thị xem có bao nhiêu số nguyên lớn hơn hoặc bằng 10.

let numberArray: [
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

numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let count: number = 0;
for (let index of numberArray) {
  if (index >= 10) {
    count++;
  }
}
alert(count);
