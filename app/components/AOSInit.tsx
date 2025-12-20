"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Ensure CSS is imported

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return null;
}