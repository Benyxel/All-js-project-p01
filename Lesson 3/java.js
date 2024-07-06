
  // for loop

// for (let i = 1; i <= 1000; i++) {
//   console.log("Bernard", i);
  
// }


// let i = 1

// while (i <= 100){
//  console.log("Bernard",i++); 
// }

// let i = 20

// do{
//   console.log("Bernard",i); i++
// } while (i <= 400); 

// ARRAYS
// const favSingers = ["Sarkodie", "King Paluta", "Patapaa"];
// console.log(favSingers[0]);

// const favNumbers = [ 12, 30, 19, 2]
// console.log(favNumbers);

// const mixedArr = ["string",["otherarray"], "123", "true"];
// console.log(mixedArr[0]);
// console.log(mixedArr[1]);
// console.log(mixedArr[2]);
// console.log(mixedArr[3]);

// const name = ["bernard","yeboah", "Boanu"]

// console.log(name.slice(0, 2));


// objects
const car = {
  type: "Honda",
  model: "Honder civic",
  color: "Black"
};

console.log(car.model);
console.log(car.type);
console.log((car.type = "Toyota"));
console.log(car);
car.wheels = 4;

console.log(car);

// function declaration
function sayHi(name){
console.log(`Hi ${name}`);
}

sayHi("Bernard")

// function expression
function myFunction(p1, p2) {
  return p1 * p2;
  
}
 let x = myFunction(7,6)
 console.log(x);