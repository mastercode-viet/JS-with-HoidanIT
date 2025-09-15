// toán tử if else else if

let age = 20;
let hasTicket = true;
let isVIP = false;

if (isVIP) {
  console.log("Xin mời bạn vào khu vực VIP!");
} else if (age >= 18 && hasTicket) {
  console.log("Bạn đủ tuổi và có vé, xin mời vào!");
} else if (age >= 18 && !hasTicket) {
  console.log("Bạn đủ tuổi nhưng chưa có vé, vui lòng mua vé trước!");
} else if (age < 18 && hasTicket) {
  console.log("Bạn có vé nhưng chưa đủ tuổi, không được vào!");
} else {
  console.log("Bạn vừa chưa đủ tuổi, vừa không có vé!");
}
