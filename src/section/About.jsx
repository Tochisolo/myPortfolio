import SectionHeader from "../components/SectionHeader";
import SkillBar from "../components/SkillBar";
import Useinview from "../hooks/Useinview";
import { aboutData } from "../data/portfolioData";
import francisco from "../assets/francisco.png";

const About = () => {
  const { ref: leftRef, inView: leftIn } = Useinview();
  const { ref: rightRef, inView: rightIn } = Useinview();

  return (
    <section id="about" className="section-padding section-light">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="About Me" subtitle="Who I Am" light />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT — Image */}
          <div
            ref={leftRef}
            className={`flex justify-center transition-all duration-700 ${
              leftIn ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-3xl overflow-hidden shadow-2xl">
                <img src={francisco} alt="Francisco" className="w-full h-full object-cover" />
              </div>
              {/* Decorative border offset */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/30 rounded-3xl -z-10" />
              {/* Dot grid decoration */}
              <div
                className="absolute -top-6 -left-6 w-24 h-24 opacity-20"
                style={{
                  backgroundImage: "radial-gradient(#4169E1 1px, transparent 1px)",
                  backgroundSize: "8px 8px",
                }}
              />
            </div>
          </div>

          {/* RIGHT — Content */}
          <div
            ref={rightRef}
            className={`transition-all duration-700 delay-100 ${
              rightIn ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <p className="text-gray-600 text-base leading-relaxed mb-8">{aboutData.bio}</p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              {aboutData.stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="text-center bg-gray-50 border border-gray-100 rounded-2xl py-4 px-3 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                >
                  <p className="text-2xl font-display font-bold text-primary">{value}</p>
                  <p className="text-xs text-gray-500 mt-1 leading-tight">{label}</p>
                </div>
              ))}
            </div>

            {/* Skill Bars */}
            <div className="bg-dark rounded-2xl p-6">
              <h3 className="text-white font-display font-semibold mb-5">Tech Stack</h3>
              {aboutData.skills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;