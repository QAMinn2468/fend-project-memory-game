
/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
// function shuffle(array) {
//     const currentIndex = array.length, temporaryValue, randomIndex;
//
//     while (currentIndex !== 0) {
//         randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex -= 1;
//         temporaryValue = array[currentIndex];
//         array[currentIndex] = array[randomIndex];
//         array[randomIndex] = temporaryValue;
//     }
//
//     return array;
// }


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
const allCards = document.querySelectorAll('.card');                            // creates the variable for all the cards
const openCards = [];                                                           //  Array clear at start. origin of openCard.length

allCards.forEach(function(card){
  card.addEventListener('click', function(e){                                   //  WORKS!  Captures click event.
    if (!card.classList.contains('open') && !card.classList.contains('show') && !card.classList.contains('match')) {     // if clicked card is revealed or matched, don't continue (do nothing).
    openCards.push(card);                                                       //  WORKS!  card is added to openCards array.

    if (openCards.length <= 2) {                                                //  WORKS! Two cards only revealed.      //  fixed bug: 2 clicks on same card.
      card.classList.add('open', 'show');                                       //  Reveals cards by adding classes "open" and "show"

      setTimeout(function(){
        openCards.forEach(function(card){
          card.classList.remove('open', 'show');
        });
        openCards = [];         //hide
      }, 3000);
    } else {

    }}
  });
});
