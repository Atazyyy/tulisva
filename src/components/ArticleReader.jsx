import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Clock, Copy, Eye, MessageCircle } from "lucide-react";
import ArticleCard from "./ArticleCard";
import { AUTHORS, WA_NUMBER } from "../data/seed";
import { compactNumber, longDate, readingMinutes } from "../utils/format";

export default function ArticleReader({ post, allPosts, registerView, onBack, onOpen }) {
  const viewedRef = useRef(null);
  const [toast, setToast] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [post?.id]);

  // Tambah pembaca sekali per kunjungan artikel.
  useEffect(() => {
    if (!post || viewedRef.current === post.id) return;
    viewedRef.current = post.id;
    const t = setTimeout(() => registerView(post.id), 800);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post?.id]);

  if (!post) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center md:px-8">
        <p className="font-serif text-2xl font-bold text-ink">Artikel tidak ditemukan</p>
        <p className="mt-2 text-sm text-soft">
          Artikel mungkin sudah dihapus dari panel admin.
        </p>
        <button
          onClick={onBack}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white transition hover:bg-brand-dark"
        >
          <ArrowLeft className="h-4 w-4" /> Kembali ke jurnal
        </button>
      </div>
    );
  }

  const author = AUTHORS.find((a) => a.id === post.authorId) || {
    name: "Tim Tulisva",
    role: "Redaksi",
    avatar: "",
  };

  const related = allPosts
    .filter((p) => p.published && p.id !== post.id && p.category === post.category)
    .slice(0, 2);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2200);
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      showToast("Tautan artikel tersalin");
    } catch (e) {
      showToast("Tidak bisa menyalin tautan di browser ini");
    }
  };

  const shareWA = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    `Halo! Saya baru membaca "${post.title}" di Jurnal Tulisva.`
  )}`;

  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <button
          onClick={onBack}
          className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-soft transition-colors hover:text-brand"
        >
          <ArrowLeft className="h-4 w-4" /> Kembali ke jurnal
        </button>

        <article className="mx-auto mt-6 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-brand-soft px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand">
              {post.category}
            </span>
            {!post.published && (
              <span className="rounded-full bg-draft-soft px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-draft">
                Draft
              </span>
            )}
          </div>

          <h1 className="mt-4 font-serif text-3xl font-black leading-tight text-ink md:text-5xl">
            {post.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-3 border-y border-line py-4">
            <img
              src={author.avatar}
              alt={author.name}
              className="h-11 w-11 rounded-full object-cover"
            />
            <div className="text-sm">
              <p className="font-bold text-ink">{author.name}</p>
              <p className="text-xs text-soft">{author.role}</p>
            </div>
            <span className="ml-auto flex flex-wrap items-center gap-4 text-xs text-soft">
              <span>{longDate(post.createdAt)}</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" /> {readingMinutes(post)} mnt baca
              </span>
              <span className="inline-flex items-center gap-1">
                <Eye className="h-3.5 w-3.5" /> {compactNumber(post.views)} pembaca
              </span>
            </span>
          </div>

          <img
            src={post.cover}
            alt={post.title}
            className="mt-8 aspect-[16/9] w-full rounded-3xl border border-line object-cover shadow-sm"
          />

          <div className="mt-8 space-y-6 text-[15px] leading-8 text-ink/85 md:text-base">
            {(post.paragraphs || [])
              .filter((p) => p && p.trim())
              .map((par, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-6xl first-letter:font-black first-letter:leading-[0.85] first-letter:text-brand"
                      : ""
                  }
                >
                  {par}
                </p>
              ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-line pt-6">
            <span className="text-xs font-bold uppercase tracking-wider text-soft">
              Bagikan artikel
            </span>
            <button
              onClick={copyLink}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-bold text-ink transition hover:border-brand hover:text-brand"
            >
              <Copy className="h-4 w-4" /> Salin tautan
            </button>
            <a
              href={shareWA}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-pub px-4 py-2 text-sm font-bold text-white transition hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <span className="ml-auto hidden items-center gap-1 text-xs text-soft sm:inline-flex">
              <Check className="h-3.5 w-3.5 text-pub" /> Diedit oleh redaksi Tulisva
            </span>
          </div>
        </article>

        {related.length > 0 && (
          <section className="mx-auto mt-14 max-w-4xl border-t border-line pt-10">
            <h2 className="font-serif text-2xl font-black text-ink">
              Bacaan lain di kategori {post.category}
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {related.map((p, i) => (
                <ArticleCard key={p.id} post={p} onOpen={onOpen} index={i} />
              ))}
            </div>
          </section>
        )}
      </motion.div>

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
