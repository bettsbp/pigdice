// business
function rollDie() {
  return Math.floor(Math.random() * 6) + 1
}

function Player() {
  this.name
  // this.turn = turn
  this.currentRollScore = 0
  this.tempRollScore = 0
  this.totalRollScore = 0
}

Player.prototype.rolledOne = function() {
  if (this.currentRollScore === 1) {
    this.tempRollScore = 0
  } else {
    this.tempRollScore += this.currentRollScore
  }
}

Player.prototype.willHold = function() {
  this.totalRollScore += this.tempRollScore
  this.tempRollScore = 0
}

Player.prototype.checkForWinner = function() {
  if (this.totalRollScore>=100) {
    alert(this.name + ' has won the match.')
  }
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

  var playerOne = new Player;
  var playerTwo = new Player;
  $('#player-names').submit(function(event){
    event.preventDefault();
    playerOne.name = $('#name1').val();
    playerTwo.name = $('input#name2').val();
    console.log(playerOne.name);

    $('#first-name').text(playerOne.name);
    $('#second-name').text(playerTwo.name);

  });
  $('#roll1').click(function(event) {
    event.preventDefault();

    console.log(playerOne.currentRollScore = rollDie());
    playerOne.rolledOne();
    // console.log(playerOne.rolledOne(randomNumber));
    $('#score1temp').html('<h3>' + playerOne.tempRollScore + '</h3>');
    $('#score1total').html('<h3>' + playerOne.totalRollScore + '</h3>');
    $('#hold1').attr('disabled', false);
    if (playerOne.currentRollScore == 1) {
      $('#roll1').attr('disabled', true);
      $('#hold1').attr('disabled', true);
      $('#roll2').attr('disabled', false);
      $('#hold2').attr('disabled', false);
    };
  });



  $('#hold1').click(function(event) {
    event.preventDefault();

    playerOne.willHold();
    $('#score1temp').html('<h3>' + playerOne.tempRollScore + '</h3>');
    $('#score1total').html('<h3>' + playerOne.totalRollScore + '</h3>');
    $('#roll1').attr('disabled', true);
    $('#hold1').attr('disabled', true);
    $('#roll2').attr('disabled', false);
    $('#hold2').attr('disabled', true);
    playerOne.checkForWinner();
  });

  $('#roll2').click(function(event) {
    event.preventDefault();

    console.log(playerTwo.currentRollScore = rollDie());
    playerTwo.rolledOne();
    // console.log(playerOne.rolledOne(randomNumber));
    $('#score2temp').html('<h3>' + playerTwo.tempRollScore + '</h3>');
    $('#score2total').html('<h3>' + playerTwo.totalRollScore + '</h3>');
    $('#hold2').attr('disabled', false);
    if (playerTwo.currentRollScore == 1) {
      $('#roll2').attr('disabled', true);
      $('#hold2').attr('disabled', true);
      $('#roll1').attr('disabled', false);
      $('#hokd1').attr('disabled', false);
    }
  });



  $('#hold2').click(function(event) {
    event.preventDefault();

    playerTwo.willHold();
    $('#score2temp').html('<h3>' + playerTwo.tempRollScore + '</h3>');
    $('#score2total').html('<h3>' + playerTwo.totalRollScore + '</h3>');
    $('#roll2').attr('disabled', true);
    $('#hold2').attr('disabled', true);
    $('#roll1').attr('disabled', false);
    $('#hold1').attr('disabled', true);
    playerTwo.checkForWinner();
  });
});
