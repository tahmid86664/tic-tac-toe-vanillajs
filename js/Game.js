export default class Game {

  constructor () {
    console.log("init game");
    this.turn = "O";
    this.board = new Array(9).fill(null);
    this.player = "playerX";
    this.turns = [];
    document.querySelector(".board").classList.remove("displayNone");
    document.querySelector(".winningSection").classList.add("displayNone");
  }

  nextTurn () {
    if (this.turn == "X") {
      this.turn = "O";
    } else {
      this.turn = "X";
    }
  }

  nextPlayer() {
    if (this.player == "playerX") {
      this.player = "playerO";
    } else {
      this.player = "playerX";
    }
  }

  fillBoard (index) {
    if (this.finishGame()) {
      return
    }

    if (this.board[index]) {
      return;
    }
    
    if(this.board[index] == null) {
      this.nextTurn();
      this.nextPlayer();
    }

    this.board[index] = this.turn;
    this.turns.push({
      player: this.player === "playerX" ? "playerO" : "playerX",
      tile: index,
    });
    this.finishGame();
  }

  findWinningPatterns () {
    const winningPatterns = [
      [0,1,2], [3,4,5], [6,7,8],
      [0,3,6], [1,4,7], [2,5,8],
      [0,4,8], [2,4,6]
    ];

    for (const pattern of winningPatterns) {
      const [x, y, z] = pattern;

      if (this.board[x] && (this.board[x] == this.board[y]) && (this.board[x] == this.board[z])) {
        return pattern;
      }
    }

    return null;
  }

  finishGame () {
    let winningPattern = this.findWinningPatterns();
    let winSec = document.querySelector(".winningSection");
    if (winningPattern) {
      document.querySelector(".board").classList.add("displayNone");
      winSec = document.querySelector(".winningSection");
      winSec.classList.remove("displayNone");
      if (this.player == "playerO") {
        winSec.textContent = "Player X Win";
      } else {
        winSec.textContent = "Player 0 Win";
      }
      return true;
    } else if (this.turns.length >= 9) {
      document.querySelector(".board").classList.add("displayNone");
      winSec.classList.remove("displayNone");
      winSec.textContent = "Match Draw";
      return true;
    } else {
      return false;
    }
  }
}