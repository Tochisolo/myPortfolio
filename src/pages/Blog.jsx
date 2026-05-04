import { useState, useEffect } from "react";
import HashnodeCard from "../components/HashnodeCard";
import SectionHeader from "../components/SectionHeader";
import { fetchPosts } from "../services/Hashnode";

const Blog = () => {
  const [posts, setPosts]     = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);
 
  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const data = await fetchPosts(12);
        setPosts(data);
      } catch (err) {
        console.error("Failed to fetch posts:", err);
        setError("Failed to load posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
 
    loadPosts();
  }, []);
 
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#0d0d0d" }}>
      <section className="section-padding pt-36">
        <div className="max-w-7xl mx-auto">
 
          <SectionHeader title="Latest Articles" subtitle="From The Blog" />
 
          {/* Loading state */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <div className="w-10 h-10 border-4 border-dark-border border-t-primary rounded-full animate-spin" />
              <p className="text-gray-400 text-sm">Loading articles...</p>
            </div>
          )}
 
          {/* Error state */}
          {error && !loading && (
            <div className="text-center py-20">
              <p className="text-red-400 text-base mb-4">{error}</p>
              <a
                href="https://franciscoshub.hashnode.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
                Read on Hashnode Instead
              </a>
            </div>
          )}
 
          {/* Empty state */}
          {!loading && !error && posts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-4xl mb-4">✍️</p>
              <h3 className="font-display font-bold text-white text-2xl mb-3">
                No Posts Yet
              </h3>
              <p className="text-gray-400 mb-6">
                First articles are on the way. Check back soon!
              </p>
              <a
                href="https://franciscoshub.hashnode.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
                Visit Blog
              </a>
            </div>
          )}
 
          {/* Posts grid */}
          {!loading && !error && posts.length > 0 && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <HashnodeCard key={post.id} post={post} />
                ))}
              </div>
 
              {/* View all */}
              <div className="text-center mt-12">
                <a
                  href="https://franciscoshub.hashnode.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline inline-flex items-center gap-2"
                >
                  View All Articles on Hashnode →
                </a>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
};
 
export default Blog;
