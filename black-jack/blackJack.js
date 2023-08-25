let playerBalance = 1000 // Счет игрока
let blackJacksPoint = 26 // Игра до этого кол-ва очков
let dealerPlayToThisPoint = blackJacksPoint - 3 // Дилер набирает до этого кол-ва очков
const numberOfDecks = 6 //Задаем количество колод.

let numerOfMove = 0
let playerPoints = 0
let dealerPoints = 0
let playerFinishPlay = false
let bidSize = 0
let playerAces = 0
let dealerAces = 0

//Получаем из перемешенного массива первый элемент (1 карта), с удалением ее из массива
function getOneCard(deck) {
  let cardToGame = deck.shift()
  console.log(cardToGame)
  console.log("количество карт в колоде =", deck.length)
  numerOfMove += 1
  return cardToGame
}

//Раздача диллеру карты
function getCartToDealer(deck) {
  const result = getOneCard(shuffleDeck)
  if (result.value === "A") {
    dealerAces++
  }
  dealerCardNode.innerHTML += ` [${result.value} ${result.suit}] `
  dealerPoints += cardStrength(result)
  dealerPointsNode.innerHTML = dealerPoints
}

//Раздача карты игроку
function getCardToPlayer(deck) {
  const result = getOneCard(shuffleDeck)
  if (result.value === "A") {
    playerAces++
  }
  playerPoints += cardStrength(result)
  playerCardNode.innerHTML += ` [${result.value} ${result.suit}] `
  playerPointsNode.innerHTML = playerPoints
}
