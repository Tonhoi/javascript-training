// Từ khóa await trước một hàm làm cho hàm chờ một promise:
// từ khóa async await luôn đi chung với nhau, thiếu 1 trong 2 sẽ báo lỗi

async function myDisplay() {
  let myPromise = new Promise((resolve, reject) => {
    resolve("demo về async await");
  });
  document.querySelector(".demo").innerHTML = await myPromise;
}

myDisplay();
