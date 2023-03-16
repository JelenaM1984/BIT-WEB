//Write a functional expression that duplicates each element of a given array.
//Input: [2, 4, 7, 11, -2, 1]
function duplicateItem(input = []){
    var newArray = [];
    for(var i = 0; i < input.length; i++){
        newArray.push(input[i]);
        newArray.push(input[i]);
    }

    return newArray;
}

var a = [2, 4, 7, 11, -2, 1];
var rez = duplicateItem(a);
console.log(rez);
//Write a functional expression that removes all duplicates in a given array.
function uniqChar(input = []){
    var uniqueChars = [...new Set(input)];
    
    return uniqueChars;
}
var a = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];
var rez = uniqChar(a);
console.log(rez);
//Drugi nacin
function uniqChar(input = []){
    var uniqueChars = [...new Set(input)];
    uniqueChars.sort(function(a, b){return a-b});
    return uniqueChars;
}
var a = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];
var rez = uniqChar(a);
console.log(rez);

//Write a function that checks if a given array has odd number of elements.
//[1, 2, 9, 2, 1]
function checkOdd(input = []){
    for(var i = 0; i < input.length; i++){
        if(input[i] % 2 != 0){
            return true;
        }
        else{
            return false;
        }
    }
}
var a = [1, 2, 9, 2, 1];
var rez = checkOdd(a);
console.log(rez);
//Write a function that counts the number of elements less than the middle
//element. If the given array has an even number of elements, print out an error
//message.
//Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
function countLeeThenMiddle(input = []){
    if(input.length % 2 == 0){
        return 'Error';
    }
    var counter = 0;
    var middleNumber = input[Math.floor(input.length/2)];
    console.log(middleNumber);
    for(var i = 0; i < input.length; i++){
        if(input[i] > middleNumber){
            counter++;
        }
    }
    return counter;
}
var a = [-1, 8.1, 3, 6, 2.3, 44, 2.11];
var rez = countLeeThenMiddle(a);
console.log(rez);
//Write a function that finds the smallest element of a given array. The function should
//return an object that contains the smallest value and its last position in the array.
//Input: [1, 4, -2, 11, 8, 1, -2, 3]

function smallElement(input = []){
    var smallestEl = input[0];
    for(var i = 0; i < input.length; i++){
        if(input[i] < smallestEl){
            smallestEl = input[i]
        }
    }

    return {minValue:smallestEl, minLastIndex:input.lastIndexOf(smallestEl)};
   
}

var a = [1, 4, -2, 11, 8, 1, -2, 3];
var rez = smallElement(a);
console.log(rez);

//Write a function that finds all the elements in a given array less than a given
//element.
//input:[2, 3, 8, -2, 11, 4], 6
function lessNumberElement(input = [], number){
    var newArray = [];
    for(var i = 0; i < input.length; i++){
        if(input[i] < number){
            newArray.push(input[i])
        }
    }

    return newArray;
}

var a = [2, 3, 8, -2, 11, 4];
var rez =lessNumberElement(a, 6);
console.log(rez);

//Write a function that finds all the elements in a given array that start with the “pro”
//substring. The function should be case insensitive.
//Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
//Output: [’Programming’, ‘product’]
function findProElements(input=[],letter){
    if(!input || input==0 ){
        return 0;
    }
    var result=[];
    for(var i=0; i<input.length;i++){
    word=input[i].substring(0,3).toLowerCase();
   
    if(word==letter){
        result.push(input[i]);
    }
    }
    return result;
}
var input=['JavaScript', 'Programming', 'fun', 'product'];
var res=findProElements(input,'pro');
console.log(res);

//Write a function that expects an array and a callback function that filters out
//some of the elements.
function exercise5c(input, callback) {
    return callback(input, 6);
}

var a = [2, 3, 8, -2, 11, 4];
console.log(exercise5c(a, lessNumberElement));
//Write a list (array) of products you usually buy in the supermarket. Write a price
//and name for each product. For example,
//[
//{name: ‘apples’, price: 100},
//{name: ‘milk’, price: 80},
//{name:’bananas’, price: 150}
//]
//total price

//average price
function averagePice(input = []){
    var sum = 0;
    var average = 0;
    for(var i = 0; i < input.length; i++ ){
        var item = input[i];
        sum += item.price;
    }

    average = (sum / input.length).toFixed(3);
    return `The average price is: ${average}`;
}
//Write a function that prints out the name of the most expensive product on your
//shopping list. Write the name in uppercase.

function checkCapitals(input = ''){
    if(input.toUpperCase()  === input ){
        return true;
    } else{
        return false;
    }
}

var a = 'JavaScript';
var b = 'java';
var c = 'JAVA'
var rez = checkCapitals(b);
console.log(rez);


var products=[{name:'milk', price:80},{name:'apples', price:100}, {name:'bananas', price:150}]
console.log(averagePice(products));
//most expensive
function mostExpensive(input = []){
    var hightPrice = 0;
    var name = '';
    for(var i = 0; i < input.length; i ++){
        item = input[i];
        if(item.price > hightPrice){
            hightPrice = item.price;
            name = item.name.toUpperCase();
        }
    }

    return `Most expensive product is ${name} with price ${hightPrice}`;
}
var products=[{name:'milk', price:80},{name:'apples', price:100}, {name:'bananas', price:150}]
console.log(mostExpensive(products));
//Write a function that checks if a given string is written in all capitals.

//
function checkIsNumber(input = ''){
    for(var i = 0; i < input.length; i++){
        if(!isNaN(input[i])){
            return true;
        }
    }

    return false;
}

var a = 'JavaScript';
var b = 'java3';
var c = 'JAVA'
var rez = checkIsNumber(b);
console.log(rez);

//Write a function that checks if a given string contains any digits.
function checkIfDigits(input) {
    return /\d/.test(input);
}

console.log(checkIfDigits('Apple'));
console.log(checkIfDigits('GREAT5'));

//Write a function that calculates a number of days to your birthday.
//Input: 25 February
function daysToBirthday(input = "2023-09-30") {
    var birthday = new Date(input);
    var todayDate = new Date()
    var days = (birthday - todayDate) / 86400000;  // Razlika je u milisekundama
    return ~~days;  // Vraca integer, brise decimale
}
console.log(daysToBirthday());
//
today=new Date();
var bday=new Date(today.getFullYear(), 0, 25);
if (today.getMonth()==0 && today.getDate()>25) 
{
bday.setFullYear(bday.getFullYear()+1); 
}  
var one_day=1000*60*60*24;
console.log(Math.ceil((bday.getTime()-today.getTime())/(one_day))+
" days left until birthday!");
