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
  for (var i = 0; i < array.length; i++) {
    if (array[i] < min) {
    }
  }

  //4.Write a program that finds the second smallest number and prints out its value.

  console.log(secondMinNum([4, 2, 2, -1, 6]))
  //5.Write a program that calculates the sum of positive elements in the array.
 var a= [3, 11, -5, -3, 2];
 function sumOfPositiveElements(array) {
  var result=0;
  for (var i=0;i<a.length;i++){
    if (a[i]>0){
      result+=a[i];
    }
  }
  return "Sum of positive elements is "+result
 }
 console.log(sumOfPositiveElements(a))
 //Write a program that checks if a given array is symmetric. An array is symmetric if it can
// be read the same way both from the left and the right hand side.
var x=[2, 4, -2, 7, -2, 4, 2]
function symmetricArray(a){
  var result=[];
  for(var i=0;i<a.length;i++)
  
}
