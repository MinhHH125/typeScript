class Todo {
  private _id: number;
  private _content: string;
  private _status: boolean;

  constructor(id: number, content: string, status: boolean = false) {
    (this._id = id), (this._content = content), (this._status = status);
  }
  set id(id: number) {
    this._id = id;
  }
  get id() {
    return this._id;
  }

  set content(content: string) {
    this._content = content;
  }
  get content() {
    return this._content;
  }

  set status(status: boolean) {
    this._status = status;
  }

  get status() {
    return this._status;
  }
}

//Class TodoListManager
class TodoListManager {
  private _todos: Todo[];
  constructor() {
    this._todos = [];
  }
  //Ham add
  addTodo(content: string) {
    if (!content.trim()) {
      alert("Nhập không hợp lệ");
    } else {
      //Neu mang rong id se bat dau tu 1
      const id =
        this._todos.length > 0 ? this._todos[this._todos.length - 1].id + 1 : 1;
      //

      const newTodo: Todo = new Todo(id, content);
      this._todos.push(newTodo);
      alert("Đã thêm công việc");
    }
  }
  //Ham remove
  removeTodo(index: number) {
    if (index >= 0 && index < this._todos.length) {
      this._todos.splice(index, 1);
      alert("Đã xóa thành công");
    } else {
      alert("Vị trí không hợp lệ");
    }
  }

  //Ham update
  updateTodo(index: number, content: string) {
    if (index >= 0 && index < this._todos.length) {
      if (content.trim()) {
        this._todos[index].content = content;
        alert("Cập nhật công việc thành công!");
      } else {
        alert("Nội dung không hợp lệ!");
      }
    } else {
      alert("Vị trí không hợp lệ!");
    }
  }
  sortTodo() {
    const todosCopy = [...this._todos];

    todosCopy.sort((a, b) => a.content.localeCompare(b.content));

    let result: string = "";
    for (let element of todosCopy) {
      const statusText = element.status ? "Hoàn thành" : "Chưa hoàn thành";
      result += `ID: ${element.id}, Name: ${element.content}, Status: ${statusText}\n`;
    }
    alert(result);
  }

  findTodo(content: string) {
    const findtodo = this._todos.find((ten) => ten.content === content);
    if (findtodo) {
      alert(
        `id: ${findtodo.id} name: ${findtodo.content}  statuss: ${findtodo.status}`
      );
    } else {
      alert("Không tìm thấy");
    }
  }

  listTodos() {
    let result7: string = "";
    for (let element of this._todos) {
      result7 += `ID:${element.id}, Name: ${element.content}, Status: ${element.status}
`;
    }
    alert(result7);
  }
}

//Class Main
class Main {
  private _todolistmn: TodoListManager;
  constructor() {
    this._todolistmn = new TodoListManager();
  }

  menu(): string {
    return `
    1.In ra danh sách công việc.
    2.Thêm công việc vào cuối danh sách.
    3.Xóa công việc tại vị trí bất kỳ.
    4.Sửa nội dung công việc tại vị trí bất kỳ.
    5.Sắp xếp và in ra nội dung công việc.
    6.Tìm kiếm todo
    7.Dừng chương trình
`;
  }

  start(): void {
    let run: boolean = true;
    while (run) {
      alert(this.menu());
      const choice = prompt("Nhap lua chon cua ban");
      switch (choice) {
        case "1":
          alert("Danh sách công việc đã thêm");
          this._todolistmn.listTodos();

          break;

        case "2":
          const input1 = prompt("Nhap ten cong viec can them vao danh sach: ");
          this._todolistmn.addTodo(input1 || "");
          break;

        case "3":
          const input = Number(prompt("Nhap vi tri cong viec can xoa"));
          this._todolistmn.removeTodo(input);
          break;

        case "4":
          alert("Nhập vị trí và tên công việc cần chỉnh sửa: ");
          const input4 = Number(
            prompt("Nhập ví trí tên công việc trong danh sách")
          );
          const input5 = prompt("Nhập tên công việc cần sửa");
          this._todolistmn.updateTodo(input4, input5 || "");

          break;

        case "5":
          this._todolistmn.sortTodo(); // Gọi hàm sortTodo
          break;

        case "6":
          const input6 = prompt("Nhap ten cong viec ban can tim");
          this._todolistmn.findTodo(input6 || "");

          break;

        case "7":
          run = false;
          alert("Thoat chuong trinh");
          break;
      }
    }
  }
}

const app = new Main();
app.start();
