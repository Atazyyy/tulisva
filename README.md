Kategori: Web App — CMS (Content Management System) Blog

# Tulisva — CMS Blog: Blog Publik + Panel Admin

> **Kategori proyek: Web App — CMS Blog.** Bukan sekadar landing page: ada
> blog publik yang nyaman dibaca plus panel admin untuk mengelola artikel —
> editor, media library, status draft/terbit, dan statistik pembaca.

CMS blog untuk redaksi digital fiktif "Jurnal Tulisva". Proyek ini adalah
**concept demo** untuk portofolio jasa pembuatan web app — seluruh penulis,
artikel, tokoh, dan angka bersifat fiktif/contoh.

**Live:** https://tulisva.vercel.app

## Fitur

- **Blog publik**: 7 artikel terbit lengkap dengan kategori, tanggal, penulis
  (avatar + role), dan cover; kartu artikel sorotan di halaman depan; halaman
  baca yang nyaman — tipografi serif, drop cap, estimasi waktu baca, jumlah
  pembaca, salin tautan, bagikan via WhatsApp, dan artikel terkait.
- **Pencarian + filter kategori**: cari berdasarkan judul maupun isi artikel,
  saring per kategori (6 kategori), dengan halaman kosong yang rapi.
- **Panel admin**: daftar seluruh post (badge Terbit/Draft, penulis, tanggal,
  pembaca), tombol cepat terbitkan/jadikan draft, edit, dan hapus dengan
  konfirmasi inline.
- **Editor artikel**: judul, kategori, penulis, isi per paragraf (pisahkan
  dengan baris kosong), pilih cover dari **media library mini** (18 foto
  kurasi), serta toggle status Draft/Terbit.
- **Statistik**: kartu ringkas (total post, terbit, draft, total pembaca) +
  grafik batang SVG buatan sendiri (tanpa library chart) pembaca per artikel.
- Jumlah pembaca bertambah otomatis saat artikel dibaca di blog publik.
- Seluruh data — termasuk draft — tersimpan di **localStorage**: refresh aman,
  dan tombol "Reset data contoh" mengembalikan seed awal.

## Untuk siapa demo ini?

Calon klien yang butuh situs berkonten yang bisa dikelola sendiri: redaksi
online, komunitas, sekolah, agensi, atau bisnis yang ingin punya jurnal/blog
tanpa bergantung pada platform pihak ketiga.

## Tech Stack

- React 19 + Vite
- Tailwind CSS v4
- Framer Motion (transisi halaman, modal & toast)
- Lucide Icons
- Grafik SVG custom (tanpa library chart)

## Menjalankan

```bash
npm install
npm run dev      # development
npm run build    # production build ke folder dist/
npm run preview  # preview hasil build
```

---

Dibuat oleh [Agni Miftah Fauzi](https://github.com/Atazyyy) — jasa pembuatan
website & web app.
