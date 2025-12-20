"use client";

import { useState, useEffect, useMemo, useCallback } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

// --- Types for clarity and data management ---
interface GalleryItem {
  src: string;
  alt: string;
  likes: number;
  views: number;
  id: string;
}

// --- Utility Functions ---
const formatViews = (num: number): string => num >= 1000 ? (num / 1000).toFixed(1) + 'k' : num.toString();
const getRandomLikes = () => Math.floor(Math.random() * 100) + 1;
const getRandomViews = () => Math.floor(Math.random() * 5000) + 100;

// --- Image Sources ---
const rawImageSources = {
  flyer: [
    'assets/img/pages/Creative/1.jpg','assets/img/pages/Creative/2.jpg','assets/img/pages/Creative/3.jpg','assets/img/pages/Creative/34.jpg',
    'assets/img/pages/Creative/5.jpg','assets/img/pages/Creative/6.jpg','assets/img/pages/Creative/7.jpg','assets/img/pages/Creative/8.jpg',
    'assets/img/pages/Creative/9.jpg','assets/img/pages/Creative/11.jpg',
  ],
  catalog: [
    'assets/img/pages/Creative/4.jpg','assets/img/pages/Creative/38.jpg','assets/img/pages/Creative/39.jpg','assets/img/pages/Creative/25.jpg',
    'assets/img/pages/Creative/26.jpg','assets/img/pages/Creative/41.jpg','assets/img/pages/Creative/28.jpg','assets/img/pages/Creative/15.jpg',
    'assets/img/pages/Creative/30.jpg','assets/img/pages/Creative/47.jpg',
  ],
  spotlight: [
    'assets/img/pages/Creative/44.jpg','assets/img/pages/Creative/45.jpg','assets/img/pages/Creative/46.jpg','assets/img/pages/Creative/48.jpg','assets/img/pages/Creative/48.jpg',
    'assets/img/pages/Creative/49.jpg','assets/img/pages/Creative/50.jpg','assets/img/pages/Creative/51.jpg','assets/img/pages/Creative/52.jpg',
    'assets/img/pages/Creative/53.jpg',
  ],
  ebook: [
    'assets/img/pages/Creative/e-book-01.jpg',
  ]
};

const ALL_IMAGES_FOR_MODAL = [
  ...rawImageSources.flyer,
  ...rawImageSources.catalog,
  ...rawImageSources.spotlight,
  ...rawImageSources.ebook
];

const CreativeGallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // --- Gallery Data ---
  const initializeGalleryData = useCallback((sources: string[], altText: string): GalleryItem[] => {
    return sources.map((src, index) => ({
      id: `${altText}-${index}`,
      src,
      alt: altText,
      likes: getRandomLikes(),
      views: getRandomViews(),
    }));
  }, []);

  const flyerItems = useMemo(() => initializeGalleryData(rawImageSources.flyer, "Product flyer"), [initializeGalleryData]);
  const catalogItems = useMemo(() => initializeGalleryData(rawImageSources.catalog, "Product catalog"), [initializeGalleryData]);
  const spotlightItems = useMemo(() => initializeGalleryData(rawImageSources.spotlight, "Design spotlight"), [initializeGalleryData]);

  const EBOOK_COUNT = 5;
  const ebookItems = useMemo(() => Array.from({ length: EBOOK_COUNT }, (_, index) => ({
    id: `ebook-${index}`,
    src: rawImageSources.ebook[0],
    alt: "E-book cover",
    likes: getRandomLikes(),
    views: getRandomViews(),
  })), []);

  // --- Modal Logic ---
  const openModal = (imageSrc: string) => {
    const index = ALL_IMAGES_FOR_MODAL.indexOf(imageSrc);
    setCurrentIndex(index !== -1 ? index : 0);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);
  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % ALL_IMAGES_FOR_MODAL.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + ALL_IMAGES_FOR_MODAL.length) % ALL_IMAGES_FOR_MODAL.length);

  // --- Slider Control ---
  const pauseSlider = () => document.getElementById('sliderTrack')?.classList.add('paused');
  const resumeSlider = () => document.getElementById('sliderTrack')?.classList.remove('paused');

  // --- Gallery Item Component with Framer Motion ---
 const GalleryGridItem = ({ item }: { item: GalleryItem }) => (
  <motion.div
    key={item.id}
    style={{ backgroundColor: '#f7fafc', padding: '10px', borderRadius: '8px', cursor: 'pointer' }}
    onClick={() => openModal(item.src)}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    whileHover={{ scale: 1.05 }} // <-- THIS ENABLES HOVER GROW EFFECT
  >
    <img
      src={item.src}
      alt={item.alt}
      style={{ width: '100%', height: '192px', objectFit: 'cover', borderRadius: '8px', marginBottom: '8px' }}
    />
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span className="likes" style={{ fontSize: '0.875rem', color: '#718096' }}>
          <i className="fas fa-heart"></i> {item.likes}
        </span>
        <span className="views" style={{ fontSize: '0.875rem', color: '#718096' }}>
          <i className="fas fa-eye"></i> {formatViews(item.views)}
        </span>
      </div>
    </div>
  </motion.div>
);


  return (
    <>
      <Head>
        <title>Promotional Product Industry Podcasts | Vector Art</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
      </Head>

      <main className="vlt-main">
        {/* Sections */}
        {[
          { title: 'Sales Flyer', items: flyerItems },
          { title: 'Catalog', items: catalogItems },
          { title: 'Spotlight', items: spotlightItems },
          { title: 'E-Book', items: ebookItems },
        ].map((section, idx) => (
          <section key={idx} style={{ backgroundColor: 'white', marginTop: idx === 0 ? '120px' : '5%' }}>
            <div style={{ maxWidth: '1500px', margin: '0 auto', padding: '16px' }}>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ fontSize: '1.875rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '8px' }}
              >
                {section.title}
              </motion.h1>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: '16px',
                cursor: 'pointer',
              }}>
                {section.items.map(item => <GalleryGridItem key={item.id} item={item} />)}
              </div>
            </div>
          </section>
        ))}

        {/* Slider Section */}
        <section>
          <div style={{ backgroundColor: 'white', marginTop: '2%', marginBottom: '2%' }}>
            <div style={{ margin: '0 auto', padding: '16px' }}>
              <div className="slider" onMouseEnter={pauseSlider} onMouseLeave={resumeSlider}>
                <div className="slider-track" id="sliderTrack">
                  {[
                    'assets/img/pages/creative/1.jpg','assets/img/pages/Creative/8.jpg','assets/img/pages/Creative/3.jpg',
                    'assets/img/pages/Creative/4.jpg','assets/img/pages/Creative/5.jpg','assets/img/pages/Creative/6.jpg',
                    'assets/img/pages/Creative/22.jpg','assets/img/pages/Creative/24.jpg','assets/img/pages/Creative/25.jpg',
                  ].map((src, idx) => (
                    <div key={idx} className="slider-item">
                      <img src={src} alt="Creative Design" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modal */}
        {modalOpen && (
          <div id="imageModal" className="modal" style={{ display: 'flex' }}>
            <span className="close-btn" onClick={closeModal}>
              <i className="fa-solid fa-xmark fa-xl" style={{ color: '#ffffff' }}></i>
            </span>
            <button className="nav-btn prev-btn" onClick={prevImage}>&#10094;</button>
            <img id="modalImage" src={ALL_IMAGES_FOR_MODAL[currentIndex]} alt="Expanded Image" style={{ height: '50%' }} />
            <button className="nav-btn next-btn" onClick={nextImage}>&#10095;</button>
          </div>
        )}
      </main>

      {/* Styles */}
      <style jsx>{`
        .hover-grow:hover {
          transform: scale(1.05);
          transition: transform 0.3s ease-in-out;
        }

        .modal {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.8);
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .modal img {
          max-width: 60%;
          max-height: 80%;
          border-radius: 10px;
        }

        .close-btn { position: absolute; top: 100px; right: 40px; cursor: pointer; }
        .nav-btn { position: absolute; top: 50%; font-size: 2rem; color: #fff; background: transparent; border: none; cursor: pointer; }
        .prev-btn { left: 20px; }
        .next-btn { right: 20px; }

        .slider { display: flex; overflow: hidden; width: 100%; }
        .slider-track { display: flex; animation: scroll 20s linear infinite; }
        .slider-track.paused { animation-play-state: paused; }
        .slider-item { flex: 0 0 auto; width: 150px; margin-right: 16px; text-align: center; }

        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      `}</style>
    </>
  );
};

export default CreativeGallery;
