// setters cho phép bạn  thiết lập các thuộc tính thông qua các phương thức.
// 1 ví dụ về cách thức sử dụng setter
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  set lang(lang) {
    this.language = lang.toUpperCase();
  },
};

person.lang = "en";

document.getElementById("demo").innerHTML = person.language;
