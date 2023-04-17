// Latihan DOM - Bermain dengan warna

// ==============================  Case 1
const tUbahWarna = document.getElementById('tUbahWarna');
tUbahWarna.onclick = function() {
	document.body.classList.toggle('biru-muda');
}

// ==============================  Case 2
// Create New Button
elemen.create('button','Acak Warna');
elemen.after(tUbahWarna);

// Create Events
elemen.node.addEventListener('click', function() {
	const red = Math.round(Math.random() * 255 + 1);
	const green = Math.round(Math.random() * 255 + 1);
	const blue = Math.round(Math.random() * 255 + 1);
	document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
	// View: Color code RGB
	document.querySelector('.tooltip textarea').innerHTML = `rgb(${red},${green},${blue})`;
});

// ==============================  Case 3
const slider = document.querySelectorAll('input[type=range]');

function sliderWarna() {
	document.body.style.backgroundColor = `rgb(${slider[0].value},${slider[1].value},${slider[2].value})`;
	// View: Color Code RGB
	document.querySelector('.tooltip textarea').innerHTML = rgb;
}
slider[0].addEventListener('input', sliderWarna);
slider[1].addEventListener('input', sliderWarna);
slider[2].addEventListener('input', sliderWarna);

// ==============================  Case 4
// Copy: Color Code RGB
document.getElementById('copyWarna').addEventListener('click', function() {
	keyboard('copy', document.querySelector('.tooltip textarea'));
});

// ==============================  Case 5
// Change: Color With Mouse
document.body.addEventListener('mousemove', function() {
	const xPos = Math.round((event.clientX / window.innerWidth) * 255);
	const yPos = Math.round((event.clientY / window.innerHeight) * 255);
	const b = Math.round(Math.random() * 255 + 1);
	const rgb = `rgb(${xPos},${yPos},${b})`;
	document.body.style.backgroundColor = rgb;
	// View: Color Code RGB
	document.querySelector('.tooltip textarea').innerHTML = rgb;
});
