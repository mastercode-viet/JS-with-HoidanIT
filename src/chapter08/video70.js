console.log("video 70 ");
const inputTodo = document.getElementById("name");
const btnSave = document.getElementById("btnSave");
function getRandomInt(min, max) {
  min = Math.ceil(min); // Làm tròn lên
  max = Math.floor(max); // Làm tròn xuống
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
if (btnSave) {
  btnSave.addEventListener("click", () => {
    const myTodo = {
      id: getRandomInt(1, 1000),
      name: inputTodo.value,
    };
    // alert(inputTodo.value);
    // kiem tra da ton tai todo truoc day
    const currentToDoStr = localStorage.getItem("myTodo");
    // → lấy ra chuỗi JSON từ localStorage

    if (currentToDoStr) {
      //// → biến chuỗi JSON thành mảng các todo
      const currentTodo = JSON.parse(currentToDoStr);
      // push thêm todo
      currentTodo.push(myTodo);
      localStorage.setItem("myTodo", JSON.stringify(currentTodo));
    } else {
      localStorage.setItem("myTodo", JSON.stringify([myTodo]));
    }
    /// sucess\
    window.location.href = "video70.html";
  });
}
const generateToDo = () => {
  const toDoListStr = localStorage.getItem("myTodo");
  if (toDoListStr) {
    const toDoList = JSON.parse(toDoListStr);
    console.log(toDoList);
    toDoList.forEach((todo, index) => {
      const tbody = document.querySelector("#todoList tbody");
      tbody.innerHTML += `
      <tr>
      <td>${todo.id}</td>
      <td>${todo.name}</td>
      <td> <button onclick ="deleteToDo(${todo.id})">Delete</button> <td>

      
      `;
    });
  }
};
generateToDo();
// add fn delete
const deleteToDo = (id) => {
  console.log("🗑️ Đang xoá todo với ID:", id);
  const toDoListStr = localStorage.getItem("myTodo");
  if (toDoListStr) {
    const toDoList = JSON.parse(toDoListStr);
    const newTodo = toDoList.filter((todo) => todo.id !== id);
    localStorage.setItem("myTodo", JSON.stringify(newTodo));

    window.location.reload();
  }
};
