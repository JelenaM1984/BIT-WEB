//1.Write a function that checks if a given string contains digit 5.input:“1b895abd”
 var checkInput=function(string,testNum,digit){
    if(!string || string==0 || typeof testNum !='function'){
        return string;
    }
    for(var i=0; i<string.length;i++){
        if(testNum(string[i],digit)){
            return true;
        }
    }
    return false;
}
function testNum(number,digit) {
    if(number==digit){
        return true;
    }
}
console.log(checkInput("1b896abd",testNum,5));
    //    function containsNumbers(string) {
    //         return /[0-9]/.test(string);
    //       }
    //       console.log(containsNumbers("1b895abd"))
    //2.Write a function that in a given string replaces all the appearances of the string ‘JS’ with
//‘**’.
var text = "Programming in JS is super interesting!"
pattern = /JS/gi;  // case-insensitive and global search
new_text = text.replace(pattern, "**");
console.log(new_text)  //Programming in ** is super interesting!
//3.Write a function that inserts a given character on a given position in the string.Input: “Goo morning”, 4, ‘d’
function insertLetter(str){
    return str.split("").reverse().join("");
    
}
console.log(insertLetter("w3resource"));
