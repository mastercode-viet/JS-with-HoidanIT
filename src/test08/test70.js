console.log("Test 08");
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
    //   alert(inputTodo.value);

    const currentToDoStr = localStorage.getItem("myTodo");
    if (currentToDoStr) {
      const currentTodo = JSON.parse(currentToDoStr);
      currentTodo.push(myTodo);
      localStorage.setItem("myTodo", JSON.stringify(currentTodo));
    } else {
      localStorage.setItem("myTodo", JSON.stringify([myTodo]));
    }
    window.location.href = "listTodo.html";
  });
}
const getToDo = () => {
  const currentTodo = localStorage.getItem("myTodo");
  if (currentTodo) {
    const todoList = JSON.parse(currentTodo);
    todoList.forEach((todo, index) => {
      const tbody = document.querySelector("#todoList tbody");
      tbody.innerHTML += `
            <tr>
            <td>${todo.id}</td>
            <td>${todo.name}</td>
            <td onclick="handleDelete(${todo.id})"><button>Delete</button><td>
            `;
    });
  }
};
getToDo();

const handleDelete = (id) => {
  console.log("dang xoa voi Id la: ", id);
  const toDoListStr = localStorage.getItem("myTodo");
  if (toDoListStr) {
    const toDoList = JSON.parse(toDoListStr);
    const newTodo = toDoList.filter((todo) => todo.id !== id);
    localStorage.setItem("myTodo", JSON.stringify(newTodo));
    window.location.reload();
  }
};
