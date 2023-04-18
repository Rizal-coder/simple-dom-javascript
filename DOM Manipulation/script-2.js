// Manipulasi Node

// document.createElement()		=> Buat Elemen baru
// document.createTextNode()	=> Buat Teks / contens elemen baru
// node.appendChild()			=> simpan elemen diakhir
// node.insertBefore(elemenBaru, elemenLama)			=> simpan elemen sebelum
// parentNode.removeChild()		=> hapus elemen
// parentNode.replaceChild(elemenBaru, elemenLama)	=> ganti elemen

// Membuat Paragraf Baru Ke halaman html
const sectionA = document.getElementById('a');
const pBaru = document.createElement('p');
const textPBaru = document.createTextNode('Paragraf Baru');
pBaru.appendChild(textPBaru);
sectionA.appendChild(pBaru);

// Membuat List Item Baru ke halaman html
const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');
const liBaru = document.createElement('li');
const textLiBaru = document.createTextNode('Item Baru');
liBaru.appendChild(textLiBaru);
ul.insertBefore(liBaru, li2);

// Menghapus Elemen tombol pada halaman html
const tombol = sectionA.querySelector('button');
sectionA.removeChild(tombol);

// Mengganti elemen pada halaman html
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
const h2Baru = document.createElement('h2');
const texth2Baru = document.createTextNode('Judul Baru');
h2Baru.appendChild(texth2Baru);
sectionB.replaceChild(h2Baru, p4);

// Contoh
const p3 = sectionA.querySelector('.p3');
const h3Baru = document.createElement('h3');
const texth3Baru = document.createTextNode('SubJudul Baru');
h3Baru.appendChild(texth3Baru);
sectionA.insertBefore(h3Baru, p3);

// style untuk elemen baru & diubah
h3Baru.style.backgroundColor = 'lightgreen';
pBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';









// Manipulasi Node ( Method Baru )
// parentNode.append()
// parentNode.prepend()
// childNode.before()
// childNode.after()
// childNode.remove()
// childNode.replaceWith()

// Membuat Tombol Baru diakhir pake method .append()
const tombolBaru = document.createElement('button');
const textTombolBaru = document.createTextNode('Tombol Baru');
tombolBaru.append(textTombolBaru);
sectionB.append(tombolBaru);

// Membuat Tombol Baru diawal pake method .prepend()
const tombolBaru2 = document.createElement('button');
const textTombolBaru2 = document.createTextNode('Tombol Baru 2');
tombolBaru2.append(textTombolBaru2);
sectionB.prepend(tombolBaru2);

// Membuat List baru (before) pake method .before()
const liBaru2 = document.createElement('li');
const textLiBaru2 = document.createTextNode('Item Baru 2');
const li4 = ul.querySelector('li:nth-child(4)');
liBaru2.append(textLiBaru2);
li4.before(liBaru2);

// Membuat List baru (after) pake method .after()
const liBaru3 = document.createElement('li');
const textLiBaru3 = document.createTextNode('Item Baru 3');
const li1 = ul.querySelector('li:nth-child(1)');
liBaru3.append(textLiBaru3);
li1.after(liBaru3);

// menghapus elemen html pake method .remove()
const link = sectionA.querySelector('a');
link.remove();

// Mengganti elemen html pake method .replaceWith()
const h5Baru = document.createElement('h5');
const texth5Baru = document.createTextNode('Judul h5 Baru');
const judul = document.querySelector('h1');

h5Baru.append(texth5Baru);
judul.replaceWith(h5Baru);


// style untuk elemen baru & diubah pake method baru
tombolBaru.style.backgroundColor = 'orange';
tombolBaru2.style.backgroundColor = 'orange';
liBaru2.style.backgroundColor = 'orange';
liBaru3.style.backgroundColor = 'orange';
h5Baru.style.backgroundColor = 'orange';





























