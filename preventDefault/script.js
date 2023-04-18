// DOM Traversal 1
const close = document.querySelectorAll('.close');

close.forEach(function(el) {
	el.addEventListener('click', function(e) {
		e.target.parentElement.remove();
		e.preventDefault();
	});
});
