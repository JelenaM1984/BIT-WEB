//Napisati funkciju koja za zadatu reč (ili rečenicu) proverava koliko ima
//samoglasnika i koliko suglasnika.
function word(input) {
  var a = 0;
  for (var i = 0; i < a.length; i++) {
    if (
      input == "a" &&
      input == "e" &&
      input == "i" &&
      input == "o" &&
      input == "u"
    ) {
      a++;
    }
  }
  return "u stringu ima " + a + " samoglasnika";
}
var input = "jelena";
var rez = word(input);
console.log(rez);
