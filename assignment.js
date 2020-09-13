
function card (value) {
  this.value = value;
  this.next = null;
}

function cardDeck (numberOfCards = 0) {
  this.topmostCard = null;
  this.bottommostCard = null;
  if(numberOfCards) this.init(numberOfCards)
}

cardDeck.prototype.init = function (numberOfCards) {
  this.topmostCard = this.bottommostCard = new card(numberOfCards);
  for(let i = numberOfCards - 1; i > 0; i--) {
    const temp = this.topmostCard;
    this.topmostCard = new card(i);
    this.topmostCard.next = temp;
  }
}

cardDeck.prototype.removeTopCard = function() {
  let top = this.topmostCard;
  if (top) { 
    this.topmostCard = top.next;
    top.next = null;
  }
  if (this.topmostCard === null) this.bottommostCard = null;
  return top;
}

cardDeck.prototype.addCardOnTop = function (card) {
  if (card === null) return;
  card.next = this.topmostCard;
  this.topmostCard = card;
  if (this.bottommostCard === null) this.bottommostCard = card;
}

cardDeck.prototype.addCardToBottom = function (card) {
  if (card === null) return;
  if (this.bottommostCard === null) {
    this.bottommostCard = this.topmostCard = card;
  }
  else {
    this.bottommostCard.next = card;
    this.bottommostCard = card;
  }
}

function compareDecks(deck1, deck2) {
  let topDeck1 = deck1.topmostCard;
  let topDeck2 = deck2.topmostCard;
  while(topDeck1 && topDeck2) {
    if (topDeck1.value !== topDeck2.value) return false;
    topDeck1 = topDeck1.next;
    topDeck2 = topDeck2.next;
  }
  if(topDeck1 === null && topDeck2 === null) return true;
  return false;
}

function executeRound(handDeck, tableDeck) {
  while (handDeck.topmostCard) {
    let top = handDeck.removeTopCard();
    tableDeck.addCardOnTop(top);
    top = handDeck.removeTopCard();
    handDeck.addCardToBottom(top);
  }
}

function findNumberOfRounds() {
  try {
    // get the input from command line and validate it
    const numberOfCards = Number(process.argv[2]);
    if (!numberOfCards) { throw new Error('Please enter valid number of cards (the number of cards should be >= 1)'); }

    // initialize the decks
    const originalDeck = new cardDeck(numberOfCards); // keep an original copy of the deck
    let handDeck = new cardDeck(numberOfCards);
    let tableDeck = new cardDeck();
    let numberOfRounds = 0;

    // until the deck returns to original order keep doing steps 1, 2 and 3.
    do {
      executeRound(handDeck, tableDeck);
      handDeck = tableDeck;
      tableDeck = new cardDeck();
      numberOfRounds++;
    } while(!compareDecks(handDeck, originalDeck));

    console.log(`The number of rounds needed are - ${numberOfRounds}`);
  } catch(error) {
    console.error(error.message)
  }
}

findNumberOfRounds()