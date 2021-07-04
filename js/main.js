import Game from './Game.js';
import View from './View.js';

let game = new Game();
let view = new View();

view.updateBoard(game);
view.updatePlayer(game.player);

document.querySelector(".start__button")
.addEventListener("click", () => {
  onStartButtonClick();
});

let tiles = document.querySelectorAll(".board__tile");
tiles.forEach(tile => {
  tile.addEventListener("click", () => {
    // console.log(tile.dataset.index); // return index
    onTileClick(tile.dataset.index);
  });
});

const onTileClick = (index) => {
  game.fillBoard(index);
  view.updateBoard(game);
  view.updatePlayer(game.player);
}

const onStartButtonClick = () => {
  game = new Game();
  view.updateBoard(game);
  view.updatePlayer(game.player);
}
