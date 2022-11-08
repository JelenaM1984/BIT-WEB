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