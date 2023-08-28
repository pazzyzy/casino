function checkPoints(pointsPlayer, pointsDealer) {
  if (pointsPlayer === blackJacksPoint) {
    winLoseMessage("Поздравляем, у Вас БЛЭКДЖЕК!")
    console.log("you win")
    playerBalance = playerBalance + 1.5 * bidSize
    return
  }

  if (pointsPlayer > blackJacksPoint) {
    if (playerAces > 0) {
      playerAces -= 1
      pointsPlayer -= differenceBetweenAces
      playerPoints -= differenceBetweenAces
      playerPointsNode.innerHTML = pointsPlayer
      return
    }
    winLoseMessage("Вы проиграли.")
    console.log("you lose")
    return
  }

  if (pointsDealer > blackJacksPoint) {
    if (dealerAces > 0) {
      dealerHasAces()
      return
    }
    dealerPointsNode.innerHTML = dealerPoints
    console.log("you win")
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
      console.log("you lose")
      return
    }
    if (pointsDealer === pointsPlayer) {
      winLoseMessage("Ничья.")
      console.log("Push")
      playerBalance = playerBalance + bidSize
      return
    }
    if (pointsDealer === blackJacksPoint) {
      winLoseMessage("Вы проиграли.")
      console.log("you lose")
      return
    }
    winLoseMessage("Вы победили!")
    playerBalance = playerBalance + 2 * bidSize
    console.log("you win")
  }
}

function winLoseMessage(message) {
  setTimeout(() => alert(message), 0)
  setTimeout(() => returnToDefault(), 0)
  console.log("playerPoints=", playerPoints)
  console.log("dealerPoints=", dealerPoints)
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
  checkPoints(playerPoints, dealerPoints)
}
