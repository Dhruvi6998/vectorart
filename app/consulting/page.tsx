"use client";

import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";

// === AOS fade equivalent ===
const fadeAOS = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Helper component for list items
const ListItem = ({ children }: { children: React.ReactNode }) => (
  <p style={{ display: "flex", alignItems: "center", gap: "8px" }}>
    <span style={{ fontSize: "1.2em", color: "#007bff" }}>&rarr;</span>
    {children}
  </p>
);

const ConsultingPage = () => {
  const title = "Vectorart.co: Strategic Tech Consulting for Seamless Solutions";
  const keywords = "technology, consulting, Vector art , Graphic design";
  const description =
    "Vectorart.co is your technology and marketing consulting partner for savvy decisions and process alignment.";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
      </Head>

      <div className="vlt-site-overlay"></div>

      <main className="vlt-main">
        <div className="vlt-page-content">

          {/* HERO */}
          <section
            className="has-white-color"
            style={{
              backgroundImage: "url(assets/img/pages/aboutus/aboutusbg.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="vlt-page-title vlt-page-title--style-4">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <h1
                      className="vlt-page-title__title"
                      style={{
                        color: "white",
                        fontSize: "4rem",
                        fontWeight: "700",
                      }}
                    >
                      Consulting
                    </h1>
                  </div>
                  <div className="col-md-6"></div>
                </div>
              </div>
            </div>
            <div className="vlt-gap-150"></div>
          </section>

          <div className="vlt-gap-80"></div>

          {/* CONTENT */}
          <section>
            <div className="container">

              {/* IN BRIEF (data-aos="fade" data-aos-delay="100") */}
              <motion.div
                className="row"
                variants={fadeAOS}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="text-center">
                  <div className="vlt-animated-block">
                    <h2 className="vlt-section-title__title">In Brief</h2>
                    <p>
                      Finding a right partner who understands your business
                      operations and the technology together is always a key
                      challenge.
                    </p>
                    <p>
                      Vector Art consultants work with you not only to make
                      informed technology decisions but also help you gear up
                      with correct technology information based on your business
                      processes that help you work with existing or new
                      technology implementation of your choice. The key match of
                      Promotional Industry knowledge and variety of technology
                      expertise makes AWS a consulting partner of choice for
                      most businesses, especially promotional suppliers.
                    </p>
                  </div>
                  <div className="vlt-gap-80"></div>
                </div>
              </motion.div>

              <div className="vl-gap-30"></div>

              {/* VECTOR ART ADVANTAGE (delay 200) */}
              <motion.div
                className="text-left"
                variants={fadeAOS}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h6>Vector Art Advantage:</h6>
                <ListItem>Experienced Technology Professionals.</ListItem>
                <ListItem>Knowledge of Promotional Industry.</ListItem>
                <ListItem>Wide expertise areas.</ListItem>
              </motion.div>

              <div className="vlt-gap-30"></div>

              {/* SERVICES OFFERED (delay 250) */}
              <motion.div
                className="text-left"
                variants={fadeAOS}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
              >
                <h6>Services offered:</h6>
                <ListItem>
                  Existing technology evaluation: Get more out of your existing
                  setup or know if they are well past their use by date.
                </ListItem>
                <ListItem>
                  Cross estimation: Get a competitive estimation for the amount
                  of work required.
                </ListItem>
                <ListItem>
                  Project Management: Oversee your vendors or in house employees
                  to efficiently manage project with best practices in
                  technology.
                </ListItem>
                <ListItem>
                  Vendor Engagement and short listing: Know pros and cons for
                  each vendor and know what they are really promising.
                </ListItem>
                <ListItem>
                  Requirement definition: Take the first step towards on time
                  within budget software implementation and provide your vendor
                  with detailed requirements and structured RFQ.
                </ListItem>
              </motion.div>

              <div className="vlt-gap-80"></div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default ConsultingPage;
