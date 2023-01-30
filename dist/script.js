var zero = 0;

document.addEventListener("DOMContentLoaded", function () {
	window.addEventListener("scroll", function () {
		var links = document.querySelectorAll("a");
		links.forEach(function (link) {
			link.classList.toggle("down", window.scrollY > zero);
		});
		zero = window.scrollY;
	});
});