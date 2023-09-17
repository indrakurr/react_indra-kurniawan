# Resume Kampus Merdeka ReactJS – React Hook
## 14 - 15 September 2023

## 3 Poin Materi React Hook :
### - Apa itu React Hook

React Hook adalah fitur kuat yang diperkenalkan dalam React 16.8 yang memungkinkan pengembang menggunakan state dan fitur React lainnya tanpa harus menulis kelas. Ini membuat lebih mudah untuk menggunakan logika berkeadaan (stateful logic) dan efek samping (side-effects) dalam komponen fungsional. README ini akan memberikan pandangan singkat tentang React Hook dan mencakup dua aspek penting: mengimplementasikan hook useEffect dan membuat hook kustom.

React Hook adalah fungsi-fungsi yang memungkinkan Anda "hook" ke dalam fitur state dan siklus hidup (lifecycle) React dari komponen-komponen fungsional. Dengan React Hook, Anda dapat mengelola state, efek samping, dan fitur React lainnya tanpa harus menulis komponen berkelas (class component).


### - Beberapa React Hook yang sering digunakan
1. useState: untuk mengelola state komponen.
2. useEffect: untuk melakukan efek samping dalam komponen fungsional.
3. useContext: untuk mengakses API konteks (context API).
4. useReducer: untuk mengelola logika state yang kompleks.
5. useRef: untuk mengakses dan berinteraksi dengan DOM.

### Aturan pada Hooks

#### Hanya Panggil Hooks di Tingkat Atas
Jangan memanggil Hooks dari dalam loops, conditions, atau nested functions

#### Hanya Panggil Hooks dari Fungsi-Fungsi React
Jangan memanggil Hooks dari fungsi-fungsi JavaScript biasa. Kita dapat :
- Memanggil Hooks dari komponen-komponen fungsi react
- Memanggil Hooks dari custom Hooks 


### _ThankYou_