"use strict";
let firstName = prompt("Please enter a firstName");
let lastName = prompt("Please enter a lastName");
let fullName;
function firstLetterToUpperCase(p) {
    if (!p) {
        return "";
    }
    return p.charAt(0).toUpperCase() + p.slice(1).toLowerCase();
}
fullName =
    firstLetterToUpperCase(firstName) + " " + firstLetterToUpperCase(lastName);
alert(fullName);
let str = prompt("Please enter here: ");
console.log([...new Set(str)].join(""));
function sum(p1, p2) {
    let a = Number(p1);
    let b = Number(p2);
    if (!isNaN(a) && !isNaN(b)) {
        return `Tong cua phep tinh la ${a + b}`;
    }
    else {
        return `Phep tinh khong hop le`;
    }
}
function product(p1, p2) {
    let a = Number(p1);
    let b = Number(p2);
    if (!isNaN(a) && !isNaN(b)) {
        return `Tich cua phep tinh la ${a * b}`;
    }
    else {
        return `Phep tinh khong hop le`;
    }
}
function difference(p1, p2) {
    let a = Number(p1);
    let b = Number(p2);
    if (!isNaN(a) && !isNaN(b)) {
        return `Hieu cua phep tinh la ${a - b}`;
    }
    else {
        return `Phep tinh khong hop le`;
    }
}
function quotient(p1, p2) {
    let a = Number(p1);
    let b = Number(p2);
    if (!isNaN(a) && !isNaN(b)) {
        return `Thuong cua phep tinh la ${a / b}`;
    }
    else {
        return `Phep tinh khong hop le`;
    }
}
let result = product("5", 6);
console.log(result);
function sum(p1, p2) {
    let a = Number(p1);
    let b = Number(p2);
    if (!isNaN(a) && !isNaN(b)) {
        return `Tổng của phép tính là ${a + b}`;
    }
    else {
        return `Phép tính không hợp lệ`;
    }
}
function product(p1, p2) {
    let a = Number(p1);
    let b = Number(p2);
    if (!isNaN(a) && !isNaN(b)) {
        return `Tích của phép tính là ${a * b}`;
    }
    else {
        return `Phép tính không hợp lệ`;
    }
}
function difference(p1, p2) {
    let a = Number(p1);
    let b = Number(p2);
    if (!isNaN(a) && !isNaN(b)) {
        return `Hiệu của phép tính là ${a - b}`;
    }
    else {
        return `Phép tính không hợp lệ`;
    }
}
function quotient(p1, p2) {
    let a = Number(p1);
    let b = Number(p2);
    if (!isNaN(a) && !isNaN(b) && b !== 0) {
        return `Thương của phép tính là ${a / b}`;
    }
    else {
        return `Phép tính không hợp lệ`;
    }
}
function giaiThua(p1) {
    let a = Number(p1);
    let ketQua = 1;
    if (!isNaN(a) && a > 0 && Number.isInteger(a)) {
        for (let i = a; i >= 1; i--) {
            ketQua *= i;
        }
        return `Kết quả giai thừa của ${a} là ${ketQua}`;
    }
    else {
        return `Phép tính không hợp lệ`;
    }
}
function luyThua(p1, p2) {
    let a = Number(p1);
    let b = Number(p2);
    if (!isNaN(a) && !isNaN(b)) {
        return `Kết quả lũy thừa ${a}^${b} là ${a ** b}`;
    }
    else {
        return `Phép tính không hợp lệ`;
    }
}
function can(p1, p2) {
    let a = Number(p1);
    let b = Number(p2);
    if (!isNaN(a) && !isNaN(b) && a > 0) {
        const result = Math.pow(b, 1 / a);
        return `Căn bậc ${a} của ${b} là ${result}`;
    }
    else {
        return `Phép tính không hợp lệ`;
    }
}
function calculate(operation) {
    const input1 = document.getElementById("input1").value;
    const input2 = document.getElementById("input2").value;
    let result;
    switch (operation) {
        case "sum":
            result = sum(input1, input2);
            break;
        case "difference":
            result = difference(input1, input2);
            break;
        case "product":
            result = product(input1, input2);
            break;
        case "quotient":
            result = quotient(input1, input2);
            break;
        case "giaiThua":
            result = giaiThua(input1);
            break;
        case "luyThua":
            result = luyThua(input1, input2);
            break;
        case "can":
            result = can(input1, input2);
            break;
        default:
            result = "Unknown operation";
    }
    const resultElement = document.getElementById("result");
    resultElement.textContent = result;
}
function bangCuuChuong() {
    for (let i = 1; i < 10; i++) {
        for (let j = 1; j <= 10; j++) {
            let result = `${i} x ${j} = ${i * j}`;
            console.log(result);
        }
        console.log("--------------------");
    }
}
bangCuuChuong();
function getRandom(min, max) {
    let a = Number(min);
    let b = Number(max);
    if (!isNaN(a) && !isNaN(b)) {
        return Math.floor(Math.random() * (b - a + 1) + a);
    }
    else {
        return 0;
    }
}
let result = getRandom(1, 10);
console.log(result);
let i = 1;
let count = 0;
while (i) {
    let c = prompt("Game đoán số (bạn chỉ có 3 lượt đoán)");
    if (count === 3) {
        alert("ban da thua");
        break;
    }
    if (c === null) {
        console.log("Chua nhap");
    }
    else if (+c === result) {
        alert("Chuc mung ban");
        i = 0;
    }
    else if (+c < result) {
        alert("Nho hon ket qua");
        count++;
    }
    else if (+c > result) {
        alert("Lon hon ket qua");
        count++;
    }
}
let date = prompt("Nhap ngay sinh cua ban");
let month = prompt("Nhap thang sinh cua ban");
let date1 = Number(date);
let month1 = Number(month);
function CheckNumber(p1, p2) {
    let date1 = Number(p1);
    let month1 = Number(p2);
    if (isNaN(date1) || isNaN(month1)) {
        return false;
    }
    else {
        return true;
    }
}
let result = CheckNumber(date, month);
if (result === false) {
    alert("Du lieu nhap vao khong hop le");
}
else {
    switch (month1) {
        case 1:
            if (date1 > 18 && date1 < 32) {
                alert("Cung Bao Binh");
            }
            else {
                alert("Cung Ma Ket");
            }
            break;
        case 2:
            if (date1 > 0 && date1 < 19) {
                alert("Cung Bao Binh");
            }
            else {
                alert("Cung Song Ngu");
            }
            break;
        case 3:
            if (date1 > 0 && date1 < 21) {
                alert("Cung Song Nguu");
            }
            else {
                alert("Cung Bach Duong");
            }
            break;
        case 4:
            if (date1 > 0 && date1 < 20) {
                alert("Cung Bach Duong");
            }
            else {
                alert("Cung Kim Nguu");
            }
            break;
        case 5:
            if (date1 > 0 && date1 < 21) {
                alert("Cung Kim Nguu");
            }
            else {
                alert("Cung Song Tu");
            }
            break;
        case 6:
            if (date1 > 0 && date1 < 22) {
                alert("Cung Song Tu");
            }
            else {
                alert("Cung Cu Giai");
            }
            break;
        case 7:
            if (date1 > 0 && date1 < 23) {
                alert("Cung Cu Giai");
            }
            else {
                alert("Cung Su Tu");
            }
            break;
        case 8:
            if (date1 > 0 && date1 < 23) {
                alert("Cung Su Tu");
            }
            else {
                alert("Cung Xu Nu");
            }
            break;
        case 9:
            if (date1 > 0 && date1 < 23) {
                alert("Cung Xu Nu");
            }
            else {
                alert("Cung Thien Binh");
            }
            break;
        case 10:
            if (date1 > 0 && date1 < 24) {
                alert("Cung Thien Binh");
            }
            else {
                alert("Cung Bo Cap");
            }
            break;
        case 11:
            if (date1 > 0 && date1 < 23) {
                alert("Cung Bo Cap");
            }
            else {
                alert("Cung Nhan Ma");
            }
            break;
        case 12:
            if (date1 > 0 && date1 < 22) {
                alert("Cung Nhan Ma");
            }
            else {
                alert("Cung Ma Ket");
            }
            break;
    }
}
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function displayRandomColors() {
    for (let i = 1; i <= 10; i++) {
        const randomColor = getRandomColor();
        console.log(`%cColor ${i}: ${randomColor}`, `color: ${randomColor}; font-size: 16px; font-weight: bold;`);
    }
}
displayRandomColors();
