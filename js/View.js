export default class View {
  constructor () {
    console.log("Game view");
  }

  updateBoard (game) {
    for (let i=0; i<game.board.length; i++) {
      let tile = document.querySelector(`.board__tile[data-index='${i}']`);
      tile.textContent = game.board[i];
    }
  }

  updatePlayer (player) {
    if (player == "playerX") {
      let p = document.querySelector(".player__x")
      p.classList.add("player__active");
      let q = document.querySelector(".player__o")
      q.classList.remove("player__active")
    } else {
      let p = document.querySelector(".player__o")
      p.classList.add("player__active");
      let q = document.querySelector(".player__x")
      q.classList.remove("player__active")
    }
    
  }
}