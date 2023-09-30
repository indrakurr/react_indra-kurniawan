# Resume Kampus Merdeka ReactJS – React Form
## 20 - 21 September 2023

## 3 Poin Materi React Form :
### - Apa itu React Form

1. Basic Form

Form merupakan salah satu hal krusial dalam pengembangan aplikasi website. Form dapat digunakan untuk menghandle inputan dari user. Form banyak kita jumpai saat login, mendaftarkan sesuatu, memberikan feedback, mengisi data dan masih banyak lainnya. Dalam react, akan ada banyak hal kita pelajari dari form. Seperti bagaimana menghadle inputan? Bagaimana memvalidasi inputan dsb.

2. Macam-macam form :

- Elemen <input>
Elemen ini biasanya digunakan inputan yang tidak terlalu panjang
- Elemen <textarea>
Elemen ini biasanya digunakan inputan yang cukup panjang, semisal deskripsi.
- Elemen <select>
Elemen ini biasanya digunakan untuk inputan yang pilihannya sudah ditentukan.
- Radio Button
Radio Button merupakan salah satu type di elemen <input>. Kita hanya bisa memilih 1 pilihan menggunakan radio button.
- Checkbox
Checkbox merupakan salah type di elemen <input>. Kita bisa memilih lebih dari 1 pilihan menggunakan checkbox.

3. Type Elemen Input lainnya :

-	Text(default)
-	Button
-	Color
-	Checkbox
-	Date
-	Datetime-local
-	Email
-	Dile
-	Hidden
-	Image
-	Month
-	Number
-	Password
-	Radio
-	Range
-	Reset
-	Search
-	Submit
-	Tel
-	Time
-	url
-	week


### - Controlled Component dan Uncontrolled Component

1. Controlled Component

Kita dapat menggabungkan cara menyimpan dan memperbarui state di HTML dan react dengan menggunakan state pada react. Kemudian komponen react yang me-render sebuah form juga mengontrol apa yang terjadi dalam form tersebut pada masukan pengguna selanjutnya. Sebuah elemen masukan form yang nilainya dikontrol oleh react melalui cara seperti ini disebut “controlled component”.

2. Uncontrolled Component

Uncontrolled  component adalah alternatif lain dari controlled component, dimana data form akan ditangani oleh  DOM-nya sendiri. Untuk menulis uncontrolled component, alih-alih menulis event handler untuk setiap pembaruan state, kita bisa menggunakan ref untuk mendapatkan nilai dari DOM. Karena hal ini, terkadang lebih mudah untuk mengintegrasikan kode react dan non-react jika menggunakan uncontrolled component. Ini berarti lebih sedikit kode jika kita menginginkan solusi cepat walau tak rapi. Selain itu, pada umumnya kita harus menggunakan controlled component.

3. Atribut defaultValue

Pada lifecycle rendering react, atribut value pada elemen form akan menimpa nilai pada DOM. Dengan uncontrolled component, sering kali kita ingin react dapat menentukan nilai awal tapi pembaruan berikutnya dilakukan secara uncontrolled. Untuk menangani kasus ini, kita bisa menggunakan atribut defaultValue alih-alih menggunakan value.

4. Tag file Input

Pada HTML, sebuah <input type = “file”> memungkinkan pengguna untuk memilih satu atau beberapa file dari media penyimpanan mereka untuk diunggah ke server atau dimanipulasi dengan javaScript lewat API.
Dalam react, sebuah <input type = “file” /> merupakan uncontrolled component karena nilainya hanya bisa disetel oleh pengguna, bukan oleh kode program.

5. Controlled component atau uncontrolled component?

Form controlled dan uncontrolled memiliki kelebihannya sendiri. Kita perlu mengevaluasi situasi kita secara spesifik dan memilih pendekatan apa yang cocok untuk kondisi kita. Jika formulir sangat sederhana dalam hal umpan balik UI, uncontrolled dengan refs sepenuhnya baik-baik saja. Kita tidak perlu mendengarkan apa yang dikatakan berbagai artikel  bahwa uncontrolled itu “buruk”. Lagipula kita selalu dapat bermigrasi ke controlled input.

### - Basic Validation

1. Pada dasarnya, ada 3 alasan mengapa validasi form diperlukan :

- Mencari input data yang benar dan sesuai format,
sebuah web/aplikasi tidak dapat berjalan dengan benar, jika data yang diolah tidak sesuai dengan kebutuhan aplikasi.
- Melindungi akun pengguna,
Misalnya, membuat pengguna untuk memasukan data password yang aman.
- Melindungi sistem/aplikasi,
Validasi form yang kuta dapat meminimalisir perilaku pengguna yang ingin meretas sistem/aplikasi.

2. Tipe validasi data formulir
- Client-side validation
Validasi dilakukan pada sisi klien(browser). Validasi ini dilakukan agar data input sesuai dengan kebutuhan form, sebelum data form dikirimkan ke server. Kelebihan validasi sisi klien ialah user-friendly, karena jika terjadi kesalahan pengguna akan langsung diberitahu. Pengguna tidak harus menunggu respon dari server untuk mengetahui hasil validasi. 
Validasi pada sisi klien, terbagi menjadi 2 bagian yaitu:
Built-in form validation, Menggunakan javascript

- Server-side validation
Validasi yang dilakukan pada sisi server. Sisi server bertugas untuk memvalidasi data kembali, sebelum disimpan di database. Jika ditemukan kesalahan, maka response akan dikirim kembali ke client berupa koreksi atas kesalahan yang dibuat oleh pengguna. Berbeda dengan validasi sisi  klien, validasi ini tidak user-frindly. Karena, koreksi kesalahan akan dikirimkan, setelah form di submit.


### _ThankYou_