'use strict';

const diceImg = document.querySelector('.dice');
const playerOneScore = document.querySelector('#score--0');
const playerTwoScore = document.querySelector('#score--1');
const currentPlayerOneScore = document.querySelector('#current--0');
const currentPlayerTwoScore = document.querySelector('#current--1');
const roleDiceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newGameBtn = document.querySelector('.btn--new');
const playerOne = document.querySelector('.player--0');
const playerTwo = document.querySelector('.player--1');
let playing = true;

diceImg.classList.add('hidden');
// const scores = [0,0];
// let activePlayer = 0;

function changeActivePlayer() {
  playerOne.classList.toggle('player--active');
  playerTwo.classList.toggle('player--active');

  // if(playerOne.classList.contains('player--active')) {
  //     playerOne.classList.remove('player--active');
  //     playerTwo.classList.add('player--active');
  currentPlayerOneScore.textContent = '0';
  // } else {
  //     playerOne.classList.add('player--active');
  //     playerTwo.classList.remove('player--active');
  currentPlayerTwoScore.textContent = '0';
  // }
}

roleDiceBtn.addEventListener('click', function () {
  if (playing) {
    const random = Number(Math.floor(Math.random() * 6) + 1);
    diceImg.classList.remove('hidden');
    diceImg.src = `dice-${random}.png`;
    if (random == 1) {
      changeActivePlayer();
    }
    if (playerOne.classList.contains('player--active')) {
      currentPlayerOneScore.textContent =
        Number(currentPlayerOneScore.textContent) + random;
    } else {
      currentPlayerTwoScore.textContent =
        Number(currentPlayerTwoScore.textContent) + random;
    }
  }
});

holdBtn.addEventListener('click', function () {
  if (playing) {
    if (playerOne.classList.contains('player--active')) {
      playerOneScore.textContent =
        Number(playerOneScore.textContent) +
        Number(currentPlayerOneScore.textContent);
      if (playerOneScore.textContent >= 100) {
        playing = false;
        playerOne.classList.add('player--winner');
        console.log('player 1 wins');
      } else {
        changeActivePlayer();
      }
    } else {
      playerTwoScore.textContent =
        Number(playerTwoScore.textContent) +
        Number(currentPlayerTwoScore.textContent);
      if (playerTwoScore.textContent >= 100) {
        playing = false;
        playerTwo.classList.add('player--winner');
        console.log('player 2 wins');
      } else {
        changeActivePlayer();
      }
    }
  }
});

newGameBtn.addEventListener('click', function () {
  diceImg.src = 'dice-5.png';
  playerTwo.classList.remove('player--active');
  playerOne.classList.add('player--active');
  currentPlayerTwoScore.textContent = '0';
  currentPlayerOneScore.textContent = '0';
  playerOneScore.textContent = '0';
  playerTwoScore.textContent = '0';
  diceImg.classList.add('hidden');
  playerTwo.classList.remove('player--winner');
  playerOne.classList.remove('player--winner');
  playing = true;
});
