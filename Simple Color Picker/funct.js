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

function keyboard(comman, elemen) {
	elemen.select();
	if( comman == 'copy' ) {
		let success = document.execCommand(comman);
		success ? alert('Copy success!') : alert('Copy Fail!');
	} else if( comman == 'cut' ) {
		let success = document.execCommand('cut');
		success ? alert('Cut Success!') : alert('Cut Fail!');
	}
}