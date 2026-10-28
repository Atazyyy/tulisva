// Data seed Jurnal Tulisva — seluruh penulis, artikel, tokoh, dan angka FIKTIF.

export const WA_NUMBER = "6281234567890";

export const CATEGORIES = [
  "Opini",
  "Produktivitas",
  "Teknologi",
  "Budaya",
  "Kuliner",
  "Perjalanan",
];

export const AUTHORS = [
  {
    id: "ratna",
    name: "Ratna Ayu Paramita",
    role: "Editor Senior",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "bagas",
    name: "Bagas Prasetyo",
    role: "Penulis Teknologi",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "salsa",
    name: "Salsabila Hanifah",
    role: "Penulis Budaya",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "dimas",
    name: "Dimas Prakoso",
    role: "Fotografer & Penulis",
    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "kirana",
    name: "Kirana Wulandari",
    role: "Penulis Kuliner",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=70",
  },
];

// Media library mini untuk pemilihan cover di editor admin.
export const MEDIA_LIBRARY = [
  { id: "m01", label: "Menulis & koran", url: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=800&q=70" },
  { id: "m02", label: "Rak buku", url: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=70" },
  { id: "m03", label: "Buku & catatan", url: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=70" },
  { id: "m04", label: "Lembar tulisan", url: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=70" },
  { id: "m05", label: "Kafe", url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=70" },
  { id: "m06", label: "Hidangan", url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=70" },
  { id: "m07", label: "Meja kafe", url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=70" },
  { id: "m08", label: "Ruang makan", url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=70" },
  { id: "m09", label: "Kopi & seduhan", url: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=800&q=70" },
  { id: "m10", label: "Meja kerja", url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=70" },
  { id: "m11", label: "Tim kecil", url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=70" },
  { id: "m12", label: "Catatan kerja", url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=70" },
  { id: "m13", label: "Ruang kantor", url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=70" },
  { id: "m14", label: "Arsitektur kota", url: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=800&q=70" },
  { id: "m15", label: "Karya seni", url: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=800&q=70" },
  { id: "m16", label: "Jalur hutan", url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=70" },
  { id: "m17", label: "Rumah tinggal", url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=70" },
  { id: "m18", label: "Interior", url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=70" },
];

export const SEED_POSTS = [
  {
    id: "p-kafe",
    title: "Bekerja dari Kafe: Produktif atau Sekadar Pindah Meja?",
    category: "Produktivitas",
    authorId: "ratna",
    cover:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=70",
    published: true,
    views: 4820,
    createdAt: "2026-09-02",
    paragraphs: [
      "Pemandangan yang sudah familier di banyak kafe: meja panjang penuh laptop, cangkir americano yang dibiarkan setengah hangat, dan orang-orang yang menatap layar berjam-jam. Bekerja dari kafe kini menjadi rutinitas bagi pekerja lepas, mahasiswa, bahkan karyawan yang kabur sejenak dari kantor. Pertanyaannya sederhana, tetapi jawabannya tidak: apakah kita benar-benar lebih produktif, atau hanya merasa produktif karena berpindah tempat?",
      "Sebagai percobaan kasar, kami bertanya kepada empat puluh pekerja lepas di Bandung tentang kebiasaan kerja mereka di kafe. Sebagian besar mengaku fokus penuh hanya pada satu sampai dua jam pertama. Setelah itu, distraksi datang dari arah yang tidak terduga: sinyal Wi-Fi yang turun naik, percakapan meja sebelah, godaan membuka media sosial, dan ilusi bahwa sudah \"bekerja\" hanya dengan hadir di tempat yang tepat.",
      "Maya, seorang ilustrator, punya aturan yang ketat: dua jam di kafe, tidak lebih. \"Kafe itu untuk fase brainstorming,\" katanya. \"Kalau mau menyelesaikan file final, saya pulang. Di rumah tidak ada yang mengganggu, dan itu justru menakutkan.\" Sebaliknya, Rifqi, desainer produk, justru memilih kafe untuk pekerjaan yang membosankan. Kebisingan lembut membantunya masuk ke mode autopilot saat menata ulang ratusan layer desain.",
      "Dari percakapan-percakapan itu muncul pola yang bisa dicoba siapa pun. Pertama, tentukan tugasnya dulu sebelum memilih tempat; pekerjaan yang butuh konsentrasi dalam dan pekerjaan yang monoton memang butuh suasana yang berbeda. Kedua, datang di jam sepi dan pesan secukupnya — kafe bukan ruang kerja gratis. Ketiga, matikan notifikasi sebelum laptop dibuka, bukan setelah kehilangan fokus.",
      "Kafe bukan solusi produktivitas; ia sebuah alat. Seperti alat lain, hasilnya bergantung pada siapa yang memegangnya dan untuk apa. Pindah meja boleh saja jadi awal yang baik — selama kita tahu kapan harus pulang dan mulai mengerjakan bagian yang sebenarnya sulit.",
    ],
  },
  {
    id: "p-300kata",
    title: "Menulis 300 Kata Setiap Hari: Catatan Eksperimen 60 Hari",
    category: "Opini",
    authorId: "bagas",
    cover:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=70",
    published: true,
    views: 6105,
    createdAt: "2026-09-18",
    paragraphs: [
      "Setiap saran tentang menulis selalu terdengar ambisius: tulis seribu kata sehari, selesaikan naskah dalam tiga bulan, kirim ke penerbit sebelum akhir tahun. Saya memilih jalan yang lebih kecil: tiga ratus kata setiap hari, tanpa syarat kualitas, tanpa topik wajib, selama enam puluh hari berturut-turut. Angkanya sengaja dibuat terlalu mudah untuk ditolak.",
      "Dua minggu pertama berjalan lancar. Ide muncul di mana-mana: percakapan taksi, tayangan berita, bahkan antrean kopi. Minggu ketiga adalah titik kritis. Gudang ide terasa kosong, dan saya mulai menulis ulang catatan lama dengan bingkai baru. Ternyata justru di sanalah latihannya berada: menulis saat tidak ada inspirasi adalah keterampilan yang jauh lebih berguna daripada menulis saat sedang terinspirasi.",
      "Perubahan yang paling terasa adalah cara saya melihat hari-hari biasa. Percakapan sepele, keluhan kecil, pengamatan di perhentian — semuanya mulai terbaca sebagai calon bahan. Arsip tiga ratus kata itu berubah menjadi gudang gagasan yang bisa digali kapan saja. Beberapa paragraf yang awalnya ditulis asal-asalan kemudian tumbuh menjadi artikel utuh di jurnal ini.",
      "Angkanya kini bisa dihitung: enam puluh hari dikali tiga ratus kata, sekitar delapan belas ribu kata. Yang menurut saya layak terbit tidak sampai lima belas persen dari jumlah itu. Itu bukan kegagalan. Petani pun tidak menilai panen dari jumlah biji yang ditanam; yang dinilai adalah apakah ada panen.",
      "Untuk yang ingin mencoba, tiga hal ini yang menyelamatkan saya: tetapkan jam yang sama setiap hari agar keputusan tidak perlu diambil ulang; simpan semua draft meski jelek — tidak ada yang akan membacanya kecuali Anda sendiri; dan jangan pernah menunggu ide bagus. Ide bagus biasanya datang setelah kalimat ketiga, bukan sebelum kalimat pertama.",
    ],
  },
  {
    id: "p-bandung",
    title: "Bandung dari Sisi Trotoar",
    category: "Perjalanan",
    authorId: "dimas",
    cover:
      "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=800&q=70",
    published: true,
    views: 3980,
    createdAt: "2026-08-25",
    paragraphs: [
      "Ada cara melihat kota yang hanya bisa dilakukan dengan kaki: perlahan, tanpa tujuan yang terlalu pasti, dan dengan telinga yang tetap terbuka. Setiap Sabtu pagi selama sebulan terakhir saya mencoba berjalan tiga kilometer di satu kawasan Bandung, memotret apa adanya, dan mencatat hal-hal kecil yang selama ini dilewatkan dari balik kaca kendaraan.",
      "Rute pagi dimulai dari jalan berpohon yang kanopinya masih hijau sebelum matahari naik tinggi. Warung kopi tua di ujung jalan sudah ramai sejak pukul enam; pelanggannya bukan anak muda dengan laptop, melainkan sopir angkutan dan penjaga parkir yang menukar cerita semalam dengan segelas kopi tubruk. Sedikit lebih jauh, tukang sol keliling membuka gerobaknya di tempat yang sama setiap pagi — alamatnya tidak tercatat di peta mana pun.",
      "Berjalan kaki memaksa mata bekerja lebih detail. Ornamen jendela rumah tua yang tersembunyi di balik teralis, cat dinding yang memudar berlapis-lapis hingga membentuk warna yang tidak bisa dibeli di toko, aroma roti yang keluar saat toko baru membuka pintunya. Semua ini lewat dalam dua detik jika kita berkendara; di trotoar, semuanya tersedia lebih lama.",
      "Percakapan yang tidak direncanakan selalu menjadi bagian terbaik. Seorang penjahit veteran yang tokonya berdiri sejak zaman delapan puluhan bercerita tentang pelanggan yang kini membawa cucunya ke kursi jahit yang sama. Pemilik toko buku bekas mengaku tidak pernah memilah koleksinya berdasarkan harga — \"yang penting bukunya menemukan pembaca yang tepat,\" katanya sambil mengelap sampul dengan lap wol.",
      "Tidak perlu kamera mahal atau jadwal yang rumit untuk mencoba. Pilih satu rute tiga kilometer yang biasa Anda lewati, berjalan pelan, dan biarkan kota yang bicara lebih dulu. Sering kali kita tidak perlu pergi jauh untuk menemukan tempat yang belum pernah kita lihat.",
    ],
  },
  {
    id: "p-manualbrew",
    title: "Manual Brew di Rumah: Panduan Santai untuk Pemula",
    category: "Kuliner",
    authorId: "kirana",
    cover:
      "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=800&q=70",
    published: true,
    views: 7240,
    createdAt: "2026-10-05",
    paragraphs: [
      "Istilahnya saja sudah terdengar menakutkan: rasio, TDS, ekstraksi, kurva seduh. Padahal menyeduh kopi secara manual di rumah pada dasarnya hanya soal tiga keputusan: seberapa halus kopi digiling, seberapa panas airnya, dan seberapa lama kopi bertemu air. Sisanya adalah latihan, bukan bakat.",
      "Peralatan minimumnya sederhana. Satu dripper berbentuk kerucut atau french press, timbangan dapur digital — atau kalau belum ada, sendok takar dan kesabaran ekstra — dan penggiling. Kalau belum mau membeli grinder, banyak gerobak kopi bersedia menggiling biji belanjaan Anda; mintalah gilingan medium untuk dripper dan kasar untuk french press.",
      "Resep pemula yang paling tidak mungkin gagal: lima belas gram kopi untuk dua ratus dua puluh lima mililiter air — rasio satu banding lima belas. Gunakan air sembilan puluh sampai sembilan puluh enam derajat; kalau tidak ada termometer, didihkan lalu diamkan tiga puluh detik. Tuang tiga tahap dengan total waktu seduh dua setengah sampai tiga menit. Catat hasilnya, lalu ubah satu variabel saja pada percobaan berikutnya.",
      "Dua keluhan paling umum ternyata punya solusi yang berlawanan arah. Kopi terasa pahit menyengat berarti over-ekstraksi: giling lebih kasar atau turunkan suhu air. Kopi terasa asam tajam seperti jeruk berarti under-ekstraksi: giling lebih halus atau perpanjang waktu seduh. Satu perubahan untuk satu kali percobaan — mengubah semuanya sekaligus sama dengan tidak belajar apa-apa.",
      "Konsistensi tidak datang dari alat yang mahal; ia datang dari catatan. Buku kecil berisi tanggal, ukuran gilingan, rasio, dan kesan rasa akan lebih mengubah kualitas seduhan Anda daripada segelas peralatan baru. Setelah dua minggu, Anda akan punya resep khas rumah sendiri — dan itu rasa yang tidak bisa dipesan di kafe mana pun.",
    ],
  },
  {
    id: "p-timkecil",
    title: "Tim Kecil, Selesai Lebih Cepat: Pelajaran dari Tiga Proyek",
    category: "Teknologi",
    authorId: "bagas",
    cover:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=70",
    published: true,
    views: 5515,
    createdAt: "2026-09-28",
    paragraphs: [
      "Anggapan yang beredar di banyak rapat perencanaan: proyek besar butuh tim besar. Pengalaman memantau tiga proyek pengembangan aplikasi selama setahun terakhir menunjukkan kebalikannya. Ketiganya diselesaikan oleh tim beranggota dua sampai tiga orang, dan ketiganya tuntas lebih cepat daripada proyek sejenis yang pernah dikerjakan tim yang jauh lebih ramai.",
      "Kasus pertama, aplikasi kasir untuk toko kelontong: tiga orang, enam minggu, dari rancangan pertama sampai dipakai setiap hari. Kasus kedua, portal informasi internal: dua orang, empat minggu. Kasus ketiga, integrasi data antar sistem yang dianggap paling berat: tiga orang, dua bulan. Tidak ada yang istimewa dari orang-orangnya; yang istimewa justru ukurannya.",
      "Mengapa tim kecil bisa lebih cepat? Jalur keputusannya pendek: ada yang ragu, langsung tanya ke meja sebelah. Jumlah pertemuan koordinasi menyusut drastis karena tidak ada yang perlu disinkronkan ke dua puluh orang. Dan yang paling penting: kepemilikan tugas menjadi sangat jelas. Tidak ada tugas yatim, tidak ada yang menunggu orang lain mengambil inisiatif.",
      "Tentu ada syaratnya, dan syaratnya tidak ringan. Ruang lingkup harus disiplin — fitur baru yang muncul di tengah jalan masuk daftar tunggu, bukan masuk pekerjaan berjalan. Harus ada satu pengambil keputusan akhir agar perdebatan tidak berlarut. Dan evaluasi mingguan singkat terbukti lebih berguna daripada laporan panjang bulanan.",
      "Kesimpulannya bukan \"tim kecil selalu lebih baik\", melainkan urutannya yang sering terbalik: mulailah dari tim terkecil yang mungkin, lalu tambahkan orang hanya ketika hambatan yang tersisa jelas-jelas soal tenaga, bukan soal gagasan. Menambah orang untuk memecahkan masalah yang sebenarnya soal kejelasan hanya memindahkan masalah — sambil menggandakan biaya koordinasinya.",
    ],
  },
  {
    id: "p-arsip",
    title: "Mengarsipkan Kenangan di Era Digital",
    category: "Budaya",
    authorId: "salsa",
    cover:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=800&q=70",
    published: true,
    views: 2930,
    createdAt: "2026-08-12",
    paragraphs: [
      "Buka galeri ponsel dan hitung: kemungkinan besar isinya melewati angka tiga puluh ribu foto. Video ulang tahun, tangkapan layar yang sudah tak berguna, foto makanan dari sudut yang sama berulang kali. Dari semua itu, kapan terakhir kali kita benar-benar membukanya kembali? Arsip digital yang tidak dikurasi pada dasarnya adalah lemari tanpa rak — isinya ada, tapi tidak bisa ditemukan.",
      "Keluarga Hartono di Bogor punya ritual kecil yang berjalan empat tahun terakhir: setiap akhir bulan, satu jam bersama untuk memilih dua puluh foto terbaik dari ribuan yang terkumpul, lalu dicetak dan dijilid menjadi album tahunan. Anak bungsunya yang berusia tujuh tahun kini punya lima album yang bisa diambil kapan saja dari rak ruang tamu — bukan dari folder yang lupa namanya.",
      "Ada perbedaan yang sulit dijelaskan antara menggeser foto di layar dan membuka album fisik. Yang pertama dilakukan sambil menunggu, sambil menggulir, sambil terdistraksi notifikasi. Yang kedua memaksa kita hadir: satu halaman, satu momen, dibaca bersama-sama, dan sering berakhir menjadi cerita panjang yang tidak pernah terjadwal.",
      "Praktiknya bisa dimulai tanpa alat baru. Kurasi mingguan lima menit: pilih lima foto terbaik dari minggu itu, sisanya biarkan. Penamaan folder yang konsisten — tahun, bulan, peristiwa — akan menyelamatkan Anda bertahun-tahun dari harus menebak-nebak. Dan satu aturan yang paling sering dilupakan: cetak sebelum akhir tahun. Foto yang tidak pernah keluar dari layar berbagi nasib dengan berkas yang selalu ditunda.",
      "Mengarsipkan bukan soal menyimpan segalanya; tugas arsip justru memilih. Era digital membuat menyimpan menjadi gratis, tapi membuat memilih menjadi semakin sulit. Keluarga yang berhasil menyimpan kenangan bukan keluarga yang paling rajin memotret — melainkan yang paling berani memilah.",
    ],
  },
  {
    id: "p-rutinitas",
    title: "Rutinitas Pagi yang Realistis (Bukan Versi Media Sosial)",
    category: "Produktivitas",
    authorId: "ratna",
    cover:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=70",
    published: true,
    views: 3350,
    createdAt: "2026-10-14",
    paragraphs: [
      "Rutinitas pagi versi internet punya formula yang hampir selalu sama: bangun pukul setengah lima, mandi air dingin, jurnal sepuluh halaman, lalu olahraga sebelum matahari terbit. Semua itu disajikan dengan cahaya indah dan musik yang menenangkan. Di dunia nyata, pagi kebanyakan orang dimulai dengan alarm yang ditunda tiga kali, menyiapkan sarapan, dan kejar-kejaran menuju rapat pertama.",
      "Prinsip yang sering hilang dalam perbandingan itu: rutinitas yang baik bukan yang paling mengesankan, melainkan yang paling tahan banting. Ia harus tetap bisa dijalankan pada hari ketika tidur terganggu, anak sakit, atau jadwal berubah mendadak. Rutinitas yang hanya berhasil pada hari yang sempurna bukan rutinitas — itu liburan.",
      "Menu minimalnya bisa dihitung dengan satu tangan: sepuluh menit pertama tanpa layar, segelas air sebelum kopi, dan satu tugas terpenting yang sudah ditulis malam sebelumnya. Totalnya lima belas menit. Kecil memang, tapi justru karena kecil itulah ia bertahan terhadap hari-hari yang berantakan — dan hari berantakan adalah mayoritas hari dalam setahun.",
      "Seorang akuntan, ibu dari dua anak, membangun rutinitas lima belas menit versinya sendiri dan melaporkannya masih berjalan setelah setahun. Rahasianya bukan disiplin luar biasa. \"Saya berhenti menganggapnya pencapaian,\" katanya. \"Sekarang rasanya seperti menggosok gigi — kalau terlewat, tidak ada drama, tinggal diteruskan besok.\"",
      "Ukuran keberhasilan rutinitas pagi bukan kesempurnaan, melainkan frekuensi kembali. Berapa kali Anda kembali menjalankannya setelah gagal? Itu satu-satunya angka yang penting. Mulailah lebih kecil daripada yang terasa pantas, dan biarkan ukurannya bertumbuh sendiri kalau memang perlu.",
    ],
  },
  {
    id: "p-kereta",
    title: "Catatan Perjalanan: Kereta Pagi Menuju Yogyakarta",
    category: "Perjalanan",
    authorId: "dimas",
    cover:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=70",
    published: false,
    views: 0,
    createdAt: "2026-10-20",
    paragraphs: [
      "Pukul lima empat puluh, peron stasiun masih setengah kosong. Lampu kereta berpendar kuning, dan petugas mulai memanggil penumpang kelas ekonomi untuk masuk lebih dulu. Saya membawa satu tas punggung, satu kamera, dan niat untuk tidak memotret apa pun selama satu jam pertama.",
      "Kursi 4A, jendela sisi kiri. Tepat di seberang duduk seorang ibu dengan kotak bekal yang akhirnya ikut dibagikan kepada saya sekitar kilometer kesembilan. (belum selesai — dilanjutkan saat perjalanan pulang)",
    ],
  },
  {
    id: "p-rumahkecil",
    title: "Rumah Kecil yang Tumbuh: Catatan Renovasi Bertahap",
    category: "Budaya",
    authorId: "salsa",
    cover:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=70",
    published: false,
    views: 0,
    createdAt: "2026-10-22",
    paragraphs: [
      "Rumah kami hanya lima puluh empat meter persegi, dan dalam enam tahun terakhir ia sudah berubah bentuk tiga kali. Bukan karena salah bangun, melainkan karena kebutuhan keluarga berubah lebih cepat daripada denah.",
      "Renovasi pertama lahir dari kebutuhan paling mendasar: rak buku. Renovasi kedua lahir dari hal yang tidak pernah kami rencanakan. (draft)",
    ],
  },
];
