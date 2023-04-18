# Documentation 
DOM MANIPULATION ELEMENT
-
- .innerHTML: Mengubah isi yang ada didalam elemen.
- .style.{propertiCSS}: Memberi styling pada elemen.
  - elemen.style.color = 'red';
  - elemen.style.backgroundColor = 'green';
- .setAttribute(Attribute, Value): Mengatur Ulang Attribute pada elemen.
- .getAttribute(attribute): Mengambil Isi / value dari attribute yang ditentukan.
- .removeAttribute(attribute): Menghapus attribute beserta isinya.
- .classList
  - .classList.add(): Menambah class baru.
  - .classList.remove(): Menghapus class yang ada.
  - .classList.toggle(): Menambah class baru jika belum ada, jika sudah ada maka classnya akan dihapus.
  - .classList.item(): Mendapatkan class sesuai index.
  - .classList.contains(): Mengecek apakah class tertentu sudah ada atau belum, menghasilkan nilai true & false.
  - .classList.replace(): Mengganti class tertentu dengan class yang baru.

Source: script.js

DOM MANIPULATION NODE
-
- document.createElement() = Membuat Elemen baru
- document.createTextNode()	= Membuat Teks / contens elemen baru
- node.appendChild() = simpan elemen child diakhir
- node.insertBefore(elemenBaru, elemenLama) = simpan elemen sebelum elemen yang diinginkan
- parentNode.removeChild() = hapus elemen child
- parentNode.replaceChild(elemenBaru, elemenLama)	= ganti elemen
- parentNode.append() = Menambah elemen baru diakhir
- parentNode.prepend() = Menambah elemen baru diawal
- childNode.before() = Menambah elemen baru sebelum elemen yang diinginkan
- childNode.after() = Menambah elemen baru sesudah elemen yang diinginkan.
- childNode.remove() = Menghapus elemen yang ada
- childNode.replaceWith() = Mengganti elemen 

