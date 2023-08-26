let shuffleDeck = [...deck]

for (let i = 1; i < numberOfDecks; i++) {
  shuffleDeck = shuffleDeck.concat(deck)
}

function shuffle(shuffleDeck) {
  var currentIndex = shuffleDeck.length,
    temporaryValue,
    randomIndex
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    temporaryValue = shuffleDeck[currentIndex]
    shuffleDeck[currentIndex] = shuffleDeck[randomIndex]
    shuffleDeck[randomIndex] = temporaryValue
  }
  return shuffleDeck
}

shuffle(shuffleDeck)
