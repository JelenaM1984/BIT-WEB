var button = document.getElementById("button");

function onClick(event) {
  if (document.body.style.backgroundColor == "aquamarine") {
    document.body.style.backgroundColor = "grey";
  } else {
    document.body.style.backgroundColor = "aquamarine";
  }
}
button.addEventListener("click", onClick);
function turnToggleButtonOff() {
  //   var element = document.getElementById("buttonTwo");
  //   element.classList.remove("noToggle");
  button.removeEventListener('click', onClick);
}
