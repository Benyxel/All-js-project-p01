// // for loop

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

// // ARRAYS
// const favSingers = ["Sarkodie", "King Paluta", "Patapaa"];
// console.log(favSingers[0]);

// const favNumbers = [ 12, 30, 19, 2]
// // console.log(favNumbers);

// const mixedArr = ["string",["otherarray"], "123", "true"];
// console.log(mixedArr[0]);
// console.log(mixedArr[1]);
// console.log(mixedArr[2]);
// console.log(mixedArr[3]);

// const name = ["bernard","yeboah", "Boanu"]

// console.log(name.slice(0, 2));

// objects
// const car = {
//   type: "Honda",
//   model: "Honder civic",
//   color: "Black"
// };

// console.log(car.model);
// console.log(car.type);
// console.log((car.type = "Toyota"));
// console.log(car);
// car.wheels = 4;

// console.log(car);

// function declaration
// function sayHi(name){
// console.log(`Hi ${name}`);
// }

// sayHi("Bernard")

// function expression
// function myFunction(p1, p2) {
//   return p1 * p2;

// }
//  let x = myFunction(7,6)
//  console.log(x);

//  DATE AND TIME
// const currentDate = new Date();
// console.log(currentDate);

// setTimeout(function () {
//   console.log(`This code will expired in 10 sseconds`);
// }, 10000);

// console.log(`${2 + 2}`);

// arrow function
// greet = (username) => `Hello ${username}`;


// spread operator
// const colors = ["red" ,"blue", "pink", "orange"]
// const colors_2 = ["black", "white", "blown", "gold"]
// const colorsCombine = [...colors, ...colors_2]

// console.log(colorsCombine);

// let arr = [1, 2, 3,];
// let arr2 = [4, 5];

// const clone = [...arr, ...arr2]
// console.log(clone);

// const user2 = {
//   name: "Ben",
//   age: 22,
// };

// const clone2 = {...user2, place: "idk"}
// console.log(clone2);

// rest operator

// function portfolio(Name, location, ...skills) {
//  console.log("Fullname: ", Name);
//  console.log("Location: ", location);
//  console.log("Skills: ", skills);
// }

// portfolio("Yeboah Boanu Bernard ","Ghana Accra ", "ADeveloper", "Artist", "Gamer" )

// Assigning the rest of an array to a variables

// const [mine, ...yours] = ["Laptops", "Mouse", "Pads"]
// console.log(...yours);

// objects destrusture

// const person = {
//   name: "Yeboah Bernard",
//   age: 26,
//   gender: "male",
//   country: "Ghana"
// }
// const {name, age, gender, country} = person;
// console.log(name);
// console.log(age);
// console.log(gender);
// console.log(country);

// renaming destrusture
// const {name1, age, gender, country} = person;
// const {name1: personName,age: personAge, gender: personGender,country: personCountry} = person

// console.log(personName);
// console.log(personAge);
// console.log(personGender);
// console.log(personCountry);

// Destrusture a function

// const user = {
//   name: "Benyxel",
//   platform: "steam",
//   Games: 5,
// };

// function userDetails({name, platform, Games}) {
//   console.log(`Name: ${name}`);
//   console.log(`Platform: ${platform}`);
//   console.log(`Games: ${Games}`);
// }
// userDetails(user)


// ternal OPerator

let personMoney = true

let haveMoney = personMoney = true ? "Buy Products" : "Bring Money"
console.log(haveMoney);

// for inloop
