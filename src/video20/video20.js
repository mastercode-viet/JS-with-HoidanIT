let a = 5;

// Hậu tố: a++
console.log(a++); // 5 (in ra giá trị cũ, sau đó a = 6)
console.log(a); // 6 (a đã tăng sau khi in ra)

// a++ , ++a , --a , a--
let x = 5;
let y = x++; // y nhận giá trị x trước khi tăng
console.log("x =", x); // x = 6
console.log("y =", y); // y = 5

let m = 5;
let n = ++m; // m tăng trước, n nhận giá trị mới
console.log("m =", m); // m = 6
console.log("n =", n); // n = 6

// toán tử so sánh
// | Toán tử | Ý nghĩa                                       | Ví dụ       | Kết quả   |
// | ------- | --------------------------------------------- | ----------- | --------- |
// | `==`    | So sánh bằng (lỏng lẻo, có ép kiểu)           | `5 == "5"`  | ✅ `true`  |
// | `===`   | So sánh bằng (nghiêm ngặt, **không ép kiểu**) | `5 === "5"` | ❌ `false` |
// | `!=`    | So sánh khác (lỏng lẻo)                       | `5 != "5"`  | ❌ `false` |
// | `!==`   | So sánh khác (nghiêm ngặt)                    | `5 !== "5"` | ✅ `true`  |
// | `>`     | Lớn hơn                                       | `7 > 5`     | ✅ `true`  |
// | `<`     | Nhỏ hơn                                       | `7 < 5`     | ❌ `false` |
// | `>=`    | Lớn hơn hoặc bằng                             | `5 >= 5`    | ✅ `true`  |
// | `<=`    | Nhỏ hơn hoặc bằng                             | `4 <= 5`    | ✅ `true`  |

//Lưu ý quan trọng ❗

// Luôn ưu tiên === và !==
