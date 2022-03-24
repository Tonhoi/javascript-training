// là 1 function
// được truyền làm đối số

function a(value) {
  value("123");
}

function myCallBack(value1) {
  console.log(value1);
}

a(myCallBack);
