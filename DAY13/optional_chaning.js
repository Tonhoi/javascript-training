const obj = {
  course: {
    name: "HTML",
    course1: {
      name: "CSS",
      course2: {
        name: "Javascript",
      },
    },
  },
};

if (obj?.course?.course1?.course2) {
  console.log(obj.course.course1.course2.name);
}
