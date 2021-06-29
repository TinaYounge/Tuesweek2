var fruits = ["Apple", "Banana"];
var newLength = fruits.push("Orange");

fruits;

var pets = ["cat", "dog", "bat"];
console.log(pets.includes("cat"));
console.log(pets.includes("at"));

var last = fruits.pop();
fruits;

var first = fruits.shift();
fruits;

newLength = fruits.unshift("Strawberry");
fruits;

fruits.push("Mango");
fruits.push("Apple");
fruits.push("Orange");
// fruits = ["Strawberry", "Banana", "Mango", "Apple", "Orange"]
console.log(fruits.slice(2));
// expected output: Array ["Mango", "Apple", "Orange"]
console.log(fruits.slice(2, 4));
// expected output: Array ["Mango", "Apple"]
console.log(fruits.slice(1, 5));
// fruits = ["Strawberry", "Banana", "Mango", "Apple", "Orange"]
var removedItems = fruits.splice(1, 3);
fruits;

// Write a function called getLeapYears(start, end) that returns a list of leap years
// from the year start to the year end inclusively. (A year is a leap year if its number
//    is exactly divisible by 4 and is not exactly divisible by 100. A year is always a
//    leap year if its number is exactly divisible by 400).

let leapYear = [];

function getLeapYears(start, end) {
  for (let i = 0; i < end - start; i++) {
    let year = start + i;
    if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
      leapYear.push(year);
    }
  }
}
getLeapYears(0, 2000);
leapYear;

// // console.log(reverseArray(["A", "B", "C"]));

// var arr = [1, 2, 3, 4, 5];
// console.log(reverseArray(arr));
// console.log(arr);
// Use getRandomInt() from Assignment 1 to generate an array called evenNumbers
// containing 100 random integer numbers in the range 0 to 100 inclusively.
// Remove all odd numbers in evenNumbers and store them in an array called oddNumbers.
// Log both arrays to the console.
// Back
let leapYear = [];

function getLeapYears(start, end) {
  for (let i = 0; i < end - start; i++) {
    let year = start + i;
    if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
      leapYear.push(year);
    }
  }
}
getLeapYears(0, 2000);
leapYear;
