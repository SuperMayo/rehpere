var links = document.querySelectorAll('.nav-link');
var pageUrl = window.location.href.replace(window.location.hash, "");
for (var i = 0; i < links.length; i++) {
	if (links[i].href == pageUrl){
		links[i].classList.add("active");
	}
}
