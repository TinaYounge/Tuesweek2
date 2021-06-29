console.log(Math.random());

// ath.round() to round to the nearest whole number.

console.log(Math.floor(4.5));
console.log(Math.ceil(4.5));
console.log(Math.round(4.5));
console.log(Math.round(4.49));

// Write a loop that logs 5 random numbers between 0 and 1 to the console.

for (var i = 1; i <= 5; i++) {
  console.log(Math.random(i));
}

// // Write a function named getRandomInt() that return a random integer number
// from 0 (inclusive) to 10 (exclusive). Put it in a loop that runs 100 times
// to check whether you see all of the numbers from 0 to 9?
// c1
for (var i = 1; i <= 99; i++) {
  console.log(Math.floor(Math.random(i) * 10));
}
// c2
function getRandomInt() {
  console.log(Math.floor(Math.random(i) * 10));
}
getRandomInt();
for (var i = 1; i <= 99; i++) {
  getRandomInt(i);
}
// Improve the function so that it return a random integer number between start (inclusive) and end (inclusive).
function getRandomIntBet(start, end) {
  between = Math.floor(Math.random() * (end - start) + start);
  return console.log(between);
}
getRandomIntBet(0, 6);
