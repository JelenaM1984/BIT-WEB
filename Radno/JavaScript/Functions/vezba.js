function sum(){
    return argumensts[0]+argumenst[2];

}var result;
result=sum(2,5,11,'abc');
console.log (result);
function f(a){
    for (var i=0,j=a.length-1;i<j;i++,j--){
var tmp=a[i];
a[i]=a[j];
a[j]=tmp;
    }
    return a;
}
console.log(f(['3',4,22,true,-2]));
//novi
var message="JaVaScRIPT prograMMing";
var counter=0;
for (var i=0;i<message.length; i++){
    if (message[i]=='a'|| message[i]=='A'){
        counter++;
    }
}
console.log (counter)
//novi
var result;
var n;
n= 4;

switch (n) {
case 2:
result = 1;
break;
case 4:
result = 2;
case 6:
result = 3;
break;
default:
result = 100;
}
console. log(result);
//novi
var isWriter=true;
console.log(!isWriter);
//novi
for(var i=1; i<6; i++){
    if (i==2 || i==4){
        continue;
    }
}console.log(i);
//novi
function f(a,b){
    return a+b;

}
var result;
result=f(4,5);
console.log(result);
//novi
var sum=0;
for (var i=0; i<10;i++){
    if (i%3==0){
        sum++;

    }
    if(i==8){
        break
    }
}
console.log(sum)
//novi
var numbers = [4, 5, 12, 9];
console.log(numbers.length)
//novi
for(var i=0;i<10;i+=2){
    console.log(i);
}
var n=10;
console.log(++n)
console.log(2+true)
var s='ab34abc';
console.log(parseInt(s))
function mul(a,b){
    var result;
    result=a*b;
    return result;
}
var product;
product= mul(4);
console.log(product)

var s='JavaSript programming';
var result=s[3];
console.log(result)


var result;
var n;
n= 4;

switch (n) {
case 2:
result = 1;
break;
case 4:
result = 2;
case 6:
result = 3;
break;
default:
result = 100;
}
console. log(result);


var sum=0;
for(var i=0;i<5;i++){
    sum+=i;
}console.log(sum)
function mul(a,b){
    var result;
    return result;
    result=a*b;
}
var product;
product=mul(4,5);
console.log(product)

var array=[];
for (var i=0;i<4;i++){
    array[2*i]=i;
    array[2*i+1]=i;
}
console.log (array)

for(var i=0;i<6;i++){
    if(i==3|| i==4){
        break;
    }console.log(i);
}
var isBlue=true;
var isSolid=false;
console.log(isBlue&&isSolid);

function f(a,b){
    return 1+a+b;
}
var result;
result=f(4,5,32,11);
console.log(result)

for (var i=0;i<5;){
    console.log('*')
}
var description='Do magic';
var s='';
for (var i=description.length-1;i>=0;i--){
    s=s+description[i];
}console.log(s);

function mul(a,b){
    var result;
    result=a*b;
    return result
}
var product;
product=mul(4,5);
console.log(product)

function f(a,b){
    return a+b;
}console.log(f(12));

var a=[2,3,11,5,3,24]
a.length=2;
console.log(a);

var message='';
var n=4;
while(n>=0){
    message+='*';
    n--
}
console.log(message);

var a=10;
var b=12;
var temp;
temp=a;
a=b;
b=temp;
console.log(a,b);

var sum=0;
for(var i=4;i<8;i=i+1){
    sum +=i;
    console.log(sum);
}
var array=[];
for (var i=0;i<4;i++){
    array[i]=2*i;
}console.log(array);

var result;
var n;
n=14;
switch(n){
    case 2:
        result=1;
        break;
        case 4:
        result=2;
        case 6:
            result=3;
            break;
            default:
                result=100;
}console.log(result)
for (var i=3;i>=0;i--){
    console.log(i);
}
var sum=0;
for(var i=0;i<10;i++){
    if(i==6){
        continue;
    }
    if(i%3==0){
        sum++;
    }
}console.log(sum);
function f(){}
var result;
result=f();
console.log(result);
var array=[2,15,18,-4,2]
var result=array[0];
for(var i=1;i<array.length;i++){
    if(array[i]>result){
        result=array[i];
    }
}console.log(result);
var s='abc';
console.log(s+s);
var result;
var n=34;
if(n%2==0){
    result=n/2;
}
else{
    result=n*2;
}
console.log(result);
var s='coffe';
s[0]='C';
console.log(s);
for (var i=0;i<6;i++){
    if(i==2||i==4){
continue
    }console.log(i);
}
var n=5;
var numberOfOdds=0;
var i=0;
while(i<=n){
    if(i%2==0){
        numberOfOdds++;
    } i++
}console.log(numberOfOdds);