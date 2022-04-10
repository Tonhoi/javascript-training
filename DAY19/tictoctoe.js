const items = document.querySelectorAll(".items");
const peopleWin = document.querySelector(".winner");

const winner = [
  ["0", "1", "2"],
  ["3", "4", "5"],
  ["6", "7", "8"],
  ["0", "3", "6"],
  ["1", "4", "7"],
  ["2", "5", "8"],
  ["0", "4", "8"],
  ["2", "4", "6"],
];

const initial = [null, null, null, null, null, null, null, null, null];

let xIsNext = true;
const app = {
  handle() {
    items.forEach((item) => item.addEventListener("click", this.handleEvent));
  },

  handleEvent(e) {
    if (
      initial[e.target.dataset.index] !== null ||
      peopleWin.textContent !== ""
    ) {
      return;
    } else {
      e.target.innerHTML = `${xIsNext ? "X" : "Y"}`;
    }
    initial[e.target.dataset.index] = e.target.textContent;
    xIsNext = !xIsNext;
    app.handleWinner(e);
  },

  handleWinner(e) {
    winner.forEach((winner) => {
      const [a, b, c] = winner;
      if (
        initial[a] &&
        initial[a] === initial[b] &&
        initial[a] === initial[c]
      ) {
        peopleWin.innerHTML = `người chiến thắng là ${
          initial[e.target.dataset.index]
        }`;
      } else {
        return null;
      }
    });
  },

  start() {
    this.handle();
  },
};

app.start();
