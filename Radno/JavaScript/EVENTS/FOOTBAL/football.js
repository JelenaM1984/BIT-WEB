function fudbal(event) {
  var x = event.clientX;
  var y = event.clientY;
  var image = document.getElementById("fudbal");
  image.style.marginTop = y- 50+'px';
  image.style.marginLeft =  x- 50+'px';
}
function StopMove() {
  ele.removeElementListener("click", fudbal);
}
var ele = document.body;
ele.addEventListener("click", fudbal);
