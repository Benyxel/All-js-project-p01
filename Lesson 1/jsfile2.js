// let errorParagraph = document.getElementById("error")
// console.log("")


// function buy(){
//   console.log("click")
//   errorParagraph.textContent = "oops sorry something went wrong" 
// }


let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sumA = document.getElementById("sum-el")


function add() {
  let sum = num1 += num2;
  sumA.textContent = "Sum: " + sum;
}


function subtract(){
  let sum = num1 -= num2
  sumA.textContent = "Sum:" + sum
}

function divide(){
  let sum = num1 /= num2
  sumA.textContent = "Sum:" + sum
}

function multiply(){
  let sum = num1 *= num2
  sumA.textContent = "Sum:" + sum
}


