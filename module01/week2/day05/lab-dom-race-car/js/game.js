class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.scoreElement = document.getElementById("score");
    this.livesElement = document.getElementById("lives");
    this.player = new Player(
      this.gameScreen,
      200,
      400,
      100,
      200,
      "../images/car.png"
    );
    this.height = 600;
    this.width = 500;
    this.obstacles = [];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.gameIntervalId = 0;
    this.gameLoopFrequency = Math.round(1000 / 60);
    this.counter = 0;
  }
  start() {
    this.gameScreen.style.width = `${this.width}px`;
    this.gameScreen.style.height = `${this.height}px`;
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    //This will be our loop, with the setInterval
    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
      this.counter++;
    }, this.gameLoopFrequency);
  }
  restart() {
    //the lazy way would be to refresh the page
    location.reload();
    console.log("restart clicked");
    //reset the game is over property back to false
    // this.gameIsOver = false;
    // //reset all variables to starting positions
    // this.score = 0;
    // this.lives = 1;
    // //hide the game over screen and show the game screen
    // this.gameEndScreen.style.display = "none";
    // this.gameScreen.style.display = "block";
    // //add a new obstacle to the array
    // this.obstacles.push(new Obstacle(this.gameScreen));
    // //call the game start method
    // this.start();
  }
  gameLoop() {
    this.update();
    if (this.gameIsOver) {
      clearInterval(this.gameIntervalId);
      this.gameOver();
    }
  }
  update() {
    this.player.move();

    //add a red car every so many frames
    console.log(this.counter);
    if (this.counter % 300 === 0) {
      this.obstacles.push(new Obstacle(this.gameScreen));
    }
    //this handles everything with the obstacles
    this.obstacles.forEach((oneObstacle, index) => {
      oneObstacle.move();
      //if you score a point and the red passes
      if (oneObstacle.top > 700) {
        console.log("You scored a point");
        this.obstacles.splice(index, 1);
        oneObstacle.element.remove();
        this.obstacles.push(new Obstacle(this.gameScreen));
        //updating the score when a red car passes
        this.score++;
        this.scoreElement.innerText = this.score;
      }

      //collision
      if (this.player.didCollide(oneObstacle)) {
        console.log("bang!!! there was a collision");
        this.obstacles.splice(index, 1);
        oneObstacle.element.remove();
        this.obstacles.push(new Obstacle(this.gameScreen));
        //updating the score when a red car passes
        this.lives--;
        this.livesElement.innerText = this.lives;
        //check the lives, and if 0 then gameIsOver equals true
        if (this.lives === 0) {
          this.gameIsOver = true;
        }
      }
    });
  }
  gameOver() {
    console.log("the game is over");
    this.gameScreen.style.display = "none";
    this.gameEndScreen.style.display = "block";
  }
}
