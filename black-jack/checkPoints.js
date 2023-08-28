function checkPoints(pointsPlayer, pointsDealer) {
  if (pointsPlayer === blackJacksPoint) {
    playerHasBJ()
    return
  }

  if (pointsPlayer > blackJacksPoint) {
    if (playerAces > 0) {
      playerHasAces()
      return
    }
    winLoseMessage("Вы проиграли.")
    return
  }

  if (pointsDealer > blackJacksPoint) {
    if (dealerAces > 0) {
      dealerHasAces()
      return
    }
    dealerPointsNode.innerHTML = dealerPoints
    winLoseMessage("Вы победили!")
    playerBalance = playerBalance + 2 * bidSize
    return
  }

  if (pointsDealer < dealerPlayToThisPoint && playerFinishPlay) {
    dealerNeedsACard()
    return
  }

  if (pointsDealer >= dealerPlayToThisPoint) {
    if (pointsDealer > pointsPlayer) {
      winLoseMessage("Вы проиграли.")
      return
    }
    if (pointsDealer === pointsPlayer) {
      winLoseMessage("Ничья.")
      playerBalance = playerBalance + bidSize
      return
    }
    if (pointsDealer === blackJacksPoint) {
      winLoseMessage("Вы проиграли.")
      return
    }
    winLoseMessage("Вы победили!")
    playerBalance = playerBalance + 2 * bidSize
  }
}

function winLoseMessage(message) {
  setTimeout(() => alert(message), 0)
  setTimeout(() => returnToDefault(), 0)
  console.log("playerPoints=", playerPoints)
  console.log("dealerPoints=", dealerPoints)
}

function playerHasBJ() {
  winLoseMessage("Поздравляем, у Вас БЛЭКДЖЕК!")
  playerBalance = playerBalance + 1.5 * bidSize
}

function playerHasAces() {
  playerAces -= 1
  playerPoints -= differenceBetweenAces
  playerPointsNode.innerHTML = playerPoints
}

function dealerHasAces() {
  dealerAces -= 1
  dealerPoints -= differenceBetweenAces
  dealerPointsNode.innerHTML = dealerPoints
  if (dealerPoints < dealerPlayToThisPoint) {
    getCartToDealer(shuffleDeck)
  }
  setTimeout(() => checkPoints(playerPoints, dealerPoints), 100)
}

function dealerNeedsACard() {
  getCartToDealer(shuffleDeck)
  setTimeout(() => checkPoints(playerPoints, dealerPoints), 0)
}
