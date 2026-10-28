import { useEffect, useState } from "react";
import { SEED_POSTS } from "../data/seed";

const KEY = "tulisva-posts-v1";

function loadInitial() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (e) {
    // korup / tidak tersedia → kembali ke seed
  }
  return SEED_POSTS;
}

export function usePosts() {
  const [posts, setPosts] = useState(loadInitial);

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(posts));
    } catch (e) {
      // penyimpanan penuh / mode privat → abaikan
    }
  }, [posts]);

  const savePost = (post) => {
    setPosts((prev) => {
      const exists = prev.some((p) => p.id === post.id);
      return exists
        ? prev.map((p) => (p.id === post.id ? post : p))
        : [post, ...prev];
    });
  };

  const deletePost = (id) => setPosts((prev) => prev.filter((p) => p.id !== id));

  const togglePublish = (id) =>
    setPosts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, published: !p.published } : p))
    );

  const registerView = (id) =>
    setPosts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, views: p.views + 1 } : p))
    );

  const resetData = () => setPosts(SEED_POSTS);

  return { posts, savePost, deletePost, togglePublish, registerView, resetData };
}
