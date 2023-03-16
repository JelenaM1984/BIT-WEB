//window.navigator
function navigation() {
  console.log(navigator.appVersion);
  console.log(navigator.appName);
  console.log(navigator.appCodeName);
  console.log(navigator.platform);
  console.log(navigator.product);
}
navigation();
//
function isOnline() {
  if (navigator.onLine) {
    return "OnLine";
  } else !navigator.onLine;
  return "Offline";
}

isOnline();

//Goce
function isBrowserOnline() {
  navigator.onLine ? console.log("onLine") : console.log("offLine");
}
isBrowserOnline();

//window.screen
function screenSetup() {
  console.log(screen.width);
  console.log(screen.height);
  console.log(screen.availWidth);
  console.log(screen.availHeight);
}
screenSetup();

//window.location
// function locationSetup(){
//     console.log(location.hostname);
//     console.log(location.href);
//     console.log(location.protocol);
//     console.log(location.pathname);
// }
// locationSetup();
//redirect page
// function redirectThePage(){
//        location.replace ("https://www.w3schools.com/js/js_window_location.asp");
//       }
// redirectThePage();
// setTimeout("redirectThePage()",10000);
//reload the page

// setTimeout(() => {
//     location.reload();
//   }, 3000);

//window.localStorage
// function LocStor() {
//   localStorage.setItem('Jelena', 'Milovanovic');
//   sessionStorage.setItem("sasa", "milovanovic");
//   console.log(localStorage["Jelena"]);
//   console.log(sessionStorage.sasa);
// //   localStorage.clear();
// //   sessionStorage.clear();

// }
// LocStor();
//window.history

function goBack(){
    history.back();
    history.forward();
}
goBack();

//Window Methods

function promptBox(){
  
var person = prompt("Please enter your name", " "); 
alert("Zdravo " + person + " kako si?");

}
promptBox();

//Global JavaScript Objects (homework)

function randomRange(min = 1, max = 50) {
    var niz = [];
    for (let i = 0; i < 10; i++) {
        var a = Math.random() * (max - min) + min;
        niz.push(a);
    }
    // console.log(niz);
    return niz;
}
var x = randomRange();
console.log(x);
// Round
// Create a function that uses the passed array of numbers and rounds all its elements to two decimals.
// Print out the modified array in the console.
// Use the first function for generating the input array.
function roundTwoDecimals(input) {
    var b = [];
    for (let  i = 0; i < input.length; i++) {
        b.push(+input[i].toFixed(2));
    }
    // console.log(b);
    return b;
}
var y = roundTwoDecimals(x);
console.log(y);
// Floor
// Create a function that uses the passed array of numbers and rounds all its elements to the nearest integer.
// Print out the modified array in the console.
// Use the first function for generating the input array.
function roundToInteger(input) {
    var c = [];
    for (let  i = 0; i < input.length; i++) {
        c.push(Math.round(input[i]));
    }
    // console.log(c);
    return c;
}
var z = roundToInteger(x);
console.log(z);
// Max
// Create a function that finds and prints out the biggest element in the passed array of numbers.
function maxElement(input) {
    var najveci = input[0];
    for (let  i = 0; i < input.length; i++) {
        if (input[i] > najveci) {
            najveci = input[i];
        }
    }
    // console.log(najveci);
    return najveci;
}
console.log(maxElement(z));
// DATE
// Print out the whole date object in the console.
// Print out the current time in the console.
// Print out the current date in the console.
function vreme() {
    var a = new Date();
    console.log(a);
    var h = a.getHours();
    var m = a.getMinutes();
    console.log(`Sada je ${h}:${m} h`);
    var y = a.getFullYear();
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var mo = month[a.getMonth()];
    var d = a.getDate();
    console.log(`Datum:\n ${d}. ${mo} ${y}.`);
}
vreme();




//Create a function that uses the passed array of numbers and rounds all its elements to two decimals.
//Print out the modified array in the console.
//Use the first function for generating the input array.

var sampleArray= [1.2567,4.8945,2.59876];

// now use map on an inline function expression to replace each element
// we'll convert each element to a string with toFixed()
// and then back to a number with Number()

sampleArray = sampleArray.map(function(each_element){
    return Number(each_element.toFixed(2));
});

// and finally, we will print our new array to the console

console.log(sampleArray);
//Create a function that uses the passed array of numbers and rounds all its elements to the nearest integer.
//Print out the modified array in the console.
//Use the first function for generating the input array.
