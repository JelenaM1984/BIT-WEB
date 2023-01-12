var button=document.getElementById('button');
button.addEventListener('click',function onClick(event){
document.body.style.backgroundColor='grey';
})
function turnToggleButtonOff(){
    var element=document.getElementById('buttonTwo');
    element.classList.remove('noToggle');
}