# Resume Kampus Merdeka ReactJS – Version Control and Branch Managements (Git)
# 15-16 Agustus

## Latihan Version Control and Branch Managements (Git)
[Link Google Docs](https://docs.google.com/document/d/1zQYgLcPMPr_kFmNRoph0q48PSw3s7VAI0QNU6bbQcfE/edit?usp=sharing)

## 3 Poin Live Session hari kedua, minggu 1 :
### - Apa itu Git dan GitHub

Git adalah salah datu *version control system* populer yang digunakan para developer untuk mengembangkan software secara bersama-sama. Sedangkan Github adalah layanan Version Control System berbasis git secara online.

Bagainama GitHub bekerja

![how-git-work](https://github.com/indrakurr/react_indra-kurniawan/assets/122657032/fa750390-d847-4f6d-b501-52e10ff17ba5)



### - Perintah-perintah dalam GitHub:

1. Git init : Digunakan untuk membuat repository yang ada pada file lokal dan berlokasi di folder .git. 
2. Git clone : adalah perintah dasar untuk membuat salinan repository lokal.
3. Git add : Digunakan untuk perintah menambahkan file baru ke repository yang baru dipilih. 
4. Git commit : Digunakan untuk menyimpan apabila terjadi perubahan dan dilakukan pada repository jarak jauh, namun tidak bisa melakukan perubahan. 
5. Git stash : Digunakan untuk menyimpan, atau menyimpan, perubahan dalam alat pengembangan perangkat lunak Git yang belum siap untuk dilakukan.
6. Git branch : Cabang yang ada dalam suatu repository
7. Git merge : Merupakan perintah dasar yang menggabungkan cabang aktif dengan cabang yang dipilih.
8. Git diff : Digunakan untuk membandingkan dan mengamati perbedaan antara dua branch, commit, dan juga dokumen.
9. Git log : Digunakan untuk melihat perubahan apa saja yang terjadi di sebuah repo.
10. Git status : Digunakan untuk mengecek status repository lokal.
11. Git checkout : Merupakan perintah dasar yang digunakan untuk menukar cabang aktif dengan cabang yang dipilih. 
12. Git pull : Digunakan untuk menyatukan kode dari repository pada branch tertentu ke local repository.
13. Git push : Perintah yang digunakan untuk mentransfer perubahan file ke repository jarak jauh setelah melakukan perubahan.

### - Workflow Colaboration

Alur kerja pada GitHub, misalnya Gitflow : 
![gitflow](https://github.com/indrakurr/react_indra-kurniawan/assets/122657032/e92fb5a6-3e20-4979-9035-6ee3d8998116)


Alur kerja ini menggunakan dua cabang panjang yang berjalan secara paralel:

-Master
digunakan hanya untuk rilis
-Develop
dibuat dari Master, ini merupakan tempat untuk semua fitur yang telah selesai dan stabil yang siap untuk rilis berikutnya
Ketika mulai bekerja pada fitur baru, buatlah cabang Fitur baru dari cabang Develop. Buatlah sebanyak cabang fitur yang diinginkan dan perlukan secara paralel. Ketika pekerjaan selesai dan fitur telah diuji, gabungkan kode kembali ke cabang Develop.

Kemudian, saat waktu rilis tiba, isolasi fitur-fitur baru dari cabang Develop ke dalam cabang Rilis baru. Pastikan bahwa rilis tersebut diuji dengan baik dan stabil.

Tergantung pada karakter proyek, mungkin ide yang baik untuk merilis versi RC (Release Candidate) dari local ke publik.

Ketika rilis sudah stabil dan semua kendala telah diatasi, gabungkan cabang rilis kembali ke cabang Master dan deploy ke produksi!

