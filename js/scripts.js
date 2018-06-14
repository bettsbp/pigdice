// business
function Player(turn) {
  this.name
  this.score = 0
  this.rollScoreTemp = 0
  this.rollScoreTotal = 0
  this.turn = turn
}

var rollDie = function() {
  Math.floor(Math.random() * 6) + 1
}

// Player.prototype.onHold = function() {
//
// }
// var numbers = [10, 20, 30, 40] // sums to 100
// var sum = 0;
// for (var i = 0; i < numbers.length; i++) {
//   sum += numbers[i]
// }

// user
$(document).ready(function() {

  var playerOne = new Player(true);
  var playerTwo = new Player(false);

  $('#roll').click(function(event) {
    event.preventDefault();

    playerOne.rollDie();
    playerOne.scoreTotal();

    $('#score1').text(playerOne.scoreTotal());
  });
});
