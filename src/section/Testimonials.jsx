import { useState, useEffect, useCallback } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SectionHeader from "../components/SectionHeader";
import { testimonialsData } from "../data/portfolioData";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback((index) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 300);
  }, [animating]);

  const prev = () => goTo((current - 1 + testimonialsData.length) % testimonialsData.length);
  const next = useCallback(() => goTo((current + 1) % testimonialsData.length), [current, goTo]);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonialsData[current];

  return (
    <section id="testimonials" className="section-padding section-dark">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Client Testimonials" subtitle="What They Say" />

        <div className="max-w-3xl mx-auto relative">
          {/* Card */}
          <div
            className={`card-dark p-10 text-center transition-all duration-300 ${
              animating ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
          >
            <FaQuoteLeft className="text-primary text-3xl mx-auto mb-6 opacity-60" />

            <p className="text-gray-300 text-lg leading-relaxed italic mb-8">
              "{t.text}"
            </p>

            <img
              src={t.avatar}
              alt={t.name}
              className="w-16 h-16 rounded-full object-cover mx-auto mb-3 border-2 border-primary/50"
            />
            <p className="font-display font-bold text-white text-lg">{t.name}</p>
            <p className="text-primary text-sm">{t.role}</p>
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-10 h-10 rounded-full bg-dark-card border border-dark-border flex items-center justify-center text-gray-400 hover:text-white hover:border-primary transition-all duration-200"
          >
            <FaChevronLeft size={14} />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-10 h-10 rounded-full bg-dark-card border border-dark-border flex items-center justify-center text-gray-400 hover:text-white hover:border-primary transition-all duration-200"
          >
            <FaChevronRight size={14} />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonialsData.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? "w-6 h-2 bg-primary" : "w-2 h-2 bg-dark-border hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;