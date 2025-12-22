"use client";

import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence, easeOut } from 'framer-motion';
import { 
    IoChatbubbleOutline, 
    IoMailUnreadOutline, 
    IoGlobeOutline, 
    IoDesktopOutline, 
    IoCheckmark 
} from 'react-icons/io5';

// Animation Variants
const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: custom * 0.1, duration: 0.8, ease: easeOut}
    })
};

const Microsoft365Page = () => {
    const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    const accordionData = [
        {
            title: "Call, Video Call or Chat and share files in between Teams",
            content: "Microsoft Teams is a hub for teamwork via which a team can instantly chat and make video calls for easy collaboration. Teams can search people, files and chat anytime."
        },
        {
            title: "Microsoft 365 Collaboration",
            content: "Microsoft 365 is a reliable cloud-based platform. It has several tools like Word, Excel or PowerPoint, Delve, SharePoint through which a team can work together. They can also see the latest edits, restore the old edits whenever required."
        },
        {
            title: "Chat and Share Easily With Kaizala",
            content: "Microsoft Kaizala is a simple and secure mobile work management app, that is used to connect and engage people both inside and outside of an organization’s directory. The app enables users to send instant messages and attachments such as pictures, documents, etc."
        },
        {
            title: "OneNote Class Notebook",
            content: "Class Notebook is a part of OneNote available for Microsoft 365 Education version. The notebook has a content library for teachers to collaborate and share content. OneNote app is used to access files."
        },
        {
            title: "SharePoint Online",
            content: "Share and manage content, files, and applications to encourage teamwork, quickly find information, and seamlessly collaborate across the business."
        },
        {
            title: "Microsoft Planner",
            content: "It is a tool that gives users a visual way to organize teamwork effectively. Teams can make new plans, organize and assign tasks, share files, chat about their current work status, set due dates, and do lots more."
        }
    ];

    const pricingItems = [
        "Install Office app on laptop, pc, mac: Web Access Only",
        "Office Mobile Apps: Included",
        "Exchange Online: 50GB",
        "Archival: 50GB",
        "Microsoft Teams: Included",
        "Participants Limit: 300",
        "Meeting recordings and transcripts: Included",
        "Microsoft Planner",
        "Microsoft Stream",
        "Microsoft forms",
        "Microsoft Kaizala",
        "Microsoft Basic Device Management"
    ];

    const pricingItemsStandard = [
        "Install Office app on laptop, pc, mac: Included",
        "Office Mobile Apps: Included",
        "Exchange Online: 50GB",
        "Archival: 50GB",
        "Microsoft Teams: Included",
        "Participants Limit: 300",
        "Meeting recordings and transcripts: Included",
        "Microsoft Planner",
        "Microsoft Stream",
        "Microsoft forms",
        "Microsoft Kaizala",
        "Microsoft Basic Device Management"
    ];

    const pricingItemsExchange = [
        "Additional 100GB Inbox, 1.5TB Archival, One Drive 1.5TB on Current plan",
        "Install Office app on laptop, pc, mac: Included",
        "Office Mobile Apps: Included",
        "Exchange Online: 50GB",
        "Archival: 50GB",
        "Microsoft Teams: Included",
        "Participants Limit: 300",
        "Meeting recordings and transcripts: Included",
        "Microsoft Planner",
        "Microsoft Stream",
        "Microsoft forms",
        "Microsoft Kaizala",
        "Microsoft Basic Device Management"
    ];

    return (
        <>
            <Head>
                <title>Microsoft 365 Cloud Solutions for Business Productivity | Vector Art</title>
                <meta name="keywords" content="microsoft 365, services" />
                <meta name="description" content="Explore Microsoft 365 services at Vector Art. Enhance business productivity with cloud-based tools like Word, Excel, Outlook, and more. Contact us today!" />
            </Head>

            <div className="vlt-site-overlay"></div>

            <main className="vlt-main">
                <div className="vlt-page-content">

                    {/* Section: Hero */}
                    <section className="has-white-color" style={{ backgroundImage: 'url(/assets/img/pages/aboutus/aboutusbg.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                        <div className="vlt-page-title vlt-page-title--style-4">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <motion.h1 
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            variants={fadeIn}
                                            custom={1}
                                            className="vlt-page-title__title" 
                                            style={{ color: 'white' }}
                                        >
                                            Microsoft 365
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
                            <div className="row">
                                <div className="col-md-6">
                                    <motion.img 
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1 }}
                                        src="/assets/img/pages/microsoft365/office_intro.png" 
                                        alt="Office Intro" 
                                    />
                                    <div className="vlt-gap-30--sm"></div>
                                </div>
                                <div className="col-md-6" style={{ display: 'flex', alignItems: 'center' }}>
                                    <div className="text-center">
                                        <div className="vlt-animated-block">
                                            <motion.h3 
                                                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={2}
                                                className="vlt-section-title__title"
                                            >
                                                Microsoft 365 Partner in USA & India
                                            </motion.h3>
                                            <div className="vlt-gap-30"></div>
                                            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={3}>
                                                Microsoft 365 is a standard suite for creating business productivity. It provides cloud solutions that make business functionalities remotely accessible and collaborative in real-time. It includes premium applications like Word, Excel, OneNote, Powerpoint, Outlook, and lots more.
                                            </motion.p>
                                            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={4}>
                                                Vector Art is an authorized partner of Microsoft 365 that has helped businesses and SMEs experience a new level of team collaboration in real-time via modern communication tools such as SharePoint Online, Skype for Business, OneDrive, Yammer, and a few more. We can help you shift your business E-mail hosting to Microsoft, which protects your valuable data under Microsoft Cloud Services.
                                            </motion.p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="vlt-gap-120"></div>
                    </section>

                    {/* Section: Icon Services */}
                    <section>
                        <div className="text-center">
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={1} className="vlt-animated-block">
                                <h3 className="vlt-section-title__title">We got your back!</h3>
                                <div className="vlt-gap-30"></div>
                            </motion.div>
                        </div>
                        <div className="container-fluid">
                            <div className="row">
                                {[
                                    { icon: <IoChatbubbleOutline size={70} />, text: "Want to have seamless communication services?" },
                                    { icon: <IoMailUnreadOutline size={70} />, text: "Do you want a reliable email & office solution on the cloud from Microsoft?" },
                                    { icon: <IoGlobeOutline size={70} />, text: "Are you looking for a 100% reliable and secure email solution?" },
                                    { icon: <IoDesktopOutline size={70} />, text: "Do you want Online & Offline Microsoft office for your organization?" }
                                ].map((item, idx) => (
                                    <div className="col-lg-3" key={idx}>
                                        <motion.div 
                                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={idx + 2}
                                            className="vlt-animated-block"
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

                    {/* Section: Features & Accordion */}
                    <section>
                        <div className="container">
                            <div className="text-center">
                                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={1} className="vlt-animated-block">
                                    <h3 className="vlt-section-title__title">Microsoft 365</h3>
                                    <h5>Features</h5>
                                    <div className="vlt-gap-30"></div>
                                    <p>Elevate your productivity with Microsoft 365! Unleash the power of seamless collaboration...</p>
                                </motion.div>
                            </div>
                            <div className="vlt-gap-80"></div>
                            <div className="row">
                                <motion.div 
                                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={3}
                                    style={{ width: '100%' }}
                                >
                                    {accordionData.map((item, index) => (
                                        <div key={index}>
                                            <button
                                                className={`accordion ${activeAccordion === index ? 'accactive' : ''}`}
                                                onClick={() => toggleAccordion(index)}
                                            >
                                                <b>{item.title}</b>
                                            </button>
                                            <AnimatePresence>
                                                {activeAccordion === index && (
                                                    <motion.div 
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="panel-motion"
                                                    >
                                                        <p>{item.content}</p>
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

                    {/* Section: Benefits */}
                    <section>
                        <div className="container">
                            <div className="text-center">
                                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={1} className="vlt-animated-block">
                                    <h3 className="vlt-section-title__title">Benefits of</h3>
                                    <h5>Microsoft 365</h5>
                                    <div className="vlt-gap-30"></div>
                                    <p>Revolutionize your productivity with Microsoft 365! Experience the power of seamless collaboration, advanced security, and innovative tools designed to enhance your workflow. From Word and Excel to Teams and OneDrive, Microsoft 365 empowers you to create, connect, and succeed anytime, anywhere. Elevate your work with intelligent solutions that adapt to your needs. Discover a smarter way to achieve more with Microsoft 365!</p>
                                </motion.div>
                            </div>

                            <div className="vlt-gap-80"></div>

                            <div className="row">
                                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={2}>
                                    <ul>
                                        {[
                                            { t: "Remote Accessibility", p: "No matter where your team is, whether the office, home or on a trip, you can collaborate effectively with Microsoft 365 tools and apps." },
                                            { t: "Higher Productivity", p: "Microsoft 365 suite was designed to be used for daily works. The suite has worthy tools that help a team to simplify operations and keep track of the same. This increases productivity and saves cost." },
                                            { t: "Seamless Integration", p: "Any document created Offline in the Office platform can be edited and read anytime. The system helps to keep the work records and one can easily share and edit the same." },
                                            { t: "Security", p: "Microsoft 365 has a robust security platform used by many businesses to secure their valuable data." },
                                            { t: "99.9% Uptime", p: "Anytime accessibility is guaranteed with Microsoft 365 suite. If the server is down, you don't have to worry about accessing the data since it can be accessed offline too." },
                                            { t: "Supports Any Device", p: "Microsoft 365 applications can be used anytime and from any location. Whether you use an Android or iOS smartphone, laptop, desktop or a tab, the suite allows you to edit doc or sheet in real time." }
                                        ].map((benefit, i) => (
                                            <React.Fragment key={i}>
                                                <li>
                                                    <h5>{benefit.t}</h5>
                                                    <p>{benefit.p}</p>
                                                </li>
                                                <div className="vlt-gap-30"></div>
                                            </React.Fragment>
                                        ))}
                                    </ul>
                                </motion.div>
                            </div>
                        </div>
                        <div className="vlt-gap-120"></div>
                    </section>

                    {/* Section: Pricing */}
                    <section className="has-white-color" style={{ backgroundColor: "black" }}>
                        <div className="vlt-gap-80"></div>
                        <div className="container-fluid">
                            <div className="row justify-content-center">
                                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={1} className="vlt-animated-block">
                                    <h2 className="vlt-section-title__title text-light text-center">Pricings</h2>
                                    <p className="vlt-section-title__text text-center">Microsoft 365 Plans</p>
                                </motion.div>
                            </div>

                            <div className="vlt-gap-90"></div>

                            <div className="row">
                                {/* Business Basic */}
                                <div className="col-md-4">
                                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={2} className="vlt-animated-block">
                                        <div className="vlt-pricing-table">
                                            <div className="vlt-pricing-table__header">
                                                <h4 className="vlt-pricing-table__title">Business Basic</h4>
                                            </div>
                                            <div className="vlt-pricing-table__price">
                                                <span className="currency">$</span>
                                                <span className="price">30</span>
                                                <span className="period">/yr</span>
                                            </div>
                                            <div className="vlt-pricing-table__content text-dark">
                                                <ul>
                                                    {pricingItems.map((item, idx) => (
                                                        <li key={idx} className="active">
                                                            <IoCheckmark color="#E82E31" /> {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="vlt-pricing-table__action">
                                                <Link href="/contactus" className="vlt-btn vlt-btn--secondary vlt-btn--lg">Order Now!</Link>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Business Standard */}
                                <div className="col-md-4">
                                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={3} className="vlt-animated-block">
                                        <div className="vlt-pricing-table vlt-pricing-table--featured" style={{ backgroundImage: "url(/assets/img/root/pricing-table.png)" }}>
                                            <div className="vlt-pricing-table__header">
                                                <h4 className="vlt-pricing-table__title">Business Standard</h4>
                                            </div>
                                            <div className="vlt-pricing-table__price">
                                                <span className="currency">$</span>
                                                <span className="price">130</span>
                                                <span className="period">/yr</span>
                                            </div>
                                            <div className="vlt-pricing-table__content">
                                                <ul>
                                                    {pricingItemsStandard.map((item, idx) => (
                                                        <li key={idx} className="active">
                                                            <IoCheckmark color="#E82E31" /> {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="vlt-pricing-table__action">
                                                <Link href="/contactus" className="vlt-btn vlt-btn--tertiary vlt-btn--lg">Order Now!</Link>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Exchange Online Plan 2 */}
                                <div className="col-md-4">
                                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={4} className="vlt-animated-block">
                                        <div className="vlt-pricing-table">
                                            <div className="vlt-pricing-table__header">
                                                <h4 className="vlt-pricing-table__title">Exchange Online Plan 2</h4>
                                            </div>
                                            <div className="vlt-pricing-table__price">
                                                <span className="currency">$</span>
                                                <span className="price">110</span>
                                                <span className="period">/yr</span>
                                            </div>
                                            <div className="vlt-pricing-table__content text-dark">
                                                <ul>
                                                    {pricingItemsExchange.map((item, idx) => (
                                                        <li key={idx} className="active">
                                                            <IoCheckmark color="#E82E31" /> {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="vlt-pricing-table__action">
                                                <Link href="/contactus" className="vlt-btn vlt-btn--secondary vlt-btn--lg">Order Now!</Link>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>

                            <div className="vlt-gap-80"></div>

                            <div className="container">
                                <div className="row justify-content-center">
                                    <motion.a 
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="vlt-btn vlt-btn--primary vlt-btn--lg" 
                                        href="/assets/files/Microsoft365.pdf" 
                                        download
                                    >
                                        Download Detailed Pricings
                                    </motion.a>
                                </div>
                            </div>
                        </div>
                        <div className="vlt-gap-80"></div>
                    </section>
                </div>

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
                    .accordion:hover, .accactive {
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
                    .panel-motion {
                        background-color: rgba(78, 78, 78, 1);
                        color: #fff;
                        overflow: hidden;
                        padding: 0 38px;
                    }
                    .panel-motion p {
                        margin: 20px 0;
                    }
                `}</style>
            </main>
        </>
    );
};

export default Microsoft365Page;