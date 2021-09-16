var bg = document.getElementById("imageuser");
var img = document.getElementById("myimage");
function myFunction(){
    bg.style.border="none";
    setTimeout(continueExecution, 100)
}
function continueExecution(){
    img.style.border="2px solid #64ffda"
}
function continueExecution1(){
    img.style.border="none"
}
function myFunction1(){
    bg.style.border="2px solid #64ffda";
    setTimeout(continueExecution1, 100)
}
bg.addEventListener("mouseover", myFunction);
bg.addEventListener("mouseout", myFunction1);