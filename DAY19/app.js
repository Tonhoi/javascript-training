import { app } from "./tictoctoe.js";
const twoPlayer = document.querySelector(".two-player");
const game1 = document.querySelector(".game1");
const selectWayGame = document.querySelector(".select-way-game");

const game = {
  start() {
    app.start();
    twoPlayer.onclick = (e) => {
      game1.classList.remove("hidden");
      selectWayGame.classList.add("hidden");
    };
  },
};

game.start();
