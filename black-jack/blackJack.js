let playerBalance = 1000 // счет игрока
let blackJacksPoint = 26 // игра до
const numberOfDecks = 6 //количество колод в игре

let dealerPlayToThisPoint = blackJacksPoint - 3
let numerOfMove = 0
let playerPoints = 0
let dealerPoints = 0
let playerFinishPlay = false
let bidSize = 0
let playerAces = 0
let dealerAces = 0

function getOneCard(deck) {
  let cardToGame = deck.shift()
  console.log(cardToGame)
  console.log("количество карт в колоде =", deck.length)
  numerOfMove += 1
  return cardToGame
}

function getCartToDealer(deck) {
  const result = getOneCard(shuffleDeck)
  if (result.value === "A") {
    dealerAces++
  }
  dealerCardNode.innerHTML += ` [${result.value} ${result.suit}] `
  dealerPoints += cardStrength(result)
  dealerPointsNode.innerHTML = dealerPoints
}

function getCardToPlayer(deck) {
  const result = getOneCard(shuffleDeck)
  if (result.value === "A") {
    playerAces++
  }
  playerPoints += cardStrength(result)
  playerCardNode.innerHTML += ` [${result.value} ${result.suit}] `
  playerPointsNode.innerHTML = playerPoints
}
