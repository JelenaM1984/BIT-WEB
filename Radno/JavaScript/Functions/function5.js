//Write a function that converts an array of strings into an array of numbers. Filter
// out all non-numeric values.
var stringArray = ["1", "21", undefined, "42", "le+3"];
function numberArray(number) {
  var result = [];
  for (var i = 0; i < stringArray.length; i++) {
    result.push(parseInt(stringArray[i]));
  }
  return result;
}

console.log(numberArray(["1", "21", undefined, "42", "le+3"]));
//Write a program to join all elements of the array into a string skipping elements
// that are undefined, null, NaN or Infinity.
var a = [NaN, 0, 15, false, -22, "", undefined, 47, null];
function numberArray(array) {
  var result = "";
    for(element in array){
        if(array[element] != null && array[element] != NaN && isFinite(array[element] && array[element] != undefined)){
            result += array[element];
        }
    }
    return result;
}
var rez = numberArray(a);
console.log(rez);
// Write a program to filter out falsy values from the array.
var array = [NaN, 0, 15, false, -22, '', undefined, 47, null];
function noFalsyArray(array){
  var result=[];
  for (element in array){
    if(array[element] !=false && array[element] != NaN && isFinite(array[element] && array[element] != undefined)){
  result.push (array[element])
    }
} return result;
}
var rez=noFalsyArray(array);
console.log(rez);
//Write a program that calculates a number of integer values in the array.
var a=[NaN, 23.1, 15, false, -22.5, "", 4, 7, null]
function numberOfInteger(array){
  var rezultat=[];
  for (element in array){
   if (array[element]!=NaN && array[element]!=null && array[element]!=false && array[element]!=""&& array[element]<0) {
   rezultat.push[element[i]];
  }
   else if(array [element] !=Number.isInteger(a)) {
rezultat.push[elemen[i]]
  }
  } return rezultat
}
var rez=numberOfInteger;
console.log(rez);