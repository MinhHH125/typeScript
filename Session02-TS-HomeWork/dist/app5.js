"use strict";
// Bài 1: Viết chương trình khởi tạo mảng 2 chiều, gồm một bộ các phần tử có sẵn, in ra các phần tử trong mảng.
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
// for (let i = 0; i < matrix.length; i++) {
//   for (let j = 0; j < matrix[i].length; j++) {
//     console.log(matrix[i][j]);
//   }
// }
for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join(" ")); // In từng hàng dưới dạng chuỗi, các phần tử cách nhau bởi dấu cách
}
