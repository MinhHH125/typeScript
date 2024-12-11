"use strict";
// Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử.
// Chương trình sắp xếp mảng theo thứ tự giảm dần và hiển thị ra mảng đã được sắp xếp.
//  (Không sử dụng các hàm có sẵn
let numberArray4;
numberArray4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function mangGiamDan(arr) {
    let tmp = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    return arr;
}
let result4 = mangGiamDan(numberArray4);
alert(result4);
