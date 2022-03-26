// Getters cho phép bạn lấy các thuộc tính thông qua các phương thức
// 1 ví dụ về cách thức sử dụng getter
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get lang() {
    return this.language.toUpperCase();
  },
};
document.getElementById("demo").innerHTML = person.lang;
