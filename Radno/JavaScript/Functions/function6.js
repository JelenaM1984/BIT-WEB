//Write a function to count vowels in a provided string.
function counVowels (niz){
    var number=0 
    for (var i=0;i<niz.length;i++){
               if (niz[i]=='a' || niz[i]=='e' || niz[i]=='i' || niz[i]=='o' || niz[i]=='u'){
      number++;
    }
    }  
    return number;
}
console.log(counVowels('ajskdlooo'));
//Write a function that combines two arrays by alternatingly taking elements.
var a=['a','b','c']
var x=[1,2,3]
function combineArrays(firstArray, secondArray){
    var niz=[];
for (let i = 0; i < firstArray.length; i++) {
   niz.push(firstArray[i]);
   niz.push(secondArray[i]);
    }
    return niz;
}
console.log(combineArrays(['a','b','c'],[1,2,3]));
//Write a function that rotates a list by k elements.
var x=[1,2,3,4,5]
function rotateElements(nums,k){
     for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
  
    return nums;
}
console.log(rotateElements([1,2,3,4,5],4))
//Write a function that takes a number and returns array of its digits.
function numReturn(number){
    var a=[];
    a=Array.from(String(number),Number);
    return a;
}
console.log(numReturn(5878))
//Write a program that prints a multiplication table for numbers up to 12.
//Write a function to input temperature in Centigrade and convert to Fahrenheit.