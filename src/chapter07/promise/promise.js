console.log("promise  1213");
//examplec
const promise = new Promise((resolve, reject) => {
  const suscess = false;
  if (suscess) {
    resolve("Dữ liệu đã được tải thành công!");
  } else {
    reject("Lỗi khi tải dữ liệu!");
  }
});
promise
  .then((result) => {
    console.log("✅ Promise ở trạng thái fulfilled: ", result);
  })
  .catch((error) => {
    console.log("❌ Promise ở trạng thái rejected: ", error);
  });
