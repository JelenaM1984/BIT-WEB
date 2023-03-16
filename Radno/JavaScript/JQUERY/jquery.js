$(document).ready(function(){
console.log('Hello World');


$('li:first').css({'border-bottom':'1px solid black'})
$('li').css('text-transform', 'uppercase');
$('li.aktivni').css('color', 'red')
$('li:nth-child(3)').css('background-color', 'yellow')

$('h1').after('<div></div>')

});

