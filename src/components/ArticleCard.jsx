import { motion } from "framer-motion";
import { Clock, Eye } from "lucide-react";
import { AUTHORS } from "../data/seed";
import { compactNumber, firstParagraph, longDate, readingMinutes } from "../utils/format";

export default function ArticleCard({ post, onOpen, index = 0 }) {
  const author = AUTHORS.find((a) => a.id === post.authorId) || {
    name: "Tim Tulisva",
    role: "Redaksi",
    avatar: "",
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.06, 0.3) }}
      whileHover={{ y: -4 }}
      className="group"
    >
      <button onClick={() => onOpen(post.id)} className="block w-full text-left">
        <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
          <img
            src={post.cover}
            alt={post.title}
            loading="lazy"
            className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-brand-soft px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-brand">
              {post.category}
            </span>
            <span className="text-xs text-soft">{longDate(post.createdAt)}</span>
          </div>
          <h3 className="font-serif text-xl font-bold leading-snug text-ink transition-colors group-hover:text-brand">
            {post.title}
          </h3>
          <p className="line-clamp-2 text-sm leading-relaxed text-soft">
            {firstParagraph(post)}
          </p>
          <div className="flex items-center gap-2 pt-1">
            <img
              src={author.avatar}
              alt={author.name}
              loading="lazy"
              className="h-7 w-7 rounded-full object-cover"
            />
            <span className="text-xs font-semibold text-ink">{author.name}</span>
            <span className="ml-auto inline-flex items-center gap-1 text-xs text-soft">
              <Clock className="h-3.5 w-3.5" />
              {readingMinutes(post)} mnt
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-soft">
              <Eye className="h-3.5 w-3.5" />
              {compactNumber(post.views)}
            </span>
          </div>
        </div>
      </button>
    </motion.article>
  );
}
