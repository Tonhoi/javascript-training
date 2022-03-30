// promise được sinh ra để xử lý callback hell, được dùng trong xử lý bất đồng bộ

// nếu chạy thành công thì sẽ chạy vào hàm resolve, ngược lại nếu có lỗi thì sẽ chạy vào hàm reject

// dưới đây là 1 ví dụ về promise

const text = () => {
  return new Promise((resolve, reject) => {
    resolve("123");
  });
};

text()
  .then((success) => {
    console.log(success);
  })
  .catch((error) => {
    console.log(error);
  });
