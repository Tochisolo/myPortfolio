import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import contactInfo from "../data/contactInfo";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";
import SectionHeader from "../components/SectionHeader";
import Useinview from "../hooks/Useinview";


const contactDetails = [
  { icon: FaEnvelope,     label: "Email",    value: contactInfo.email },
  { icon: FaMapMarkerAlt, label: "Location", value: contactInfo.location },
  { icon: FaPhoneAlt,     label: "Phone",    value: contactInfo.phone },
];

const Contact = () => {
  const { ref, inView } = Useinview();
  const formRef = useRef(null);

  const [form, setForm]     = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {

      // 1. Ensure the SDK is initialized with your key
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);


      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          message:    form.message,
          // This puts the sender's email as reply-to so you can reply directly
          reply_to:   form.email,
        },
      );

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      // Reset back to idle after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);

    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="section-padding section-light">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Let's Work Together" subtitle="Contact" light />

        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* LEFT — Contact Info */}
          <div>
            <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-md">
              Have a project in mind or want to chat? I'm always open to new opportunities
              and interesting conversations. Drop me a message and I'll get back to you
              within 24 hours.
            </p>

            <div className="space-y-5">
              {contactDetails.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <Icon className="text-primary" size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">{label}</p>
                    <p className="text-gray-800 font-medium text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  disabled={status === "sending"}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  disabled={status === "sending"}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                disabled={status === "sending"}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === "sending" && (
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              )}
              {status === "sending" && "Sending..."}
              {status === "sent"    && "Message Sent ✓"}
              {status === "idle"    && <><FaPaperPlane size={13} /> Send Message</>}
              {status === "error"   && "Try Again"}
            </button>

            {/* Feedback messages */}
            {status === "sent" && (
              <p className="text-green-600 text-sm text-center font-medium">
                ✓ Your message was sent successfully. I'll reply within 24 hours!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-sm text-center font-medium">
                ✗ Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;