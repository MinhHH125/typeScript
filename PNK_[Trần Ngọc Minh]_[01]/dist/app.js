"use strict";
class Nguoi {
    constructor(id, ten, email, sdt) {
        this.id = id;
        this.ten = ten;
        this.email = email;
        this.sdt = sdt;
    }
    layThongTin() {
        return `ID: ${this.id}, Tên: ${this.ten}, Email: ${this.email}, Sđt: ${this.sdt}`;
    }
}
class Phong {
    constructor(maPhong, loai, giaMoiDem) {
        this.maPhong = maPhong;
        this.loai = loai;
        this.giaMoiDem = giaMoiDem;
        this.coSan = true;
    }
    datPhong() {
        this.coSan = false;
    }
    traPhong() {
        this.coSan = true;
    }
    layLoaiPhong() {
        return this.loai;
    }
    layTinhTrang() {
        return this.coSan;
    }
}
class PhongThuong extends Phong {
    constructor(maPhong, giaMoiDem) {
        super(maPhong, "Thường", giaMoiDem);
    }
    tinhChiPhi(soDem) {
        return this.giaMoiDem * soDem;
    }
    dichVuBoSung() {
        return [];
    }
    apDungGiamGia(tyLeGiam) {
        return this.giaMoiDem - this.giaMoiDem * tyLeGiam;
    }
    chinhSachHuyPhong() {
        return "Hoàn tiền 100% nếu hủy trước 1 ngày.";
    }
}
class PhongCaoCap extends Phong {
    constructor(maPhong, giaMoiDem) {
        super(maPhong, "Cao Cấp", giaMoiDem);
    }
    tinhChiPhi(soDem) {
        return this.giaMoiDem * soDem;
    }
    dichVuBoSung() {
        return ["Bữa sáng"];
    }
    apDungGiamGia(tyLeGiam) {
        return this.giaMoiDem - this.giaMoiDem * tyLeGiam;
    }
    chinhSachHuyPhong() {
        return "Hoàn tiền 50% nếu hủy trước 2 ngày.";
    }
}
class PhongHangSang extends Phong {
    constructor(maPhong, giaMoiDem) {
        super(maPhong, "Hạng Sang", giaMoiDem);
    }
    tinhChiPhi(soDem) {
        return this.giaMoiDem * soDem;
    }
    dichVuBoSung() {
        return ["Spa", "Minibar"];
    }
    apDungGiamGia(tyLeGiam) {
        return this.giaMoiDem - this.giaMoiDem * tyLeGiam;
    }
    chinhSachHuyPhong() {
        return "Không hoàn tiền.";
    }
}
class DatPhong {
    constructor(maDatPhong, khachHang, phong, soDem) {
        this.maDatPhong = maDatPhong;
        this.khachHang = khachHang;
        this.phong = phong;
        this.soDem = soDem;
        this.tongChiPhi = phong.tinhChiPhi(soDem);
    }
    layThongTin() {
        return `Mã Đặt Phòng: ${this.maDatPhong}, Khách Hàng: [${this.khachHang.layThongTin()}], Phòng: ${this.phong.layLoaiPhong()}, Số Đêm: ${this.soDem}, Tổng Chi Phí: $${this.tongChiPhi}`;
    }
}
class QuanLyKhachSan {
    constructor() {
        this.danhSachPhong = [];
        this.danhSachDatPhong = [];
        this.danhSachKhachHang = [];
    }
    themPhong(loai, giaMoiDem) {
        const maPhong = this.danhSachPhong.length + 1;
        let phong;
        if (loai === "Thường") {
            phong = new PhongThuong(maPhong, giaMoiDem);
        }
        else if (loai === "Cao Cấp") {
            phong = new PhongCaoCap(maPhong, giaMoiDem);
        }
        else if (loai === "Hạng Sang") {
            phong = new PhongHangSang(maPhong, giaMoiDem);
        }
        else {
            console.log("Loại phòng không hợp lệ!");
            return;
        }
        this.danhSachPhong.push(phong);
        console.log(`Đã thêm phòng: ${loai}, Mã: ${maPhong}`);
    }
    themKhachHang(ten, email, sdt) {
        const id = this.danhSachKhachHang.length + 1;
        const khachHang = new Nguoi(id, ten, email, sdt);
        this.danhSachKhachHang.push(khachHang);
        console.log(`Đã thêm khách hàng: ${ten}, Mã: ${id}`);
        return khachHang;
    }
    datPhong(idKhachHang, idPhong, soDem) {
        const khachHang = this.danhSachKhachHang.find(function (kh) {
            return kh["id"] === idKhachHang;
        });
        const phong = this.danhSachPhong.find(function (p) {
            return p["maPhong"] === idPhong;
        });
        if (!khachHang) {
            console.log("Không tìm thấy khách hàng!");
            return;
        }
        if (!phong) {
            console.log("Không tìm thấy phòng!");
            return;
        }
        if (!phong.coSan) {
            console.log("Phòng không có sẵn!");
            return;
        }
        phong.datPhong();
        const datPhong = new DatPhong(this.danhSachDatPhong.length + 1, khachHang, phong, soDem);
        this.danhSachDatPhong.push(datPhong);
        console.log("Đặt phòng thành công.");
    }
    lietKePhongCoSan() {
        console.log("Danh sách phòng có sẵn:");
        const phongCoSan = this.danhSachPhong.filter(function (phong) {
            return phong.coSan;
        });
        phongCoSan.forEach(function (phong) {
            console.log(`Mã phòng: ${phong["maPhong"]}, Loại: ${phong["loai"]}, Giá: ${phong["giaMoiDem"]} VNĐ`);
        });
    }
}
class Main {
    constructor() {
        this.quanLyKhachSan = new QuanLyKhachSan();
    }
    hienMenu() {
        return ("=== Quản lý khách sạn ===\n" +
            "1. Thêm phòng\n" +
            "2. Thêm khách hàng\n" +
            "3. Đặt phòng\n" +
            "4. Liệt kê phòng có sẵn\n" +
            "5. Thoát\n");
    }
    khoiDong() {
        let dangChay = true;
        while (dangChay) {
            alert(this.hienMenu());
            const luaChon = prompt("Nhập lựa chọn của bạn: ");
            console.log("Lựa chọn của bạn là:", luaChon);
            switch (luaChon) {
                case "1":
                    const loaiPhong = prompt("Nhập loại phòng (Thường/Cao cấp/Hạng sang): ");
                    const giaMoiDem = parseFloat(prompt("Nhập giá mỗi đêm: ") || "0");
                    this.quanLyKhachSan.themPhong(loaiPhong || "", giaMoiDem);
                    break;
                case "2":
                    const tenKhach = prompt("Nhập tên khách hàng: ");
                    const emailKhach = prompt("Nhập email khách hàng: ");
                    const soDienThoaiKhach = prompt("Nhập số điện thoại khách hàng: ");
                    this.quanLyKhachSan.themKhachHang(tenKhach || "", emailKhach || "", soDienThoaiKhach || "");
                    break;
                case "3":
                    const idKhachHang = parseInt(prompt("Nhập ID khách hàng: ") || "0");
                    const idPhong = parseInt(prompt("Nhập ID phòng: ") || "0");
                    const soDem = parseInt(prompt("Nhập số đêm: ") || "0");
                    this.quanLyKhachSan.datPhong(idKhachHang, idPhong, soDem);
                    break;
                case "4":
                    this.quanLyKhachSan.lietKePhongCoSan();
                    break;
                case "5":
                    dangChay = false;
                    alert("Thoát chương trình.");
                    break;
                default:
                    alert("Lựa chọn không hợp lệ, vui lòng thử lại.");
            }
        }
    }
}
const main = new Main();
main.khoiDong();
