// let firtCard = 7
// let secondCard = 15
// let sum = firtCard + secondCard

// if (sum < 21){
//   console.log("Do you want to draw more card? 😊")
// }
// else if (sum === 21) {
//   console.log("Woow You've got Blackjack! 😲")
// }
// else {
//   console.log("You are out of the game! 😞")
// }

// let age = 21

// if (age <= 20) {
//   console.log("You can not enter the club!")
// }
// else {
//   console.log("Welcome")

// let age = 101

// if (age < 100) {
//   console.log("Not elegible")
// }

// else if (age === 100) {
//   console.log("Here is your birthday card from the king!")
// }

// else {
//   console.log("Not elegible, you have already gotten a card")


let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = []
let sum = 0
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.querySelector("#card-el")



function startGame(){
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  rendergame()
}

function rendergame(){
  if (sum <= 20){
  message = "Do you want to draw a new card?"
}
else if (sum === 21){
  message = "You have got a Blackjack!"
}
else {
  message = "You are out the game!"
  isAlive = true
}
messageEl.textContent = message
sumEl.textContent = "Sum: " + sum
cardEl.textContent = "Cards: " 
for (let i = 0; i < cards.length; i++){
  cardEl.textContent += cards[i] + " "
}
}

function newcard(){
  console.log("Draw new card from the deck!")

  let card = getRandomCard()
  sum += card 
  cards.push(card)
  rendergame()
  
}
function getRandomCard(){
  return Math.floor(Math.random()*13) + 1 
 if (randonNumber > 10) {
  return 10
 }else if (randomNuber === 1) {
  return 11
 } else {
  return randomNumber
 }

}
console.log(getRandomCard())