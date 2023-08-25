//Возвращаем все необходимые параметры в начальные сосояния для новой раздачи
function returnToDefault() {
  numerOfMove = 0
  playerPoints = 0
  dealerPoints = 0
  playerFinishPlay = false
  bidSize = 0
  dealerCardNode.innerHTML = ""
  playerCardNode.innerHTML = ""
  dealerPoints = 0
  dealerPointsNode.innerHTML = ""
  playerPoints = 0
  playerPointsNode.innerHTML = ""
  biSizeNode.innerHTML = 0
  playerBalanceNode.innerHTML = playerBalance
  playerAces = 0
  dealerAces = 0
  dealerCardNode.innerHTML = "[]"
  playerCardNode.innerHTML = "[]"
  dealerPointsNode.innerHTML = 0
  playerPointsNode.innerHTML = 0
}
