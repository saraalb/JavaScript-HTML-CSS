'use strict';

//SELECTING ELEMENTS
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let currentScore = 0;
const scores = [0, 0];
let activePlayer = 0;
let playing = true;

//STARTING CONDITION

//setting the score to initial score
score0El.textContent = 0;
score1El.textContent = 0;
//Hidding the dice.
diceEl.classList.add('hidden');

//switching the player function
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//ROLLIND DICE FUNCTIONALITY
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. GENERATING A RANDOM DICEROLL
    const dice = Math.trunc(Math.random() * 6 + 1);
    console.log(dice);
    //2. DISPLAY THE DICE
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //3. Check for rolled 1: if true, switch to next player
    if (dice !== 1) {
      currentScore += dice;
      //which player will be playing?
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      //SWITCH TO THE NEXT PLAYER
      switchPlayer();
    }
  }
});

const dado = btnHold.addEventListener('click', function () {
  if (playing) {
    //1. ADD CURRENT SCORE TO ACTIVE'S PLAYERS SCORE
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2. CHECK IF PLAYER'S SCORE IS >= 100
    if (scores[activePlayer] >= 20) {
      //IF SO, FINISH THE GAME
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');

  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  scores[0] = 0;
  scores[1] = 0;
  score0El.textContent = scores[0];
  score1El.textContent = scores[1];

  //small current
  currentScore = 0;
  current0El.textContent = currentScore;
  current1El.textContent = currentScore;

  //putting rice in the initial position
  diceEl.classList.add('hidden');
  playing = true;
  activePlayer = 0;
});
