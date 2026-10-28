import { motion } from "framer-motion";
import { Search, Newspaper } from "lucide-react";
import ArticleCard from "./ArticleCard";
import { AUTHORS, CATEGORIES } from "../data/seed";
import { compactNumber, firstParagraph, longDate, readingMinutes } from "../utils/format";
import { useMemo } from "react";

export default function BlogHome({ posts, query, setQuery, category, setCategory, onOpen }) {
  const published = useMemo(
    () => posts.filter((p) => p.published).sort((a, b) => b.createdAt.localeCompare(a.createdAt)),
    [posts]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return published.filter((p) => {
      const catOk = category === "Semua" || p.category === category;
      const qOk =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.paragraphs.join(" ").toLowerCase().includes(q);
      return catOk && qOk;
    });
  }, [published, query, category]);

  const isClean = !query.trim() && category === "Semua";
  const featured = isClean ? filtered[0] : null;
  const rest = featured ? filtered.slice(1) : filtered;

  const featuredAuthor = featured
    ? AUTHORS.find((a) => a.id === featured.authorId) || { name: "Tim Tulisva", avatar: "" }
    : null;

  return (
    <div className="mx-auto max-w-6xl px-4 md:px-8">
      {/* Hero */}
      <section className="pb-8 pt-10 md:pt-14">
        <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-brand">
          Jurnal Tulisva
        </p>
        <h1 className="mt-3 max-w-2xl font-serif text-4xl font-black leading-tight text-ink md:text-5xl">
          Cerita, catatan, dan percobaan yang ditulis perlahan.
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-soft md:text-base">
          Jurnal independen tentang produktivitas, kota, kopi, dan budaya kerja —
          diterbitkan saat siap, bukan saat jadwal memaksa.
        </p>
        <div className="mt-6 flex max-w-md items-center gap-2 rounded-2xl border border-line bg-white px-4 py-3 shadow-sm transition-colors focus-within:border-brand">
          <Search className="h-4 w-4 shrink-0 text-soft" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari judul atau isi artikel…"
            className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-soft/70"
          />
        </div>
      </section>

      {/* Filter kategori */}
      <div className="flex flex-wrap gap-2 border-b border-line pb-6">
        {["Semua", ...CATEGORIES].map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`rounded-full px-4 py-1.5 text-xs font-bold transition-colors ${
              category === c
                ? "bg-ink text-white"
                : "border border-line bg-white text-soft hover:border-brand hover:text-brand"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Sorotan */}
      {featured && (
        <motion.button
          onClick={() => onOpen(featured.id)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="group mt-8 grid w-full overflow-hidden rounded-3xl border border-line bg-white text-left shadow-sm md:grid-cols-2"
        >
          <div className="overflow-hidden">
            <img
              src={featured.cover}
              alt={featured.title}
              className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-full"
            />
          </div>
          <div className="flex flex-col justify-center gap-3 p-6 md:p-10">
            <span className="w-fit rounded-full bg-brand-soft px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand">
              Sorotan · {featured.category}
            </span>
            <h2 className="font-serif text-2xl font-black leading-tight text-ink transition-colors group-hover:text-brand md:text-4xl">
              {featured.title}
            </h2>
            <p className="line-clamp-3 text-sm leading-relaxed text-soft md:text-base">
              {firstParagraph(featured)}
            </p>
            <div className="mt-1 flex items-center gap-2.5">
              <img
                src={featuredAuthor.avatar}
                alt={featuredAuthor.name}
                loading="lazy"
                className="h-9 w-9 rounded-full object-cover"
              />
              <div className="text-xs">
                <p className="font-bold text-ink">{featuredAuthor.name}</p>
                <p className="text-soft">
                  {longDate(featured.createdAt)} · {readingMinutes(featured)} mnt baca ·{" "}
                  {compactNumber(featured.views)} pembaca
                </p>
              </div>
            </div>
          </div>
        </motion.button>
      )}

      {/* Grid artikel */}
      <section className="py-10">
        <p className="mb-6 text-xs font-bold uppercase tracking-wider text-soft">
          {filtered.length} artikel {category !== "Semua" ? `dalam kategori ${category}` : "terbaru"}
        </p>
        {rest.length === 0 && !featured ? (
          <div className="flex flex-col items-center gap-3 rounded-3xl border border-dashed border-line bg-white/60 py-16 text-center">
            <Newspaper className="h-8 w-8 text-soft/60" />
            <p className="font-serif text-lg font-bold text-ink">Tidak ada artikel yang cocok</p>
            <p className="max-w-xs text-sm text-soft">
              Coba kata kunci lain, atau pilih kategori berbeda dari daftar di atas.
            </p>
          </div>
        ) : (
          <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <ArticleCard key={p.id} post={p} onOpen={onOpen} index={i} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
