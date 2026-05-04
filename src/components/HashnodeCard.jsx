import { Link } from "react-router-dom";
import { FaClock, FaArrowRight, FaCalendarAlt } from "react-icons/fa";
import { formatDate } from "../services/Hashnode";

const HashnodeCard = ({ post }) => {
  const {
    title,
    brief,
    slug,
    publishedAt,
    readTimeInMinutes,
    coverImage,
    tags,
  } = post;

  return (
    <article className="group bg-dark-card border border-dark-border rounded-2xl overflow-hidden hover:border-primary/40 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500">

      {/* Cover Image */}
      <div className="relative h-52 overflow-hidden bg-dark-border">
        {coverImage?.url ? (
          <img
            src={coverImage.url}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
            <span className="text-primary/40 text-5xl font-display font-bold">
              {title.charAt(0)}
            </span>
          </div>
        )}

        {/* First tag badge */}
        {tags?.length > 0 && (
          <span className="absolute top-3 left-3 text-xs font-semibold bg-primary text-white px-3 py-1 rounded-full">
            {tags[0].name}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">

        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
          <span className="flex items-center gap-1.5">
            <FaCalendarAlt size={10} />
            {formatDate(publishedAt)}
          </span>
          <span className="flex items-center gap-1.5">
            <FaClock size={10} />
            {readTimeInMinutes} min read
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-white text-lg leading-snug mb-2 group-hover:text-primary transition-colors duration-200 line-clamp-2">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-400 text-sm leading-relaxed mb-5 line-clamp-2">
          {brief}
        </p>

        {/* Tags */}
        {tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag.name}
                className="text-xs text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full"
              >
                #{tag.name}
              </span>
            ))}
          </div>
        )}

        {/* Read More — links to internal post page */}
        <Link
          to={`/blog/${slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-200"
        >
          Read Article <FaArrowRight size={12} />
        </Link>
      </div>
    </article>
  );
};

export default HashnodeCard;