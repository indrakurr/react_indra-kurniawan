# Resume Kampus Merdeka ReactJS – Global State Management
## 22 - 25 September 2023

## 3 Poin Materi Global State Management :
### - Global State Management

Di dalam JavaScript, status mengacu pada semua data yang dibutuhkan aplikasi agar dapat beroperasi. Status dapat disimpan dalam tipe data apa pun, termasuk array, boolean, string, atau angka. Pada React, status global adalah objek JavaScript yang menyimpan data yang digunakan oleh React untuk merender komponen dengan konten dinamis berdasarkan tindakan pengguna. Aplikasi dapat menyertakan status global ini untuk komponen fungsional dan kelas. Status dapat ditransfer ke seluruh komponen dalam aplikasi React dengan cara yang berbeda-beda bergantung pada teknik manajemen status yang digunakan. 

### - Redux
Pada ateri ini akan membahas salah satu state management library yang popular digunakan pada React yaitu Redux.

1. Kapan saat yang tepat untuk menggunakan Redux?
- Banyak state yang perlu ditaruh di banyak tempat
- State pada app sering berubah
- Logic unutk mengubah state kompleks
- Ukuran codebase yang sedang-besar, dan dikerjakan oleh banyak orang
- Perlu untuk mengetahui bagaimana state diupdate seiring dengan waktu

2. Redux Library dan Tools
- React Redux
- Redux Toolkit
- Redux DecTools Extension

3. Komponen Penting di Redux
- Actions : Action digunakan untuk memberikan informasi dari aplikasi ke store
- Reducer : Reducer adalah pure javascript yang mengambil state aplikasi saat ini dan object action lalu mengembalikan state aplikasi terbaru
- Store : Store adalah objek sentral yang menyimpan state pada aplikasi

4. Ada 2 cara memakai dan mengubah state, yaitu:
- Hooks
- Connect

5. Redux Thunx
Redux thunk adalah Thunk Middleware untuk redux yang memungkinkan kita untuk membuat action creator yang mengembalikan function bukan action. Kenapa perlu Redux Thunk?
- Untuk menghandle side effect logic yang kompleks
- untuk logic async seperti request data

### Data Fetching
Data fetching adalah fungsi dasar untuk meminta sumber daya melalui jaringan, Secara dasar berhubungan dengan request & response (permintaan/tanggapan) yang dapat digunakan hampir di semua jenis browser.

Cara-cara untuk fetching data di react: 
- Fetch API
- Axios
- React Query Library


### _ThankYou_
