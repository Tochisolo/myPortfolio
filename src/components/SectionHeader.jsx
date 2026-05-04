import Useinview from "../hooks/Useinview";

/**
 * SectionHeader — animated section title + subtitle
 * @param {string} title
 * @param {string} subtitle
 * @param {boolean} light — if true, renders dark text (for white bg sections)
 * @param {string} align — "center" | "left"
 */
const SectionHeader = ({ title, subtitle, light = false, align = "center" }) => {
  const { ref, inView } = Useinview();

  return (
    <div
      ref={ref}
      className={`mb-14 transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${align === "center" ? "text-center" : "text-left"}`}
    >
      {/* Accent line */}
      <div className={`flex items-center gap-3 mb-3 ${align === "center" ? "justify-center" : ""}`}>
        <span className="w-8 h-[2px] bg-primary rounded-full" />
        <span className="text-primary text-sm font-semibold tracking-widest uppercase">
          {subtitle}
        </span>
        <span className="w-8 h-[2px] bg-primary rounded-full" />
      </div>

      <h2
        className={`text-4xl sm:text-5xl font-display font-bold ${
          light ? "text-gray-900" : "text-white"
        }`}
      >
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;