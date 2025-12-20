"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

type Category = "complex" | "digitizing" | "mockup" | "standard";

type PortfolioItem = {
  src: string;
  category: Category;
  alt?: string;
};

// All images
const portfolioItems: PortfolioItem[] = [
  // Complex
  { src: "/assets/img/pages/portfolio/complex9.jpg", category: "complex" },
  { src: "/assets/img/pages/portfolio/complex10.jpg", category: "complex" },
  { src: "/assets/img/pages/portfolio/complex11.jpg", category: "complex" },
  { src: "/assets/img/pages/portfolio/complex12.jpg", category: "complex" },
  { src: "/assets/img/pages/portfolio/complex13.jpg", category: "complex" },
  { src: "/assets/img/pages/portfolio/complex14.jpg", category: "complex" },
  { src: "/assets/img/pages/portfolio/complex15.jpg", category: "complex" },
  { src: "/assets/img/pages/portfolio/complex16.jpg", category: "complex" },
  { src: "/assets/img/pages/portfolio/complex17.jpg", category: "complex" },
  { src: "/assets/img/pages/portfolio/complex18.jpg", category: "complex" },
  { src: "/assets/img/pages/portfolio/complex19.jpg", category: "complex" },
  { src: "/assets/img/pages/portfolio/complex20.jpg", category: "complex" },
  { src: "/assets/img/pages/portfolio/complex21.jpg", category: "complex" },

  // Digitizing
  { src: "/assets/img/pages/portfolio/digitizing9.jpg", category: "digitizing" },
  { src: "/assets/img/pages/portfolio/digitizing10.jpg", category: "digitizing" },
  { src: "/assets/img/pages/portfolio/digitizing11.jpg", category: "digitizing" },
  { src: "/assets/img/pages/portfolio/digitizing12.jpg", category: "digitizing" },
  { src: "/assets/img/pages/portfolio/digitizing13.jpg", category: "digitizing" },
  { src: "/assets/img/pages/portfolio/digitizing14.jpg", category: "digitizing" },
  { src: "/assets/img/pages/portfolio/digitizing15.jpg", category: "digitizing" },
  { src: "/assets/img/pages/portfolio/digitizing16.jpg", category: "digitizing" },
  { src: "/assets/img/pages/portfolio/digitizing17.jpg", category: "digitizing" },
  { src: "/assets/img/pages/portfolio/digitizing18.jpg", category: "digitizing" },
  { src: "/assets/img/pages/portfolio/digitizing19.jpg", category: "digitizing" },
  { src: "/assets/img/pages/portfolio/digitizing20.jpg", category: "digitizing" },
  { src: "/assets/img/pages/portfolio/digitizing21.jpg", category: "digitizing" },
  { src: "/assets/img/pages/portfolio/digitizing22.jpg", category: "digitizing" },
  { src: "/assets/img/pages/portfolio/digitizing23.jpg", category: "digitizing" },
  { src: "/assets/img/pages/portfolio/digitizing24.jpg", category: "digitizing" },
  { src: "/assets/img/pages/portfolio/digitizing25.jpg", category: "digitizing" },
  { src: "/assets/img/pages/portfolio/digitizing26.jpg", category: "digitizing" },

  // Mockup
  { src: "/assets/img/pages/portfolio/mockup9.jpg", category: "mockup" },
  { src: "/assets/img/pages/portfolio/mockup10.jpg", category: "mockup" },
  { src: "/assets/img/pages/portfolio/mockup11.jpg", category: "mockup" },
  { src: "/assets/img/pages/portfolio/mockup12.jpg", category: "mockup" },
  { src: "/assets/img/pages/portfolio/mockup13.jpg", category: "mockup" },
  { src: "/assets/img/pages/portfolio/mockup14.jpg", category: "mockup" },

  // Standard
  { src: "/assets/img/pages/portfolio/standard9.jpg", category: "standard" },
  { src: "/assets/img/pages/portfolio/standard10.jpg", category: "standard" },
  { src: "/assets/img/pages/portfolio/standard11.jpg", category: "standard" },
  { src: "/assets/img/pages/portfolio/standard12.jpg", category: "standard" },
  { src: "/assets/img/pages/portfolio/standard13.jpg", category: "standard" },
  { src: "/assets/img/pages/portfolio/standard14.jpg", category: "standard" },
  { src: "/assets/img/pages/portfolio/standard15.jpg", category: "standard" },
  { src: "/assets/img/pages/portfolio/standard16.jpg", category: "standard" },
  { src: "/assets/img/pages/portfolio/standard17.jpg", category: "standard" },
  { src: "/assets/img/pages/portfolio/standard18.jpg", category: "standard" },
  { src: "/assets/img/pages/portfolio/standard19.jpg", category: "standard" },
  { src: "/assets/img/pages/portfolio/standard20.jpg", category: "standard" },
  { src: "/assets/img/pages/portfolio/standard21.jpg", category: "standard" },
  { src: "/assets/img/pages/portfolio/standard22.jpg", category: "standard" },
  { src: "/assets/img/pages/portfolio/standard23.jpg", category: "standard" },
  { src: "/assets/img/pages/portfolio/standard24.jpg", category: "standard" },
  { src: "/assets/img/pages/portfolio/standard25.jpg", category: "standard" },
  { src: "/assets/img/pages/portfolio/standard26.jpg", category: "standard" },
  { src: "/assets/img/pages/portfolio/standard27.jpg", category: "standard" },
  { src: "/assets/img/pages/portfolio/standard28.jpg", category: "standard" },
  { src: "/assets/img/pages/portfolio/standard29.jpg", category: "standard" },
  { src: "/assets/img/pages/portfolio/standard30.jpg", category: "standard" },
  { src: "/assets/img/pages/portfolio/standard31.jpg", category: "standard" },
  { src: "/assets/img/pages/portfolio/standard32.jpg", category: "standard" },
  { src: "/assets/img/pages/portfolio/standard33.jpg", category: "standard" },
  { src: "/assets/img/pages/portfolio/standard34.jpg", category: "standard" },
  { src: "/assets/img/pages/portfolio/standard35.jpg", category: "standard" },
  { src: "/assets/img/pages/portfolio/standard36.jpg", category: "standard" },
];

export default function PortfolioGrid() {
  const [filter, setFilter] = useState<"all" | Category>("all");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    AOS.refresh();
  }, [filter]);

  const filteredItems = filter === "all"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === filter);

  return (
    <div className="portfolio-section px-4 py-8">
      {/* Filter Buttons */}
      <div className="portfolio-filters mb-6 flex gap-2 flex-wrap">
        {["all", "complex", "digitizing", "mockup", "standard"].map(cat => (
          <button
            key={cat}
            className={`px-4 py-2 border rounded ${
              filter === cat ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setFilter(cat as any)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredItems.map((item, index) => (
          <div key={index} className={`grid-item filter-${item.category}`} data-aos="fade-up">
            <img
              src={item.src}
              alt={item.alt || "Portfolio Image"}
              className="w-full h-auto rounded shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
