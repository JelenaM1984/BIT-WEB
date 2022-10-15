// var a;
// a=60*125
// console.log(a);
// var b
// b=1024*24
// console.log(b);
// console.log(1=='1');
// console.log(1==='1');
// console.log(1!=='1');
// console.log(1>='1');
// var a;
// console.log(a);
// var b;
// b=!!a;
// console.log(b);
// var n3=0377;
// console.log (typeof n3);
// console.log(n3);
// var result="", a=2, b=5;
// if (a>b) {
//     result='a is greater than b'
// } else if (a<b) {
//     result='a is less than b'
// }
// else {
//     result='a is equal to b'
// }
// console.log(result);
// var result='', a=3, b=5, c=7;
// if (a!==b & b!==c & c!==a) {
//     result='scalene tiangle'
// }
// else if (a==b & a==c & b==c) {
//     result='equilateral triangle'
// }
// else { result='isosceles triangle'}
// console.log(result);
// var a;
// a=450*5
// console.log(a);
// var b;
// b=8/4;
// console.log(b);
// var c;
// c=685+896;
// console.log(c);
// var d;
// d=6000-852;
// console.log(d);
// var result='';
// var resultb='';
// a=89, b=76;
// if (a>=91 && a<=100 || b>=91 && b<=100) {
//     result='Grade is A'
// }
// else if (a>=81 && a<=90 || b>=81 && b<=90) {
//     result='Grade is B'
// }
// else if (a>=71 &&  a<=80 ||  b>=71 && b<=80) {
//     result='Grade is C'
// }
// else if (a>=61 && a<=70 ||  b>=61 && b<=70) {
//     result='Grade is D'
// }
// else if (a>=51 && a<=60 || b>=51 && b<=60) {
//     result='Grade is E'
// }
// else {result='Student fall the exame'}
// console.log(result);
// var result=''
// a=17
// if (a>=18) {
//     result='You are old enought to drive'
// } else {
//     result='You have to be older than 18 to drive'
// }
// console.log(result);
var a = 1;
switch (a) {
    case 1:
        result = 'ponedeljak'
        break;
    case 2:
        result = 'utorak'
        break;
    case 3:
        result = 'sreda'
        break;
    case 4:
        result = 'cetvrtak'
        break;
    case 5:
        result = 'petak'
        break;
    case 6:
        result = 'subota'
        break
    case 7:
        result = 'nedelja'
        break
        default:'input must be a number between 1 and 7'
}
console.log(result);