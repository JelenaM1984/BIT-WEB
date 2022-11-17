//Write a function named tellFortune that:
//takes 4 arguments: number of children, partner's name, geographic location, job title.
//outputs your fortune to the screen like so: You will be a X in Y, and married to Z with N kids.;
//Call that function 3 times with 3 different values for the arguments.
function tellFortune(number, name, geolocation, job) {
  var message =
    "You will be " +
    job +
    " in " +
    geolocation +
    " and married to " +
    name +
    " with " +
    number +
    " kids ";
  return message;
}
console.log(tellFortune(5, "Jon", "NewYork", "matematision"));
console.log(tellFortune(3, "Sam", "Budapest", "medical"));
console.log(tellFortune(1, "George", "Boston", "fisical terapeut"));
// //Write a function named calculateDogAge that:
//  takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years"
function dogYear(dog, human) {
  var dogAge = dog * 7;
  var humanAge = human / 7;
  return (
    "You doggie is " +
    dogAge +
    " years old in dog years " +
    "and " +
    "Your human age is " +
    humanAge
  );
}
console.log(dogYear(9, 49));
console.log(dogYear(11, 67));
console.log(dogYear(5, 90));
//Write a function named calculateSupply that:
//  takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
function calculateSupply(age, amountPerDay) {
  var maxAge = 90;
  var forLife = age * 365 * amountPerDay;
  var message =
    "you will need " +
    forLife +
    " to last you until the ripe old age of " +
    maxAge;
  return message;
}
console.log(calculateSupply(5,25));
//Create a function called celsiusToFahrenheit:
//Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
function celsiusToFarenheit(celsius){
        var farenheit= celsius*1.8+32;
    return celsius + " °C is " + farenheit + "°F"
}
console.log(celsiusToFarenheit(35));
console.log(celsiusToFarenheit(35));
//Create a function that validates a password to conform to the following rules:
// Length between 6 and 24 characters,
// At least one uppercase letter (A-Z).
// At least one lowercase letter (a-z).
// At least one digit (0-9).
// Maximum of 2 repeated characters (“aa” is OK, “aaa” is NOT).
// Supported special characters: ! @ # $ % ^ & * ( ) + = _ - { } [ ] : ; "" ' ? <<> , .
// Examples: validatePassword("P1zzV@") ➞ false // Too short.
// validatePassword("iLoveYou") ➞ false // Missing a number.
// validatePassword("hg93@") ➞ true // OK!
function validatePassword(password){
    
  
}