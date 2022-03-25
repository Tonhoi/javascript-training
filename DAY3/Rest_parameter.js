const courses = ["HTML", "CSS", "JAVASCRIPT", "REACTJS"];

const [a, b, ...rest] = courses; //a và b sẽ lần lượt lấy được HTML và CSS cú pháp ...rest được gọi là rest parameter( dùng để lấy ra các phần tử còn lại bên trong mảng )
console.log(a, b, rest);
