// 1 ví dụ về cách khai báo cũng như sử dụng static
class Car {
  constructor(name) {
    this.name = name;
  }
  static hello() {
    return "Hello Guys!!";
  }
}

let myCar = new Car("Ford");

// You can call 'hello()' on the Car Class:
// document.getElementById("demo").innerHTML = Car.hello(); //hợp lệ

document.getElementById("demo").innerHTML = myCar.hello(); //Sẽ báo lỗi
