class Furry {
  constructor(x, y, direction) {
    this.x = 0;
    this.y = 0;
    this.direction = "right"
  }

}

class Coin {
  constructor(x, y) {
    this.x = Math.floor(Math.random() * 10);
    this.y = Math.floor(Math.random() * 10);
  }
}

class Game {
  constructor(board, furry, coin, score) {
    this.board = [...document.querySelectorAll("#board div")];
    this.furry = new Furry();
    this.coin = new Coin();
    this.score = 0

  }

  Index(x, y) {
    return x + (y * 10);
  }

  showFurry() {
    //console.log(this.furry.x, this.furry.y,this.Index(this.furry.x, this.furry.y),this.board[0]);
    this.board[this.Index(this.furry.x, this.furry.y)].classList.add('furry');
  }
  showCoin() {
    this.board[this.Index(this.coin.x, this.coin.y)].classList.add('coin');
  }


  checkCoinCollision() {
    if (this.furry.x === this.coin.x && this.furry.y === this.coin.y) {
          this.score++;
          document.querySelector("#score div strong").innerHTML = this.score;
          this.board[this.Index(this.coin.x, this.coin.y)].classList.remove("coin");
          this.coin = new Coin();
      }
  }

  gameOver(){
    if(this.furry.x < 0 || this.furry.x > 9 || this.furry.y <0 || this.furry >9){
      clearInterval(this.id);
      this.hideVisibilityFurry()
      alert("GAME IS OVER");
      alert("YOUR RESULT"+ " "+this.score);
    }
  }


  moveFurry() {

    this.hideVisibilityFurry()
    this.showFurry()
    this.showCoin()
    this.gameOver()
    if (this.furry.direction === "right") {
      this.furry.x = this.furry.x + 1;
    }else if(this.furry.direction ==="left"){
      this.furry.x =this.furry.x - 1;
    }else if(this.furry.direction === "up"){
      this.furry.y=this.furry.y -1;
    } else if(this.furry.direction ==="down"){
      this.furry.y=this.furry.y + 1;
    }

    this.checkCoinCollision()
 }

  hideVisibilityFurry() {
    let fur = document.querySelector(".furry");
    if (fur != null) {
      fur.classList.remove("furry");
    }
  }

  keyboard(event) {

    console.log(this, "keyboard");
    let key = event.which;
    switch (key) {
      case 37:
        this.furry.direction = "left";
        break;
      case 38:
        this.furry.direction = "up";
        break;
      case 39:
        this.furry.direction = "right";
        break;
      case 40:
        this.furry.direction = "down";
        break;
    }
  }

  startGame() {
    const self = this;
    this.id = setInterval(function() {
      self.moveFurry()

    }, 250);
   document.addEventListener('keydown', function(e) {
     self.keyboard(e);
   });

  }

}


document.addEventListener("DOMContentLoaded", function(event) {
  let a = new Game;

  a.startGame();

});
