import { useState, useEffect } from "react";

/**
 * True when the user has scrolled past most of the first viewport — used to
 * switch the fixed nav to a light surface (white) over light page sections.
 */
export function useNavSurfaceLight(thresholdRatio = 0.85) {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const update = () => {
      const threshold = Math.min(900, Math.max(280, window.innerHeight * thresholdRatio));
      setLight(window.scrollY > threshold);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [thresholdRatio]);

  return light;
}
