'use client'; // Required for Framer Motion

import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";

// Animation Variants (Mimicking AOS "fade")
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: delay / 1000, // Converts AOS ms delay to seconds
      ease: "easeOut",
    },
  }),
};

const DigitizingPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>
          next-level digitizing, advanced design, innovative solutions, Vector art , Graphic design
        </title>
        <meta
          name="keywords"
          content="next generation embroidery digitizing, advanced digitizing services, innovative digitizing company, online digitizing solutions, image digitizing experts"
        />
        <meta
          name="description"
          content="Vectorart.co delivers next-level digitizing services with cutting-edge precision, optimized machine performance, and a personalized approach for every project."
        />
      </Head>

      {/* Site overlay */}
      <div className="vlt-site-overlay"></div>

      {/* Main */}
      <main className="vlt-main">
        {/* Page content */}
        <div className="vlt-page-content">
          
          {/* Hero Section */}
          <section
            className="has-white-color"
            style={{
              backgroundImage: "url(/assets/img/pages/digitizing/digitizingbg.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="vlt-page-title vlt-page-title--style-4">
              <div className="container">
                <div className="row">
                  <div className="col-md-7">
                    {/* Replaces AOS: Initial load animation */}
                    <motion.h1 
                      className="vlt-page-title__title" 
                      style={{ color: "white", fontSize: "4rem", fontWeight: "700" }}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      Next-Level Digitizing
                    </motion.h1>
                  </div>
                  <div className="col-md-3"></div>
                </div>
              </div>
            </div>
            <div className="vlt-gap-150"></div>
          </section>

          <div className="vlt-gap-80"></div>

          <section>
            <div className="container">
              <div className="row">
                <div className="text-center col-12">
                  {/* Replaces AOS data-aos="fade" data-aos-delay="100" */}
                  <motion.div 
                    className="vlt-animated-block"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={100}
                    variants={fadeIn}
                  >
                    <h2 className="vlt-section-title__title">
                      Vectorart brings you the next generation of contract digitizing solutions for
                      all embroidery needs.
                    </h2>
                  </motion.div>
                </div>
                <div className="vlt-gap-80"></div>
              </div>

              <div className="row">
                {/* Image Block: data-aos-delay="300" */}
                <div className="col-md-6">
                  <motion.div 
                    className="position-relative"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={300}
                    variants={fadeIn}
                  >
                    <img
                      src="/assets/img/pages/digitizing/digitizing.jpg"
                      alt="next-level digitizing"
                      className="rounded shadow-lg"
                    />
                  </motion.div>
                  <div className="vlt-gap-60--sm"></div>
                </div>

                {/* Text Block: data-aos-delay="500" */}
                <div className="col-md-6">
                  <motion.div 
                    className="vlt-animated-block"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={500}
                    variants={fadeIn}
                  >
                    <p className="fz-3">
                      We transform your scanned images (.jpg, .png, .bmp, .tif) into advanced
                      machine-ready embroidery files such as .DST or .EMB formats. Our highly skilled
                      digitizers, working from our Vector Art Office, combine innovation with
                      experience to deliver flawless results. Every design is optimized to reduce
                      thread breaks and maximize machine efficiency, ensuring smooth production runs.
                      Trusted by leading names in the embroidery industry, we continue to evolve with
                      cutting-edge techniques while maintaining our personal approach to every
                      client. Whether it’s a small corporate logo or a large-scale custom
                      application, Vectorart Digitizing takes your embroidery to the next level.
                    </p>
                    <p className="font-weight-bold">Our Next-Level Digitizing Services include:</p>
                    <ul className="list-unstyled">
                      {[
                        "Precision Digitizing",
                        "Innovative Design Concepts",
                        "Optimized Trims",
                        "High-Efficiency Sewing",
                        "Reduced Travel Times",
                        "Consistent, Reliable Output"
                      ].map((item, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + (i * 0.1) }}
                          viewport={{ once: true }}
                          style={{ marginBottom: '8px' }}
                        >
                           <i className="fa fa-check text-danger mr-2"></i> {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          <div className="vlt-gap-80"></div>
          <div id="content"></div>
        </div>
      </main>
    </>
  );
};

export default DigitizingPage;