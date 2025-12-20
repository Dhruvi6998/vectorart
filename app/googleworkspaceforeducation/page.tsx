"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  IoCloudDoneOutline, 
  IoLibraryOutline, 
  IoPeopleCircleOutline, 
  IoBriefcaseOutline,
  IoCheckmark
} from "react-icons/io5";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

export default function GoogleWorkspaceEducation() {
  // Separate states for the two accordion sections
  const [openIncluded, setOpenIncluded] = useState<number | null>(null);
  const [openBenefits, setOpenBenefits] = useState<number | null>(null);

  const toggleIncluded = (index: number) => setOpenIncluded(openIncluded === index ? null : index);
  const toggleBenefits = (index: number) => setOpenBenefits(openBenefits === index ? null : index);

  return (
    <>
      <style jsx>{`
        .accordion {
          background-color: #000;
          color: #fff;
          cursor: pointer;
          padding: 38px;
          width: 100%;
          border: none;
          text-align: left;
          font-size: 15px;
          position: relative;
          transition: background 0.3s ease;
          border-bottom: 1px solid #222;
        }

        .accordion:hover,
        .accactive {
          background-color: rgb(22, 20, 20);
        }

        .accordion:after {
          content: '+';
          position: absolute;
          right: 30px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 22px;
        }

        .accactive:after {
          content: '-';
        }

        .panel-content {
          padding: 20px 38px;
          background-color: rgba(78, 78, 78, 1);
          color: #fff;
        }

        .panel-content p {
          margin: 0;
          line-height: 1.6;
        }
      `}</style>

      <div className="vlt-site-overlay"></div>

      <main className="vlt-main">
        <div className="vlt-page-content">
          
          {/* Section: Page Title */}
          <section className="has-white-color" style={{ backgroundImage: 'url(/assets/img/pages/aboutus/aboutusbg.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className="vlt-page-title vlt-page-title--style-4">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <motion.h1 
                      className="vlt-page-title__title" 
                      style={{ color: 'white' }}
                      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                    >
                      Google Workspace for Education
                    </motion.h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="vlt-gap-150"></div>
          </section>

          <div className="vlt-gap-80"></div>

          {/* Section: Intro */}
          <section>
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <motion.img 
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                    src="/assets/img/pages/googleworkspace/GW-edu-intro.png" 
                    alt="Education Intro" 
                  />
                  <div className="vlt-gap-30--sm"></div>
                </div>
                <div className="col-md-6">
                  <div className="text-center">
                    <motion.div 
                      className="vlt-animated-block"
                      initial="hidden" whileInView="visible" viewport={{ once: true }}
                    >
                      <motion.h3 className="vlt-section-title__title" variants={fadeInUp} custom={1}>
                        Google Workspace for Education Authorized Partner in USA & India
                      </motion.h3>
                      <div className="vlt-gap-30"></div>
                      <motion.p variants={fadeInUp} custom={2}>
                        Google Workspace for Education (Formerly G Suite for Education) is one of the greatest educational tools created by Google. It allows staff and students to log in and use Google in one place rather than paying big monthly subscriptions for several licenses. Vector Art understands the importance of education and believes that all students should have access to advanced technology to achieve their full potential.
                      </motion.p>
                      <motion.p variants={fadeInUp} custom={3}>
                        Using Google Workspace for Education at your school allows you to keep everything on one platform and manage it from a single administrative panel. It is a powerful tool for schools, continuously developing to meet the demands of teachers and students.
                      </motion.p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
            <div className="vlt-gap-120"></div>
          </section>

          {/* Section: We Got Your Back */}
          <section>
            <div className="text-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <h3 className="vlt-section-title__title">We got your back!</h3>
                <div className="vlt-gap-30"></div>
              </motion.div>
            </div>
            <div className="container-fluid">
              <div className="row">
                {[
                  { icon: <IoCloudDoneOutline size={70} />, text: "Do you want a secure cloud-based system for educational institutes?" },
                  { icon: <IoLibraryOutline size={70} />, text: "Do you wish to have a more impactful teaching experience?" },
                  { icon: <IoPeopleCircleOutline size={70} />, text: "Create more collaboration opportunities between teachers & students?" },
                  { icon: <IoBriefcaseOutline size={70} />, text: "Want to provide the latest cloud technology to your students?" }
                ].map((item, i) => (
                  <div className="col-lg-3" key={i}>
                    <motion.div 
                      className="vlt-service vlt-service--style-2 text-center"
                      initial="hidden" whileInView="visible" viewport={{ once: true }} 
                      variants={fadeInUp} custom={i}
                    >
                      <div className="vlt-service__media" style={{ color: '#e82e31' }}>{item.icon}</div>
                      <div className="vlt-service__content">
                        <h5 className="vlt-service__title">{item.text}</h5>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
            <div className="vlt-gap-120"></div>
          </section>

          {/* Section: Includes (Centered Accordions) */}
          <section>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-8 text-center">
                  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                    <h3 className="vlt-section-title__title">Google Workspace</h3>
                    <h5>For Education Includes</h5>
                    <div className="vlt-gap-30"></div>
                    <p>Transform your classroom with Google Workspace for Education! Empower students and teachers with innovative tools for collaboration, communication, and creativity.</p>
                  </motion.div>
                </div>
              </div>
              <div className="vlt-gap-60"></div>
              <div className="row justify-content-center">
                <motion.div className="col-md-10 col-lg-9" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} custom={2}>
                  {[
                    { t: "Google Email", c: "It provides powerful feature-rich email connectivity for teachers and students. Gmail is one of the most secure and private email services. You also receive a personalized email address for your institution and schools." },
                    { t: "Google Classrooms", c: "Google Classroom makes it simple for students and teachers to collaborate, whether they are in or out of the classroom. A great tool for creating, sharing, and grading learning materials." },
                    { t: "Google Docs, Sheets, Slides, and Forms", c: "No longer need software to create docs, sheets, and slides from your browser. Collaborate with multiple people at the same time to ensure everyone has the most recent version." },
                    { t: "Google Drive", c: "Accessing learning resources from your laptop, tablet, or phone has never been easier. Keep all of your assignments in one secure location." },
                    { t: "Security & Administrative Control", c: "Setup and management are simplified thanks to centralized administration. Manage users and set up security options like 2-step verification and security keys." },
                    { t: "Shared Calendar", c: "Organize your schedule and integrate it easily with Gmail, Drive, and Meet. It provides shared calendars that allow teachers, staff, and students to collaborate." },
                    { t: "Google Meet", c: "Video conferencing that facilitates continuous learning. Google Meet brings together students and teachers from all around the world to teach and learn." },
                    { t: "Google Chat", c: "Allows students and teachers to work fluidly and efficiently from anywhere, including direct messages and group conversations." }
                  ].map((item, i) => (
                    <div key={i}>
                      <button className={`accordion ${openIncluded === i ? 'accactive' : ''}`} onClick={() => toggleIncluded(i)}>
                        <b>{item.t}</b>
                      </button>
                      <AnimatePresence>
                        {openIncluded === i && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            style={{ overflow: 'hidden' }}
                          >
                            <div className="panel-content">
                              <p>{item.c}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
            <div className="vlt-gap-120"></div>
          </section>

          {/* Section: Benefits (Centered Accordions) */}
          <section>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-8 text-center">
                  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                    <h3 className="vlt-section-title__title">Benefits of</h3>
                    <h5>For Education Includes</h5>
                    <div className="vlt-gap-30"></div>
                    <p>Experience real-time collaboration, secure cloud storage, and intelligent organization all within a single, intuitive platform.</p>
                  </motion.div>
                </div>
              </div>
              <div className="vlt-gap-60"></div>
              <div className="row justify-content-center">
                <motion.div className="col-md-10 col-lg-9" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} custom={2}>
                  {[
                    { t: "Great Storage Option", c: "You'll never have to worry about running out of storage space with Google Workspace for Education. Keep all your files in the cloud rather than on hard drives." },
                    { t: "Secure Your School Data", c: "The cloud-based service guards against a variety of data dangers, including data leaks and loss. Data is encrypted and access is strictly controlled." },
                    { t: "Increased Collaboration", c: "Having a simple way to work on files simultaneously while seeing real-time edits will make it easier for you or your students to collaborate." },
                    { t: "A Great Learning Tool", c: "An excellent place to start if you're seeking educational material or tools for teachers. Simple to learn and displays real-time progress." }
                  ].map((item, i) => (
                    <div key={i}>
                      <button className={`accordion ${openBenefits === i ? 'accactive' : ''}`} onClick={() => toggleBenefits(i)}>
                        <b>{item.t}</b>
                      </button>
                      <AnimatePresence>
                        {openBenefits === i && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            style={{ overflow: 'hidden' }}
                          >
                            <div className="panel-content">
                              <p>{item.c}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
            <div className="vlt-gap-120"></div>
          </section>

          {/* Section: Pricing */}
          <section className="has-white-color" style={{ backgroundColor: "black" }}>
            <div className="vlt-gap-80"></div>
            <div className="container-fluid">
              <div className="row justify-content-center text-center">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                  <h2 className="vlt-section-title__title text-light">Pricings</h2>
                  <p className="vlt-section-title__text">We offer a wide range of packages to choose.</p>
                </motion.div>
                <div className="vlt-gap-90"></div>
              </div>

              <div className="row">
                {/* Education Fundamentals */}
                <div className="col-md-3">
                  <motion.div className="vlt-pricing-table" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} custom={1}>
                    <div className="vlt-pricing-table__header">
                      <h4 className="vlt-pricing-table__title">Education Fundamentals</h4>
                    </div>
                    <div className="vlt-pricing-table__price">
                      <span className="currency">$</span><span className="price">30</span><span className="period">/yr</span>
                    </div>
                    <div className="vlt-pricing-table__content text-dark">
                      <ul>
                        <li className="active"><IoCheckmark color="#E82E31" /> Collaboration tools including Classroom, Docs, Sheets, Slides, Forms, and more</li>
                        <li className="active"><IoCheckmark color="#E82E31" /> Communication tools including Google Meet, Gmail, and Chat</li>
                        <li className="active"><IoCheckmark color="#E82E31" /> Data loss prevention for Gmail and Drive</li>
                        <li className="active"><IoCheckmark color="#E82E31" /> Can be used in compliance with FERPA, COPPA and GDPR</li>
                      </ul>
                    </div>
                    <div className="vlt-pricing-table__action">
                      <Link href="/contactus" className="vlt-btn vlt-btn--secondary vlt-btn--lg">Order Now!</Link>
                    </div>
                  </motion.div>
                </div>

                {/* Google Business Standard */}
                <div className="col-md-3">
                  <motion.div 
                    className="vlt-pricing-table vlt-pricing-table--featured" 
                    style={{ backgroundImage: "url(/assets/img/root/pricing-table.png)" }}
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} custom={2}
                  >
                    <div className="vlt-pricing-table__header">
                      <h4 className="vlt-pricing-table__title">Google Business Standard</h4>
                    </div>
                    <div className="vlt-pricing-table__price">
                      <span className="currency">$</span><span className="price">110</span><span className="period">/yr</span>
                    </div>
                    <div className="vlt-pricing-table__content">
                      <ul>
                        <li className="active"><IoCheckmark color="#E82E31" /> Security center to proactively prevent, detect, and remediate threats</li>
                        <li className="active"><IoCheckmark color="#E82E31" /> Advanced device and app management to perform audits and enforce security and app access rules</li>
                        <li className="active"><IoCheckmark color="#E82E31" /> Gmail log and Classroom log export for insights and analysis in BigQuery</li>
                      </ul>
                    </div>
                    <div className="vlt-pricing-table__action">
                      <Link href="/contactus" className="vlt-btn vlt-btn--tertiary vlt-btn--lg">Order Now!</Link>
                    </div>
                  </motion.div>
                </div>

                {/* Teaching & Learning Upgrade */}
                <div className="col-md-3">
                  <motion.div className="vlt-pricing-table" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} custom={3}>
                    <div className="vlt-pricing-table__header">
                      <h4 className="vlt-pricing-table__title">Teaching & Learning Upgrade</h4>
                    </div>
                    <div className="vlt-pricing-table__price">
                      <span className="currency">$</span><span className="price">200</span><span className="period">/yr</span>
                    </div>
                    <div className="vlt-pricing-table__content text-dark">
                      <ul>
                        <li className="active"><IoCheckmark color="#E82E31" /> Meetings with up to 250 participants and live streams with up to 10,000 in-domain viewers using Meet</li>
                        <li className="active"><IoCheckmark color="#E82E31" /> Premium engagement features in Meet including interactive Q&As, polls, breakout rooms, and more</li>
                        <li className="active"><IoCheckmark color="#E82E31" /> Classroom add-ons to directly integrate your favorite tools and content</li>
                        <li className="active"><IoCheckmark color="#E82E31" /> Unlimited originality reports and the ability to check for peer matches across a private repository of past student work</li>
                        <li className="active"><IoCheckmark color="#E82E31" /> Coming Soon. Transform new and existing content into engaging and interactive assignments with practice sets</li>
                      </ul>
                    </div>
                    <div className="vlt-pricing-table__action">
                      <Link href="/contactus" className="vlt-btn vlt-btn--secondary vlt-btn--lg">Order Now!</Link>
                    </div>
                  </motion.div>
                </div>

                {/* Google Workspace for Education Plus */}
                <div className="col-md-3">
                  <motion.div className="vlt-pricing-table" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} custom={4}>
                    <div className="vlt-pricing-table__header">
                      <h4 className="vlt-pricing-table__title">Google Workspace for Education Plus</h4>
                    </div>
                    <div className="vlt-pricing-table__price">
                      <span className="currency">$</span><span className="price">200</span><span className="period">/yr</span>
                    </div>
                    <div className="vlt-pricing-table__content text-dark">
                      <ul>
                        <li className="active"><IoCheckmark color="#E82E31" /> Meetings with up to 500 participants and live streams with up to 100,000 in-domain viewers using Google Meet</li>
                        <li className="active"><IoCheckmark color="#E82E31" /> Sync rosters directly to Classroom from any Student Information System</li>
                        <li className="active"><IoCheckmark color="#E82E31" /> Personalized Cloud Search for your domain to make information accessible and easy to find</li>
                        <li className="active"><IoCheckmark color="#E82E31" /> Build custom apps with AppSheet - no coding required</li>
                        <li className="active"><IoCheckmark color="#E82E31" /> Priority response from a team of education specialists</li>
                        <li className="active"><IoCheckmark color="#E82E31" /> Coming Soon. Transform new and existing content into engaging and interactive assignments with practice sets</li>
                      </ul>
                    </div>
                    <div className="vlt-pricing-table__action">
                      <Link href="/contactus" className="vlt-btn vlt-btn--secondary vlt-btn--lg">Order Now!</Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="vlt-gap-80"></div>
          </section>
        </div>
      </main>
    </>
  );
}