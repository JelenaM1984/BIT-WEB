//1.Write a JavaScript function that reverses a number. typeof result of the function should
//be “number”.
var num = 12345;
var num2 = parseFloat(num.toString().split('').reverse().join(''));
console.log(num2);

// 2. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Note: Assume punctuation, numbers and symbols are not included in the passed string.
var name = 'Webmaster'
var name2 = name.toLowerCase().split('').sort().join('');
console.log(name2);
//3.Write a function to alphabetize words of a given string. Alphabetizing a string means
//rearranging the letters so they are sorted from A to Z.
function alphabetizeString(str) 
{
	
return str.split('').sort().join('').trim();

}
console.log(alphabetizeString('Republic of Serbia'));
//4. Write a function to split a string and convert it into an array of words.
function alphaWords(word){
    var word2 = word.split(' ');
    var newSgtring = '';
    for(item in word2){
        var newItem = word2[item].split('').sort().join('');
        word2[item] = newItem;
        newSgtring += word2[item] + ' ';
    }
    return newSgtring;
}

var word = 'Republic Of Serbia';
var rez = alphaWords(word);
console.log(rez);

//5.Write a function to convert a string to its abbreviated form.
//John Snow to John S.;
abbrevName = function (input) {
    var splitNames =input.trim().split(" ");
    if (splitNames.length > 1) {
        return (splitNames[0] + " " + splitNames[1].charAt(0) + ".");
    }
    return splitNames[0];
};
console.log(abbrevName("John Snow"));
//6.Write a function that adds string to the left or right of string, by replacing it’s characters.
function replacChar(string, empty, side){
    var rez = '';
    if(side == 'l'){
        rez = empty.slice(0,empty-string.length) +  string;
        return rez;
    }

    if(side == 'r'){
        rez = string + empty.slice(0,empty-string.length);
        return rez;
    }

}

var empty = '00000000'
var a = '123';
var side = 'l';
var rez = replacChar(a, empty, side);
console.log(rez);
// Goceovo resenje
function addLeftRight(input, replace, dirrection) {
    if (dirrection == 'l') {
        var razlika = input.length - replace.length;
        // console.log(razlika);
        var str = input.substring(0, razlika);
        return `${str}${replace}`; 

    } else if (dirrection == 'r') {
        var razlika = input.length - replace.length;
        // console.log(razlika);
        var str = input.substring(replace.length, input.length);
        // console.log(str);
        return `${replace}${str}`; 
    }

    return
}

console.log(addLeftRight('0000', '123', 'l'));
console.log(addLeftRight('00000000', '123', 'r'));


//7.Write a function to capitalize the first letter of a string and returns modified string.
//js string exercises to Js string exercises
function capitalizeFirstLetter(input){
var str2 = input.charAt(0).toUpperCase() + input.slice(1);
return str2;
}

console.log(capitalizeFirstLetter ("Js string exercises"));
// Vladino resenje
function capFirst(name){
    var newName2 = name.split(' ');
    var resWord = newName2[0].substring(1);
    var firstLetter = newName2[0].charAt(0).toUpperCase();
    var rez = firstLetter + resWord;
    newName2[0] = rez;

    return newName2.join(' ');;
}

var newName = 'js string exercises';
var rez = capFirst(newName);
console.log(rez);
//Goceovo resenje
function capitalize(input) {
    var niz = input.split(' ');
    var a = niz[0].charAt(0).toUpperCase();
    // console.log(a);
    niz[0] = a + niz[0].substring(1,niz[0].length);

    return niz;
}

console.log(capitalize("js string exercises"));

//8.Write a function to hide email addresses to protect them from unauthorized users.
function protectEmail(userEmail) {
    // var avg, splitted, part1, part2;
    splitted = userEmail.split("@");
    part1 = splitted[0];
    avg = part1.length / 2;
    part1 = part1.substring(0, (part1.length - avg));
    part2 = splitted[1];
    return part1 + "...@" + part2;
};

console.log(protectEmail("jelena.milovanovic84@gmail.com"));
//vladino resenje
function hideEmail(email){
    var newEmail = email.split('@');
    console.log(newEmail);
    newEmail[0] = newEmail[0].substring(0, newEmail[0].length/2) + '...';
    return newEmail.join('');
}

var email = 'somerandomaddress@example.com';
var rez = hideEmail(email);
console.log(rez);

//Goceovo resenje
function hideEmail(input) {
    var niz = input.split('@');
    console.log(niz);
    
    return (`${niz[0].substring(0, niz[0].length/2)}'...@'${niz[1]}`);
}

console.log(hideEmail("somerandomaddress@example.com"));

//9.Write a program that accepts a string as input and swaps the case of each character. For
//example, if you input The Quick Brown Fox, the output should be tHE qUICK bROWN fOX.
var str = 'Quick Brown Fox';
const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWER = 'abcdefghijklmnopqrstuvwxyz';
const result = [];
  
  for(let x=0; x<str.length; x++)
  {
    if(UPPER.includes(str[x]))
    {
      result.push(str[x].toLowerCase());
    }
    else if(LOWER.includes(str[x]))
    {
      result.push(str[x].toUpperCase());
    }
    else 
    {
      result.push(str[x]);
    }
  }
console.log(result.join(''));
//Drugo resenje
function swap(str) {
   var newLetters = '';
    for (vari = 0; i < str.length; i++) {
            if (str[i] == str[i].toUpperCase()) {
                newLetters += str[i].toLowerCase();
            } else {
                newLetters += str[i].toUpperCase();
            }
        }
        console.log(newLetters);
        return newLetters;
    }
    console.log(swap('The Quick Brown Fox')); 
    //Vladino resenje
    function swapLetter(letter = ''){
        var newString = '';
        for(item in letter){
            if(letter[item] == ' '){
                newString += ' ';
            }
            if(UPPER.includes(letter[item])){
                newString += letter[item].toLowerCase();
            }
            if(LOWER.includes(letter[item])){
                newString += letter[item].toUpperCase();
            }
        }
    
        return newString;
    }
    
    var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var LOWER = 'abcdefghijklmnopqrstuvwxyz';
    
    var letter = 'The Quick Brown Fox';
    var rez = swapLetter(letter);
    console.log(rez);
    