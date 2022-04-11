const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const peopleWin = $(".winner");
const button = $(".reset");
const container = $(".container");

const winner = [
  ["0", "1", "2", "3", "4"],
  ["1", "2", "3", "4", "5"],
  ["6", "7", "8", "9", "10"],
  ["7", "8", "9", "10", "11"],
  ["12", "13", "14", "15", "16"],
  ["13", "14", "15", "16", "17"],
  ["18", "19", "20", "21", "22"],
  ["19", "20", "21", "22", "23"],
  ["24", "25", "26", "27", "28"],
  ["25", "26", "27", "28", "29"],
  ["30", "31", "32", "33", "34"],
  ["31", "32", "33", "34", "35"],
  ["0", "6", "12", "18", "24"],
  ["6", "12", "18", "24", "35"],
  ["1", "7", "13", "19", "25", "31"],
  ["7", "13", "19", "25", "31"],
  ["2", "8", "14", "20", "26"],
  ["8", "14", "20", "26", "32"],
  ["3", "9", "15", "21", "27"],
  ["9", "15", "21", "27", "33"],
  ["4", "10", "16", "22", "28"],
  ["10", "16", "22", "28", "34"],
  ["5", "11", "17", "23", "29"],
  ["11", "17", "23", "29", "35"],
  ["6", "13", "20", "27", "34"],
  ["0", "7", "14", "21", "28"],
  ["7", "14", "21", "28", "35"],
  ["1", "8", "15", "22", "29"],
  ["4", "9", "14", "19", "24"],
  ["5", "10", "20", "20", "25"],
  ["10", "15", "20", "25", "30"],
  ["11", "16", "21", "26", "31"],
];

let initial = Array(36).fill(null);

let xIsNext = true;

export const app = {
  render() {
    let filledArray = Array(36)
      .fill(null)
      .map((item, index) => {
        return `
        <div
          class="border border-[black] border-[1px] border-r-transparent cursor-pointer items text-[70px] leading-[108px]  font-bold"
          data-index="${index}"
        ></div>
        `;
      });

    container.innerHTML = filledArray.join("");
  },
  handleEvent() {
    const items = $$(".items");

    items.forEach((item) => {
      item.addEventListener("click", this.handleCaculator.bind(this));
    });
    button.addEventListener("click", this.resetGame.bind(this));
  },

  resetGame() {
    initial = Array(36).fill(null);
    const items = $$(".items");

    items.forEach((item) => {
      item.innerHTML = "";
      peopleWin.innerHTML = "";
    });
  },

  handleCaculator(e) {
    if (
      initial[e.target.dataset.index] !== null ||
      peopleWin.textContent !== ""
    )
      return;
    e.target.innerHTML = `${xIsNext ? "X" : "O"}`;

    initial[e.target.dataset.index] = e.target.textContent;

    e.target.textContent === "X"
      ? e.target.setAttribute("style", "color: red")
      : e.target.setAttribute("style", "color: blue");
    xIsNext = !xIsNext;
    this.handleWinner(e);
  },

  handleWinner(e) {
    winner.forEach((winner) => {
      const [a, b, c, d, f] = winner;
      if (
        initial[a] &&
        initial[a] === initial[b] &&
        initial[a] === initial[c] &&
        initial[a] === initial[d] &&
        initial[a] === initial[f]
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
    this.render();
    this.handleEvent();
  },
};
