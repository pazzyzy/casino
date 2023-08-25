//Подсчет очков
function checkPoints(pointsPlayer, pointsDealer) {
  //для игры до 33
  if (pointsPlayer === blackJacksPoint) {
    winLoseMessage("Поздравляем, у Вас БЛЭКДЖЕК!")
    console.log("you win")
    playerBalance = playerBalance + 1.5 * bidSize
    return
  }
  //Перебор у игрока
  if (pointsPlayer > blackJacksPoint) {
    //Проверка были ли тузы
    if (playerAces > 0) {
      playerAces -= 1
      pointsPlayer -= differenceBetweenAces
      playerPoints -= differenceBetweenAces
      playerPointsNode.innerHTML = pointsPlayer
      checkPoints(pointsPlayer, pointsDealer)
      return
    }
    winLoseMessage("Вы проиграли.")
    console.log("you lose")
    return
  }

  //Перебор у диллера
  if (pointsDealer > blackJacksPoint) {
    //Проверка были ли АА у диллера
    if (dealerAces > 0) {
      dealerAces -= 1
      dealerPoints -= differenceBetweenAces
      dealerPointsNode.innerHTML = dealerPoints
      getCartToDealer(shuffleDeck)
      setTimeout(() => checkPoints(playerPoints, dealerPoints), 100)
      return
    }
    dealerPointsNode.innerHTML = dealerPoints
    console.log("you win")
    winLoseMessage("Вы победили!")
    playerBalance = playerBalance + 2 * bidSize
    return
  }

  if (pointsDealer < dealerPlayToThisPoint && playerFinishPlay) {
    getCartToDealer(shuffleDeck)
    checkPoints(pointsPlayer, dealerPoints)
    return
  }

  //Сравниваем очки
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
