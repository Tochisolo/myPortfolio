import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import navLinks from "../data/navLinks";
import francisco from "../assets/francisco.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen]           = useState(false);
  const [scrolled, setScrolled]           = useState(false);
  const [activeSection, setActiveSection] = useState("/");
  const location  = useLocation();
  const navigate  = useNavigate();

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Shrink navbar on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ─── SCROLL SPY ───────────────────────────────────────────────────────────
  useEffect(() => {
    // Only run scroll spy on the home page
    if (location.pathname !== "/") return;

    const sectionIds = navLinks
      .filter((link) => link.path.startsWith("/#"))
      .map((link) => link.path.replace("/#", ""));

    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(`/#${id}`);
          }
        },
        { threshold: 0.4 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    // Reset to Home when scrolled back to very top
    const onScroll = () => {
      if (window.scrollY < 100) setActiveSection("/");
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observers.forEach((obs) => obs.disconnect());
      window.removeEventListener("scroll", onScroll);
    };
  }, [location.pathname]);

  // ─── ACTIVE CHECK ─────────────────────────────────────────────────────────
  const isLinkActive = (path) => {
    if (location.pathname !== "/") {
      return location.pathname === path;
    }
    if (path === "/") return activeSection === "/";
    return activeSection === path;
  };

  // ─── NAVIGATION HANDLER ───────────────────────────────────────────────────
  const handleNavClick = (e, path) => {
    if (path.startsWith("/#")) {
      e.preventDefault();
      setMenuOpen(false);
      const id = path.replace("/#", "");

      if (location.pathname !== "/") {
        // Navigate to home first, then scroll to the section
        navigate("/");
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        // Already on home, just scroll
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    } else if (path === "/") {
      setMenuOpen(false);
      if (location.pathname !== "/") {
        // Navigate to home page
        navigate("/");
      } else {
        // Already on home, scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  // ─── LINK CLASSES ─────────────────────────────────────────────────────────
  const linkClass = (path) =>
    `text-sm transition-colors duration-200 relative group ${
      isLinkActive(path)
        ? "text-primary font-semibold"
        : "text-gray-300 hover:text-white"
    }`;

  const mobileLinkClass = (path) =>
    `block text-base transition-colors duration-200 py-1 ${
      isLinkActive(path)
        ? "text-primary font-semibold"
        : "text-gray-300 hover:text-white"
    }`;

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark/95 backdrop-blur-md shadow-lg shadow-black/30 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2.5">
          <img src={francisco} alt="FranciscoTech logo" className="w-9 h-9 object-contain" />
          <span className="text-xl font-display font-bold whitespace-nowrap">
            <span className="text-primary">Francisco</span>
            <span className="text-white">Tech</span>
          </span>
        </Link>

        {/* DESKTOP LINKS */}
        <ul className="hidden lg:flex items-center gap-7 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className={linkClass(link.path)}
              >
                {link.name}
                {/* Animated underline */}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-primary rounded-full transition-all duration-300 ${
                    isLinkActive(link.path) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          <a
            href="/CV.pdf"
            download
            className="hidden lg:block btn-primary text-sm py-2.5"
          >
            Download CV
          </a>

          <button
            className="lg:hidden text-xl text-gray-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded p-1"
            onClick={() => setMenuOpen((p) => !p)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        id="mobile-menu"
        className={`lg:hidden bg-dark border-t border-dark-border overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={(e) => handleNavClick(e, link.path)}
              className={mobileLinkClass(link.path)}
            >
              {link.name}
            </Link>
          ))}
          <a href="/CV.pdf" download className="btn-primary block text-center mt-4">
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;