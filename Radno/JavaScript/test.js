// (function(a,b,condition){
//     if(condition (a,b)){
//     console.log (a);
// }
// else{
//     console.log (b)
// }
// })
// (2,6,function (x,y){
//     return x>y;
// });

// console.log(console.log('JS'));

function calculate(a,b){
var rb=b%10;
var ra=a%10;

a=a-ra+rb;
b=b-rb+ra;
}
calculate(123,45);


// function outer(x){
//     function inner (y){
//         return y+1
//     }
//     return x+inner(x);

// }var result=outer(5);
// console.log (result)

// var input=12;
// function f(){
//     input=15;
// }
// console.log(input)


// var a=[3,4,1,2]
// function addOne(array){
//     for (var i=0; i<array.length; i++){
//         array [i]+=1;
//     }
// }
// addOne(a);
// console.log(a);

// var result;
// function add(a,b){
//     return a+b;
// }
// result =add(2);
// console.log (result);

function transform(a,b,f){
var result;
result=f(a)+f(b);
console.log(result);
}
function duble(x){
    return 2*x;
}

console.log(transform(2,4,duble));

transform(2,4, square);
function transform(a,b,f){
var result;
result=f(a)+f(b);
console.log(result);
}
var square=function(x){
return x*x;
}

var r;
(function(a,b){
    return a+b;
})
(2,11);
console.log(r);

console.log (mul(2,3));
var mul=function(x,y){
    return x*y;
}

console.log(n);
var n=5;

var a=12;
var b=3;
var result;
function add(a,b){
    return a+b;
}
result=add();
console.log(result);

var a=20;
function f(n){
var result=a+n;
var a=30;
return result;
}
console.log (f(5));

(function (s) {
    console.log(s);
})
('JS');

function f(){
    return function(a,b){
        return a+b;
    }
}
var result=f()(2,3);
console.log(result);

var a=10;
function f(a,b){
    a++;
    b--;
console.log(a,b)
}
f(a,2);
console.log(a);

var input=12;
function f(){
    input=15;
}
f;
console.log(input);

'use strict';
var x=1;
function f(){
    y=3;
    return x*y;
}
f(4);
console.log(x);

console.log(sun(2,3));
function sun(x,y){
    return x+y+1;

}
(function(){
    console.log('spring time');
})
();

var input=12;
function f(){
    input=15;

}
f();
console.log(input);

var r;
r=(function(a,b){
    return a+b;
})(2,11);
console.log (r);

function f(){
    return function(a,b){
        return a+b;
    }
}
var result=f();
console.log(result);

var result;
function add(a,b){
    return a+b;
}
result=add(2);
console.log(add);


function calculate(a,b){
    var rb=b%10;
    var ra=a%10;
    a=a-ra+rb;
    b=b-rb+ra;
    console.log(a,b);
}
calculate(123,45);