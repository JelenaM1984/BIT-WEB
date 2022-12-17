//Create a function that takes an array of objects (groceries) which calculates the total
//price and returns it as a number.
var groceries = [{ product: "Milk", quantity: 3, price: 1.5 }];
function getTotalPrice(groceries) {
  var total = 0;
  for (var i = 0; i < groceries.length; i++) {
    total += groceries[i].price * groceries[i].quantity;
  }
  return parseFloat(total.toFixed(2));
}
var total = getTotalPrice(groceries);
console.log(total);
/*Create a function that gets the
name of the piece of jewelry with the highest price and returns "The most expensive
one is the {name of jewelry piece}"";*/
var jewelry = [
  { name: "Rolex", price: 500 },
  { name: "Diamond earings", price: 600 },
];
function mostExpensive (jewelry) {
  var mostExpensive = jewelry[0];
  for (var i = 0; i < jewelry.length; i++) {
      if (jewelry[i].price > mostExpensive.price) {
          mostExpensive = jewelry[i];
      }
  }
  return 'The most expensive one is the ' + mostExpensive.name;
}
console.log(mostExpensive(jewelry));
//Given a word, create an object that stores the indexes of each letter in an array. Make
//sure the letters are the keys. Make sure the letters are symbols. Make sure the indexes
//are stored in an array and those arrays are values.
function mapLetters (word) {
  var letters = {};
  for (var i = 0; i < word.length; i++) {
      if (!letters[word[i]]) {
          letters[word[i]] = [];
      }
      letters[word[i]].push(i);
  }
  return letters;
}

console.log(mapLetters('dodo'));
console.log(mapLetters('froggy'));
console.log(mapLetters('grapes'));
//And who cursed the most in the fight between you and your spouse? Given an object
//with three rounds, with nested objects as your scores per round, return a string of who
//cursed the most: If you, return 'ME'; If your spouse, return 'SPOUSE!'; If a draw, return
//'DRAW!';
function whoCursedTheMost (rounds) {
  var me = 0;
  var spouse = 0;
  for (var i = 0; i < rounds.length; i++) {
      if (rounds[i].me > rounds[i].spouse) {
          me++;
      } else if (rounds[i].me < rounds[i].spouse) {
          spouse++;
      }
  }
  if (me > spouse) {
      return 'ME!';
  } else if (me < spouse) {
      return 'SPOUSE!';
  } else {
      return 'DRAW!';
  }
}

console.log(whoCursedTheMost([{me: 10, spouse: 5 }, { me: 5, spouse: 10 }, { me: 0, spouse: 10, }]));
//
function makeChange(number) {
    var quarter = 0; //25
    var dime = 0; //10
    var nickel = 0; //5
    var penny = 0; //1
    var remainingChange = number;
    while (remainingChange >= 25) {
        remainingChange -= 25;
        quarter++;
    }
    while (remainingChange >= 10) {
        remainingChange -= 10;
        dime++;
    }
    while (remainingChange >= 5) {
        remainingChange -= 5;
        nickel++;
    }
    while (remainingChange > 0) {
        remainingChange -= 1;
        penny++;
    }
    var obj = {
        q: quarter,
        d: dime,
        n: nickel,
        p: penny
    }
    return obj;
}
console.log(makeChange(13));
console.log(makeChange(24));
console.log(makeChange(92));