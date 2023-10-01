# Resume Kampus Merdeka ReactJS – React Testing
## 26 - 27 September 2023

## 3 Poin Materi React Testing :
### - Testing

1. Apa itu Testing

Testing adalah proses memverivikasi bahwa test assertions kita benar dan bahwa code kita tetap benar sepanjang masa aplikasi. Test assertion ini adalah ekspresi boolean yang mengembalikan nilai true kecuali ada bug di kode kita.

2. Manfaat Testing

- Ketika aplikasi kita mempunyai coverage yang baik( mayoritas codebase tercover oleh test). Kita akan merasa percara diri jika harus mengubah suatu bagian pada aplikasi kita. Saat kita mengubah bagian tersebutm dan ada bagiab yang lain menjadi broken kita akan segera mengetahuinya.

- Mengurangi bug pada aplikasi. Walaupun testing tidak menjamin aplikasi kita bebas bug, tetapi kita bisa mencegah beberapa hal yang berpotensi menjadi bug.

3. Kategori Testing

- Rendering Component Trees
Didalam environtment tes yang sudah disederhanakan dan ditegaskan pada keluarannya.

- Menjalankan Aplikasi Lengkap
Didalam environtment peramban(browser) asli. Ini dikenal sebagai tes "end-to-end"

### - Tools

1. Pertimbangan memilih Tools

- Kecepatan iterasi vs environtment yang realistis

Beberapa kakas menawarkan feedback loop yang sangat cepat antara membuat sebuah perubahan da melihat hasilnya, tetapi tidak memodelkan sifat dari peramban dengan tepat. Tools lainmungkin menggunakan environment peramban asli, tetapi mengurangi kecepatan iterasi dan lebih flakier pada server integrasi berkelanjutan.

- Seberapa banyak mock

Dengan komponen, perbedaan antara tes “unit” dan tes “integrasi” bisa tidak sesuai. Jika kita mengetes sebuah form haruskah tes yang dilakukan juga menguji tombol yang ada didalamnya? Atau haruskah komponen memiliki rangkaian tes sendiri? Haruskah refactoring pada tombol merusak tes pada form?

2. Rekomendasi Tools untuk Testing

- Jest 
- React Testing Library

### Create Basic Testing with RTL

1. Render dan Debug

Fungsi render RTL akan merender file JSX apapun yang dibutuhkan. Setelah itu, kita baru bisa memiliki akses ke komponen React yang akan kita test. Untuk meyakinkan bahwa file JSX sudah terender, kita bisa menggunakan fungsi debug RTL. Selalu gunakan fungsi debug RTL apabila kita tidak yakin seperti apa hasil dari fungsi render RTL.

React Testing Libaray digunakan untuk berinteraksi dengan komponen kita seperti manusia. Itulah alasan kenapa kita melihat struktur HTML sebagai output dari fungsi render.

2. Memilih Element

React Testing Library menawarkan berbagai fungsi untuk mendapatkan elemen. Element selanjutnya digunakan untuk assertions atau untuk interaksi pengguna. Kita dapat memilih elemen dengan fungsi object screen RTL.

Salah satu contohnya ialah getByTExt untuk memilih teks dari elemen yang sudah dipilih.


3. Testing Custom Hook

Library yang digunakan untuk custom hook, kita menggunakan React Hook Testing Library. Dia akan memberikan kita alat-alat untuk mengakses hooks tanpa merender satu komponen.


### ThankYou