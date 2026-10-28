import { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Eye,
  Pencil,
  Plus,
  RotateCcw,
  Trash2,
  TrendingUp,
} from "lucide-react";
import PostEditor from "./PostEditor";
import ViewsChart from "./ViewsChart";
import { AUTHORS, MEDIA_LIBRARY } from "../data/seed";
import {
  compactNumber,
  initials,
  longDate,
  shortDate,
  sortByNewest,
  todayISO,
  uid,
} from "../utils/format";

const TABS = [
  { id: "posts", label: "Kelola Post", icon: FileText },
  { id: "stats", label: "Statistik", icon: TrendingUp },
];

export default function AdminPanel({ store }) {
  const { posts, savePost, deletePost, togglePublish, resetData } = store;
  const [tab, setTab] = useState("posts");
  const [editing, setEditing] = useState(null); // null | post object
  const [deletingId, setDeletingId] = useState(null);
  const [confirmReset, setConfirmReset] = useState(false);
  const [toast, setToast] = useState("");

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2200);
  };

  const blankPost = () => ({
    id: uid(),
    title: "",
    category: "Opini",
    authorId: AUTHORS[0].id,
    cover: MEDIA_LIBRARY[0].url,
    published: false,
    views: 0,
    createdAt: todayISO(),
    paragraphs: [""],
  });

  const handleSave = (post) => {
    savePost(post);
    setEditing(null);
    showToast(post.published ? "Artikel diterbitkan" : "Artikel tersimpan sebagai draft");
  };

  const handleDelete = (id) => {
    deletePost(id);
    setDeletingId(null);
    showToast("Artikel dihapus");
  };

  const totalViews = posts.reduce((s, p) => s + p.views, 0);
  const publishedCount = posts.filter((p) => p.published).length;
  const sorted = sortByNewest(posts);
  const chartData = [...posts]
    .sort((a, b) => b.views - a.views)
    .map((p) => ({
      id: p.id,
      label: p.title || "(tanpa judul)",
      meta: `${p.category} · ${p.published ? "Terbit" : "Draft"} · ${shortDate(p.createdAt)}`,
      value: p.views,
    }));

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-8">
      {/* Kepala panel */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-brand">
            Panel Admin
          </p>
          <h1 className="mt-2 font-serif text-3xl font-black text-ink md:text-4xl">
            Kelola Jurnal
          </h1>
          <p className="mt-2 text-sm text-soft">
            Demo tanpa login — semua perubahan tersimpan di browser ini
            (localStorage).
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {confirmReset ? (
            <>
              <button
                onClick={() => {
                  resetData();
                  setConfirmReset(false);
                  setEditing(null);
                  showToast("Data contoh dipulihkan");
                }}
                className="rounded-full bg-red-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-red-700"
              >
                Ya, reset
              </button>
              <button
                onClick={() => setConfirmReset(false)}
                className="rounded-full border border-line px-4 py-2.5 text-sm font-bold text-soft transition hover:text-ink"
              >
                Batal
              </button>
            </>
          ) : (
            <button
              onClick={() => setConfirmReset(true)}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2.5 text-sm font-bold text-soft transition hover:border-brand hover:text-brand"
            >
              <RotateCcw className="h-4 w-4" /> Reset data contoh
            </button>
          )}
          <button
            onClick={() => setEditing(blankPost())}
            className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white transition hover:bg-brand-dark"
          >
            <Plus className="h-4 w-4" /> Tulis Artikel
          </button>
        </div>
      </div>

      {/* Tab */}
      <div className="mt-6 flex gap-1.5 border-b border-line">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`-mb-px inline-flex items-center gap-2 border-b-2 px-4 py-2.5 text-sm font-bold transition ${
              tab === t.id
                ? "border-brand text-brand"
                : "border-transparent text-soft hover:text-ink"
            }`}
          >
            <t.icon className="h-4 w-4" /> {t.label}
          </button>
        ))}
      </div>

      {editing ? (
        <div className="mt-6">
          <PostEditor
            initial={editing}
            onSave={handleSave}
            onCancel={() => setEditing(null)}
          />
        </div>
      ) : tab === "posts" ? (
        <div className="mt-6 space-y-3">
          {sorted.length === 0 && (
            <div className="rounded-3xl border border-dashed border-line bg-white/60 py-16 text-center">
              <p className="font-serif text-lg font-bold text-ink">Belum ada post</p>
              <p className="mt-1 text-sm text-soft">
                Klik "Tulis Artikel" untuk membuat artikel pertama.
              </p>
            </div>
          )}
          {sorted.map((p) => {
            const author = AUTHORS.find((a) => a.id === p.authorId) || {
              name: "Tim Tulisva",
            };
            const isDeleting = deletingId === p.id;
            return (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-wrap items-center gap-3 rounded-2xl border border-line bg-white p-3 shadow-sm md:flex-nowrap"
              >
                <img
                  src={p.cover}
                  alt=""
                  className="h-14 w-24 shrink-0 rounded-lg border border-line object-cover"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                        p.published
                          ? "bg-pub-soft text-pub"
                          : "bg-draft-soft text-draft"
                      }`}
                    >
                      {p.published ? "Terbit" : "Draft"}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wide text-brand">
                      {p.category}
                    </span>
                  </div>
                  <p className="mt-1 truncate font-serif text-base font-bold text-ink">
                    {p.title || "(tanpa judul)"}
                  </p>
                  <p className="mt-0.5 flex flex-wrap items-center gap-x-2 text-xs text-soft">
                    <span className="inline-flex items-center gap-1">
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-brand-soft text-[8px] font-black text-brand">
                        {initials(author.name)}
                      </span>
                      {author.name}
                    </span>
                    <span>· {longDate(p.createdAt)}</span>
                    <span className="inline-flex items-center gap-1">
                      · <Eye className="h-3 w-3" /> {compactNumber(p.views)} pembaca
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => togglePublish(p.id)}
                    className={`rounded-full px-3 py-1.5 text-xs font-bold transition ${
                      p.published
                        ? "bg-canvas text-soft hover:text-draft"
                        : "bg-pub-soft text-pub hover:opacity-80"
                    }`}
                  >
                    {p.published ? "Jadikan Draft" : "Terbitkan"}
                  </button>
                  <button
                    onClick={() => setEditing(p)}
                    className="rounded-full p-2 text-soft transition hover:bg-brand-soft hover:text-brand"
                    aria-label={`Edit ${p.title}`}
                  >
                    <Pencil className="h-4 w-4" />
                  </button>
                  {isDeleting ? (
                    <>
                      <button
                        onClick={() => handleDelete(p.id)}
                        className="rounded-full bg-red-600 px-3 py-1.5 text-xs font-bold text-white transition hover:bg-red-700"
                      >
                        Hapus?
                      </button>
                      <button
                        onClick={() => setDeletingId(null)}
                        className="rounded-full border border-line px-3 py-1.5 text-xs font-bold text-soft transition hover:text-ink"
                      >
                        Batal
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => setDeletingId(p.id)}
                      className="rounded-full p-2 text-soft transition hover:bg-red-50 hover:text-red-600"
                      aria-label={`Hapus ${p.title}`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      ) : (
        <div className="mt-6 space-y-6">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {[
              { label: "Total Post", value: posts.length, suffix: "artikel" },
              { label: "Terbit", value: publishedCount, suffix: "artikel" },
              { label: "Draft", value: posts.length - publishedCount, suffix: "artikel" },
              {
                label: "Total Pembaca",
                value: totalViews,
                suffix: "pembaca",
              },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-line bg-white p-5 shadow-sm"
              >
                <p className="text-xs font-extrabold uppercase tracking-wider text-soft">
                  {s.label}
                </p>
                <p className="mt-2 font-serif text-3xl font-black text-ink">
                  {s.value.toLocaleString("id-ID")}
                </p>
                <p className="text-xs text-soft">{s.suffix}</p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-line bg-white p-5 shadow-sm md:p-7">
            <h2 className="font-serif text-xl font-black text-ink">
              Pembaca per artikel
            </h2>
            <p className="mb-4 mt-1 text-xs text-soft">
              Grafik SVG buatan sendiri — diurutkan dari yang paling banyak dibaca.
              Jumlah bertambah otomatis setiap artikel dibaca di blog publik.
            </p>
            {chartData.length > 0 ? (
              <ViewsChart data={chartData} />
            ) : (
              <p className="py-8 text-center text-sm text-soft">
                Belum ada data — tulis artikel terlebih dahulu.
              </p>
            )}
          </div>
        </div>
      )}

      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 12, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: 12, x: "-50%" }}
          className="fixed bottom-6 left-1/2 z-50 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white shadow-lg"
        >
          {toast}
        </motion.div>
      )}
    </div>
  );
}
