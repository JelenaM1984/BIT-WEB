//Write a program that calculates the maximum of two given numbers.
function maxnumber(a, b) {
  if (a > b) {
    return a;
  } else if (a < b) {
    return b;
  } else if (a == b) {
    return "Numbers are even";
  }
}
console.log(maxnumber(60, 55));
console.log(maxnumber(55, 55));
//Write a program that checks if a given number is odd.
function oddNumber(x) {
  if (x % 2 == 1) {
    return "Number is odd";
  } else {
    return "The number is not odd";
  }
}
console.log(oddNumber(5));
//Write a program that checks if a given number is a three digit long number.
function threeDigitNumber(y) {
  if (y > 99 && y < 1000) {
    return "It is a three digit long number";
  } else {
    return "It is not a three digit long number";
  }
}
console.log(threeDigitNumber(1000));
//4. Write a program that calculates an arithmetic mean of four numbers.
function aritm(a, b, c, d) {
  return (a + b + c + d) / 4;
}

console.log(aritm(4, 5, 6, 7));
//Write a program that draws a square of a given size. For example, if the size of square
let n = 5; // row or column count
// defining an empty string
let string = "";

for (let i = 0; i < n; i++) {
  // external loop
  for (let j = 0; j < n; j++) {
    // internal loop
    if (i === 0 || i === n - 1) {
      string += "*";
    } else {
      if (j === 0 || j === n - 1) {
        string += "*";
      } else {
        string += " ";
      }
    }
  }
  // newline after each row
  string += "\n";
}
console.log(string);
//6.Write a program that draws a horizontal chart representing three given values. For example, values are 5, 3, and 7,

//7. Write a program that calculates a number of digits of a given number.
function digits(number) {
  return ("" + number).length;
}
console.log(digits(56987568684));
//8.Write a program that calculates a number of appearances of a given number in a given arrey
var a = [2, 4, 7, 8, 7, 7, 1];
function countNumber(arr, n){
 
  for(var i=0;i<arr.length;i++){
   var result=0; 
   var n=7;
   if (arr[i]==n){
      result++;
    }
    
  }return result;
}
console.log(countNumber([2, 4, 7, 8, 7, 7, 1],7))


//9.Write a program that calculates the sum of odd elements of a given array.
