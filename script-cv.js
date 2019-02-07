//la fonction 
window.addEventListener("scroll", function() { 
var deplacement = (window.scrollY*100)/(document.body.offsetHeight-window.innerHeight);
document.getElementById('progress_bar').value = deplacement;
});
function myScroll(){
	var progress=document.getElementById('progress_bar').value;
	progress=progress*document.body.offsetHeight/15-window.innerHeight;
	window.scroll(0,progress);
}
