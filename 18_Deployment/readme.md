# Resume Kampus Merdeka ReactJS – Deployment with Vercel
## 28 - 29 September 2023

## [Link Deployment](https://latihan-deployment.vercel.app/)
![Succes Deployment](./Screenshoot/Screenshot%202023-10-06%20133851.png)
![Landing Page](./Screenshoot/Screenshot%202023-10-06%20134935.png)

## 3 Poin Materi Deployment with Vercel :

### - Build React App

1. Kenapa Perlu Build?

Secara default, React mengandung banyak pesan peringatan. Peringatan-peringatan ini sangat berguna dalam pengembangan aplikasi. Namun, pesan-pesan ini membuat React menjadi lebih besar dan lambat. Oleh karenanya kita harus menggunakan versi
produksi ketika men-deploy aplikasi. Tujuan melakukan build agar aplikasi kita menjadi versi production, sehingga performanya lebih ringan cepat.

2. Run Optimizes App

Berfungsi untuk menjalankan aplikasi yang optimal di lokal komputer kita. Kita bisa menggunakan serve:


// install serve
npm install -g serve

// jalankan serve di lokal
serve -s build


![Serve](./Screenshoot/Screenshot%202023-10-06%20132309.png)

### - Deployment

Tujuan utama dari deployment adalah untuk membuat aplikasi atau perangkat lunak tersebut dapat digunakan oleh pengguna akhir, sehingga mereka dapat menjalankan fungsi-fungsi yang telah dibangun dalam aplikasi tersebut. Beberapa aspek penting dari deployment meliputi:

- Mengunggah Aplikasi: Ini melibatkan proses mengunggah file dan kode aplikasi ke server atau platform hosting yang tepat. Ini bisa dilakukan dengan berbagai cara, tergantung pada platform dan teknologi yang digunakan.

- Konfigurasi Lingkungan Produksi: Ketika aplikasi di-deploy, perlu ada konfigurasi khusus untuk lingkungan produksi. Ini mungkin termasuk konfigurasi database, variabel lingkungan, dan pengaturan keamanan.

- Mengelola Akses: Untuk aplikasi web, pengelolaan akses dan otentikasi sangat penting. Ini termasuk pengaturan perizinan dan login agar pengguna dapat mengakses hanya bagian-bagian tertentu dari aplikasi sesuai dengan hak akses mereka.

- Memantau dan Mengelola: Setelah aplikasi di-deploy, penting untuk memantau kinerjanya, menangani permasalahan yang muncul, dan melakukan pemeliharaan rutin.

- Skalabilitas: Untuk aplikasi yang digunakan oleh banyak pengguna, deployment juga melibatkan skalabilitas, yaitu kemampuan untuk menangani peningkatan jumlah pengguna dengan baik.

### - Deployment with Vercel

Vercel merupakan platform end-to-end untuk developer, yang memungkinkan kita untuk membuat dan men-deploy aplikasi web kita.

![Vercel](./Screenshoot/Screenshot%202023-10-06%20134633.png)


### ThankYou