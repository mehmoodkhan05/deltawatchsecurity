import { useState, useEffect, useRef } from "react";

export function Counter({ target, suffix = "", delay = 0 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        observer.disconnect();
        let start = 0;
        const duration = 1800;
        const step = () => {
          start += 16;
          const progress = Math.min(start / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(eased * target));
          if (progress < 1) requestAnimationFrame(step);
        };
        setTimeout(() => requestAnimationFrame(step), delay);
      }
    });
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [target, delay]);
  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}
