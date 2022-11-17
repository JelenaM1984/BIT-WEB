//Write a function to count vowels in a provided string.
function counVowels(niz) {
  var number = 0;
  for (var i = 0; i < niz.length; i++) {
    if (
      niz[i] == "a" ||
      niz[i] == "e" ||
      niz[i] == "i" ||
      niz[i] == "o" ||
      niz[i] == "u"
    ) {
      number++;
    }
  }
  return number;
}
console.log(counVowels("ajskdlooo"));
//Write a function that combines two arrays by alternatingly taking elements.
var a = ["a", "b", "c"];
var x = [1, 2, 3];
function combineArrays(firstArray, secondArray) {
  var niz = [];
  for (let i = 0; i < firstArray.length; i++) {
    niz.push(firstArray[i]);
    niz.push(secondArray[i]);
  }
  return niz;
}
console.log(combineArrays(["a", "b", "c"], [1, 2, 3]));
//Write a function that rotates a list by k elements.
var x = [1, 2, 3, 4, 5];
function rotateElements(nums, k) {
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }

  return nums;
}
console.log(rotateElements([1, 2, 3, 4, 5], 4));
//Write a function that takes a number and returns array of its digits.
function numReturn(number) {
  var a = [];
  a = Array.from(String(number), Number);
  return a;
}
console.log(numReturn(5878));
//Write a program that prints a multiplication table for numbers up to 12.

//Write a function to input temperature in Centigrade and convert to Fahrenheit.
function centigradeToFarenheit(centigrade) {
  farenheit = centigrade * 1.8 + 32;
  return farenheit;
}
console.log(centigradeToFarenheit(35));
//Write a function to find the maximum element in array of numbers. Filter out all non-number
//elements.
var a = [NaN, 4, 58, -28, null, false, 98];
function maximumElement(array) {
  var result = [];
  for (element in array) {
    if (
      array[element] != null &&
      array[element] != false &&
      array[element] != NaN
    ) {
      result.push(element[i]);
    }
  }
  return result;
}
console.log(Math.max(4, 58, -28, null, false, 98));
//Write a function to find the maximum and minimum elements. Function returns an array.

function maxAndMin(array) {
  var a = [25, 68, -58, 7, null];
  var max = a[0];
  var min = a[0];
  for (var i = 0; i < a.length; i++) {
    if (a[i] > max) {
      max = a[i];
    }
    if (a[i] < min) {
      min = a[i];
    }
  }
  return "maximal number in array is " + max + " and minimal number is " + min;
}
console.log(maxAndMin([25, 68, -58, 7, null]));
// Write a function to find the median element of array.
function medianElement(array){
    a=[5,8,9,-47,69];
    
}
//Write a function to find the element that occurs most frequently.