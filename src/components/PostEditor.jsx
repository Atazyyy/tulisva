import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Image as ImageIcon, Save, X } from "lucide-react";
import { AUTHORS, CATEGORIES, MEDIA_LIBRARY } from "../data/seed";

export default function PostEditor({ initial, onSave, onCancel }) {
  const [title, setTitle] = useState(initial.title);
  const [category, setCategory] = useState(initial.category);
  const [authorId, setAuthorId] = useState(initial.authorId);
  const [cover, setCover] = useState(initial.cover);
  const [content, setContent] = useState((initial.paragraphs || []).join("\n\n"));
  const [published, setPublished] = useState(initial.published);
  const [showLibrary, setShowLibrary] = useState(false);
  const [error, setError] = useState("");

  const handleSave = () => {
    if (!title.trim()) {
      setError("Judul artikel belum diisi.");
      return;
    }
    if (!content.trim()) {
      setError("Isi artikel masih kosong.");
      return;
    }
    const paragraphs = content
      .split(/\n\s*\n/)
      .map((s) => s.trim())
      .filter(Boolean);
    onSave({
      ...initial,
      title: title.trim(),
      category,
      authorId,
      cover,
      paragraphs,
      published,
    });
  };

  const inputCls =
    "w-full rounded-xl border border-line bg-canvas px-4 py-2.5 text-sm text-ink outline-none transition focus:border-brand";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="rounded-3xl border border-line bg-white p-5 shadow-sm md:p-8"
    >
      <div className="flex items-center justify-between gap-3">
        <h2 className="font-serif text-2xl font-black text-ink">
          {initial.title ? "Edit Artikel" : "Tulis Artikel Baru"}
        </h2>
        <button
          onClick={onCancel}
          className="rounded-full p-2 text-soft transition hover:bg-brand-soft hover:text-brand"
          aria-label="Tutup editor"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <label className="block md:col-span-2">
          <span className="mb-1.5 block text-xs font-extrabold uppercase tracking-wider text-soft">
            Judul
          </span>
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setError("");
            }}
            placeholder="Contoh: Bekerja dari Kafe: Produktif atau Sekadar Pindah Meja?"
            className={`${inputCls} font-serif text-lg font-bold`}
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-xs font-extrabold uppercase tracking-wider text-soft">
            Kategori
          </span>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={inputCls}
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-1.5 block text-xs font-extrabold uppercase tracking-wider text-soft">
            Penulis
          </span>
          <select
            value={authorId}
            onChange={(e) => setAuthorId(e.target.value)}
            className={inputCls}
          >
            {AUTHORS.map((a) => (
              <option key={a.id} value={a.id}>
                {a.name} — {a.role}
              </option>
            ))}
          </select>
        </label>

        <label className="block md:col-span-2">
          <span className="mb-1.5 block text-xs font-extrabold uppercase tracking-wider text-soft">
            Isi artikel
          </span>
          <textarea
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
              setError("");
            }}
            rows={12}
            placeholder="Tulis isi artikel di sini… Pisahkan setiap paragraf dengan satu baris kosong."
            className={`${inputCls} resize-y leading-7`}
          />
          <span className="mt-1.5 block text-xs text-soft">
            Setiap paragraf dipisahkan satu baris kosong — seperti cara menulis di
            pengolah kata.
          </span>
        </label>
      </div>

      {/* Cover + media library mini */}
      <div className="mt-5 rounded-2xl border border-line bg-canvas p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <img
              src={cover}
              alt="Cover terpilih"
              className="h-14 w-24 rounded-lg border border-line object-cover"
            />
            <div>
              <p className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-soft">
                <ImageIcon className="h-3.5 w-3.5" /> Cover artikel
              </p>
              <p className="mt-0.5 text-xs text-soft">
                Pilih dari media library mini (18 foto kurasi redaksi).
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowLibrary((v) => !v)}
            className="rounded-full border border-line bg-white px-4 py-2 text-xs font-bold text-ink transition hover:border-brand hover:text-brand"
          >
            {showLibrary ? "Tutup galeri" : "Pilih dari Media Library"}
          </button>
        </div>

        {showLibrary && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-4 overflow-hidden"
          >
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6">
              {MEDIA_LIBRARY.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setCover(m.url)}
                  title={m.label}
                  className={`overflow-hidden rounded-lg border-2 transition ${
                    cover === m.url
                      ? "border-brand ring-2 ring-brand/30"
                      : "border-transparent hover:border-line"
                  }`}
                >
                  <img
                    src={m.url}
                    alt={m.label}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </button>
              ))}
            </div>
            <p className="mt-2 text-xs text-soft">
              Foto kurasi redaksi (Unsplash). Klik untuk memilih — bingkai cokelat
              berarti aktif.
            </p>
          </motion.div>
        )}
      </div>

      {/* Status + aksi */}
      <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-line pt-5">
        <span className="text-xs font-extrabold uppercase tracking-wider text-soft">
          Status
        </span>
        <div className="inline-flex rounded-xl border border-line bg-canvas p-1">
          <button
            onClick={() => setPublished(false)}
            className={`rounded-lg px-4 py-1.5 text-xs font-bold transition ${
              !published ? "bg-draft-soft text-draft" : "text-soft hover:text-ink"
            }`}
          >
            Draft
          </button>
          <button
            onClick={() => setPublished(true)}
            className={`rounded-lg px-4 py-1.5 text-xs font-bold transition ${
              published ? "bg-pub-soft text-pub" : "text-soft hover:text-ink"
            }`}
          >
            Terbit
          </button>
        </div>
        {published && (
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-pub">
            <Check className="h-3.5 w-3.5" /> Akan tampil di blog publik
          </span>
        )}

        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={onCancel}
            className="rounded-full border border-line px-5 py-2.5 text-sm font-bold text-soft transition hover:text-ink"
          >
            Batal
          </button>
          <button
            onClick={handleSave}
            className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white transition hover:bg-brand-dark"
          >
            <Save className="h-4 w-4" /> Simpan
          </button>
        </div>
      </div>

      {error && (
        <p className="mt-3 rounded-xl bg-red-50 px-4 py-2.5 text-sm font-semibold text-red-700">
          {error}
        </p>
      )}
    </motion.div>
  );
}
