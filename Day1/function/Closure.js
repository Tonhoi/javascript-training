// hàm khép kín, hàm bao đóng ( là hàm ghi nhớ được nơi nó tạo ra và truy cập được các biến bên ngoài phạm vi của nó )
const a = () => {
  let counter = 0;
  function b() {
    return counter++;
  }

  return b;
};

const text = a();

console.log(text());
console.log(text());
console.log(text());
console.log(text());
