import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import metadata from "../../metadata.json";
import { useTheme } from "../hooks/useTheme";
import type { Post } from "../utils/posts";
import { NavBar } from "./NavBar";
import { PostCard } from "./PostCard";
import { SettingsPanel } from "./SettingsPanel";
import { YearCarousel } from "./YearCarousel";

export default function BlogIndex() {
  const { theme, settingsVisible, toggleSettings } = useTheme();
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([]);
  const [displayedPosts, setDisplayedPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [yearFilter, setYearFilter] = useState<number | null>(null);

  const years: number[] = Array.from(
    new Set(metadata.posts.map((post) => new Date(post.date).getFullYear())),
  ).sort((a, b) => b - a);

  const POSTS_PER_PAGE = metadata.postsPerPage;

  const loadPosts = async () => {
    try {
      const posts = metadata.posts;

      // convert the metadata post into Post type
      const allPosts: Post[] = posts.map((post) => ({
        title: post.title,
        date: post.date,
        slug: post.slug,
        excerpt: post.excerpt,
      }));

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
  }, [posts, displayedPosts, loadingMore, hasMore, POSTS_PER_PAGE]);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 1000
    ) {
      loadMorePosts();
    }
  }, [loadMorePosts]);

  useEffect(() => {
    if (yearFilter) {
      const filteredPosts = posts.filter((post) => {
        const postYear = new Date(post.date).getFullYear();
        return postYear === yearFilter;
      });
      setDisplayedPosts(filteredPosts.slice(0, POSTS_PER_PAGE));
      setHasMore(filteredPosts.length > POSTS_PER_PAGE);
    } else {
      setDisplayedPosts(posts.slice(0, POSTS_PER_PAGE));
      setHasMore(posts.length > POSTS_PER_PAGE);
    }
  }, [yearFilter, posts, POSTS_PER_PAGE]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handlePostClick = (slug: string) => {
    navigate(`/post/${slug}`);
  };

  const handleYearSelect = (year: number | null) => {
    setYearFilter((prev) => (prev === year ? null : year));
  };

  const handleSettingRegionClick = (e: React.MouseEvent) => {
    console.info("Main region clicked");
    if (settingsVisible) {
      e.stopPropagation();
      toggleSettings();
    }
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
      <NavBar title={metadata.blogTitle} />
      <SettingsPanel />

      {/* Posts Section - 65% of viewport */}
      <main
        className="min-h-[65vh] px-6 pb-12"
        onClick={handleSettingRegionClick}
        onKeyUp={(e) => {
          console.info("Key up event:", e.key);
          if (e.key === "Escape" && settingsVisible) {
            toggleSettings();
          }
        }}
      >
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
              {metadata.heroTitle}
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
              {metadata.heroSubtitle}
            </p>
          </div>
        </section>

        <YearCarousel
          years={years}
          onYearSelect={handleYearSelect}
          activeYear={yearFilter}
        />

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
