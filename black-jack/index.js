const btnStartGameNode = document.querySelector(".js-start-game")
const btnNextCardNode = document.querySelector(".js-next-card")
const btnEnoughNode = document.querySelector(".js-enough")
const btnBid5Node = document.querySelector(".js-bid-5")
const btnBid10Node = document.querySelector(".js-bid-10")
const btnBid25Node = document.querySelector(".js-bid-25")
const btnBid50Node = document.querySelector(".js-bid-50")
const outputNode = document.querySelector(".js-output")
const dealerCardNode = document.querySelector(".js-dealer-card")
const playerCardNode = document.querySelector(".js-youCard")
const dealerPointsNode = document.querySelector(".js-dealer-points")
const playerPointsNode = document.querySelector(".js-you-points")
const biSizeNode = document.querySelector(".js-bid-size")
const playerBalanceNode = document.querySelector(".js-player-balance")

playerBalanceNode.innerHTML = playerBalance

btnStartGameNode.addEventListener("click", function () {
  if (numerOfMove === 0 && bidSize != 0) {
    console.log("start game")
    playerCardNode.innerHTML = ""
    dealerCardNode.innerHTML = ""
    getCartToDealer(shuffleDeck)
    getCardToPlayer(shuffleDeck)
    getCardToPlayer(shuffleDeck)
    checkPoints(playerPoints, dealerPoints)
    console.log("Razmer stavki =", bidSize)
  }
})

btnNextCardNode.addEventListener("click", function () {
  if (numerOfMove != 0 && !playerFinishPlay) {
    getCardToPlayer(shuffleDeck)
    checkPoints(playerPoints, dealerPoints)
  }
})

btnEnoughNode.addEventListener("click", function () {
  if (numerOfMove != 0) {
    playerFinishPlay = true
    while (dealerPoints < dealerPlayToThisPoint) {
      getCartToDealer(shuffleDeck)
      console.log(dealerPoints)
    }
    setTimeout(() => checkPoints(playerPoints, dealerPoints), 0)
  }
})

btnBid5Node.addEventListener("click", function () {
  let wantToBid = 5
  if (numerOfMove === 0 && playerBalance >= wantToBid) {
    bidSize += 5
    biSizeNode.innerHTML = bidSize
    playerBalanceNode.innerHTML = playerBalance - wantToBid
    playerBalance = playerBalance - wantToBid
  } else if (numerOfMove === 0 && playerBalance < wantToBid) {
    notEnoughMoney()
  } else {
    messageEndTheHand()
  }
})

btnBid10Node.addEventListener("click", function () {
  let wantToBid = 10
  if (numerOfMove === 0 && playerBalance >= wantToBid) {
    bidSize += 10
    biSizeNode.innerHTML = bidSize
    playerBalanceNode.innerHTML = playerBalance - wantToBid
    playerBalance = playerBalance - wantToBid
  } else if (numerOfMove === 0 && playerBalance < wantToBid) {
    notEnoughMoney()
  } else {
    messageEndTheHand()
  }
})

btnBid25Node.addEventListener("click", function () {
  let wantToBid = 25
  if (numerOfMove === 0 && playerBalance >= wantToBid) {
    bidSize += 25
    biSizeNode.innerHTML = bidSize
    playerBalanceNode.innerHTML = playerBalance - wantToBid
    playerBalance = playerBalance - wantToBid
  } else if (numerOfMove === 0 && playerBalance < wantToBid) {
    notEnoughMoney()
  } else {
    messageEndTheHand()
  }
})

btnBid50Node.addEventListener("click", function () {
  let wantToBid = 50
  if (numerOfMove === 0 && playerBalance >= wantToBid) {
    bidSize += 50
    biSizeNode.innerHTML = bidSize
    playerBalanceNode.innerHTML = playerBalance - wantToBid
    playerBalance = playerBalance - wantToBid
  } else if (numerOfMove === 0 && playerBalance < wantToBid) {
    notEnoughMoney()
  } else {
    messageEndTheHand()
  }
})

function notEnoughMoney() {
  console.log("Не хватает средств")
  alert("Не хватает средств")
}

function messageEndTheHand() {
  console.log("Менять ставку во время раздачи нельзя.")
  alert("Менять ставку во время раздачи нельзя.")
}
