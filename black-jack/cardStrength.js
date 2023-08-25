const alternativeAce = 1
let differenceBetweenAces

//Определние силы карты для подсчета очков
function cardStrength(card) {
  let points = card.value
  switch (card.value) {
    case "J":
      points = 10
      break
    case "Q":
      points = 10
      break
    case "K":
      points = 10
      break
    case "A":
      points = 13
      differenceBetweenAces = points - alternativeAce
      break
    default:
      break
  }
  return points
}
