function fudbal(event) {
  var x = event.clientX;
  var y = event.clientY;
  var image = document.getElementById("fudbal");
  image.style.marginTop = x-30+'px';
  image.style.marginLeft = y-30+'px';
}
function StopMove() {
  ele.removeElementListener("click", onClick);
}
var ele = document.body;
ele.addEventListener("click", onClick);
