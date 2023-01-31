function moveHim(event) {
  var x = event.clientX;
  var y = event.clientY;
  x-+50;
  y -=50;
  $("#fudbalerImg").animate({ left: x, top: y }, 100)
}
// function reset(event){
//     location.reload();
// }
$(document).ready(function(event) {
  $("body").on('click', moveHim);
//   $("button").on('click', reset);
  $("button").on('click', function(){

  });


});
