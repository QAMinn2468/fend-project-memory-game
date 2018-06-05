var moves = 0;                                                                  // WORKS!  DO NOT CHANGE
var moveCounter = document.querySelector('.moves');                             //  WORKS! define moveCounter variable
var match = 0;
var wonDialog = document.querySelector('#wonDialog');                            // Seems to work - assign element wonDialog to variable wonDialog.
var cancelButton = document.querySelector('cancel');    // TODO:  // assign cancel button to  the variable cancelButton. For the modal window.
var star1 = document.querySelector('.oneStar');                                 // WORKS!:                 //  define star1 variable
var star2 = document.querySelector('.twoStar');                                 // WORKS:                 //  define star2 variable
var star3 = document.querySelector('.threeStar');                               // WORKS:                 //  define star3 variable

/************************************************
 * Create a list that holds all of your cards                  *Watched video via Udacity - Mike Wales*
 ************************************************/
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


/*************************************************************************************
           timer  (based on Slack @Chris N [FEND])
*************************************************************************************/
let sec = 0;
let min = 0;
let timer;

// displays the timer

document.querySelector('.timer-display').innerHTML = `0${min}:0${sec}`;          //  WORKS! - Initial value for Min and Sec is displayed.


function timerStart(){                                                          // WORKS! - this function is called
  console.log('timer start')

  timer = setInterval(insertTime(), 1000);
}

function timerStop(){                                     // // TODO:  call timer stop - WORKS! - this function is called.
  clearInterval(timer);
  sec = 0;
  min = 0;
  console.log('Timer Stopped.')
}

function insertTime(){                                  // TODO: get insertTime function to work.
  sec++;

  if (sec >= 60){
    min++;
    sec = `00`;
  }
}



// Shuffle function from http://stackoverflow.com/a/2450976
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


 /************************************************************
After collecting play test data for 4 players over 12 games,
the minimum clicks was 23, the maximum clicks was 46,
the average was 34 clicks, the mean was 35.
 (to covert clicks to moves -> divide by 2.)

This data was used to create the scoring table listed below.

constsider storing "ALL TIME BEST SCORE = 23, PKM/MLM"
---------------------------------------------------------------

    Scoring notes:

    ***  = 0 - 29 clicks   - OUTSTANDING!!  (14 moves)
    **   = 30 - 35 clicks   - Well Done!    (17 moves)
    *    = 36 - 40 clicks   - Average       (20 moves)
    three empty stars     = 41 clicks and over - Not bad.

/*********************************************************************************************

                initialize Game

*********************************************************************************************/
function initGame() {
  const deck = document.querySelector('.deck');
  moves = 0;                                                                    // move variable set to zero.
  sec = 0;                                                                      //  sec variable set to zero.
  min = 0;                                                                      //  min variable set to zero.
  console.log('the move counter is ' + moves);
  advanceMoves();
  timerStart();                                                                 // function WORKS

  console.log('the timer is ' + min + ":" + sec);
  // timerStart();
  const cardHTML = shuffle(cards).map(function(card){
    return generateCard(card);
  });
  deck.innerHTML = cardHTML.join('');                                           // WORKS! Deck of cards with icons is constructed  //   fix icons - DONE
}

initGame();

/*************************************************************************************************
                 RESTART FUNCTION
**************************************************************************************************/
const restart = document.querySelector('.restart');                             // WORKS!  assign restart class to restart variable.

restart.addEventListener('click', function(){
  openCards.forEach(function(card) {
    card.classList.remove('match');                         // appears to work:  remove match class
  });

  openCards = [];

  console.log('The reset button was clicked');   // TODO: partially works - moves reset to 0 (WORKS!), sec and min set to 0, but not on screen (TIMER)
//  restoreCard();                                // TODO: attach restore cards function here.
  initGame();                                    // TODO: partially works - cards reset/ icons shuffled. /click event lost/screen not reset fully.
  restoreStars();                                                               // WORKS!! restore stars
  mainGame();                                       // TODO:  unclear if this funcntion is running.
});                                                                             // WORKS!  event listener - listens for click on the div restart, // WORKS! : then runs the function initGame().



const allCards = document.querySelectorAll('.card');                            // creates the variable for all the cards   DO NOT MOVE!!
var openCards = [];                                                             //  Array clear at start. origin of openCard.length  DO NOT MOVE!!

/***************************************************************************************
               ADVANCE MOVE COUNTER

******************************************************************************************/

function advanceMoves(){
  moveCounter.innerText = `${moves}`;                                             //WORKS! move to correct location.  DONE
  advanceStars();                                                               // function WORKS
}
/*********************************************************************************************************************************

                                                STAR COUNTER

*******************************************************************************************************************************************/
function advanceStars(){                                                        // WORKS!! change star counter
if (moves === 14){
  console.log('minus one star');

  star3.classList.remove('fa-star');
  star3.classList.add('fa-star-o');
 }
 if (moves === 17){
  console.log('minus two star');

  star2.classList.remove('fa-star');
  star2.classList.add('fa-star-o');

  }
  if (moves === 20){
  console.log('minus three star');

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
/******************************************************************************************************************************************

                                   MAIN FUNCTION

*******************************************************************************************************************************************/
mainGame();
function mainGame(){

allCards.forEach(function(card){
  card.addEventListener('click', function(e){                                   //  WORKS!  Captures click event
    console.log('clickAnywhere');
    if ((openCards.length < 2) && (!card.classList.contains('open') && !card.classList.contains('show') && !card.classList.contains('match'))) {     // if clicked card is revealed or matched, ignore click.
                                                                                // FIXED:  remove misclick  (related to triple fast click?)
  console.log('clickHere');
      openCards.push(card);                                                     //  WORKS!  card is added to openCards array.
      card.classList.add('open', 'show');                                       //  WORKS!  Reveals cards by adding classes "open" and "show"

// Check of they matched
    if (openCards.length === 2) {                                               // WORKS! fixed:  Two cards only revealed. //  fixed bug: 2 clicks on same card.
       moves++;                                                                 // WORKS!  move variable increase by 1.
       console.log('This is move number ' + moves);  // verify DONE! current status of move variable.

       /*******************************************************************************************************************************************************************************
                                         MoveCounter
       ******************************************************************************************************************************/
        advanceMoves();


      if (openCards[0].dataset.card === openCards[1].dataset.card) {            // WORKS!!  GAME IS NOW PLAYABLE!!!!!
        openCards[0].classList.add('match');
        openCards[0].classList.add('open');
        openCards[0].classList.add('show');
        openCards[1].classList.add('match');
        openCards[1].classList.add('open');
        openCards[1].classList.add('show');
        match = match + 1 ;                                                      //  Count matches // misclick move count FIXED
        console.log(match);
        if (match === 8){                                                       // WORKS! - at 8 matches proceeds with {}.
          timerStop();                                     // TODO: appears to work.
          console.log('YOU WON!!');
          //youWon();                        // TODO: change  to function.
        }}

//if cards don't match - go away!

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
/*************************************************************************************************************************************

                                      You Won Modal Window (based on MDN <dialog> page)

*************************************************************************************************************************************/
                                                                // TODO: set up youWon function.  open modal window.
function youWon(){
  console.log('you won.');

  wonDialog.classList.add('open');                            // TODO:  opens modal window.

// cancel button closes dialog box

// cancelButton.addEventListener('click', function(){        // attaches click of cancel button to closing the modal window.
//   wonDialog.close();
// });
}
