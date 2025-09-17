console.log("login helo ");
const username = "xviet1@gmail.com";
const password = "123456";

const myButton = document.getElementById("myButton");
const name = document.getElementById("name");
const pass = document.getElementById("pass");

myButton.addEventListener("click", () => {
  if (name.value === username && pass.value === password) {
    alert("dang nhap thanh cong ");
    window.location.href = "success.html";
    console.log(name.value);
    console.log(pass.value);
  } else {
    alert("dang nhap that bai ");
    name.style.borderColor = "red";
    pass.style.borderColor = "red";
  }
});
