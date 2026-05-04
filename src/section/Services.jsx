import SectionHeader from "../components/SectionHeader";
import Useinview from "../hooks/Useinview";
import { servicesData } from "../data/portfolioData";

const ServiceCard = ({ service, index }) => {
  const { ref, inView } = Useinview();
  const { icon: Icon, title, description, tags } = service;

  return (
    <div
      ref={ref}
      className={`card-dark p-7 group hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
        <Icon className="text-primary text-2xl" />
      </div>

      <h3 className="font-display font-bold text-white text-lg mb-3">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-5">{description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="text-xs text-primary/80 bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="section-padding section-dark">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="What I Do" subtitle="Services" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;