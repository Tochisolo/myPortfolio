import { Link } from "react-router-dom";
import contactInfo from "../data/contactInfo";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import francisco from "../assets/francisco.png";

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/#about" },
  { name: "Services", path: "/#services" },
  { name: "Projects", path: "/#projects" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/#contact" },
];

const socials = [
  { Icon: FaGithub,    url: contactInfo.socials.github,    label: "GitHub" },
  { Icon: FaTwitter,   url: contactInfo.socials.twitter,   label: "Twitter" },
  { Icon: FaLinkedin,  url: contactInfo.socials.linkedin,  label: "LinkedIn" },
  { Icon: FaInstagram, url: contactInfo.socials.instagram, label: "Instagram" },
];

const Footer = () => {
  const handleHashLink = (e, path) => {
    if (path.startsWith("/#")) {
      e.preventDefault();
      const id = path.replace("/#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-dark border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <img src={francisco} alt="FranciscoTech" className="w-9 h-9 object-contain" />
              <span className="text-xl font-display font-bold">
                <span className="text-primary">Francisco</span>
                <span className="text-white">Tech</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Building high-quality web experiences with clean code and intentional design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={(e) => handleHashLink(e, link.path)}
                    className="text-gray-400 hover:text-primary text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-display font-semibold mb-4">Get In Touch</h4>
            <p className="text-gray-400 text-sm mb-2">{contactInfo.email}</p>
            <p className="text-gray-400 text-sm mb-5">{contactInfo.location} 🇳🇬</p>

            {/* Socials */}
            <div className="flex items-center gap-4">
              {socials.map(({ Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-dark-border flex items-center justify-center text-gray-400 hover:text-white hover:border-primary hover:bg-primary/10 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-dark-border pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} FranciscoTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;