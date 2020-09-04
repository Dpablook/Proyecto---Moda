/*scroll*/
window.addEventListener("scroll", function(){
	var header = document.getElementById("nav");
	header.classList.toggle("scroll", window.scrollY > 0)
})


