var fruits = ["apples", "oranges", "bananas"];

function listFruits() {
  for (var i = 0; i < fruits.length; i++) {
    console.log("I have some " + fruits[i]);
  }
}
listFruits();
// Peter gets paid $25 per hour on his remote job. The array below holds 10 numbers,
// the working hours he worked each day last two weeks (Sat and Sun off).

var workingHours = [6, 6, 7, 7, 8, 8, 6, 7, 8, 7];
// Iterate over the array, and print out Peter earned $... today! each day.
function payEachDay() {
  for (var i = 0; i < 10; i++) {
    console.log("Peter earned " + workingHours[i] * 25 + "$ today.");
  }
}
payEachDay();
// Calculate how much Peter made in the last two weeks. CAN NOT DONE

function sum() {
  for (var i = 0; i < 10; i++) {
    var weeks = 0;
    weeks = weeks + workingHours[i] * 25;
  }
  console.log(weeks);
}
sum();
// --------GOOGLED IT BUT NOT CLEAR

const sum2 = [1, 8, 1].reduce(add, 0);

function add(accumulator, number) {
  return accumulator + number;
}

console.log(sum2);

var workingHours = [6, 6, 7, 7, 8, 8, 6, 7, 8, 7].reduce(add, 0);
function add(acc, number) {
  return acc + number;
}
console.log(workingHours * 25);

// Peter realizes that every day his working hour is a random integer number between 6 to 8
// inclusively. And he wants to estimate how much he can make in one year
// (approximately 50 weeks, 5 working days per week). Let use the function
// you made in Assignment 1 to create an array that contains 250 numbers represent
// Peter's working hours in one year. Use the array to calculate Peter's estimated yearly
// income. Hint: find the way to add an item to the end of an array
// in the Docs of Assignment 4.
var year = [];
for (let index = 0; index < 250; index++) {
  function getRandomIntBet(start, end) {
    between = Math.floor(Math.random() * (end - start) + start);
    return year.push(between);
  }
  getRandomIntBet(6, 8);
}
year;
console.log(year);
var workingHoursYear = year.reduce(add, 0);
function add(acc, number) {
  return acc + number;
}
console.log(workingHoursYear * 25);
// Put your code in a function that takes in the number of weeks and return estimated revenue.
