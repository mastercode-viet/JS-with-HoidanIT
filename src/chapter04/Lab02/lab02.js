console.log("lab 02");
//
// const sum = (a, b) => {
//   return a + b;
// };
// console.log(sum(2, 5)); // Kết quả: 7

const tinhTB = (toan, van, anh) => {
  return (toan + van + anh) / 3;
};

const xepLoai = (diemTB) => {
  if (diemTB >= 8) {
    return "gioi";
  } else if (diemTB >= 6.5) {
    return "kha";
  } else if (diemTB >= 5) {
    return "trungbinh";
  } else {
    return "yeu";
  }
};
const toan = 7;
const van = 8;
const anh = 9;
const diemTB = tinhTB(toan, van, anh);

console.log(
  `
    diem trug binh la :${diemTB}
    xep loai la : ${xepLoai(diemTB)}
    `
);
