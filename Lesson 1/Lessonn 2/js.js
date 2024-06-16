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


let firstCard = 10
let secondCard = 13
let sum = firstCard + secondCard
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
console.log(messageEl)

function startgame(){
  if (sum <= 20){
  message = "Do you want to draw a new card?"
}
else if (sum === 21){
  message = "You have got a Blackjack!"
}
else {
  message = "You are out the game!"
  isAlive = false
}

messageEl.textContent = message
}


