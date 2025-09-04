import { useState } from "react";
import { useParams } from "react-router-dom";
import { getPostBySlug, type Post } from "../utils/posts";
import { NavBar } from "./NavBar";
import { SettingsPanel } from "./SettingsPanel";
import { ArticleContent } from "./ArticleContent";

export default function PostLoader() {
  const { slug } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  if (!post && loading) {
    getPostBySlug(slug || "").then((postData) => {
      if (postData) {
        setPost(postData);
      } else {
        setError("Post not found");
      }
      setLoading(false);
    });
  }

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
