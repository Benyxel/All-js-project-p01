

let countEl = document.getElementById("count-el")
console.log(countEl)

let count = 0

function increment() {
  count = count + 1
 countEl.innerText = count
}
 let saveEl = document.getElementById("save-el")


function save() {
  count2 = count + "0 - "
  saveEl.innerText = count2
  console.log(count)
}







 