// 1 ví dụ về tính kế thừa trong class
class Course {
  constructor(name) {
    this.course = name;
  }
  present() {
    return `I have a ${this.course} course`;
  }
}

class CourseInheritance extends Course {
  constructor(name, mod) {
    super(name);
    this.price = mod;
  }
  show() {
    return this.present() + `, it is costs ${this.price}`;
  }
}

let myCourse = new CourseInheritance("React", "50$");
document.getElementById("demo").innerHTML = myCourse.show();
