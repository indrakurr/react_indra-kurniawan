# Resume Kampus Merdeka ReactJS – React Routing
## 18 - 19 September 2023

## 3 Poin Materi React Routing :
### - Routes Learning

Router merupakan modul dalam react yang berfungsi untuk melakukan proses navigasi pada SPA(Single Page Application). Multi Page Application(MPA) atau yang sering disebut juga dengan traditional web app adalah jenis aplikasi website dimana perlu memuat  ulang seluruh halaman web setiap kali membuat permintaan baru. Sedangkan single page application(SPA) adalah salah satu jenis aplikasi website yang menangani semua aktivitas yang terajadi dalam aplikasi tersebut.

### - Keunggulan dam Kekurangan MPA & SPA

| Keunggulan SPA | Keunggulan MPA |
| ------------------------ | ------------------------ |
| Waktu loading website jauh lebih cepat | SEO website akan lebih mudah dioptimasi |
| Tidak ada query tambahan ke server | Memudahkan untuk mengubah halaman tertentu untuk setiap kebutuhan yang berbeda |
| Front-end yang cepat dan responsif | Mengguanakan tools analisis seperti google alnalytics yang dapat terintegrasi langsung dengan website |
| Meningkatkan pengalaman pengguna(user experience)  |  |

| Kekurangan SPA | Kekurangan MPA |
| ------------------------ | ------------------------ |
| Tidak bagus dalam hal SEO | Kecepatan download webiste jauh lebih lama juka dibandingkan dengan single page application |
| Berat saat di load/buka pertama kali | Kamu perlu mengintegrasikan antara front-end dan back-end |
| Kurang aman dibanding dengan website biasa | Lebih sering membutuhkan maintenance dan update |
| Masalah kompatibilitas browser  | Mungkin akan lebih sering menemukan masalah performa pada website |

### - Hook Routing React

1. useHistory
useHistory memberi akses ke instance  riwayat yang dapat anda gunakan untuk bernavigasi. Contoh : 
-	Length
-	Go
-	goBack
-	goForward
-	push

2. useParams
useParams mengembalikan objek pasangan kunci/nilai parameter url. Gunakan untuk mengakses math.params dari <route> saat ini.

3. useRouteMath
useRouteMath mencoba mencocokan URL saat ini dengan cara yang sama seperti <Route>. Ini sebagian besar berguna untuk mendapatkan akses ke data kecocokan tanpa benar-benar merender <Route>

### _ThankYou_