import { MessageCircle, PenLine } from "lucide-react";
import { CATEGORIES, WA_NUMBER } from "../data/seed";

export default function Footer({ onCategory }) {
  const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    "Halo redaksi Tulisva! Saya ingin mengirim tulisan untuk jurnal."
  )}`;

  return (
    <footer className="border-t border-line bg-panel">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-white">
                <PenLine className="h-4 w-4" />
              </span>
              <span className="font-serif text-xl font-black tracking-tight text-ink">
                Tulisva
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-soft">
              Jurnal independen tentang produktivitas, kota, kopi, dan budaya
              kerja. Dikelola oleh redaksi kecil yang percaya tulisan siap itu
              lebih penting daripada tulisan cepat.
            </p>
          </div>

          <div>
            <p className="text-xs font-extrabold uppercase tracking-wider text-brand">
              Kategori
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => onCategory(c)}
                  className="rounded-full border border-line px-3 py-1.5 text-xs font-semibold text-soft transition hover:border-brand hover:text-brand"
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-extrabold uppercase tracking-wider text-brand">
              Kirim tulisan
            </p>
            <p className="mt-3 text-sm leading-relaxed text-soft">
              Punya catatan, percobaan, atau cerita yang layak diterbitkan?
              Redaksi membaca setiap kiriman.
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-bold text-white transition hover:bg-brand-dark"
            >
              <MessageCircle className="h-4 w-4" /> Hubungi Redaksi
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 text-xs text-soft sm:flex-row sm:items-center">
          <p>
            © 2026 Tulisva. Seluruh penulis, artikel, tokoh, dan angka pada demo
            ini bersifat fiktif.
          </p>
          <p>
            Concept demo — dibuat oleh{" "}
            <a
              href="https://github.com/Atazyyy"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-ink hover:text-brand"
            >
              Agni Miftah Fauzi
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
