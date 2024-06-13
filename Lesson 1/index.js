

let countEl = document.getElementById("count-el")
console.log(countEl)
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
  count = count + 1
 countEl.textContent = count
}
 


function save() {
  count2 = count +  " - "
  saveEl.textContent += count2
  countEl.textContent = 0
  count = 0
}








 