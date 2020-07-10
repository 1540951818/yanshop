function rhcRem(){
	document.documentElement.style.fontSize=document.documentElement.clientWidth/4.8+"px";
}
rhcRem();
window.onresize=rhcRem;