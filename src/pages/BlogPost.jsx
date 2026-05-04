import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaClock, FaCalendarAlt, FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";
import { fetchPostBySlug, formatDate, getPostUrl } from "../services/Hashnode";

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost]       = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    // Scroll to top when post loads
    window.scrollTo({ top: 0, behavior: "smooth" });

    const loadPost = async () => {
      try {
        setLoading(true);
        const data = await fetchPostBySlug(slug);
        if (!data) throw new Error("Post not found");
        setPost(data);
      } catch (err) {
        console.error("Failed to fetch post:", err);
        setError("Post not found or failed to load.");
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  // ─── LOADING ─
  if (loading) {
    return (
      <main
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "#0d0d0d" }}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-dark-border border-t-primary rounded-full animate-spin" />
          <p className="text-gray-400 text-sm">Loading article...</p>
        </div>
      </main>
    );
  }

  // ─── ERROR ──────
  if (error) {
    return (
      <main
        className="min-h-screen flex items-center justify-center px-4"
        style={{ backgroundColor: "#0d0d0d" }}
      >
        <div className="text-center">
          <p className="text-5xl mb-4">😕</p>
          <h2 className="font-display font-bold text-white text-2xl mb-3">
            Post Not Found
          </h2>
          <p className="text-gray-400 mb-6">{error}</p>
          <Link to="/blog" className="btn-primary inline-block">
            ← Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  // ─── POST ───
  return (
    <main style={{ backgroundColor: "#0d0d0d" }} className="min-h-screen">

      {/* Cover Image */}
      {post.coverImage?.url && (
        <div className="w-full h-72 sm:h-96 overflow-hidden">
          <img
            src={post.coverImage.url}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Content wrapper */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Back link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors duration-200 mb-8"
        >
          <FaArrowLeft size={12} /> Back to Blog
        </Link>

        {/* Tags */}
        {post.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {post.tags.map((tag) => (
              <span
                key={tag.name}
                className="text-xs text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full"
              >
                #{tag.name}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h1 className="font-display font-bold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
          {post.title}
        </h1>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-5 mb-8 pb-8 border-b border-dark-border">
          {/* Author */}
          <div className="flex items-center gap-3">
            {post.author?.profilePicture && (
              <img
                src={post.author.profilePicture}
                alt={post.author.name}
                className="w-9 h-9 rounded-full object-cover border border-dark-border"
              />
            )}
            <span className="text-gray-300 text-sm font-medium">
              {post.author?.name}
            </span>
          </div>

          {/* Date */}
          <span className="flex items-center gap-1.5 text-gray-500 text-sm">
            <FaCalendarAlt size={11} />
            {formatDate(post.publishedAt)}
          </span>

          {/* Read time */}
          <span className="flex items-center gap-1.5 text-gray-500 text-sm">
            <FaClock size={11} />
            {post.readTimeInMinutes} min read
          </span>
        </div>

        {/* Article content — rendered from Hashnode HTML */}
        <div
          className="prose-content"
          dangerouslySetInnerHTML={{ __html: post.content.html }}
        />

        {/* Bottom actions */}
        <div className="mt-14 pt-8 border-t border-dark-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors duration-200"
          >
            <FaArrowLeft size={12} /> Back to Blog
          </Link>

          <a
            href={getPostUrl(post.slug)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
          >
            View on Hashnode <FaExternalLinkAlt size={11} />
          </a>
        </div>
      </div>
    </main>
  );
};

export default BlogPost;