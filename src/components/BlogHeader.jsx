import { BookOpen, LayoutDashboard, PenLine } from "lucide-react";

export default function BlogHeader({ screen, onHome, onAdmin }) {
  const btn = (active) =>
    `inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-bold transition-colors ${
      active
        ? "bg-ink text-white"
        : "text-soft hover:bg-brand-soft hover:text-brand"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
        <button
          onClick={onHome}
          className="flex items-center gap-2.5"
          aria-label="Kembali ke beranda Jurnal Tulisva"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-white">
            <PenLine className="h-5 w-5" />
          </span>
          <span className="font-serif text-xl font-black tracking-tight text-ink">
            Tulisva
          </span>
        </button>

        <nav className="flex items-center gap-1.5">
          <button onClick={onHome} className={btn(screen !== "admin")}>
            <BookOpen className="h-4 w-4" />
            <span className="hidden sm:inline">Blog</span>
          </button>
          <button onClick={onAdmin} className={btn(screen === "admin")}>
            <LayoutDashboard className="h-4 w-4" />
            <span className="hidden sm:inline">Admin</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
