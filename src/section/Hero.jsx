import { useState, useEffect } from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaDownload } from "react-icons/fa";
import { heroData } from "../data/portfolioData";
import Profile from "../assets/Profile.jpeg";

const socialIcons = { FaGithub, FaTwitter, FaLinkedin };

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const current = heroData.titles[titleIndex];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setTitleIndex((i) => (i + 1) % heroData.titles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, titleIndex]);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-dark flex items-center overflow-hidden section-padding pt-28">
      {/* Background grid decoration */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#4169E1 1px, transparent 1px), linear-gradient(90deg, #4169E1 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow blob */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT — Text */}
          <div>
            {/* Greeting */}
            <p
              className="text-primary font-semibold text-base mb-3 animate-fade-up"
              style={{ animationDelay: "0.1s", opacity: 0 }}
            >
              {heroData.greeting}
            </p>

            {/* Name */}
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-4 animate-fade-up"
              style={{ animationDelay: "0.2s", opacity: 0 }}
            >
              {heroData.name}
            </h1>

            {/* Typewriter title */}
            <div
              className="text-2xl sm:text-3xl font-display font-semibold text-primary mb-6 h-10 animate-fade-up"
              style={{ animationDelay: "0.3s", opacity: 0 }}
            >
              {displayed}
              <span className="animate-pulse text-white">|</span>
            </div>

            {/* Bio */}
            <p
              className="text-gray-400 text-base leading-relaxed max-w-md mb-10 animate-fade-up"
              style={{ animationDelay: "0.4s", opacity: 0 }}
            >
              {heroData.bio}
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4 mb-12 animate-fade-up"
              style={{ animationDelay: "0.5s", opacity: 0 }}
            >
              <button onClick={scrollToAbout} className="btn-primary">
                {heroData.cta}
              </button>
              <a href={heroData.cvLink} download className="btn-outline flex items-center gap-2">
                <FaDownload size={14} /> Download CV
              </a>
            </div>

            {/* Social icons */}
            <div
              className="flex items-center gap-4 animate-fade-up"
              style={{ animationDelay: "0.6s", opacity: 0 }}
            >
              {heroData.socials.map(({ icon, url, label }) => {
                const Icon = socialIcons[icon];
                return (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-full border border-dark-border flex items-center justify-center text-gray-400 hover:text-white hover:border-primary hover:bg-primary/10 transition-all duration-200"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* RIGHT — Profile image */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.4s", opacity: 0 }}>
            <div className="relative">
              {/* Outer ring */}
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full border-2 border-primary/30 flex items-center justify-center animate-float">
                {/* Inner ring */}
                <div className="w-60 h-60 sm:w-72 sm:h-72 rounded-full border border-primary/20 flex items-center justify-center">
                  <div className="w-52 h-52 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl shadow-primary/20">
                    <img
                      src={Profile}
                      alt="Profile Picture"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Floating badge — experience */}
              <div className="absolute -bottom-4 -left-4 bg-primary text-white text-xs font-bold px-4 py-2 rounded-xl shadow-lg">
                3+ Years Exp
              </div>

              {/* Floating badge — projects */}
              <div className="absolute -top-2 -right-2 bg-dark-card border border-dark-border text-white text-xs font-semibold px-4 py-2 rounded-xl shadow-lg">
                10+ Projects ✓
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-5 h-8 rounded-full border-2 border-gray-600 flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-primary rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;