// vòng lặp này dùng để lấy key
// đối với mảng thì key là các chỉ mục
// đối với object thì key sẽ được định nghĩa trong object
const subjects = ["HTML", "CSS", "JAVASCRIPT", "TYPESCRIP", "REACTJS"];

for (const subject in subjects) {
  console.log(subject); // kết thúc vòng lặp sẽ lấy được ra các chỉ mục của biến subjects
  console.log(subjects[subject]); //kết thúc vòng lặp sẽ lấy ra được tất cả các môn học có trong mảng subjects
}
