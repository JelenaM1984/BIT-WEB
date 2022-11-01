//1.Write a program that checks if a given element e is in the array a.
// Input: e = 3, a = [5, -4.2, 3, 7]
function checkTheNumber(a, e) {
  for (i = 0; i < a.length; i++) {
    if (a[i] == e) {
      return "yes";
    }
  }
}

console.log(checkTheNumber([5, -4.2, 3, 7], 3));
//2.Write a program that multiplies every positive element of a given array by 2.
function multipleNumber(array, number) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      array[i] *= number;
    }
  }
  return array;
}
console.log(multipleNumber([-3, 11, 5, 3.4, -8], 3));
//3.Write a program that finds the minimum of a given array and prints out its value and index.
function minimum(array) {
  var min = 0;
  var place = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
      place = [i];
    }
  }
  return "Najmanji boj niza je " + min + "nalazi se na" + mesto;
}
console.log(minimum[(4, 2, 2, -1, 6)]);
//4.Write a program that finds the second smallest number and prints out its value.
