const cards = document.getElementsByClassName('fa-*');   //defines Cards (li element)  ??why doesn't it collect the fa-star as well???

/*
 * Create a list that holds all of your cards
 */
 const icons = [
         'fa-diamond', 'fa-diamond',                                             // array for icons
         'fa-paper-plane-o', 'fa-paper-plane-o',
         'fa-anchor', 'fa-anchor',
         'fa-bolt', 'fa-bolt',
         'fa-cube', 'fa-cube',
         'fa-anchor', 'fa-anchor',
         'fa-leaf', 'fa-leaf',
         'fa-bicycle', 'fa-bicycle'
 ];


 // for (const icon of icons) {                                                 // pull icon array from icons array.
 //   console.log(icon);
 // }

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
function createCard(card) {                                                      //  create CreateCard function()
  return '<li class="card" data-card="${card}"><i class="fa ${card}"></i></li>';
  console.log(createCard());
}


function initGame() {
  const deck = document.querySelector('.deck');
  const cardHTML = shuffle(cards).map[function(card) {
    return createCard(card);
  }]
  deck.innerText(cardHTML.join(''));

}

initGame();





// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    // const currentIndex = array.length, temporaryValue, randomIndex;
    //
    // while (currentIndex !== 0) {
    //     randomIndex = Math.floor(Math.random() * currentIndex);
    //     currentIndex -= 1;
    //     temporaryValue = array[currentIndex];
    //     array[currentIndex] = array[randomIndex];
    //     array[randomIndex] = temporaryValue;
    // }

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
const allCards = document.querySelectorAll('.card');                            // creates the variable for all cards
const openCards = [];                                                           // Substructure for openCards.length
const italic = document.querySelectorAll('.fa');
const c = 0;
var i = 0;


/*********************************************************************************************

                        MAIN FUNCTION

*********************************************************************************************/


allCards.forEach(function(card){
  card.addEventListener('click', function(e){                                   // listens for click, reveals upto 2 cards
    console.log(e);
    if (!card.classList.contains('open') && !card.classList.contains('show') && !card.classList.contains('match')){
    openCards.push(card);
    card.classList.add('open', 'show');


    // c++;                                                                                        // Click variable counter
    // console.log('click count =' + c);                                                           // variable to count clicks.

    if (openCards.length > 2) {                                                 // clicks > 2 ignored.  // TODO: bug: 2 clicks on one card.

      const click1 = openCards[0].dataset.card;
      const click2 = openCards[1].dataset.card;
      console.log(click1);
      console.log(click2);
      if (openCards[0].dataset.card = openCards[1].dataset.card) {
        openCards[0].classList.add('match');
        openCards[0].classList.add('open');
        openCards[0].classList.add('show');
        openCards[1].classList.add('match');
        openCards[1].classList.add('open');
        openCards[1].classList.add('show');
      }
    openCards = [];

    } else {


      // const click1 = openCards[0].dataset.card;                              // // TODO: Goal have does (click1 === click2) if true = match.
      // const click2 = openCards[1].dataset.card;
      // console.log(click1);
      // console.log(click2);


          //console.log(italic.classList[1]);
        //
        // if (click1 === click2) {                                              // do icons match?   class "fa-*" match?
        //  card.classList.add('match');                                        // labels matched cards. Instantly turns color - works.
        // }
      }


        setTimeout(function(){
          openCards.forEach(function(card){
            card.classList.remove('open', 'show');                             // removes classes so revealed cards will stay facedown next pick.
          });
          openCards = [];
        }, 3000);                                                              // timeout, returns cards (unmatched) - facedown.  WORKS, but too early
      };
    });



  });
