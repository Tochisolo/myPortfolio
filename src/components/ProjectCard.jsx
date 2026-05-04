import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const { title, description, image, tech, liveUrl, githubUrl, category } = project;

  return (
    <div className="group relative bg-dark-card border border-dark-border rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-5">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-primary hover:scale-110 transition-transform"
            aria-label="Live site"
          >
            <FaExternalLinkAlt size={16} />
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-primary hover:scale-110 transition-transform"
            aria-label="GitHub repo"
          >
            <FaGithub size={18} />
          </a>
        </div>
        {/* Category badge */}
        <span className="absolute top-3 left-3 text-xs font-semibold bg-primary text-white px-3 py-1 rounded-full">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-white font-display font-bold text-lg mb-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">{description}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs text-primary border border-primary/30 bg-primary/10 px-2.5 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;