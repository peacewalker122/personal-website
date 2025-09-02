import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { NavBar } from "./NavBar";
import { SettingsPanel } from "./SettingsPanel";
import { PostCard } from "./PostCard";
import { getAllPosts } from "../utils/posts";
import type { Post } from "../utils/posts";

export function BlogIndex() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([]);
  const [displayedPosts, setDisplayedPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const POSTS_PER_PAGE = 6;

  const loadPosts = async () => {
    try {
      const allPosts = await getAllPosts();
      setPosts(allPosts);
      setDisplayedPosts(allPosts.slice(0, POSTS_PER_PAGE));
      setHasMore(allPosts.length > POSTS_PER_PAGE);
      setLoading(false);
    } catch (error) {
      console.error("Failed to load posts:", error);
      setLoading(false);
    }
  };

  if (posts.length === 0 && loading) {
    loadPosts();
  }

  const loadMorePosts = useCallback(() => {
    if (loadingMore || !hasMore) return;

    setLoadingMore(true);
    setTimeout(() => {
      const currentLength = displayedPosts.length;
      const nextPosts = posts.slice(
        currentLength,
        currentLength + POSTS_PER_PAGE,
      );
      setDisplayedPosts((prev) => [...prev, ...nextPosts]);
      setHasMore(currentLength + nextPosts.length < posts.length);
      setLoadingMore(false);
    }, 500); // Simulate loading delay
  }, [posts, displayedPosts, loadingMore, hasMore]);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 1000
    ) {
      loadMorePosts();
    }
  }, [loadMorePosts]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handlePostClick = (slug: string) => {
    navigate(`/${slug}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div
          className={`text-lg ${theme === "dark" ? "text-neutral-300" : "text-neutral-700"}`}
        >
          Loading posts...
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{
        backgroundColor:
          theme === "dark" ? "var(--bg-primary)" : "var(--bg-primary)",
      }}
    >
      <NavBar title="Daniel Anugerah's Blog" />
      <SettingsPanel />

      {/* Hero Section - 25% of viewport */}
      <section className="h-[25vh] flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className={`
              text-4xl md:text-5xl font-serif font-bold mb-4 leading-tight
              ${theme === "dark" ? "text-neutral-100" : "text-neutral-900"}
            `}
            style={{
              color:
                theme === "dark"
                  ? "var(--text-primary)"
                  : "var(--text-primary)",
            }}
          >
            All Opinions Are Mine
          </h1>
          <p
            className={`
              text-lg md:text-xl leading-relaxed max-w-2xl mx-auto
              ${theme === "dark" ? "text-neutral-300" : "text-neutral-700"}
            `}
            style={{
              color:
                theme === "dark"
                  ? "var(--text-secondary)"
                  : "var(--text-secondary)",
            }}
          >
            Place where I made something, wrote something, and shared something.
          </p>
        </div>
      </section>

      {/* Posts Section - 65% of viewport */}
      <main className="min-h-[65vh] px-6 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedPosts.map((post) => (
              <PostCard
                key={post.slug}
                post={post}
                onClick={() => handlePostClick(post.slug)}
              />
            ))}
          </div>

          {loadingMore && (
            <div className="text-center mt-8">
              <div
                className={`text-lg ${theme === "dark" ? "text-neutral-400" : "text-neutral-600"}`}
              >
                Loading more posts...
              </div>
            </div>
          )}

          {!hasMore && displayedPosts.length > 0 && (
            <div className="text-center mt-12 pt-8 border-t border-opacity-20">
              <div
                className="border-t"
                style={{
                  borderTopColor:
                    theme === "dark"
                      ? "var(--border-subtle)"
                      : "var(--border-subtle)",
                }}
              ></div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
