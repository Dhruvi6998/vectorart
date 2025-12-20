"use client";

import React from 'react';
import Head from 'next/head';
import { IoCheckmarkCircle } from "react-icons/io5";
import { motion, easeOut } from 'framer-motion';

const TechnologySolutions: React.FC = () => {
    // Reusable animation variant that mimics AOS "fade"
    const fadeUp = (delay: number = 0) => ({
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { 
            duration: 0.6, 
            delay: delay / 1000, 
            ease: easeOut,
        }
    });

    return (
        <>
            <Head>
                <title>Technology Solutions | Vectorart.co</title>
                <meta name="keywords" content="technology, solutions, marketing, Vector art , Graphic design" />
                <meta name="description" content="Discover Vectorart.co's techonology solutions for marketing success—solving challenges easily & affordably, ensuring better results." />
            </Head>

            {/*Site overlay*/}
            <div className="vlt-site-overlay"></div>

            {/*Main*/}
            <main className="vlt-main">
                {/*Page content*/}
                <div className="vlt-page-content">
                    {/*Page title*/}
                    {/*section*/}
                    <section
                        className="has-white-color"
                        style={{
                            backgroundImage: 'url(assets/img/pages/aboutus/aboutusbg.jpg)',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover'
                        }}
                    >
                        <div className="vlt-page-title vlt-page-title--style-4">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h1 className="vlt-page-title__title" style={{ color: 'white', fontSize: "4rem", fontWeight: "700" }}>
                                            Technology Solutions
                                        </h1>
                                    </div>
                                    <div className="col-md-6">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="vlt-gap-150"></div>
                    </section>

                    <div className="vlt-gap-80"></div>

                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="text-center">
                                    {/*Animated block with Framer Motion*/}
                                    <motion.div 
                                        className="vlt-animated-block" 
                                        {...fadeUp(100)}
                                    >
                                        {/*Section title*/}
                                        <h2 className="vlt-section-title__title">
                                            Your world is changing fast. Vector art technology solutions keep you on the fast track.
                                        </h2>
                                        <p>
                                            What challenges and opportunities does technology help solve for promotional Suppliers? Which investments in technology will make a positive impact on the balance sheet? We start by helping you answer these questions. Here are the key decision points:
                                        </p>
                                    </motion.div>
                                </div>
                            </div>
                        </div>

                        <div className="vlt-gap-100"></div>

                        <div className="row container-fluid">
                            <div className="col-lg-6">
                                <div className="text-center">
                                    {/*Animated block with Framer Motion*/}
                                    <motion.div 
                                        className="vlt-animated-block" 
                                        {...fadeUp(200)}
                                    >
                                        {/*Section title*/}
                                        <h3 className="vlt-section-title__title">On the customer facing side</h3>
                                        <h6>How do you become a successful digital business? The imperatives are urgent and many:</h6>
                                        <p>
                                            <IoCheckmarkCircle style={{ color: "#e82e31", marginRight: "8px" }} /> How do you move beyond transactions to digital relationships where you treat web visitors as individuals?
                                        </p>
                                        <p>
                                            <IoCheckmarkCircle style={{ color: "#e82e31", marginRight: "8px" }} /> How do you provide genuinely engaging user experiences across web, mobile, social and digital for the increasingly digitalized distributor?
                                        </p>
                                        <p>
                                            <IoCheckmarkCircle style={{ color: "#e82e31", marginRight: "8px" }} /> Integrating new media with traditional marketing to create and manage synchronized campaigns at scale and speed is a growing need.
                                        </p>

                                    </motion.div>
                                </div>
                            </div>

                            <motion.div 
                                className="col-lg-6" 
                                {...fadeUp(400)}
                            >
                                <div className="text-center">
                                    {/*Animated block*/}
                                    <div className="vlt-animated-block">
                                        {/*Section title*/}
                                        <h3 className="vlt-section-title__title">On the operating side of the business</h3>
                                        <h6>There are challenges of efficiency, information and automation.</h6>
                                    </div>
                                </div>
                                <p>
                                     <IoCheckmarkCircle style={{ color: "#e82e31", marginRight: "8px" }} /> How do you move beyond transactions to digital relationships where you treat web visitors as individuals?
                                </p>
                                <p>
                                     <IoCheckmarkCircle style={{ color: "#e82e31", marginRight: "8px" }} /> How do you provide genuinely engaging user experiences across web, mobile, social and digital for the increasingly digitalized distributor?
                                </p>
                                <p>
                                   <IoCheckmarkCircle style={{ color: "#e82e31", marginRight: "8px" }} /> Integrating new media with traditional marketing to create and manage synchronized campaigns at scale and speed is a growing need.
                                </p>
                            </motion.div>

                            <motion.div 
                                className="container text-center" 
                                {...fadeUp(100)}
                            >
                                <div className="vlt-gap-80"></div>
                                Vector Art is a mature technology partner to promotional suppliers. One that has the people, processes and platforms to ensure genuine results through fit for purpose systems. Our service and product suite helps you address today&apos;s challenges and opportunities and to anticipate and be ready for inevitable changes. Our role is to help translate your strategic intent into functional solutions, rapidly, affordably and measurably.
                            </motion.div>
                        </div>
                    </section>

                    <div className="vlt-gap-120"></div>

                    <section className="has-black-background-color has-white-color">
                        <div className="container">
                            <div className="row">
                                <div className="vlt-gap-80"></div>
                                <div className="text-center">
                                    {/*Animated block with Framer Motion*/}
                                    <motion.div 
                                        className="vlt-animated-block" 
                                        {...fadeUp(100)}
                                    >
                                        {/*Section title*/}
                                        <h3 className="vlt-section-title__title text-light">
                                            Explore our capabilities and products.
                                        </h3>
                                        <p>
                                            Today, suppliers are faced with challenges when determining how to meet continuously emerging technology requirements arising from business processes. Be it tracking sales, production time or cutting down time spent on the data entry, technology solutions remain at the core of providing definitive answers to your challenges.
                                        </p>
                                        <p>
                                            Our technology solutions provide the right mix of functional industry readiness coupled with robust platforms that derive the real ROI for you.
                                        </p>
                                        <p>
                                            Our ERP, Order Management, Offshore development, Application integration, Automation and Consulting services arm you and your people with the information and tools you need to be in complete control and boost productivity.
                                        </p>
                                    </motion.div>
                                </div>
                            </div>
                            <div className="vlt-gap-80"></div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
};

export default TechnologySolutions;