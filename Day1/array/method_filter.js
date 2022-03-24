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
  {
    id: 4,
    car: "WAVE",
  },
];

/**  phương thức này sẽ có đối số là 1 callback, trong callback sẽ nhận 2 đối số
 *     + đối số đầu tiên sẽ trả về tất cả các object có trong mảng cars
 *     + đối số thứ 2 là chỉ mục cua cả object có trong mảng
 * */

const text = cars.filter((car, index) => {
  return car.car === "WAVE";
  // phương thức này tìm kiếm và trả về tất cả các chiếc xe wave
});

console.log(text);
