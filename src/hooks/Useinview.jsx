import { useEffect, useRef, useState } from "react";

/**
 * useInView — triggers when element enters the viewport.
 * @param {Object} options - IntersectionObserver options
 * @param {boolean} once - if true, only triggers once (default: true)
 */
const useInView = (options = {}, once = true) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        if (once) observer.unobserve(el);
      } else if (!once) {
        setInView(false);
      }
    }, { threshold: 0.15, ...options });

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return { ref, inView };
};

export default useInView;