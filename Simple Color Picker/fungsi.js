function Elemen() {
	this.create = function(elemen, text) {
		const e = document.createElement(elemen);
		const t = document.createTextNode(text);
		e.append(t);
		this.node = e;
		return e;	
	};
	this.append = function(e) {
		e.append(this.node);
	};
	this.prepend = function(e) {
		e.prepend(this.node);
	};
	this.before = function(e) {
		e.before(this.node);
	};
	this.after = function(e) {
		e.after(this.node);
	};
	this.remove = function() {
		this.node.remove();
	};
}
let elemen = new Elemen();

function warnaRandom() {
	return Math.round(Math.random() * 255 + 1);
}
function keyboard(comman, elemen) {
	elemen.select();
	if( comman == 'copy' ) {
		let sukses = document.execCommand(comman);
		sukses ? alert('Copy Sukses') : alert('Copy Gagal');
	} else if( comman == 'cut' ) {
		let sukses = document.execCommand('cut');
		sukses ? alert('Cut Sukses') : alert('Cut Gagal');
	}
}