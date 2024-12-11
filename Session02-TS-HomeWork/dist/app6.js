"use strict";
let arr2;
arr2 = [1, 1, 3, 3, 4, 5, 6, 7, 8];
let uniqueArr = [...new Set(arr2)];
//1 3 4 5 6 7 8
function search(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] + arr[i] === target) {
                return [j, i];
            }
        }
    }
    return [-1, -1];
}
let result6 = search(uniqueArr, 15);
alert(result6);
// 2. Mô tả
// Cho một mảng số nguyên nums và một số nguyên target,
// viết một hàm trả về kết quả là một mảng chỉ số của hai số trong mảng nums sao cho tổng của chúng bằng target
