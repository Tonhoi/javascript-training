const cars = [
  {
    id: 1,
    car: "WAVE",
  },
  {
    id: 2,
    car: "AB",
  },
  {
    id: 3,
    car: "VESPA",
  },
];

/**  phương thức này sẽ có đối số là 1 callback, trong callback sẽ nhận 2 đối số
 *     + đối số đầu tiên sẽ trả về tất cả các object có trong mảng cars
 *     + đối số thứ 2 là chỉ mục cua cả object có trong mảng
    Phương thức này sẽ trả về kiểu boolean
 * */

const text = cars.some((car, index) => {
  return car.car === "WAVE";
  // phương thức này tìm kiếm và trả về true nếu có 1 chiếc xe wave trong mảng
  // trường hợp này nó sẽ trả về true
});

console.log(text);
