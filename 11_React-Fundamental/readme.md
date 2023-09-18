# Resume Kampus Merdeka ReactJS – Fundamental React
## 7 - 11 September 2023

## 3 Poin Materi JSX :
### - Apa itu JSX (Javascript XML)

JSX merupakan singkatan dari Javascript XML, Jsx adalah ekstensi java script yang digunakan untuk memudahkan kita dalam menulis aplikasi react, JSX dibuatkan berdasarkan fakta kalau logika rendering sangat terikat dengan logic UI, selain itu jsx juga merupakan sebuah expression, setelah dikompilasi, ekspresi jsx akan menjadi panggilan fungsi pada javaScript biasa dan menjadi objek JavaScript.

### - React Component

Komponen react adalah bagian kode yang dapat digunakan kembali,selain itu, Komponen React adalah kode yang digunakan untuk membuat tampilan, behavior, dan state sebagian UI. UI pada react, bisa dibagi menjadi beberapa komponen, hal itu memudahkan kita untuk membuat UI yang sederhana dan kompleks.

### - React Lifecycle

React memiliki siklus hidup (lifecycle) komponen yang merujuk pada serangkaian metode yang dipanggil secara otomatis selama komponen berinteraksi dengan DOM (Document Object Model). Siklus hidup komponen membantu Anda mengontrol perilaku komponen selama pembuatan, pembaruan, dan penghapusan.

#### Lifecycle Utama
1. Mounting: Fase ini terjadi ketika komponen pertama kali dimasukkan ke dalam DOM.
- constructor(): Dipanggil saat komponen pertama kali dibuat.
- render(): Metode ini menggambar tampilan awal komponen.
- componentDidMount(): Dipanggil setelah komponen berhasil dimasukkan ke dalam DOM. Biasanya digunakan untuk memulai permintaan data atau berlangganan ke sumber eksternal.

2. Updating: Fase ini terjadi ketika komponen menerima pembaruan.
- shouldComponentUpdate(): Digunakan untuk mengoptimalkan pembaharuan komponen dengan mengembalikan true atau false berdasarkan perbandingan prop dan state sebelum dan setelah pembaruan.
- render(): Metode ini menggambar tampilan yang diperbarui.
- componentDidUpdate(): Dipanggil setelah komponen selesai diperbarui. Cocok untuk tindakan pasca-pembaruan.

3. Unmounting: Fase ini terjadi ketika komponen akan dihapus dari DOM.
- componentWillUnmount(): Dipanggil sebelum komponen dihapus dari DOM. Biasanya digunakan untuk membersihkan sumber daya atau berhenti berlangganan dari sumber eksternal.


#### Lifecycle method lainnya
Selain fase-fase utama, ada beberapa metode siklus hidup tambahan seperti static getDerivedStateFromProps(), shouldComponentUpdate(), getSnapshotBeforeUpdate(), dan lainnya yang dapat digunakan untuk penggunaan kasus khusus.



### ThankYou!