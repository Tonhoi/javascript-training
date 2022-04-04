const input = document.querySelector("input");

input.onkeypress = (e) => {
  switch (e.which) {
    case 13:
      console.log("success");
      break;
    default:
      break;
  }
};
