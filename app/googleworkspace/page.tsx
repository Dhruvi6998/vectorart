"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, easeOut } from 'framer-motion';
import {
    IoCloudDoneOutline,
    IoShieldHalfOutline,
    IoPeopleCircleOutline,
    IoBriefcaseOutline,
    IoCheckmarkCircle,
} from "react-icons/io5";

// Animation Variants for re-use
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.6,
            ease: easeOut
        }
    })
};

export default function GoogleWorkspacePage() {
    // State for Accordions
    const [openFeature, setOpenFeature] = useState<number | null>(null);
    const [openService, setOpenService] = useState<number | null>(null);

    const toggleFeature = (index: number) => setOpenFeature(openFeature === index ? null : index);
    const toggleService = (index: number) => setOpenService(openService === index ? null : index);

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
                                            Google Workspace
                                        </motion.h1>
                                    </div>
                                    <div className="col-md-6"></div>
                                </div>
                            </div>
                        </div>
                        <div className="vlt-gap-150"></div>
                    </section>

                    <div className="vlt-gap-80"></div>

                    {/* Section: Intro */}
                    <section>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6">
                                    <motion.img 
                                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                                        src="/assets/img/pages/googleworkspace/gw_intro.png" 
                                        alt="Google Workspace intro" 
                                    />
                                    <div className="vlt-gap-30--sm"></div>
                                </div>
                                <div className="col-md-6" style={{ display: 'flex', alignItems: 'center' }}>
                                    <div className="text-center">
                                        <motion.div 
                                            className="vlt-animated-block"
                                            initial="hidden" whileInView="visible" viewport={{ once: true }}
                                        >
                                            <motion.h3 className="vlt-section-title__title" variants={fadeInUp} custom={1}>
                                                Google Workspace Reseller / Partner in USA & India
                                            </motion.h3>
                                            <div className="vlt-gap-30"></div>
                                            <motion.p variants={fadeInUp} custom={2}>
                                                Google Workspace (formerly known as G Suite) is an all-in-one suite of web applications that assists your team to collaborate better and generate business productivity. It offers numerous features and functionalities such as Gmail (professional email), Docs, Meet, Cloud Search, and lots more. You can buy Gemini for Google Workspace add-on separately.
                                            </motion.p>
                                            <motion.p variants={fadeInUp} custom={3}>
                                                Vector Art offers services as a certified Google Workspace reseller in Mumbai, Bangalore, Chennai, Delhi, and other cities in India and the US. Google Workspace helps businesses to boost their overall productivity and value significantly with its highly collaborative and seamless tools.
                                            </motion.p>
                                            <motion.p variants={fadeInUp} custom={4}>
                                                As a Google Cloud Partner, Vector Art provides Google Workspace deployment management services, data migration, mobile device integration, change management solutions, and a lot more.
                                            </motion.p>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="vlt-gap-120"></div>
                    </section>

                    {/* Section: We got your back */}
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
                                    { icon: <IoCloudDoneOutline size={70} />, text: "Do you want effective cloud email solutions?" },
                                    { icon: <IoShieldHalfOutline size={70} />, text: "Are you looking for a secure & safe collaborative solution?" },
                                    { icon: <IoPeopleCircleOutline size={70} />, text: "Do you want a smooth team collaboration?" },
                                    { icon: <IoBriefcaseOutline size={70} />, text: "Do you wish to increase your productivity at work?" }
                                ].map((item, i) => (
                                    <div className="col-lg-3" key={i}>
                                        <motion.div 
                                            className="vlt-animated-block" 
                                            initial="hidden" whileInView="visible" viewport={{ once: true }} 
                                            variants={fadeInUp} custom={i}
                                        >
                                            <div className="vlt-service vlt-service--style-2">
                                                <div className="vlt-service__media" style={{ color: '#e82e31' }}>
                                                    {item.icon}
                                                </div>
                                                <div className="vlt-service__content">
                                                    <h5 className="vlt-service__title">{item.text}</h5>
                                                    <div className="vlt-gap-30"></div>
                                                </div>
                                            </div>
                                            <div className="vlt-gap-60--md"></div>
                                        </motion.div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="vlt-gap-120"></div>
                    </section>

                    {/* Section: Features Accordion */}
                    <section>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-10 col-lg-8 text-center">
                                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                                        <h3 className="vlt-section-title__title">Google Workspace</h3>
                                        <h5>Features</h5>
                                        <div className="vlt-gap-30"></div>
                                        <p>Transform the way you work with Google Workspace – your all-in-one suite of powerful tools designed to boost productivity, enhance collaboration, and streamline your business operations.</p>
                                    </motion.div>
                                </div>
                            </div>
                            <div className="vlt-gap-80"></div>
                            <div className="row">
                                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} custom={2}>
                                    {[
                                        { t: "Easy collaboration with Google Docs", c: "Google Docs helps teams to collaborate anytime, anywhere while managing a doc together in real-time." },
                                        { t: "Merge Data On Sheets", c: "Combine your entire data in a single “Sheet” with IMPORTRANGE function. It is recommended to import data rather than merely copying it." },
                                        { t: "Extract Valuable Work Insights", c: "The Work Insights dashboard helps users to generate information and manage work in a better way. This tool also helps generate analysis, reports, etc." },
                                        { t: "Close Caption In Google Slides", c: "“Closed captioning” feature enables Slides to transcribe whatever a user speaks on the slide. Click on Present and Closed Captioning." },
                                        { t: "Smart Compose Feature", c: "A predictive writing suggestion feature that enables Gmail to autocomplete email as a user composes. It auto-fills in commonly used sentences." },
                                        { t: "Security And Compliance", c: "Google Workspace security platform is designed to detect threats that can affect cloud-based apps. This is trusted by businesses to enable optimum higher security." }
                                    ].map((item, i) => (
                                        <React.Fragment key={i}>
                                            <button className={`accordion ${openFeature === i ? 'accactive' : ''}`} onClick={() => toggleFeature(i)}>
                                                <b>{item.t}</b>
                                            </button>
                                            <AnimatePresence>
                                                {openFeature === i && (
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
                                        </React.Fragment>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                        <div className="vlt-gap-120"></div>
                    </section>

                    {/* Section: Services Accordion */}
                    <section>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-10 col-lg-8 text-center">
                                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                                        <h3 className="vlt-section-title__title">Google Workspace Services</h3>
                                        <div className="vlt-gap-30"></div>
                                        <p>Transform the way you work with Google Workspace – your all-in-one suite of powerful tools designed to boost collaboration, enhance productivity, and streamline communication. Whether you’re working from the office, home, or on the go, Google Workspace provides seamless access to essential applications like Gmail, Google Drive, Docs, Sheets, and Meet. Experience real-time collaboration, secure cloud storage, and intelligent organization all within a single, intuitive platform. Unlock the full potential of your team and take your projects to new heights with Google Workspace.</p>
                                    </motion.div>
                                </div>
                            </div>
                            <div className="vlt-gap-80"></div>
                            <div className="row">
                                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} custom={2}>
                                    {[
                                        { t: "Google Workspace Setup and Configuration", c: "Vector Art specializes in the seamless setup and configuration of Google Workspace. Our team of experts will ensure that your organization's transition is smooth and efficient." },
                                        { t: "Google Workspace Migration Assistance", c: "If you're switching from a different email hosting service provider, our data migration specialists will ensure a smooth and secure transfer." },
                                        { t: "Google Workspace Training and Support", c: "We offer comprehensive training and support services to help your organization leverage the full potential of Google Workspace." },
                                        { t: "Google Workspace Consulting", c: "We provide expert consulting services to help your organization get the most out of Google Workspace." }
                                    ].map((item, i) => (
                                        <React.Fragment key={i}>
                                            <button className={`accordion ${openService === i ? 'accactive' : ''}`} onClick={() => toggleService(i)}>
                                                <b>{item.t}</b>
                                            </button>
                                            <AnimatePresence>
                                                {openService === i && (
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
                                        </React.Fragment>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                        <div className="vlt-gap-120"></div>
                    </section>

                    {/* Section: Pricing */}
                    <section className="has-white-color" style={{ backgroundColor: 'black' }}>
                        <div className="vlt-gap-80"></div>
                        <div className="container-fluid">
                            <div className="row" style={{ justifyContent: 'center' }}>
                                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center">
                                    <h2 className="vlt-section-title__title text-light">Pricings</h2>
                                    <p className="vlt-section-title__text">We offer a wide range of packages to choose.</p>
                                </motion.div>
                                <div className="vlt-gap-90"></div>
                            </div>
                            <div className="row">
                                {/* Starter */}
                                <div className="col-md-4">
                                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} custom={1} className="vlt-pricing-table">
                                        <div className="vlt-pricing-table__header">
                                            <h4 className="vlt-pricing-table__title">Google Business Starter</h4>
                                        </div>
                                        <div className="vlt-pricing-table__price"><span className="currency">$</span><span className="price">30</span><span className="period">/yr</span></div>
                                        <div className="vlt-pricing-table__content text-dark">
                                            <ul>
                                                <li className="active"><IoCheckmarkCircle style={{ color: '#e82e31' }} /> Gmail, Calendar, Groups for Business</li>
                                                <li className="active"><IoCheckmarkCircle style={{ color: '#e82e31' }} /> Digital whiteboarding with Jamboard</li>
                                                <li className="active"><IoCheckmarkCircle style={{ color: '#e82e31' }} /> Drive storage and Docs editors</li>
                                                <li className="active"><IoCheckmarkCircle style={{ color: '#e82e31' }} /> Admin-controlled mailing lists, User-controlled mailing lists</li>
                                                <li className="active"><IoCheckmarkCircle style={{ color: '#e82e31' }} /> Email storage (shared with documents and photos): 30GB</li>
                                                <li className="active"><IoCheckmarkCircle style={{ color: '#e82e31' }} /> Attachment size limit (sending): 25MB, Attachment size limit (receiving): 50MB</li>
                                                <li className="active"><IoCheckmarkCircle style={{ color: '#e82e31' }} /> Recipients per message (To, Cc, Bcc fields combined): 2,000 (500 external)</li>
                                                <li className="active"><IoCheckmarkCircle style={{ color: '#e82e31' }} /> Junk email filtering and virus blocking</li>
                                            </ul>
                                        </div>
                                        <div className="vlt-pricing-table__action">
                                            <Link className="vlt-btn vlt-btn--secondary vlt-btn--lg" href="/contactus">Order Now!</Link>
                                        </div>
                                    </motion.div>
                                    <div className="vlt-gap-60--sm"></div>
                                </div>

                                {/* Standard (Featured) */}
                                <div className="col-md-4">
                                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} custom={2} 
                                        className="vlt-pricing-table vlt-pricing-table--featured" 
                                        style={{ backgroundImage: 'url(/assets/img/root/pricing-table.png)' }}
                                    >
                                        <div className="vlt-pricing-table__header">
                                            <h4 className="vlt-pricing-table__title">Google Business Standard</h4>
                                        </div>
                                        <div className="vlt-pricing-table__price"><span className="currency">$</span><span className="price">120</span><span className="period">/yr</span></div>
                                        <div className="vlt-pricing-table__content">
                                            <ul>
                                                <li className="active"><IoCheckmarkCircle style={{ color: '#e82e31' }} /> Gmail, Calendar, Groups for Business</li>
                                                <li className="active"><IoCheckmarkCircle style={{ color: '#e82e31' }} /> Digital whiteboarding with Jamboard</li>
                                                <li className="active"><IoCheckmarkCircle style={{ color: '#e82e31' }} /> Drive storage and Docs editors</li>
                                                <li className="active"><IoCheckmarkCircle style={{ color: '#e82e31' }} /> Admin-controlled mailing lists, User-controlled mailing lists</li>
                                                <li className="active"><IoCheckmarkCircle style={{ color: '#e82e31' }} /> Email storage (shared with documents and photos): 2TB</li>
                                                <li className="active"><IoCheckmarkCircle style={{ color: '#e82e31' }} /> Attachment size limit (sending): 25MB, Attachment size limit (receiving): 50MB</li>
                                                <li className="active"><IoCheckmarkCircle style={{ color: '#e82e31' }} /> Recipients per message (To, Cc, Bcc fields combined): 2,000 (500 external)</li>
                                                <li className="active"><IoCheckmarkCircle style={{ color: '#e82e31' }} /> Junk email filtering and virus blocking</li>
                                                <li className="active"><IoCheckmarkCircle style={{ color: '#e82e31' }} /> Advanced Drive auditing and reports (Drive audit log)</li>
                                                <li className="active"><IoCheckmarkCircle style={{ color: '#e82e31' }} /> Advanced Drive sharing permissions</li>
                                                <li className="active"><IoCheckmarkCircle style={{ color: '#e82e31' }} /> Manage Drive metadata (custom labels and fields)</li>
                                                <li className="active"><IoCheckmarkCircle style={{ color: '#e82e31' }} /> Maximum number of participants per meeting: 150</li>
                                                <li className="active"><IoCheckmarkCircle style={{ color: '#e82e31' }} /> Automatic framing, Noise cancellation, Create Breakout rooms, Polls, Q&A</li>
                                                <li className="active"><IoCheckmarkCircle style={{ color: '#e82e31' }} /> Automatically add events to calendars</li>
                                            </ul>
                                        </div>
                                        <div className="vlt-pricing-table__action">
                                            <Link className="vlt-btn vlt-btn--tertiary vlt-btn--lg" href="/contactus">Order Now!</Link>
                                        </div>
                                    </motion.div>
                                    <div className="vlt-gap-60--sm"></div>
                                </div>

                                {/* Plus */}
                                <div className="col-md-4 position-relative">
                                    <img className="vlt-particle" src="/assets/img/root/square-plus-pattern-long.png" alt="pattern" style={{ position: 'absolute', bottom: '-240px', right: '-130px', maxWidth: '210px' }} />
                                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} custom={3} className="vlt-pricing-table">
                                        <div className="vlt-pricing-table__header">
                                            <h4 className="vlt-pricing-table__title">Google Workspace Business Plus</h4>
                                        </div>
                                        <div className="vlt-pricing-table__price"><span className="currency">$</span><span className="price">220</span><span className="period">/yr</span></div>
                                        <div className="vlt-pricing-table__content text-dark">
                                            <ul>
                                                <li className="active"><IoCheckmarkCircle style={{ color: '#e82e31' }} /> Gmail, Calendar, Groups for Business</li>
                                                <li className="active"><IoCheckmarkCircle style={{ color: '#e82e31' }} /> Digital whiteboarding with Jamboard</li>
                                                <li className="active"><IoCheckmarkCircle style={{ color: '#e82e31' }} /> Drive storage and Docs editors</li>
                                                <li className="active"><IoCheckmarkCircle style={{ color: '#e82e31' }} /> Admin-controlled mailing lists, User-controlled mailing lists</li>
                                                <li className="active"><IoCheckmarkCircle style={{ color: '#e82e31' }} /> Email storage (shared with documents and photos): 2TB</li>
                                                <li className="active"><IoCheckmarkCircle style={{ color: '#e82e31' }} /> Attachment size limit (sending): 25MB, Attachment size limit (receiving): 50MB</li>
                                                <li className="active"><IoCheckmarkCircle style={{ color: '#e82e31' }} /> Recipients per message (To, Cc, Bcc fields combined): 2,000 (500 external)</li>
                                                <li className="active"><IoCheckmarkCircle style={{ color: '#e82e31' }} /> Maximum send resolution: 1080p</li>
                                                <li className="active"><IoCheckmarkCircle style={{ color: '#e82e31' }} /> Track attendance in Google Meet(requires 5 or more attendees)</li>
                                                <li className="active"><IoCheckmarkCircle style={{ color: '#e82e31' }} /> Control Slides presentations, Transcribe meetings & save them to Drive</li>
                                                <li className="active"><IoCheckmarkCircle style={{ color: '#e82e31' }} /> Junk email filtering and virus blocking</li>
                                                <li className="active"><IoCheckmarkCircle style={{ color: '#e82e31' }} /> Advanced Drive auditing and reports (Drive audit log)</li>
                                                <li className="active"><IoCheckmarkCircle style={{ color: '#e82e31' }} /> Advanced Drive sharing permissions</li>
                                                <li className="active"><IoCheckmarkCircle style={{ color: '#e82e31' }} /> Manage Drive metadata (custom labels and fields)</li>
                                                <li className="active"><IoCheckmarkCircle style={{ color: '#e82e31' }} /> Maximum number of participants per meeting: 150</li>
                                                <li className="active"><IoCheckmarkCircle style={{ color: '#e82e31' }} /> Automatic framing, Noise cancellation, Create Breakout rooms, Polls, Q&A</li>
                                                <li className="active"><IoCheckmarkCircle style={{ color: '#e82e31' }} /> Automatically add events to calendars</li>
                                                <li className="active"><IoCheckmarkCircle style={{ color: '#e82e31' }} /> Advanced mobile management, Zero-touch enrollment for Android devices, Admin approval of devices, Remote device wipe, Windows device management</li>
                                            </ul>
                                        </div>
                                        <div className="vlt-pricing-table__action">
                                            <Link className="vlt-btn vlt-btn--secondary vlt-btn--lg" href="/contactus">Order Now!</Link>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="vlt-gap-80"></div>
                                <div className="row" style={{ justifyContent: 'center' }}>
                                    <motion.a 
                                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                                        className="vlt-btn vlt-btn--primary vlt-btn--lg" 
                                        href="/assets/files/Googleworkspace.pdf" download
                                    >
                                        Download Detailed Pricings
                                    </motion.a>
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