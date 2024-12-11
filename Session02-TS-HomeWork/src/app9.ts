// Định nghĩa các kiểu dữ liệu
type Product = {
  id: number;
  name: string;
  count: number;
};

type CartItem = {
  id: number;
  name: string;
  quantity: number;
};

// Danh sách sản phẩm trong kho
let stores: Product[] = [
  { id: 1, name: "Milk", count: 100 },
  { id: 2, name: "Yakult", count: 100 },
  { id: 3, name: "Butter", count: 100 },
];

// Giỏ hàng
let carts: CartItem[] = [];

// Hàm thêm sản phẩm vào giỏ hàng
function handleCreate(): void {
  const productName = prompt("Nhập tên sản phẩm muốn mua:");
  if (!productName) return;

  const storeProduct = stores.find(
    (product) => product.name.toLowerCase() === productName.toLowerCase()
  );

  if (storeProduct && storeProduct.count > 0) {
    storeProduct.count -= 1;

    const cartProduct = carts.find(
      (cart) => cart.name.toLowerCase() === productName.toLowerCase()
    );
    if (cartProduct) {
      cartProduct.quantity += 1;
    } else {
      carts.push({ id: storeProduct.id, name: storeProduct.name, quantity: 1 });
    }

    alert(`${productName} đã được thêm vào giỏ hàng.`);
  } else {
    alert("Sản phẩm không tồn tại hoặc đã hết hàng.");
  }
}

// Hàm hiển thị danh sách sản phẩm trong kho và giỏ hàng
function handleRead(): void {
  let storeList = "Danh sách sản phẩm trong kho:\n";
  stores.forEach((product) => {
    storeList += `- ${product.name} (Còn lại: ${product.count})\n`;
  });

  let cartList = "Danh sách sản phẩm trong giỏ hàng:\n";
  if (carts.length > 0) {
    carts.forEach((cart) => {
      cartList += `- ${cart.name} (Số lượng: ${cart.quantity})\n`;
    });
  } else {
    cartList += "Giỏ hàng hiện đang trống.\n";
  }

  alert(storeList + "\n" + cartList);
}

// Hàm cập nhật số lượng sản phẩm trong giỏ hàng
function handleUpdate(): void {
  const productName = prompt("Nhập tên sản phẩm muốn cập nhật trong giỏ hàng:");
  if (!productName) return;

  const cartProduct = carts.find(
    (cart) => cart.name.toLowerCase() === productName.toLowerCase()
  );
  if (cartProduct) {
    const newQuantity = parseInt(prompt("Nhập số lượng mới:") || "0", 10);
    if (newQuantity > 0) {
      const storeProduct = stores.find(
        (product) => product.id === cartProduct.id
      );
      if (storeProduct) {
        const difference = newQuantity - cartProduct.quantity;
        if (storeProduct.count >= difference) {
          cartProduct.quantity = newQuantity;
          storeProduct.count -= difference;
          alert("Cập nhật số lượng thành công.");
        } else {
          alert("Không đủ hàng trong kho để cập nhật số lượng.");
        }
      }
    } else {
      alert("Số lượng mới không hợp lệ.");
    }
  } else {
    alert("Sản phẩm không có trong giỏ hàng.");
  }
}

// Hàm xóa sản phẩm khỏi giỏ hàng
function handleDelete(): void {
  const productName = prompt("Nhập tên sản phẩm muốn xóa khỏi giỏ hàng:");
  if (!productName) return;

  const cartIndex = carts.findIndex(
    (cart) => cart.name.toLowerCase() === productName.toLowerCase()
  );
  if (cartIndex > -1) {
    const cartProduct = carts[cartIndex];
    const storeProduct = stores.find(
      (product) => product.id === cartProduct.id
    );
    if (storeProduct) {
      storeProduct.count += cartProduct.quantity;
    }
    carts.splice(cartIndex, 1);
    alert("Xóa sản phẩm khỏi giỏ hàng thành công.");
  } else {
    alert("Sản phẩm không có trong giỏ hàng.");
  }
}

// Hàm thoát chương trình
function handleExit(): void {
  alert("Cảm ơn bạn đã đến với Rikkei Stores");
  throw new Error("Exit Program"); // Dừng chương trình
}

// Chương trình chính
function main(): void {
  while (true) {
    const choice = prompt(
      "Nhập C (Thêm), R (Xem), U (Cập nhật), D (Xóa), E (Thoát):"
    );
    if (!choice) continue;

    switch (choice.toUpperCase()) {
      case "C":
        handleCreate();
        break;
      case "R":
        handleRead();
        break;
      case "U":
        handleUpdate();
        break;
      case "D":
        handleDelete();
        break;
      case "E":
        handleExit();
        break;
      default:
        alert("Lựa chọn không hợp lệ. Vui lòng thử lại.");
    }
  }
}

// Chạy chương trình chính
main();
