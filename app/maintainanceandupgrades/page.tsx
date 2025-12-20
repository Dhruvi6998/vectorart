"use client";

import Head from "next/head";
import { motion, easeOut } from "framer-motion";
import React from "react";

// Helper component for list items
const ListItem = ({ children }: { children: React.ReactNode }) => (
  <p>
    <span style={{ marginRight: "5px" }}>&rarr;</span>
    {children}
  </p>
);

// Reusable AOS-like fade animation
const fadeVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOut,
      delay,
    },
  }),
};

const MaintenanceUpgradesPage = () => {
  const title =
    "Vectorart.co - Maintain & Upgrades Your Systems with latest Techonology.";
  const keywords = "Oder, upgrades ";
  const description =
    "Maximize efficiency with our business process automation and integration services. VectorArt.co ensures seamless processes and enhanced system performance";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
      </Head>

      {/* Site overlay */}
      <div className="vlt-site-overlay"></div>

      {/* Main */}
      <main className="vlt-main">
        <div className="vlt-page-content">
          {/* Page Header */}
          <section
            className="has-white-color"
            style={{
              backgroundImage:
                "url(assets/img/pages/aboutus/aboutusbg.jpg)",
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
                      Maintainance & Upgrades
                    </h1>
                  </div>
                  <div className="col-md-6"></div>
                </div>
              </div>
            </div>

            <div className="vlt-gap-150"></div>
          </section>

          <div className="vlt-gap-80"></div>

          {/* Main Content */}
          <section>
            <div className="container">
              {/* In Brief */}
              <motion.div
                className="row"
                variants={fadeVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.1}
              >
                <div className="text-center">
                  <div className="vlt-animated-block">
                    <h2 className="vlt-section-title__title">In Brief</h2>
                    <p>
                      Get the most out of your existing systems and run them at
                      their full potential with our maintenance and upgrade
                      services.
                    </p>
                    <p>
                      Using multiple systems? Do not want to re-invest in a
                      larger unified system?
                    </p>
                    <p>
                      Our application integration service is the right choice of
                      services that ensure communication of data between two or
                      more discrete systems to achieve the desired result.
                    </p>
                    <p>
                      Our technology experts geared with the right knowledge of
                      integrating platforms and protocols ensure seamless
                      integration making business process hassle free.
                    </p>
                    <p>
                      From automating document generation to automated data
                      population our industry and technology experts work with
                      you to streamline your business with technology based
                      automation.
                    </p>
                  </div>

                  <div className="vlt-gap-80"></div>
                </div>
              </motion.div>

              <div className="vlt-gap-30"></div>

              {/* Services */}
              <motion.div
                className="text-left"
                variants={fadeVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.2}
              >
                <h6>Services</h6>
                <ListItem>Technical Support.</ListItem>
                <ListItem>Application Integration.</ListItem>
                <ListItem>Business Process Automation.</ListItem>
                <ListItem>Version upgrades.</ListItem>
              </motion.div>

              <div className="vlt-gap-30"></div>

              {/* Key Solutions */}
              <motion.div
                className="text-left"
                variants={fadeVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.25}
              >
                <h6>Key Solutions provided to customer</h6>
                <ListItem>
                  Inventory Status: Display and provide estimation of inventory
                  on website.
                </ListItem>
                <ListItem>
                  Simplified Interfaces: Simple interfaces for production of
                  labor to update order status and inventory consumption.
                </ListItem>
                <ListItem>
                  Automated Artwork tagging: Automatically tagging of art and
                  order based on business rules.
                </ListItem>
                <ListItem>
                  Order Posting: Automatically post orders from website to
                  accounting applications.
                </ListItem>
                <ListItem>
                  Order Status: Display and update order status on the website.
                </ListItem>
                <ListItem>
                  Online Proof Approval: Integrate online proof approval with
                  order management system.
                </ListItem>
                <ListItem>
                  System version upgrade: Upgrades to newer system version for
                  better productivity and processing.
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

export default MaintenanceUpgradesPage;
