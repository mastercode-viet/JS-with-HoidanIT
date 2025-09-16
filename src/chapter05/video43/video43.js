console.log("video 43");
const sv1 = {
  name: "viet anh",
  age: 22,
};

const sv2 = {
  name: "quach xuan tu ",
  age: 20,
};
const sv3 = {
  name: "ong cos",
  age: 30,
};
const sinhvien = [sv1, sv2, sv3];

sinhvien.forEach((value, index) => {
  return console.log("index", index, "name", value.name);
});
/// for in : duyệt qua tungwf phần tử của object : duệt qa thuộc tính
// cú pháp
/*
    
    for (let key in object) {
      console.log(object[key]);
    }
*/
const person = {
  email: "admin@gmail.com",
  age: 34,
};
for (let key in person) {
  console.log(person[key]);
}
// for of : duyệt qua giá trị
