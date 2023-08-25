//создаем новый массив для перемешивания
let shuffleDeck = [...deck]

//в зависимости от кол-ва колод создаем общую
for (let i = 1; i < numberOfDecks; i++) {
  shuffleDeck = shuffleDeck.concat(deck)
}

//перемешиваем получившийся массив алгоритмом тасования Фишера — Йетса
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
