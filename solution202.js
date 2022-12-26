//Define a card suit

function defineSuit(card) {
    let Suits = {
      "♣": "clubs",
      "♦": "diamonds",
      "♥": "hearts",
      "♠": "spades",
    }
    let Suit = [...card].reverse()[0]
    return Suits[Suit]
  }