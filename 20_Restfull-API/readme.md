# Resume Kampus Merdeka ReactJS – Restfull API with JavaScript
## 4 - 5 Oktober 2023

## 3 Poin Restfull API with JavaScript :
### - Axios

Axios adalah sebuah library JavaScript yang umum digunakan untuk melakukan HTTP requests dari browser atau Node.js. Axios mendukung berbagai jenis HTTP methods yang dapat digunakan sesuai dengan kebutuhan kita. Berikut adalah beberapa HTTP methods yang dapat digunakan dengan Axios:
1. GET: Menggunakan HTTP GET method untuk mengambil data dari server.
2. POST: Menggunakan HTTP POST method untuk mengirim data ke server.
3. PUT: Menggunakan HTTP PUT method untuk mengirim data ke server untuk mengganti atau memperbarui sumber daya.
4. DELETE: Menggunakan HTTP DELETE method untuk menghapus sumber daya dari server.
5. PATCH: Menggunakan HTTP PATCH method untuk memperbarui sebagian dari sumber daya di server.

### - Mock API

Untuk mendapatkan API kita bisa menggunakan API publik untuk data dummy atau contoh endpoint. Terkadang disebut API palsu, API Mock adalah saat kita membuat API yang mengembalikan data yang diinginkan. Singkatnya, manfaat  Mock API adalah: 
•	Pengembang frontend mobile dan back-end dapat bekerja secara bersamaan 
•	Menemukan masalah lebih awal dan cepat 
•	Mengembangkan pengujian dan API secara bersamaan.

Beberapa Mock API yang sering digunakan:
•	Beeceptor
•	Mockon
•	Mocki
•	Stoplight
•	Postman Mock Server
•	Mocky
•	MockAPI

### - Implementation Get Data and Render
1. Make `index.html` file and class container 
```
<body>
  <h1>Your Data<h1>
  <div class="container"></div>
</body>
```

2. Make `<script>` for your JavaScript. Then make this function to get data inside your `<script>`
```
async function getUsers(){
          let url ="https://6299e3697b866a90ec452547.mockapi.io/peserta/v1/users";
          try {
            let res = await fetch(url);
            console.log("your status : ", res.status); // untuk dapat melakukan pengecekan terhadap status data
            return await res.json();
          } catch (error) {
            console.log(error);
          }
        }
```

3. Make `renderUsers` function inside `<script>`

function yang berfungsi untuk menampilkan data ke dalam halaman
```
        async function renderUsers() {
          let users = await getUsers();
          console.log(users);
          let html = "";
          users.forEach((user) => {
            let htmlSegment = `<div class="user">
                          <img src="${user.avatar}" >
                          <h3>${user.id} : ${user.name}</h3>
                       </div>
                            <button onclick="deleteUser(${user.id})"> Delete id : ${user.id}</button>
                       <hr>`;
            //menambahkan data ke dalam variabel html.
            html += htmlSegment;
          });
          let container = document.querySelector(".container");
          container.innerHTML = html;
        }
        renderUsers();
```

### _ThankYou_