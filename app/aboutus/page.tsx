"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import { motion, useInView, useAnimation, easeOut } from "framer-motion";

export default function AboutPage() {
  const [sliderPos, setSliderPos] = useState(50);
  
  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // Helper for Counter Animation
  const Counter = ({ value, label }: { value: number; label: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
      if (isInView) {
        let start = 0;
        const end = value;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
        return () => clearInterval(timer);
      }
    }, [isInView, value]);

    return (
      <div ref={ref} className="vlt-counter-up vlt-counter-up--style-1">
        <div className="vlt-counter-up__counter">{count.toLocaleString()}</div>
        <h5 className="vlt-counter-up__title">{label}</h5>
      </div>
    );
  };

  return (
    <>
      <div className="vlt-site-overlay"></div>

      <main className="vlt-main">
        <div className="vlt-page-content">
          
          {/* Section: Header */}
          <section
            className="has-white-color"
            style={{
              backgroundImage: "url(/assets/img/pages/aboutus/aboutusbg.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="vlt-page-title vlt-page-title--style-4">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <motion.h1 
                      initial="hidden"
                      animate="visible"
                      variants={fadeIn}
                      className="vlt-page-title__title" 
                      style={{ color: "white", fontSize: "4rem", fontWeight: "700" }}
                    >
                      About Us
                    </motion.h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="vlt-gap-150"></div>
          </section>

          <div className="vlt-gap-80"></div>

          {/* Section: Who We Are & Slider */}
          <section>
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="vlt-animated-block"
                  >
                    <h3 className="vlt-section-title__title">Who We Are</h3>
                    <h5>
                      When it comes to experience and quality, no provider of vector artwork and
                      image editing can compare to Vector Art.
                    </h5>
                    <div className="vlt-gap-30"></div>
                    <p>
                      We have spent years perfecting our artist training and provide these
                      services to some of the largest and best-known suppliers and distributors
                      in the promotional products industry.
                    </p>
                    <p>
                      Vector art is a multi-national Graphics and digital imaging services company. 
                      We work with global leaders as well as growing companies to achieve significant 
                      value addition and cost reduction.
                    </p>
                  </motion.div>
                </div>

                <div className="col-sm-6">
                  {/* Interactive Comparison Slider */}
                  <div className="wrapper" style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px', height: '400px' }}>
                    <div 
                      className="img-1" 
                      style={{ 
                        backgroundImage: 'url(/assets/img/pages/aboutus/raster1.jpg)', 
                        width: '100%', height: '100%', backgroundSize: 'cover' 
                      }}
                    ></div>
                    <div 
                      className="img-2" 
                      style={{ 
                        backgroundImage: 'url(/assets/img/after.jpg)', 
                        width: `${sliderPos}%`, height: '100%', 
                        position: 'absolute', top: 0, left: 0, 
                        backgroundSize: 'cover', borderRight: '3px solid white' 
                      }}
                    ></div>
                    <input 
                      type="range" 
                      min="0" 
                      max="100" 
                      value={sliderPos} 
                      onChange={(e) => setSliderPos(Number(e.target.value))}
                      style={{
                        position: 'absolute', top: '50%', width: '100%', 
                        zIndex: 10, cursor: 'pointer', opacity: 0
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="vlt-gap-80"></div>
          </section>

          {/* Section: What We Do */}
          <section className="has-black-background-color has-white-color">
            <div className="vlt-gap-80"></div>
            <div className="container">
              <div className="row align-items-center">
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="col-lg-6"
                >
                  <div style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
                    <iframe
                      width="100%"
                      height="350"
                      src="https://www.youtube.com/embed/wxw-6dhtUBA"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </motion.div>

                <div className="col-lg-6">
                  <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <h3 className="vlt-section-title__title text-light">What We Do</h3>
                    <p>
                      We convert any low resolutions JPGs, Bitmaps, PDFs, Logos, and Artworks 
                      to camera-ready artwork with precision and speed.
                    </p>
                    <div className="vlt-gap-20"></div>
                    <Link className="vlt-btn vlt-btn--tertiary vlt-btn--sm" href="/contact">
                      Contact Us
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="vlt-gap-80"></div>
          </section>

          {/* Section: Benefits & Skills */}
          <section>
            <div className="vlt-gap-80"></div>
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
                    <h3 className="vlt-section-title__title">Benefits To Work With Vector Art</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {[
                        "Rates begin as low as $14",
                        "Next business day turnaround",
                        "Same-day RUSH orders",
                        "Easy online proofing system"
                      ].map((text, idx) => (
                        <li key={idx} style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <IoCheckmarkCircle size={24} color="#e82e31" /> {text}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                <div className="col-lg-6">
                  {[ 
                    { t: "Graphic", v: 100 }, 
                    { t: "Web & App Development", v: 90 }, 
                    { t: "Image Editing", v: 100 }, 
                    { t: "Digitizing", v: 95 } 
                  ].map((item, i) => (
                    <div key={i} className="vlt-progress-bar" style={{ marginBottom: '30px' }}>
                      <h5 className="vlt-progress-bar__title text-dark">
                        {item.t} <span className="counter">{item.v}%</span>
                      </h5>
                      <div className="vlt-progress-bar__bar" style={{ background: '#eee', height: '8px', borderRadius: '4px' }}>
                        <motion.span 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.v}%` }}
                          transition={{ duration: 1.5, ease: easeOut }}
                          viewport={{ once: true }}
                          style={{ display: 'block', height: '100%', background: '#e82e31', borderRadius: '4px' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="vlt-gap-80"></div>
          </section>

          {/* Section: Counters */}
          <section style={{ position: 'relative', padding: '100px 0', background: '#111', color: 'white' }}>
            <div className="container">
              <div className="row">
                {[
                  { count: 5400, label: "Cups of tea" },
                  { count: 594, label: "Happy clients (B2B)" },
                  { count: 721860, label: "Finished projects" },
                  { count: 284, label: "Happy customers (B2C)" },
                ].map((item, i) => (
                  <div className="col-lg-3 col-md-6" key={i}>
                    <Counter value={item.count} label={item.label} />
                  </div>
                ))}
              </div>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}