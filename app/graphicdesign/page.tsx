'use client';

import { motion, easeOut, cubicBezier } from 'framer-motion';
import Head from 'next/head';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Reusable animation variants to mimic AOS "fade" behavior exactly
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: cubicBezier(0.215, 0.61, 0.355, 1),
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

export default function GraphicDesign() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    '/assets/img/pages/graphicdesign/gd1.jpg',
    '/assets/img/pages/graphicdesign/gd2.jpg',
    '/assets/img/pages/graphicdesign/gd3.jpg',
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <Head>
        <title>Graphic Design | Vector Art Services</title>
      </Head>

      {/* Site overlay */}
      <div className="vlt-site-overlay"></div>

      {/* Main */}
      <main className="vlt-main">
        <div className="vlt-page-content">
          
          {/* --- HERO SECTION --- */}
          <section 
            className="has-white-color" 
            style={{ 
              backgroundImage: 'url(/assets/img/pages/graphicdesign/graphicdesignbg.jpg)', 
              backgroundRepeat: 'no-repeat', 
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="vlt-page-title vlt-page-title--style-4">
              <div className="container">
                <div className="row">
                  <div className="col-md-7">
                    <motion.h1 
                      className="vlt-page-title__title" 
                      style={{ color: "white", fontSize: "4rem", fontWeight: "700" }}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: easeOut }}
                    >
                      Graphic Design
                    </motion.h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="vlt-gap-150"></div>
          </section>

          <div className="vlt-gap-80"></div>

          {/* --- RECREATIONS SECTION --- */}
          <section className="swiper-slide">
            <div className="vlt-project-showcase__item">
              <div className="vlt-project-showcase__content">
                <div className="container">
                  <div className="row align-items-center">
                    <motion.div 
                      className="col-lg-6 offset-lg-1 col-md-6"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      variants={fadeInUp}
                      transition={{ delay: 0.1 }}
                    >
                      <h3 className="vlt-project-showcase__title">Recreations (Raster To Vector)</h3>
                      <p className="vlt-project-showcase__description fz-3">
                        Our illustrator wizards know how to transform your images into beautiful vector artworks. 
                        Each image is hand drawn or traced to obtain an illustrator vector file. 
                        Once created, vectors can be scaled to any size without loss of quality.
                      </p>
                    </motion.div>
                    
                    <motion.div 
                      className="col-lg-5 col-md-6"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      variants={imageVariants}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="vlt-content-slider shadow-lg rounded overflow-hidden position-relative">
                        <motion.img 
                          key={currentSlide}
                          src={slides[currentSlide]}
                          alt="Graphic design sample"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          style={{ width: '100%', display: 'block' }}
                        />
                        
                        {/* Navigation arrows */}
                        <button 
                          onClick={prevSlide}
                          className="slider-arrow slider-arrow-left"
                          aria-label="Previous slide"
                        >
                          <ChevronLeft size={24} />
                        </button>
                        <button 
                          onClick={nextSlide}
                          className="slider-arrow slider-arrow-right"
                          aria-label="Next slide"
                        >
                          <ChevronRight size={24} />
                        </button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="vlt-gap-100"></div>

          {/* --- VIRTUAL SAMPLES SECTION --- */}
          <section className="swiper-slide">
            <div className="container">
              <div className="row align-items-center">
                <motion.div 
                  className="col-lg-5 col-md-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={imageVariants}
                  transition={{ delay: 0.1 }}
                >
                  <img src="/assets/img/pages/graphicdesign/gd5.jpg" className="img-fluid rounded shadow" alt="Virtual samples" />
                </motion.div>
                
                <motion.div 
                  className="col-lg-6 offset-lg-1 col-md-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInUp}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="vlt-project-showcase__title">Virtual Samples</h3>
                  <p className="vlt-project-showcase__description fz-3">
                    Virtual sample used to show the uniqueness of product and imprint location. It will give 
                    some idea to customer how it will look before printing on the actual product.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          <div className="vlt-gap-100"></div>

          {/* --- PAPER PROOFS SECTION --- */}
          <section className="swiper-slide">
            <div className="container">
              <div className="row align-items-center">
                <motion.div 
                  className="col-lg-6 offset-lg-1 col-md-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInUp}
                  transition={{ delay: 0.1 }}
                >
                  <h3 className="vlt-project-showcase__title">Paper Proofs</h3>
                  <p className="vlt-project-showcase__description fz-3">
                    Paper Proofs nowadays clients are requesting for proofs before final printing. 
                    Good design can help create a favorable impression that makes your company stand out in the crowd.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="col-lg-5 col-md-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={imageVariants}
                  transition={{ delay: 0.2 }}
                >
                  <img src="/assets/img/pages/graphicdesign/gd6.jpg" className="img-fluid rounded shadow" alt="Paper proofs" />
                </motion.div>
              </div>
            </div>
          </section>

          <div className="vlt-gap-100"></div>

          {/* --- MOCK-UPS SECTION --- */}
          <section className="swiper-slide">
            <div className="container">
              <div className="row align-items-center">
                <motion.div 
                  className="col-lg-5 col-md-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={imageVariants}
                  transition={{ delay: 0.1 }}
                >
                  <img src="/assets/img/pages/graphicdesign/gd7.jpg" className="img-fluid rounded shadow" alt="Mock-ups" />
                </motion.div>
                
                <motion.div 
                  className="col-lg-6 offset-lg-1 col-md-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInUp}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="vlt-project-showcase__title">Mock-Ups</h3>
                  <p className="vlt-project-showcase__description fz-3">
                    Mock-ups are realistic representations of what a final design will look like. 
                    They help visualize products before production and are essential for client presentations 
                    and marketing materials.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          <div className="vlt-gap-100"></div>

          {/* --- PACKAGING LABELS SECTION --- */}
          <section className="swiper-slide">
            <div className="container">
              <div className="row align-items-center">
                <motion.div 
                  className="col-lg-6 offset-lg-1 col-md-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInUp}
                  transition={{ delay: 0.1 }}
                >
                  <h3 className="vlt-project-showcase__title">Packaging Labels</h3>
                  <p className="vlt-project-showcase__description fz-3">
                    When it comes to product packaging design, professional label stickers make all the difference in consumer trust.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="col-lg-5 col-md-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={imageVariants}
                  transition={{ delay: 0.2 }}
                >
                  <img src="/assets/img/pages/graphicdesign/gd9.jpg" className="img-fluid rounded shadow" alt="Packaging labels" />
                </motion.div>
              </div>
            </div>
          </section>

          <div className="vlt-gap-100"></div>

          {/* --- LOGOS SECTION --- */}
          <section className="swiper-slide">
            <div className="container">
              <div className="row align-items-center">
                <motion.div 
                  className="col-lg-5 col-md-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={imageVariants}
                  transition={{ delay: 0.1 }}
                >
                  <img src="/assets/img/pages/graphicdesign/gd8.jpg" className="img-fluid rounded shadow" alt="Logos" />
                </motion.div>
                
                <motion.div 
                  className="col-lg-6 offset-lg-1 col-md-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInUp}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="vlt-project-showcase__title">Logos</h3>
                  <p className="vlt-project-showcase__description fz-3">
                    A professional logo is the cornerstone of your brand identity. Our expert designers create 
                    memorable, scalable logos that perfectly represent your business values and vision.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          <div className="vlt-gap-120"></div>
        </div>
      </main>

      <style jsx>{`
        .vlt-project-showcase__title {
          font-weight: 700;
          margin-bottom: 20px;
        }
        .shadow-lg {
          box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important;
        }
        .position-relative {
          position: relative;
        }
        .slider-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.9);
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 10;
        }
        .slider-arrow:hover {
          background: rgba(255, 255, 255, 1);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        .slider-arrow-left {
          left: 20px;
        }
        .slider-arrow-right {
          right: 20px;
        }
      `}</style>
    </>
  );
}