import { ThemeProvider } from "./contexts/ThemeContext";
import { NavBar } from "./components/NavBar";
import { SettingsPanel } from "./components/SettingsPanel";
import { ArticleContent } from "./components/ArticleContent";
import { BlogIndex } from "./components/BlogIndex";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { getPostBySlug } from "./utils/posts";
import type { Post } from "./utils/posts";

function PostLoader() {
  const { slug } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!slug) {
      setError("No post slug provided");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError("");

    getPostBySlug(slug)
      .then((postData) => {
        if (postData) {
          setPost(postData);
        } else {
          setError("Post not found");
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load post");
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center py-24">Loading...</div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <NavBar title="Post Not Found" />
        <SettingsPanel />
        <div className="text-center py-24">
          <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
          <p className="text-neutral-600 mb-6">
            {error || "The requested post could not be found."}
          </p>
          <a
            href="/"
            className="inline-block px-6 py-3 bg-neutral-200 hover:bg-neutral-300 
                     rounded-lg transition-colors duration-200"
          >
            ← Back to Blog
          </a>
        </div>
      </div>
    );
  }

  // Convert Post to the format expected by ArticleContent
  const article = {
    title: post.title,
    author: "Author", // You can enhance this later
    date: post.date,
    readingTime: post.readingTime,
    content: post.content,
  };

  return (
    <div className="min-h-screen">
      <NavBar title={post.title} />
      <SettingsPanel />
      <ArticleContent article={article} />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<BlogIndex />} />
          <Route path="/:slug" element={<PostLoader />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
