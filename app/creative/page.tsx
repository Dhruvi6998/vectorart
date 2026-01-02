// pages/creative.tsx
'use client';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';

const CreativePage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSliderPaused, setIsSliderPaused] = useState(false);

  // All images array
  const images = [
    '/assets/img/pages/creative/1.jpg',
    '/assets/img/pages/Creative/2.jpg',
    '/assets/img/pages/Creative/3.jpg',
    '/assets/img/pages/Creative/4.jpg',
    '/assets/img/pages/Creative/5.jpg',
    '/assets/img/pages/Creative/6.jpg',
    '/assets/img/pages/Creative/7.jpg',
    '/assets/img/pages/Creative/8.jpg',
    '/assets/img/pages/Creative/9.jpg',
    '/assets/img/pages/Creative/11.jpg',
    '/assets/img/pages/Creative/12.jpg',
    '/assets/img/pages/Creative/13.jpg',
    '/assets/img/pages/Creative/14.jpg',
    '/assets/img/pages/Creative/15.jpg',
    '/assets/img/pages/Creative/16.jpg',
    '/assets/img/pages/Creative/17.jpg',
    '/assets/img/pages/Creative/18.jpg',
    '/assets/img/pages/Creative/19.jpg',
    '/assets/img/pages/Creative/20.jpg',
    '/assets/img/pages/Creative/21.jpg',
    '/assets/img/pages/Creative/22.jpg',
    '/assets/img/pages/Creative/24.jpg',
    '/assets/img/pages/Creative/25.jpg',
    '/assets/img/pages/Creative/26.jpg',
    '/assets/img/pages/Creative/27.jpg',
    '/assets/img/pages/Creative/28.jpg',
    '/assets/img/pages/Creative/29.jpg',
    '/assets/img/pages/Creative/30.jpg',
    '/assets/img/pages/Creative/31.jpg',
    '/assets/img/pages/Creative/33.jpg',
    '/assets/img/pages/Creative/34.jpg',
    '/assets/img/pages/Creative/35.jpg',
    '/assets/img/pages/Creative/36.jpg',
    '/assets/img/pages/Creative/37.jpg',
    '/assets/img/pages/Creative/38.jpg',
    '/assets/img/pages/Creative/39.jpg',
    '/assets/img/pages/Creative/40.jpg',
    '/assets/img/pages/Creative/41.jpg',
    '/assets/img/pages/Creative/42.jpg',
    '/assets/img/pages/Creative/43.jpg',
    '/assets/img/pages/Creative/44.jpg',
    '/assets/img/pages/Creative/45.jpg',
    '/assets/img/pages/Creative/46.jpg',
    '/assets/img/pages/Creative/47.jpg',
    '/assets/img/pages/Creative/48.jpg',
    '/assets/img/pages/Creative/49.jpg',
    '/assets/img/pages/Creative/50.jpg',
    '/assets/img/pages/Creative/51.jpg',
    '/assets/img/pages/Creative/52.jpg',
    '/assets/img/pages/Creative/53.jpg',
    '/assets/img/pages/Creative/54.jpg',
    '/assets/img/pages/Creative/55.jpg',
    '/assets/img/pages/Creative/56.jpg',
    '/assets/img/pages/Creative/57.jpg',
    '/assets/img/pages/Creative/58.jpg',
    '/assets/img/pages/Creative/59.jpg',
    '/assets/img/pages/Creative/60.jpg',
    '/assets/img/pages/Creative/61.jpg',
  ];

  const salesFlyerImages = [
    '/assets/img/pages/Creative/1.jpg',
    '/assets/img/pages/Creative/2.jpg',
    '/assets/img/pages/Creative/3.jpg',
    '/assets/img/pages/Creative/34.jpg',
    '/assets/img/pages/Creative/5.jpg',
    '/assets/img/pages/Creative/6.jpg',
    '/assets/img/pages/Creative/7.jpg',
    '/assets/img/pages/Creative/8.jpg',
    '/assets/img/pages/Creative/9.jpg',
    '/assets/img/pages/Creative/11.jpg',
  ];

  const catalogImages = [
    '/assets/img/pages/Creative/4.jpg',
    '/assets/img/pages/Creative/38.jpg',
    '/assets/img/pages/Creative/39.jpg',
    '/assets/img/pages/Creative/25.jpg',
    '/assets/img/pages/Creative/26.jpg',
    '/assets/img/pages/Creative/41.jpg',
    '/assets/img/pages/Creative/28.jpg',
    '/assets/img/pages/Creative/15.jpg',
    '/assets/img/pages/Creative/30.jpg',
    '/assets/img/pages/Creative/47.jpg',
  ];

  const spotlightImages = [
    '/assets/img/pages/Creative/44.jpg',
    '/assets/img/pages/Creative/45.jpg',
    '/assets/img/pages/Creative/46.jpg',
    '/assets/img/pages/Creative/47.jpg',
    '/assets/img/pages/Creative/48.jpg',
    '/assets/img/pages/Creative/49.jpg',
    '/assets/img/pages/Creative/50.jpg',
    '/assets/img/pages/Creative/51.jpg',
    '/assets/img/pages/Creative/52.jpg',
    '/assets/img/pages/Creative/53.jpg',
  ];

  const ebookImages = [
    '/assets/img/pages/Creative/e-book-01.jpg',
    '/assets/img/pages/Creative/e-book-01.jpg',
    '/assets/img/pages/Creative/e-book-01.jpg',
    '/assets/img/pages/Creative/e-book-01.jpg',
    '/assets/img/pages/Creative/e-book-01.jpg',
  ];

  const sliderImages = [
    '/assets/img/pages/creative/1.jpg',
    '/assets/img/pages/Creative/8.jpg',
    '/assets/img/pages/Creative/3.jpg',
    '/assets/img/pages/Creative/4.jpg',
    '/assets/img/pages/Creative/5.jpg',
    '/assets/img/pages/Creative/6.jpg',
    '/assets/img/pages/Creative/22.jpg',
    '/assets/img/pages/Creative/24.jpg',
    '/assets/img/pages/Creative/25.jpg',
    '/assets/img/pages/Creative/27.jpg',
    '/assets/img/pages/Creative/28.jpg',
    '/assets/img/pages/Creative/29.jpg',
  ];

  const openModal = (imageSrc: string) => {
    const index = images.indexOf(imageSrc);
    setCurrentImageIndex(index !== -1 ? index : 0);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!modalOpen) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeModal();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalOpen]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <Head>
        <title>Promotional Product Industry Podcasts | Vector Art</title>
        <meta
          name="description"
          content="Explore expert insights, trends, and strategies in the promotional products industry with Vector Art exclusive podcast. Stay ahead in promotional marketing—listen now!"
        />
        <meta
          name="keywords"
          content="Promotional Products Podcast, Marketing Strategies Podcast, Podcast Finder, Branding Insights Podcast, Advertising Industry Trends, Promotional Marketing Experts Vector Art"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        />
      </Head>

      <main className="vlt-main">
        {/* Sales Flyer Section */}
        <motion.section
          style={{ marginTop: '120px' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div style={{ backgroundColor: 'white' }}>
            <div style={{ maxWidth: '1500px', margin: '0 auto', padding: '16px' }}>
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{
                  fontSize: '1.875rem',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginBottom: '8px',
                }}
              >
                Sales Flyer
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                  textAlign: 'center',
                  color: '#718096',
                  marginBottom: '16px',
                }}
              >
                Inspirational designs, illustrations and graphic elements from the world&apos;s best designers.
                <br />
                Want more inspiration? Browse our <a href="#" style={{ color: '#4299e1' }}>Sales Flyer</a>
              </motion.p>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                  gap: '16px',
                  cursor: 'pointer',
                }}
              >
                {salesFlyerImages.map((img, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      backgroundColor: '#f7fafc',
                      padding: '10px',
                      borderRadius: '8px',
                      cursor: 'pointer',
                    }}
                    onClick={() => openModal(img)}
                  >
                    <img
                      src={img}
                      alt="Product flyer"
                      style={{
                        width: '100%',
                        height: '192px',
                        objectFit: 'cover',
                        borderRadius: '8px',
                        marginBottom: '8px',
                      }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '0.875rem', color: '#718096' }}>
                          <i className="fas fa-heart"></i> 14
                        </span>
                        <span style={{ fontSize: '0.875rem', color: '#718096' }}>
                          <i className="fas fa-eye"></i> 4.3k
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Catalog Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div style={{ backgroundColor: 'white', marginTop: '3%' }}>
            <div style={{ maxWidth: '1500px', margin: '0 auto', padding: '16px' }}>
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{
                  fontSize: '1.875rem',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginBottom: '8px',
                }}
              >
                Catalog
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                  textAlign: 'center',
                  color: '#718096',
                  marginBottom: '16px',
                }}
              >
                Discover inspiring designs, illustrations, and graphic elements crafted by the world&apos;s top designers.
                Looking for more ideas?
                <br />
                Explore our <a href="#" style={{ color: '#4299e1' }}>Catalog</a>
              </motion.p>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                  gap: '16px',
                  cursor: 'pointer',
                }}
              >
                {catalogImages.map((img, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      backgroundColor: '#f7fafc',
                      padding: '10px',
                      borderRadius: '8px',
                      cursor: 'pointer',
                    }}
                    onClick={() => openModal(img)}
                  >
                    <img
                      src={img}
                      alt="Product catalog"
                      style={{
                        width: '100%',
                        height: '192px',
                        objectFit: 'cover',
                        borderRadius: '8px',
                        marginBottom: '8px',
                      }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '0.875rem', color: '#718096' }}>
                          <i className="fas fa-heart"></i> 14
                        </span>
                        <span style={{ fontSize: '0.875rem', color: '#718096' }}>
                          <i className="fas fa-eye"></i> 4.3k
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Spotlight Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div style={{ backgroundColor: 'white', marginTop: '5%' }}>
            <div style={{ maxWidth: '1500px', margin: '0 auto', padding: '16px' }}>
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{
                  fontSize: '1.875rem',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginBottom: '8px',
                }}
              >
                Spotlight
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                  textAlign: 'center',
                  color: '#718096',
                  marginBottom: '16px',
                }}
              >
                Spotlight on creativity: Explore stunning designs, illustrations, and graphic elements from the world&apos;s leading designers.
                <br />
                Craving more inspiration? Check out <a href="#" style={{ color: '#4299e1' }}>Spotlight</a>
              </motion.p>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                  gap: '16px',
                  cursor: 'pointer',
                }}
              >
                {spotlightImages.map((img, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      backgroundColor: '#f7fafc',
                      padding: '10px',
                      borderRadius: '8px',
                      cursor: 'pointer',
                    }}
                    onClick={() => openModal(img)}
                  >
                    <img
                      src={img}
                      alt="Spotlight"
                      style={{
                        width: '100%',
                        height: '192px',
                        objectFit: 'cover',
                        borderRadius: '8px',
                        marginBottom: '8px',
                      }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '0.875rem', color: '#718096' }}>
                          <i className="fas fa-heart"></i> 14
                        </span>
                        <span style={{ fontSize: '0.875rem', color: '#718096' }}>
                          <i className="fas fa-eye"></i> 4.3k
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* E-Book Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div style={{ backgroundColor: 'white', marginTop: '5%' }}>
            <div style={{ maxWidth: '1500px', margin: '0 auto', padding: '16px' }}>
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{
                  fontSize: '1.875rem',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginBottom: '8px',
                }}
              >
                E-Book
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                  textAlign: 'center',
                  color: '#718096',
                  marginBottom: '16px',
                }}
              >
                Dive into knowledge: Discover insightful e-books covering design, creativity, and visual storytelling from top minds in the industry.
                <br />
                Looking for your next read? Browse <a href="#" style={{ color: '#4299e1' }}>E-book</a>
              </motion.p>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                  gap: '16px',
                  cursor: 'pointer',
                }}
              >
                {ebookImages.map((img, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      backgroundColor: '#f7fafc',
                      padding: '10px',
                      borderRadius: '8px',
                      cursor: 'pointer',
                    }}
                    onClick={() => openModal(img)}
                  >
                    <img
                      src={img}
                      alt="E-book"
                      style={{
                        width: '100%',
                        height: '192px',
                        objectFit: 'cover',
                        borderRadius: '8px',
                        marginBottom: '8px',
                      }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '0.875rem', color: '#718096' }}>
                          <i className="fas fa-heart"></i> 14
                        </span>
                        <span style={{ fontSize: '0.875rem', color: '#718096' }}>
                          <i className="fas fa-eye"></i> 4.3k
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Creative Slider Section */}
        <section>
          <div
            style={{
              backgroundColor: 'white',
              marginTop: '2%',
              marginBottom: '2%',
              cursor: 'pointer',
            }}
          >
            <div style={{ margin: '0 auto', padding: '16px' }}>
              <div
                className="slider"
                onMouseEnter={() => setIsSliderPaused(true)}
                onMouseLeave={() => setIsSliderPaused(false)}
                style={{
                  display: 'flex',
                  overflow: 'hidden',
                  width: '100%',
                }}
              >
                <motion.div
                  className="slider-track"
                  animate={{
                    x: [0, -50 + '%'],
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: 'loop',
                      duration: 20,
                      ease: 'linear',
                    },
                  }}
                  style={{
                    display: 'flex',
                    animationPlayState: isSliderPaused ? 'paused' : 'running',
                  }}
                >
                  {[...sliderImages, ...sliderImages].map((img, idx) => (
                    <div
                      key={idx}
                      className="slider-item"
                      style={{
                        flex: '0 0 auto',
                        width: '150px',
                        marginRight: '16px',
                        textAlign: 'center',
                      }}
                    >
                      <div style={{ backgroundColor: '#f3f4f6', padding: '8px', borderRadius: '8px' }}>
                        <img
                          src={img}
                          alt="Design showcase"
                          style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                        />
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Modal */}
        <AnimatePresence>
          {modalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeModal}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(0, 0, 0, 0.8)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000,
              }}
            >
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                onClick={closeModal}
                style={{
                  position: 'absolute',
                  top: '100px',
                  right: '40px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                }}
              >
                <i className="fa-solid fa-xmark fa-xl" style={{ color: '#ffffff' }}></i>
              </motion.span>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '20px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#ffffff',
                  fontSize: '2rem',
                  cursor: 'pointer',
                  padding: '16px',
                }}
              >
                &#10094;
              </button>

              <motion.img
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                src={images[currentImageIndex]}
                alt="Expanded"
                onClick={(e) => e.stopPropagation()}
                style={{
                  maxWidth: '60%',
                  maxHeight: '80%',
                  borderRadius: '10px',
                }}
              />

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                style={{
                  position: 'absolute',
                  top: '50%',
                  right: '20px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#ffffff',
                  fontSize: '2rem',
                  cursor: 'pointer',
                  padding: '16px',
                }}
              >
                &#10095;
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <style jsx>{`
        .vlt-main {
          min-height: 100vh;
          background: white;
        }
      `}</style>
    </>
  );
};

export default CreativePage;