let moves = 0;                                                                  // WORKS!  DO NOT CHANGE
const moveCounter = document.querySelector('.moves');                             // WORKS! define moveCounter variable
let match = 0;

const wonDialog = document.querySelector('#wonDialog');                           // WORKS!  assign element wonDialog to variable wonDialog.
const cancelButton = document.querySelector('.modalCancel');                      // WORKS! assign cancel button to  the variable cancelButton. For the modal window.

const star1 = document.querySelector('.oneStar');                                 // WORKS:                 //  define star1 variable
const star2 = document.querySelector('.twoStar');                                 // WORKS:                 //  define star2 variable
const star3 = document.querySelector('.threeStar');                               // WORKS:                 //  define star3 variable

const mStar1 = document.querySelector('.fa1');
const mStar2 = document.querySelector('.fa2');
const mStar3 = document.querySelector('.fa3');

const mTime = document.querySelector('.modalTime');
const mMoves = document.querySelector('.modalMoves');
const mReset = document.querySelector('.modalReset');                             // WORKS!


/*******************************************************************************
 * Create a list that holds all of your cards
 *******************************************************************************/
const cards = ['fa-umbrella', 'fa-umbrella',                                    // WORKS!  Holds icons for function
               'fa-paw', 'fa-paw',
               'fa-anchor', 'fa-anchor',                                        // WORKS!  New icons.
               'fa-bell-o', 'fa-bell-o',
               'fa-music', 'fa-music',
               'fa-tree', 'fa-tree',
               'fa-plane', 'fa-plane',
               'fa-flask', 'fa-flask']

function generateCard(card) {
  return `<li class="card" data-card= ${card}><i class="fa ${card}"></i>`       // WORKS!!  card is a variable not a string.
}

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

/*******************************************************************************
                           TIMER
*******************************************************************************/
let sec = 0;
let timer;

function timerStart(){                                                          // WORKS! - this function is called
  timer = setInterval(function(){                                               // BUG - timer 'limps' after reeset
    document.querySelector('.timer-display').innerHTML = `${sec}`;              //  WORKS! - Sec is displayed.
      sec++;
    }, 1000);
}

function timerStop(){                                                           // WORKS!!  call timer stop - WORKS! - this function is called.
  document.querySelector('.timer-display').innerHTML = `${sec}`;
  clearInterval(timer);
}


// **********************SHUFFLE  FUNCTION**************************************
function shuffle(array) {                                                       //  WORKS!! - Shuffles icons.
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

 /******************************************************************************
After collecting play test data for 4 players over 12 games,
the minimum clicks was 23, the maximum clicks was 46,
the average was 34 clicks, the mean was 35.
 (to covert clicks to moves -> divide by 2.)

This data was used to create the scoring table listed below.

@@@@@@@@@@@-Best playtest score was 12 moves PKM-@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
--------------------------------------------------------------------------------

    Scoring notes:

    ***  = 0 - 29 clicks   - OUTSTANDING!!  (14 moves)
    **   = 30 - 35 clicks   - Well Done!    (17 moves)
    *    = 36 - 40 clicks   - Average       (20 moves)
    three empty stars     = 41 clicks and over - Not bad.

/*******************************************************************************

                initialize Game

*******************************************************************************/
function  initGame() {
  const deck = document.querySelector('.deck');
  moves = 0;                                                                    // move variable set to zero.
  sec = 0;                                                                      //  sec variable set to zero.
  advanceMoves();
  timerStart();                                                                 // function WORKS

  const cardHTML = shuffle(cards).map(function(card){
    return generateCard(card);
  });
  deck.innerHTML = cardHTML.join('');                                           // WORKS! Deck of cards with icons is constructed  //   fix icons - DONE
}


initGame();
/*******************************************************************************
                 RESTART FUNCTION
*******************************************************************************/
const restart = document.querySelector('.restart');                             // WORKS!  assign restart class to restart variable.

restart.addEventListener('click', function restoreClass(){
  openCards.forEach(function(card) {
    card.classList.remove('match');                                             // WORKS!  match class is removed.
  });

  openCards = [];
  restoreStars();                                                               // WORKS!! restore stars
  const deck = document.querySelector('.deck');
  moves = 0;                                                                    // move variable set to zero.
  sec = 0;                                                                      //  sec variable set to zero.
  advanceMoves();
  timerStart();                                                                 // function WORKS

  const cardHTML = shuffle(cards).map(function(card){
    return generateCard(card);
  });
  deck.innerHTML = cardHTML.join('');
  }                                                                 // WORKS! cards reset/ icons shuffled. /BUG - click event lost
);                                                                             // WORKS!  event listener - listens for click on the div restart, // WORKS! : then runs the function initGame().



const allCards = document.querySelectorAll('.card');                            // creates the variable for all the cards   DO NOT MOVE!!
var openCards = [];                                                             //  Array clear at start. origin of openCard.length  DO NOT MOVE!!

/*******************************************************************************
                            ADVANCE MOVE COUNTER

*******************************************************************************/

function advanceMoves(){
  moveCounter.innerText = `${moves}`;                                           // WORKS! move to correct location.  DONE
  advanceStars();                                                               // WORKS!  function
 }
/*******************************************************************************

                                STAR COUNTER

*******************************************************************************/
function advanceStars(){                                                        // WORKS! change star counter
if (moves === 14){
  star3.classList.remove('fa-star');
  star3.classList.add('fa-star-o');
 }
 if (moves === 17){
  star2.classList.remove('fa-star');
  star2.classList.add('fa-star-o');
  }
  if (moves === 20){
  star1.classList.remove('fa-star');
  star1.classList.add('fa-star-o');
 }
}

function restoreStars(){                                                        // WORKS!!! resets Star counter
  star1.classList.remove('fa-star-o');
  star1.classList.add('fa-star');
  star2.classList.remove('fa-star-o');
  star2.classList.add('fa-star');
  star3.classList.remove('fa-star-o');
  star3.classList.add('fa-star');
}
/*******************************************************************************

                             MAIN FUNCTION

*******************************************************************************/
mainGame();
function mainGame(){

allCards.forEach(function(card){
  card.addEventListener('click', function(e){                                   //  WORKS!  Captures click event
    if ((openCards.length < 2) && (!card.classList.contains('open') && !card.classList.contains('show') && !card.classList.contains('match'))) {     // if clicked card is revealed or matched, ignore click.
                                                                                // FIXED:  remove misclick  (related to triple fast click?)
      openCards.push(card);                                                     //  WORKS!  card is added to openCards array.
      card.classList.add('open', 'show');                                       //  WORKS!  Reveals cards by adding classes "open" and "show"

// Check of they matched
    if (openCards.length === 2) {                                               // WORKS! fixed:  Two cards only revealed. //  fixed bug: 2 clicks on same card.
       moves++;                                                                 // WORKS!  move variable increase by 1.

/*******************************************************************************
                               MOVE COUNTER
*******************************************************************************/
        advanceMoves();


      if (openCards[0].dataset.card === openCards[1].dataset.card) {            // WORKS!!  GAME IS NOW PLAYABLE!!!!!
        openCards[0].classList.add('match');
        openCards[0].classList.add('open');
        openCards[0].classList.add('show');
        openCards[1].classList.add('match');
        openCards[1].classList.add('open');
        openCards[1].classList.add('show');
        match = match + 1 ;                                                     //  Count matches // misclick move count FIXED

        if (match === 8){                                                       // WORKS! - at 8 matches proceeds with {}.
          timerStop();                                                          // WORKS! appears to work.
          youWon();                                                             // WORKS! change  to function.
        }}

//*********Restore unmatched cards**********************************************

      setTimeout(function restoreCard(){
        openCards.forEach(function(card) {
          card.classList.remove('open', 'show');                                // fixed:  bug - will remove single cards
        });

        openCards = [];
      }, 1000);

    }
  }
});
});
}
/*******************************************************************************

                     "You Won" Modal Window

*******************************************************************************/
                                                                                // WORKS! set up youWon function.  open modal window.
function youWon(){
  wonDialog.style.display = "block";                                            // WORKS!  opens modal window.

  //******************************************************************************
    document.querySelector('.modalTime').innerHTML = `${sec}`;                  // WORKS!  appears to work.
    document.querySelector('.modalMoves').innerHTML = `${moves}`;               // WORKS!  correct number of moves shown in the modal window.
  //******************************************************************************

  function makeStars(){

  if (moves <14){                                                               // WORKS! change star counter to correct stars!
  } else if ( moves < 17){
    mStar3.classList.remove('fa-star');
    mStar3.classList.add('fa-star-o');

  } else if (moves < 20 ){
    mStar3.classList.remove('fa-star');
    mStar3.classList.add('fa-star-o');
    mStar2.classList.remove('fa-star');
    mStar2.classList.add('fa-star-o');

  } else if (moves >= 20){
    mStar3.classList.remove('fa-star');
    mStar3.classList.add('fa-star-o');
    mStar2.classList.remove('fa-star');
    mStar2.classList.add('fa-star-o');
    mStar1.classList.remove('fa-star');
    mStar1.classList.add('fa-star-o');
   }
  }

  makeStars();
/*******************************************************************************
                MODAL BUTTONS
*******************************************************************************/

  mReset.addEventListener('click', function restoreClass(){                       // WORKS! attaches click of reset button to reset the game.
    wonDialog.style.display = "none";

    openCards.forEach(function(card) {
      card.classList.remove('match');
    });

    openCards = [];
    restoreStars();
    initGame();                                    // TODO: partial function - works as well as the main reset button.
  });

  cancelButton.addEventListener('click', function(){                            // WORKS! attaches click of close button to closing the modal window.
    wonDialog.style.display = "none";
});
}
