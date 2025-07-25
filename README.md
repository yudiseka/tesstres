# Tes Stres Mengelola Bisnis

Aplikasi web sederhana untuk mengukur tingkat stres dalam mengelola bisnis.

## Fitur
- Tes 20 pertanyaan dengan jawaban YA/TIDAK
- Penilaian otomatis berdasarkan jumlah jawaban "YA"
- Hasil penilaian dengan rekomendasi
- Call to action untuk mendapatkan buku

## Cara Menjalankan

### Prasyarat
- Node.js >= 14.0.0
- npm >= 6.0.0

### Instalasi
1. Clone repository ini
2. Jalankan `npm install`
3. Jalankan `npm start`

### Build untuk Produksi
Jalankan `npm run build`

## Deploy ke Netlify
1. Push ke GitHub
2. Connect repository ke Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`

## Teknologi
- React.js
- Tailwind CSS

## Catatan Deploy
File `index.html` berada di root folder untuk kompatibilitas hosting statis.
