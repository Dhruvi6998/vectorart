"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoCogOutline } from "react-icons/io5";
import { motion } from "framer-motion";

// Animation variants
const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const CloudEmailSolutionsPage: React.FC = () => {
  return (
    <>
      {/* Site overlay */}
      <div className="vlt-site-overlay"></div>

      {/* Main */}
      <main className="vlt-main">
        {/* Page content */}
        <div className="vlt-page-content">
          {/* Page Title */}
          <section
            className="has-white-color"
            style={{
              backgroundImage:
                "url(/assets/img/pages/designanddataservices/Designanddataservicesbg.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="vlt-page-title vlt-page-title--style-4">
              <div className="container">
                <div className="row">
                  <div className="col-md-7">
                    <motion.h1
                      className="vlt-page-title__title"
                      style={{color: "white", fontSize: "4rem", fontWeight: "700"  }}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      Cloud Email <br />
                      Solutions
                    </motion.h1>
                  </div>
                  <div className="col-md-3"></div>
                </div>
              </div>
            </div>

            <div className="vlt-gap-150"></div>
          </section>

          <div className="vlt-gap-80"></div>

          {/* Intro Section */}
          <section>
            <div className="container">
              <div className="row">
                <div className="text-center">
                  <motion.div
                    className="vlt-animated-block"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInVariants}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <h2 className="vlt-section-title__title">
                      Cloud Email Solutions
                    </h2>
                    <p>
                      Every company needs a corporate email address to show its
                      identity in the market. Vector Art helps you choose the
                      right emailing solution as per your needs that helps you
                      save cost & improve productivity. Recognized by experts &
                      adopted by companies across domains.
                    </p>
                  </motion.div>

                  <div className="vlt-gap-80"></div>
                </div>
              </div>
            </div>

            {/* Services Section */}
            <div className="container-fluid">
              <motion.div 
                className="row"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
              >
                {/* Google Workspace */}
                <div className="col-lg-3">
                  <motion.div
                    className="vlt-animated-block aos-init aos-animate"
                    variants={fadeInVariants}
                    transition={{ duration: 0.6 }}
                  >
                    <div
                      className="vlt-service vlt-service--style-2"
                      style={{ minHeight: "580px" }}
                    >
                      <div
                        className="vlt-service__media"
                        style={{ color: "#101010" }}
                      >
                        <Image
                          src="/assets/img/pages/cloudemailsolutions/gw.png"
                          width={200}
                          height={200}
                          alt="Google Workspace"
                          style={{ width: "200px" }}
                        />
                      </div>

                      <div className="vlt-service__content">
                        <h5 className="vlt-service__title">Google Workspace</h5>

                        <p className="vlt-service__text">
                          Google Workspace, formerly G Suite, enhances teams,
                          seamless collaboration and productivity with essential
                          tools like Gmail, Docs, Meet, and Cloud Search.
                        </p>

                        <div className="vlt-gap-30"></div>

                        <Link
                          href="/googleworkspace"
                          className="vlt-btn vlt-btn--secondary vlt-btn--md"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>

                    <div className="vlt-gap-60--md"></div>
                  </motion.div>
                </div>

                {/* Google Workspace for Education */}
                <div className="col-lg-3">
                  <motion.div
                    className="vlt-animated-block aos-init aos-animate"
                    variants={fadeInVariants}
                    transition={{ duration: 0.6 }}
                  >
                    <div
                      className="vlt-service vlt-service--style-2"
                      style={{ minHeight: "580px" }}
                    >
                      <div
                        className="vlt-service__media"
                        style={{ color: "#101010" }}
                      >
                        <Image
                          src="/assets/img/pages/cloudemailsolutions/gwe.png"
                          width={200}
                          height={200}
                          alt="Google Workspace for Education"
                          style={{ width: "200px" }}
                        />
                      </div>

                      <div className="vlt-service__content">
                        <h5 className="vlt-service__title">
                          Google Workspace for Education
                        </h5>

                        <p className="vlt-service__text">
                          Google Workspace for Education lets staff and students
                          access all Google services in one place, avoiding high
                          monthly fees.
                        </p>

                        <div className="vlt-gap-30"></div>

                        <Link
                          href="/googleworkspaceforeducation"
                          className="vlt-btn vlt-btn--secondary vlt-btn--md"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>

                    <div className="vlt-gap-60--md"></div>
                  </motion.div>
                </div>

                {/* Microsoft 365 */}
                <div className="col-lg-3">
                  <motion.div
                    className="vlt-animated-block aos-init aos-animate"
                    variants={fadeInVariants}
                    transition={{ duration: 0.6 }}
                  >
                    <div
                      className="vlt-service vlt-service--style-2"
                      style={{ minHeight: "580px" }}
                    >
                      <div
                        className="vlt-service__media"
                        style={{ color: "#101010" }}
                      >
                        <Image
                          src="/assets/img/pages/cloudemailsolutions/m365.png"
                          width={200}
                          height={200}
                          alt="Microsoft 365"
                          style={{ width: "200px" }}
                        />
                      </div>

                      <div className="vlt-service__content">
                        <h5 className="vlt-service__title">Microsoft 365</h5>

                        <p className="vlt-service__text">
                          Microsoft 365 is a top suite for business
                          productivity, offering cloud solutions for remote
                          access and real-time collaboration include premium
                          applications.
                        </p>

                        <div className="vlt-gap-30"></div>

                        <Link
                          href="/microsoft365"
                          className="vlt-btn vlt-btn--secondary vlt-btn--md"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>

                    <div className="vlt-gap-60--md"></div>
                  </motion.div>
                </div>

                {/* Request Comparison */}
                <div className="col-lg-3">
                  <motion.div
                    className="vlt-animated-block aos-init aos-animate"
                    variants={fadeInVariants}
                    transition={{ duration: 0.6 }}
                  >
                    <div
                      className="vlt-service vlt-service--style-2"
                      style={{ minHeight: "580px" }}
                    >
                      <div
                        className="vlt-service__media"
                        style={{ color: "#101010" }}
                      >
                        <IoCogOutline style={{ fontSize: "200px", color: "#e82e31" }} />
                      </div>

                      <div className="vlt-service__content">
                        <h5 className="vlt-service__title">
                          Request Comparison
                        </h5>

                        <p className="vlt-service__text">
                          Looking for a cloud email comparison in India? Provide
                          your details below, and we'll send you a comprehensive
                          comparison of all available solutions.
                        </p>

                        <div className="vlt-gap-30"></div>

                        <Link
                          href="/contact"
                          className="vlt-btn vlt-btn--secondary vlt-btn--md"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>

                    <div className="vlt-gap-60--md"></div>
                  </motion.div>
                </div>
              </motion.div>

              <div className="vlt-gap-80"></div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default CloudEmailSolutionsPage;