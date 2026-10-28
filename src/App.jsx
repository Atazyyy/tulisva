import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import BlogHeader from "./components/BlogHeader";
import BlogHome from "./components/BlogHome";
import ArticleReader from "./components/ArticleReader";
import AdminPanel from "./components/AdminPanel";
import Footer from "./components/Footer";
import { usePosts } from "./hooks/usePosts";

export default function App() {
  const store = usePosts();
  const [screen, setScreen] = useState("home"); // home | read | admin
  const [openId, setOpenId] = useState(null);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Semua");

  const scrollTop = () => window.scrollTo({ top: 0 });

  const openPost = (id) => {
    setOpenId(id);
    setScreen("read");
    scrollTop();
  };

  const goHome = () => {
    setScreen("home");
    scrollTop();
  };

  const goAdmin = () => {
    setScreen("admin");
    scrollTop();
  };

  const pickCategory = (c) => {
    setCategory(c);
    setQuery("");
    goHome();
  };

  const openPostData = store.posts.find((p) => p.id === openId) || null;

  return (
    <div className="flex min-h-screen flex-col bg-canvas font-sans text-ink antialiased">
      <BlogHeader screen={screen} onHome={goHome} onAdmin={goAdmin} />

      <main className="flex-1">
        <AnimatePresence mode="wait">
          {screen === "admin" ? (
            <motion.div
              key="admin"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <AdminPanel store={store} />
            </motion.div>
          ) : screen === "read" ? (
            <motion.div
              key={"read-" + openId}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ArticleReader
                post={openPostData}
                allPosts={store.posts}
                registerView={store.registerView}
                onBack={goHome}
                onOpen={openPost}
              />
            </motion.div>
          ) : (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <BlogHome
                posts={store.posts}
                query={query}
                setQuery={setQuery}
                category={category}
                setCategory={setCategory}
                onOpen={openPost}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer onCategory={pickCategory} />
    </div>
  );
}
