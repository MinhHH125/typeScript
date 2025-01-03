"use strict";
class Person {
    constructor(id, name, email, phone) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    getDetails() {
        return `ID: ${this.id}, Tên: ${this.name}, Email: ${this.email}, SĐT: ${this.phone}`;
    }
}
class Room {
    constructor(roomId, type, pricePerNight) {
        this.roomId = roomId;
        this.type = type;
        this.pricePerNight = pricePerNight;
        this.isAvailable = true;
    }
    bookRoom() {
        this.isAvailable = false;
    }
    releaseRoom() {
        this.isAvailable = true;
    }
    getType() {
        return this.type;
    }
}
class StandardRoom extends Room {
    constructor(roomId, pricePerNight) {
        super(roomId, "Thường", pricePerNight);
    }
    calculateCost(nights) {
        return this.pricePerNight * nights;
    }
    getAdditionalServices() {
        return [];
    }
    applyDiscount(discountRate) {
        return this.pricePerNight - this.pricePerNight * discountRate;
    }
    getCancellationPolicy() {
        return "Hoàn tiền 100% nếu hủy trước 1 ngày.";
    }
}
class DeluxeRoom extends Room {
    constructor(roomId, pricePerNight) {
        super(roomId, "Cao Cấp", pricePerNight);
    }
    calculateCost(nights) {
        return this.pricePerNight * nights;
    }
    getAdditionalServices() {
        return ["Bữa sáng"];
    }
    applyDiscount(discountRate) {
        return this.pricePerNight - this.pricePerNight * discountRate;
    }
    getCancellationPolicy() {
        return "Hoàn tiền 50% nếu hủy trước 2 ngày.";
    }
}
class SuiteRoom extends Room {
    constructor(roomId, pricePerNight) {
        super(roomId, "Hạng Sang", pricePerNight);
    }
    calculateCost(nights) {
        return this.pricePerNight * nights;
    }
    getAdditionalServices() {
        return ["Spa", "Minibar"];
    }
    applyDiscount(discountRate) {
        return this.pricePerNight - this.pricePerNight * discountRate;
    }
    getCancellationPolicy() {
        return "Không hoàn tiền.";
    }
}
class Booking {
    constructor(bookingId, customer, room, nights) {
        this.bookingId = bookingId;
        this.customer = customer;
        this.room = room;
        this.nights = nights;
        this.totalCost = room.calculateCost(nights);
    }
    getDetails() {
        return `Mã Đặt Phòng: ${this.bookingId}, Khách Hàng: [${this.customer.getDetails()}], Phòng: ${this.room.getType()}, Số Đêm: ${this.nights}, Tổng Chi Phí: ${this.totalCost}`;
    }
}
class HotelManager {
    constructor() {
        this.rooms = [];
        this.bookings = [];
        this.customers = [];
    }
    addRoom(type, pricePerNight) {
        const roomId = this.rooms.length + 1;
        let room;
        if (type === "Thường") {
            room = new StandardRoom(roomId, pricePerNight);
        }
        else if (type === "Cao Cấp") {
            room = new DeluxeRoom(roomId, pricePerNight);
        }
        else if (type === "Hạng Sang") {
            room = new SuiteRoom(roomId, pricePerNight);
        }
        else {
            console.log("Loại phòng không hợp lệ!");
            return;
        }
        this.rooms.push(room);
        console.log(`Đã thêm phòng: ${type}, Mã: ${roomId}`);
    }
    addCustomer(name, email, phone) {
        const id = this.customers.length + 1;
        const customer = new Person(id, name, email, phone);
        this.customers.push(customer);
        console.log(`Đã thêm khách hàng: ${name}, Mã: ${id}`);
        return customer;
    }
    bookRoom(customerId, roomId, nights) {
        const customer = this.customers.find((c) => c["id"] === customerId);
        const room = this.rooms.find((r) => r["roomId"] === roomId);
        if (!customer || !room) {
            console.log("Không tìm thấy khách hàng hoặc phòng!");
            return null;
        }
        if (!room.isAvailable) {
            console.log("Phòng không có sẵn!");
            return null;
        }
        room.bookRoom();
        const booking = new Booking(this.bookings.length + 1, customer, room, nights);
        this.bookings.push(booking);
        console.log("Đặt phòng thành công.");
        return booking;
    }
    releaseRoom(roomId) {
        const room = this.rooms.find((r) => r["roomId"] === roomId);
        if (room) {
            room.releaseRoom();
            console.log("Phòng đã được trả.");
        }
        else {
            console.log("Không tìm thấy phòng.");
        }
    }
    listAvailableRooms() {
        const availableRooms = this.rooms.filter((room) => room.isAvailable);
        console.log("Danh sách phòng có sẵn:");
        availableRooms.forEach((room) => {
            console.log(`Mã phòng: ${room["roomId"]}, Loại: ${room["type"]}, Giá mỗi đêm: ${room["pricePerNight"]}`);
        });
    }
}
class Main {
    constructor() {
        this.hotelManager = new HotelManager();
    }
    showMenu() {
        return `
    Chào mừng đến với Hệ thống Quản lý Khách sạn!
    1. Thêm khách hàng
    2. Thêm phòng
    3. Đặt phòng
    4. Trả phòng
    5. Danh sách phòng trống
    6. Xem đặt phòng của khách hàng
    7. Tính tổng doanh thu
    8. Số lượng từng loại phòng
    9. Giảm giá phòng
    10. Dịch vụ bổ sung của phòng
    11. Chính sách hủy phòng
    12. Thoát chương trình
    `;
    }
    start() {
        let running = true;
        while (running) {
            alert(this.showMenu());
            const choice = prompt("Nhập lựa chọn của bạn:");
            switch (choice) {
                case "1":
                    const name = prompt("Nhập tên khách hàng:");
                    const email = prompt("Nhập email khách hàng:");
                    const phone = prompt("Nhập số điện thoại khách hàng:");
                    this.hotelManager.addCustomer(name || "", email || "", phone || "");
                    break;
                case "2":
                    const roomType = prompt("Nhập loại phòng (Thường/Cao cấp/Hạng sang):");
                    const price = parseFloat(prompt("Nhập giá mỗi đêm:") || "0");
                    this.hotelManager.addRoom(roomType || "", price);
                    break;
                case "3":
                    const customerId = parseInt(prompt("Nhập ID khách hàng:") || "0");
                    const roomId = parseInt(prompt("Nhập ID phòng:") || "0");
                    const nights = parseInt(prompt("Nhập số đêm:") || "0");
                    this.hotelManager.bookRoom(customerId, roomId, nights);
                    break;
                case "4":
                    const releaseRoomId = parseInt(prompt("Nhập ID phòng cần trả:") || "0");
                    this.hotelManager.releaseRoom(releaseRoomId);
                    break;
                case "5":
                    this.hotelManager.listAvailableRooms();
                    break;
                case "6":
                    const customerBookingsId = parseInt(prompt("Nhập ID khách hàng:") || "0");
                    const customer = this.hotelManager["customers"].find((c) => c["id"] === customerBookingsId);
                    if (customer) {
                        console.log("Danh sách đặt phòng của khách hàng:");
                        this.hotelManager["bookings"].forEach((booking) => {
                            if (booking["customer"]["id"] === customerBookingsId) {
                                console.log(booking.getDetails());
                            }
                        });
                    }
                    else {
                        console.log("Không tìm thấy khách hàng.");
                    }
                    break;
                case "7":
                    let totalRevenue = 0;
                    this.hotelManager["bookings"].forEach((booking) => {
                        totalRevenue += booking["totalCost"];
                    });
                    console.log("Tổng doanh thu từ các đặt phòng:", totalRevenue);
                    break;
                case "8":
                    let standardCount = 0;
                    let deluxeCount = 0;
                    let suiteCount = 0;
                    this.hotelManager["rooms"].forEach((room) => {
                        if (room["type"] === "Thường")
                            standardCount++;
                        if (room["type"] === "Cao Cấp")
                            deluxeCount++;
                        if (room["type"] === "Hạng Sang")
                            suiteCount++;
                    });
                    console.log("Số lượng từng loại phòng:");
                    console.log("Phòng Thường:", standardCount);
                    console.log("Phòng Cao Cấp:", deluxeCount);
                    console.log("Phòng Hạng Sang:", suiteCount);
                    break;
                case "9":
                    const discountRoomId = parseInt(prompt("Nhập ID phòng cần giảm giá:") || "0");
                    const discountRate = parseFloat(prompt("Nhập phần trăm giảm giá (0.1 = 10%):") || "0");
                    const discountRoom = this.hotelManager["rooms"].find((r) => r["roomId"] === discountRoomId);
                    if (discountRoom) {
                        const newPrice = discountRoom.applyDiscount(discountRate);
                        console.log("Giá mới của phòng:", newPrice);
                    }
                    else {
                        console.log("Không tìm thấy phòng.");
                    }
                    break;
                case "10":
                    const serviceRoomId = parseInt(prompt("Nhập ID phòng để xem dịch vụ bổ sung:") || "0");
                    const serviceRoom = this.hotelManager["rooms"].find((r) => r["roomId"] === serviceRoomId);
                    if (serviceRoom) {
                        console.log("Các dịch vụ bổ sung:");
                        console.log(serviceRoom.getAdditionalServices().join(", "));
                    }
                    else {
                        console.log("Không tìm thấy phòng.");
                    }
                    break;
                case "11":
                    const cancelPolicyRoomId = parseInt(prompt("Nhập ID phòng để xem chính sách hủy:") || "0");
                    const cancelRoom = this.hotelManager["rooms"].find((r) => r["roomId"] === cancelPolicyRoomId);
                    if (cancelRoom) {
                        console.log("Chính sách hủy phòng:");
                        console.log(cancelRoom.getCancellationPolicy());
                    }
                    else {
                        console.log("Không tìm thấy phòng.");
                    }
                    break;
                case "12":
                    running = false;
                    console.log("Thoát chương trình.");
                    break;
                default:
                    console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
            }
        }
    }
}
const app = new Main();
app.start();
