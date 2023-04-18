// Event Bubbling
const container = document.querySelector('.container');
container.addEventListener('click', function(e) {
	if( e.target.className == 'close' ) {
		e.target.parentElement.remove();
	}
});



// Method .stopPropagation()
// const close = document.querySelectorAll('.close');
// close.forEach(function(el) {
// 	el.addEventListener('click', function(e) {
// 		e.target.parentElement.remove();
// 		e.preventDefault();
// 		e.stopPropagation();
// 	});
// });

// const cards = document.querySelectorAll('.card');
// cards.forEach(function(card) {
// 	card.addEventListener('click', function(e) {
// 		alert('Ok');
// 	})
// });
