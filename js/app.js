var moves = 0;                                                                  // WORKS!  DO NOT CHANGE

/*
 * Create a list that holds all of your cards
 */
const cards = ['fa-diamond', 'fa-diamond',                                      // WORKS!  Holds icons for function
               'fa-paper-plane-o', 'fa-paper-plane-o',
               'fa-anchor', 'fa-anchor',
               'fa-bolt', 'fa-bolt',
               'fa-cube', 'fa-cube',
               'fa-leaf', 'fa-leaf',
               'fa-bicycle', 'fa-bicycle',
               'fa-bomb', 'fa-bomb']



function generateCard(card) {
  return `<li class="card" data-card= ${card}><i class="fa ${card}"></i>`       // WORKS!!  card is a variable not a string.
}
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

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
/*********************************************************************************************

                    MY    CODE

*********************************************************************************************/
function initGame() {
  const deck = document.querySelector('.deck');
  const cardHTML = shuffle(cards).map(function(card){
    return generateCard(card);
  });
  console.log(moves);                             // TODO: change to log on counter //  WORKS!  returns twice at start?? -- fixed: ??
  deck.innerHTML = cardHTML.join('');                                           // WORKS! Deck of cards with icons is constructed  //   fix icons - DONE
}

initGame();


const restart = document.querySelector('.restart');                             // WORKS!  assign restart class to restart variable.


restart.addEventListener('click', function(){
  console.log('The reset button was clicked');
});        // WORKS!  event listener - listens for click on the div restart, // TODO: then runs the function initGame().



const allCards = document.querySelectorAll('.card');                            // creates the variable for all the cards
var openCards = [];                                                             //  Array clear at start. origin of openCard.length




allCards.forEach(function(card){
  card.addEventListener('click', function(e){                                   //  WORKS!  Captures click event
    if (!card.classList.contains('open') && !card.classList.contains('show') && !card.classList.contains('match')) {     // if clicked card is revealed or matched, don't continue (do nothing).

      openCards.push(card);                                                     //  WORKS!  card is added to openCards array.
      card.classList.add('open', 'show');                                       //  WORKS!  Reveals cards by adding classes "open" and "show"
       moves = moves + 1 ;
       console.log(moves);
// Check of they matched
    if (openCards.length === 2) {                                               // WORKS! fixed:  Two cards only revealed.      //  fixed bug: 2 clicks on same card.
      if (openCards[0].dataset.card === openCards[1].dataset.card) {            // WORKS!!  GAME IS NOW PLAYABLE!!!!!
        openCards[0].classList.add('match');
        openCards[0].classList.add('open');
        openCards[0].classList.add('show');
        openCards[1].classList.add('match');
        openCards[1].classList.add('open');
        openCards[1].classList.add('show');
      }



//if cards don't match - go away!

      setTimeout(function(){
        openCards.forEach(function(card) {
          card.classList.remove('open', 'show');                                // fixed:  bug - will remove single cards
        });                                                          //  TODO: when cards returned, advance moves by 1.

        openCards = [];
      }, 1000);

    }}
  });
});
