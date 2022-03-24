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
 
 * */

/** VD1 
cars.map((car, index) => {
  return console.log(car, index);
});

*/

/** VD2
// phương thức này Có thể thêm 1 key, value bất kì cho mảng cars
const text = cars.map((car, index) => {
  return {
    id: car.id,
    car: car.car,
    coin: "500",
  };
});

console.log(text);
 */
