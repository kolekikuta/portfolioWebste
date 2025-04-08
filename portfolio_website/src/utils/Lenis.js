import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8, // Adjusts scroll smoothness
      easing: (t) => 1 - Math.pow(1 - t, 3), // Custom easing
      smoothWheel: true, // Enables smooth scrolling for wheel
      smoothTouch: false, // Disables smooth scrolling for touch devices
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy(); // Cleanup on unmount
  }, []);
};
