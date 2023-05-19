'use strict';

const player = document.querySelector('.player');
const player0El = document.getElementById('player--0');
const player1El = document.getElementById('player--1');

const name0El = document.getElementById('name--0');
const name1El = document.getElementById('name--1');

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const btnNewGame = document.getElementById('new-game');
const btnRollDice = document.getElementById('roll-dice');
const btnHold = document.getElementById('hold');

const image = document.getElementById('img');
//
//
//
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

function changePlayer() {
  //! Change Current Score
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  //! Add Score
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  //! Active Class
  document.getElementById(`player--${activePlayer}`).classList.remove('active');

  //! Change Active Player
  activePlayer = activePlayer === 0 ? 1 : 0;
  document.getElementById(`player--${activePlayer}`).classList.add('active');
}

btnRollDice.addEventListener('click', function () {
  if (playing) {
    //! Random Dice
    let diceNum = Math.floor(Math.random() * 6) + 1;

    //! Display Image
    image.src = `img/dice-${diceNum}.png`;

    if (diceNum != 1) {
      currentScore += diceNum;
      //! Display Current Score
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      changePlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //! Change Score
    scores[activePlayer] += currentScore;
    console.log(scores[activePlayer]);

    //! Display Score
    document.getElementById(`score--${activePlayer}`).textContent =
      currentScore;

    //! Finish Game
    if (scores[activePlayer] >= 100) {
      document
        .getElementById(`player--${activePlayer}`)
        .classList.add('player--winner');

      playing = false;
    }

    changePlayer();
  }
});

btnNewGame.addEventListener('click', function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('active');
  player1El.classList.remove('active');
});
