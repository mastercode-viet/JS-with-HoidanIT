console.log("video 55");
const btn = document.getElementById("myButton");
const input = document.getElementById("myName");
const preName = document.getElementById("preName");
const preName2 = localStorage.getItem("hoidanIT");
if (preName2) {
  preName.innerHTML = `<b>${preName2}</b>`;
}

btn.addEventListener("click", () => {
  console.log(input.value);
  document.getElementById("mess").innerHTML = `<b>${input.value}</b>`;
  localStorage.setItem("hoidanIT", input.value);
});
