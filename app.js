'use strict';
const checkguess = document.querySelector('.check-guess');
const message = document.querySelector('.message');
const guessinput = document.querySelector('.guess-input');
const startAgain = document.querySelector('.start-again');
const header = document.querySelector('.header');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let hightscore = 0;
document.querySelector('.game-section').classList.add('hidden');


//
document.querySelector(".start").addEventListener("click", function(){
    document.querySelector(".game-section").classList.remove("hidden");
    document.querySelector('.header').classList.add('hidden');

})
//check guess
checkguess.addEventListener('click', function () {
  let guess = Number(guessinput.value);

  console.log(guess);
  console.log('do something');
if (score<1)
{
    document.querySelector('body').style.backgroundColor = 'red';
    message.textContent = 0;
}
else{
  if (guess < 1) {
    message.textContent = `Not a Valid Number!`;
  } else if (guess == secretNumber) {
    console.log('correct Number');
    message.textContent = 'Correct Number!!!';
    hightscore = score;
    document.querySelector('body').style.backgroundColor = '#94fc4f';
    document.querySelector(
      '.intro'
    ).textContent = `Yayy! ${guessinput.value} is the Correct answer`;
    guessinput.style.fontsize = '6rem';
    document.querySelector('.highscore').textContent = hightscore;
    console.log(score);
  } else if (guess) {
    if (guess < secretNumber) {
      message.textContent = 'Too low!';
      score--;
    } else {
      message.textContent = 'Too High!';
      score--;
    }
  }
  console.log(`score = ${score}`);
  hightscore = score;
  document.querySelector('.score').textContent = score;}
});

startAgain.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log('good');
  console.log(secretNumber);

  document.querySelector('.intro').textContent = `Guess My Number!`;
  document.querySelector('.score').textContent = score;
  message.textContent = 'start guessing...';
  document.querySelector('body').style.backgroundColor = '#00254f';
});

