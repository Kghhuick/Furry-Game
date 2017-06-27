document.addEventListener("DOMContentLoaded", function(event) {

class Furry {
  constructor(x,y,direction) {
    this.x=0;
    this.y=0;
    this.direction="right";

  }



}

class Coin {
  constructor(x,y){
    this.x=Math.floor(Math.random() * 10);
    this.y=Math.floor(Math.random() * 10);
  }
}



class Game {
  constructor(board,furry,coin,score){
  this.board = document.querySelectorAll("#board div");
  this.furry= new Furry();
  this.coin = new Coin();
  this.score =0

  }

Index(x,y) {
    return x + (y * 10);
  }

showFurry() {
   this.board[ this.Index(this.furry.x,this.furry.y) ].classList.add('furry');
}
showCoin(){
  this.board[ this.Index(this.coin.x,this.coin.y) ].classList.add('coin');
}

startGame(){
this.id=setInterval(function(){
  console.log("dupa");
}

  , 250);
}

}


let a = new Game;
a.showFurry();
a.showCoin();
a.startGame();



















   console.log("DOM fully loaded and parsed");
 });
