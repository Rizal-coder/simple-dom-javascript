// Latihan Dom - Bermain dengan warna

// ==============================  Case 1
const tUbahWarna = document.getElementById('tUbahWarna');
tUbahWarna.onclick = function() {
	document.body.classList.toggle('biru-muda');
}

// ==============================  Case 2
// Buat Tombol Baru
elemen.create('button','Acak Warna');
elemen.after(tUbahWarna);

// Buat Events
elemen.node.addEventListener('click', function() {
	const rgb = `rgb(${warnaRandom()},${warnaRandom()},${warnaRandom()})`;
	document.body.style.backgroundColor = rgb;
	// View Kode Warna RGB
	document.querySelector('.tooltip textarea').innerHTML = rgb;
});

// ==============================  Case 3
const slider = document.querySelectorAll('input[type=range]');

function sliderWarna() {
	const rgb = `rgb(${slider[0].value},${slider[1].value},${slider[2].value})`;

	document.body.style.backgroundColor = rgb;
	// View Kode Warna RGB
	document.querySelector('.tooltip textarea').innerHTML = rgb;
}
slider[0].addEventListener('input', sliderWarna);
slider[1].addEventListener('input', sliderWarna);
slider[2].addEventListener('input', sliderWarna);

// ==============================  Case 4

// Copy Kode Warna RGB
document.getElementById('copyWarna').addEventListener('click', function() {
	keyboard('copy', document.querySelector('.tooltip textarea'));
});

// ==============================  Case 5
// Ubah Warna Pake Mouse
document.body.addEventListener('mousemove', function() {
	const xPos = Math.round((event.clientX / window.innerWidth) * 255);
	const yPos = Math.round((event.clientY / window.innerHeight) * 255);
	const b = Math.round(Math.random() * 255 + 1);
	const rgb = `rgb(${xPos},${yPos},${b})`;
	document.body.style.backgroundColor = rgb;
	// View Kode Warna RGB
	document.querySelector('.tooltip textarea').innerHTML = rgb;
});
