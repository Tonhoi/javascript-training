var cars = ["BMV", "WAVE", "AB"];

/**  phương thức này sẽ có đối số là 1 callback, trong callback sẽ nhận 2 đối số
 *     + đối số đầu tiên sẽ trả về tất cả các value có trong mảng cars
 *     + đối số thứ 2 là chỉ mục của tất cả value có trong mảng
 **/
cars.forEach((car, index) => {
  console.log(car, index);
});
