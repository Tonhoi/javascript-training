// vòng lắp này dùng để lấy ra các value của mảng, chuỗi
// vòng lặp này không thể sử dụng với object

const subjects = ["HTML", "CSS", "JAVASCRIPT", "TYPESCRIP", "REACTJS"];

for (const subject of subjects) {
  console.log(subject); // kết thúc vòng lặp sẽ lấy ra được tất cả các khóa học có trong mảng
}
