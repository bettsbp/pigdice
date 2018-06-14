// business

function getRandomInt() {
  return Math.floor(Math.random() * 6) + 1;
}

function Player(name) {
  this.name = name
  this.score = 0
}

Player.prototype.totalScore = function(addition) {
  var score = []
  score.push(this.score += addition)
}



// user
$(document).ready(function() {
  $('button').click(function(event) {
    event.preventDefault();

  var player = new Player();
  var addition = getRandomInt();
  var totalScore = player.totalScore(addition);


  console.log(totalScore);

  })
})
