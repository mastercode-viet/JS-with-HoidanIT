const fullname = "quach viet";
const birthYear = 2005;
const isStudent = true;
const today = new Date();
const currentYear = today.getFullYear();

const age = currentYear - birthYear;
console.log(age);
const intro = `ten : ${fullname}
tuoi : ${age}
sinh vien : ${isStudent}`;
console.log(intro);
