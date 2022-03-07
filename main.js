let firstCard = 6;
let secondCard = 10;
let sum = firstCard + secondCard;
let isAlive = true;
let hasBlackJack = false;

function startGame () {
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
    
  } else if (sum === 21) {
    message = "Black Jack!";
    hasBlackJack = true;
  
  } else {
   message =  "You Lose";
   isAlive = false;
  }
  console.log(message)
}