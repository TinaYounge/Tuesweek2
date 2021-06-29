for (var i = 0; i < 10; i++) {
  var s = "";
  for (var j = 0; j < 10; j++) {
    s = s + i + j + " ";
  }
  console.log(s);
}
// Write a function that takes a number n as an argument and print out the following:
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// ...
// n n n n ... n

for (var i = 0; i < 10; i++) {
  var n = "";
  for (var j = 0; j < i; j++) {
    n = n + i + " ";
  }
  console.log(n);
}

for (var i = 0; i < 10; i++) {
  var h = " # # # #  ";
  console.log(h);
  for (var j = 0; j <= 1; j++) {
    l = "# # # #    ";
    console.log(l);
  }
}
