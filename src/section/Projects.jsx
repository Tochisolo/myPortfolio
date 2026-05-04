import { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import ProjectCard from "../components/ProjectCard";
import Useinview from "../hooks/Useinview";
import { projectsData, projectCategories } from "../data/portfolioData";

const Projects = () => {
  const [active, setActive] = useState("All");
  const { ref, inView } = Useinview();

  const filtered =
    active === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === active);

  return (
    <section id="projects" className="section-padding section-light">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="My Projects" subtitle="Portfolio" light />

        {/* Filter Tabs */}
        <div
          ref={ref}
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                active === cat
                  ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                  : "border-gray-200 text-gray-600 hover:border-primary hover:text-primary bg-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;