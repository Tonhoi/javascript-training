const cars = [500, 700, 900, 1100];

/**  phương thức này sẽ có 2 đối số( đối số thứ nhất là 1 callback, đối số thứ 2 là giá trị khởi tạo(initialValue) ), trong callback sẽ nhận 4 đối số
 *     + đối số đầu tiên sẽ là accumentlator(biến lưu trữ)
 *     + đối số thứ 2 là curentValue(Giá trị hiện tại)
 *     + đối số thứ 3 là currentIndex(Chỉ mục hiện tại của đối số thứ 2)
 *     + đối số thứ 4 sẽ trả về mảng hiện tại
 * */

const handleTotal = (accumentlator, curentValue, currentIndex, array) => {
  return (accumentlator += curentValue);
};

const text = cars.reduce(handleTotal, 0);
console.log(text);
