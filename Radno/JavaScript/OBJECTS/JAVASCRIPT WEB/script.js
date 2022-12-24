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

function getRandom(min,max){

        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); 

      
}
 console.log(getRandom(1,50));
//
function getRandom(min,max){
    min=1;
    max=50;
    var randomArray=[];
for(let i = 0; i<max.length; i++) {
    randomArray.push(Math.random());
}
}
console.log(getRandom(1,50))
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
