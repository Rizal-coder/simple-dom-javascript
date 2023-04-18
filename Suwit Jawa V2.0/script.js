function getPilihanComputer(){
	const comp = Math.random();
	if( comp < 0.34 ) return 'gajah';
	if( comp >= 0.34 && comp < 0.67 ) return 'orang';
	return 'semut';
}

function getHasil(comp, player) {
	if( player == comp ) return 'SERI!';
	if( player == 'gajah' ) return ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
	if( player == 'orang' ) return ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
	if( player == 'semut' ) return ( comp == 'orang' ) ? 'KALAH!' : 'MENANG!';
}

let objComputer = {
	img: document.querySelector('.img-computer')
};

function putar() {
	const gambar = ['gajah', 'semut', 'orang'];
	let i = 0;
	const waktuMulai = new Date().getTime();
	setInterval( function() {
		if( new Date().getTime() - waktuMulai > 1000 ) {
			clearInterval;
			return;
		}
		objComputer.img.setAttribute('src', `img/${gambar[i++]}.png`);
		if( i == gambar.length ) i = 0;
	}, 100);
}


const pilihan = document.querySelectorAll('.area-player ul li img');
pilihan.forEach(function(pil) {
	pil.addEventListener('click', function() {
		const pilihanComputer = getPilihanComputer();
		const pilihanPlayer = pil.className;
		const hasil = getHasil(pilihanComputer, pilihanPlayer);

		putar();

		setTimeout( function() {
			objComputer.img.setAttribute('src', `img/${pilihanComputer}.png`);

			const info = document.querySelector('.info');
			info.innerHTML = hasil;
		}, 1000);
	});
});
