// for (var x=0; x<=10; x++) {
// console.log(x * x);
// }
// var a = ['a', 'b', 'c', 'x', 'y', 'z'];
// var result = '\n';
// for (var i in a) {
//  result += 'index: ' + i + ', value: ' + a[i] + '\n';
// };
// console.log(result);
//zadatak 1
for (var x = 0; x <= 15; x++) {
  var y = x % 2;
  if (x == 0) {
    console.log("Broj je nula");
  } else if (y == 0) {
    console.log("Broj " + x + " je paran");
  } else {
    console.log("Broj " + x + " je neparan");
  }
}
//zadatak 2
var sum = 0;
for (var i = 0; i <= 1000; i++) {
  var x = i % 3;
  var y = i % 5;
  if (x == 0 && y == 0) {
    sum += i;
  }
}
console.log(sum);
//zadatak 3
var array = [1, 2, 3, 4, 5, 6],
  s = 0,
  p = 1,
  i;
for (i = 0; i < array.length; i += 1) {
  s += array[i];
  p *= array[i];
}
console.log("Zbir : " + s + " Proizvod :  " + p);
//zadatak 4
var a = ["1", "A", "B", "c", "r", true, NaN, undefined];
var result = "";
for (let index = 0; index < a.length; index++) {
  var element = a[index];
  result = result + element;
}
console.log(result);
//zadatak 5
var a = [
  [1, 2, 1, 2, 4],
  [8, 11, 9, 4],
  [7, 0, 7, 2, 7],
];
for (let index = 0; index < a.length; index++) {
  var element = a[index];
  console.log(element);
  for (var d = 0; d < a.length; d++) {
    console.log(element[d]);
  }
}
//zadatak 6
var sum = 0;
for (let i = 0; i <= 20; i++) {
  sum += i;
}
console.log("zbir kvadrata brojeva od 1 do 20 iznosi; " + sum);
