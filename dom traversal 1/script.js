// DOM Traversal 1
const close = document.querySelectorAll('.close');

close.forEach(function(el) {
	el.addEventListener('click', function(e) {
		e.target.parentElement.remove();
	});
});


// DOM Traversal => DOM Traversal yang salah
// const close = document.querySelectorAll('.close');
// const card = document.querySelectorAll('.card');

// for( let i = 0; i < close.length; i++ ) {
// 	close[i].addEventListener('click', function() {
// 		card[i].remove();
// 	});
// }


// Tanpa DOM Traversal
// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click', function() {
// 	card.remove();
// });

