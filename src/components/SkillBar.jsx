import Useinview from "../hooks/Useinview";

const SkillBar = ({ name, level, icon: Icon }) => {
  const { ref, inView } = Useinview();

  return (
    <div ref={ref} className="mb-5">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {Icon && <Icon className="text-primary text-lg" />}
          <span className="text-sm font-semibold text-gray-200">{name}</span>
        </div>
        <span className="text-xs text-primary font-bold">{level}%</span>
      </div>

      {/* Track */}
      <div className="w-full h-2 bg-dark-border rounded-full overflow-hidden">
        {/* Fill — animates on inView */}
        <div
          className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full transition-all duration-1000 ease-out"
          style={{ width: inView ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
};

export default SkillBar;