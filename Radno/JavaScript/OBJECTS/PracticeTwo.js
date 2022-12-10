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
function mostExpensive() {
  var theMostExpencive = "";
  var maxPrice = 0;
  for (var i = 0; i < jewelry.length; i++) {
    if (jewelry[i].price > maxPrice) {
      maxPrice = jewelry[i].price;
      theMostExpencive = jewelry[i].name;
    }
  }
  return (
    "The most expecive jewlery is " +
    theMostExpencive +
    " and the price is " +
    maxPrice
  );
}
var max = mostExpensive();
console.log(max);
