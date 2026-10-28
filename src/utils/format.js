export const uid = () =>
  "p-" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);

export const todayISO = () => new Date().toISOString().slice(0, 10);

export const longDate = (iso) =>
  new Date(iso + "T00:00:00").toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export const shortDate = (iso) =>
  new Date(iso + "T00:00:00").toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
  });

export const readingMinutes = (post) => {
  const words = (post.paragraphs || []).join(" ").trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
};

export const compactNumber = (n) => {
  if (n >= 1000) return (n / 1000).toFixed(1).replace(".0", "") + "rb";
  return String(n);
};

export const initials = (name) =>
  name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

export const firstParagraph = (post) =>
  (post.paragraphs || []).find((p) => p && p.trim()) ||
  "(Belum ada isi artikel.)";

export const sortByNewest = (posts) =>
  [...posts].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
