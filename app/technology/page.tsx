"use client";

import { useState } from 'react';
import Head from 'next/head';
import { IoCheckmarkCircle } from "react-icons/io5";
import { motion } from 'framer-motion';

const TechnologyPage = () => {
  const [activeAccordions, setActiveAccordions] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    setActiveAccordions((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const accordionData = [
    {
      title: 'Website Development',
      content: (
        <p style={{ margin: '20px' }}>
          Vector Art provide end-to-end web development solutions and functionalities that meet your business
          objectives, goals and expectations. we have created lot of websites and web applications. Our aim was to
          keep long-term customer relationship based commitment to create best website designs. We have the best and
          creative web designers team they can handle any kind of website requirements. We here make you realize the
          difference of choosing us.
        </p>
      ),
    },
    {
      title: 'E-Commerce',
      content: (
        <>
          <p style={{ margin: '20px' }}>
            E-Commerce essentially refers to trading in products or services using computer networks, such as the
            Internet. Electronic commerce draws on technologies such as mobile commerce, internet marketing, online
            transaction processing, buying & selling on websites etc. we provide our clients the ultimate E-commerce
            platform to ensure easy access, guaranteed success and long term profits for their brand. Ecommerce is
            simple to understand and easy to use. Prospective buyers can view the merchandize/services on your website
            and accordingly go ahead with purchase of the same. This also enables complete customer satisfaction and
            hassle free payments.
          </p>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            <li><IoCheckmarkCircle color="#e82e31" size={20} /> <span style={{ marginLeft: '10px' }}>Industry e-commerce cart</span></li>
            <li><IoCheckmarkCircle color="#e82e31" size={20} /> <span style={{ marginLeft: '10px' }}>Additional charge calculations</span></li>
            <li><IoCheckmarkCircle color="#e82e31" size={20} /> <span style={{ marginLeft: '10px' }}>In-cart upselling and cross selling</span></li>
            <li><IoCheckmarkCircle color="#e82e31" size={20} /> <span style={{ marginLeft: '10px' }}>Customer portal for tools, order status & invoices</span></li>
            <li><IoCheckmarkCircle color="#e82e31" size={20} /> <span style={{ marginLeft: '10px' }}>Integrated with UPS and Fedex</span></li>
            <li><IoCheckmarkCircle color="#e82e31" size={20} /> <span style={{ marginLeft: '10px' }}>Integrated Payment Gateway</span></li>
          </ul>
        </>
      ),
    },
    {
      title: 'Mobile App Development',
      content: (
        <p style={{ margin: '20px' }}>
          Our mobile application developers have deep expertise creating apps for all the major platforms including iOS
          (iPhone, iPad), Android, BlackBerry and Windows Mobile. Experts to help with a certain aspect of your project
          such as business analysis, custom UX/UI design, code development, project management and/or quality
          assurance, or looking for a complete end-to-end or mobile app development solution to be delivered. we can
          meet your needs.
        </p>
      ),
    },
    {
      title: 'Digital Marketing',
      content: (
        <p style={{ margin: '20px' }}>
          Vector Art can help you develop better interactions, build better experiences and leverage customer
          relationships across all digital channels, through a combination of brand planning, technology, in-depth
          analysis and path-breaking innovation. Through measurable, actionable, and on target strategies, vector art
          help&apos;s your brand where it needs to be.
        </p>
      ),
    },
    {
      title: 'Social Media',
      content: (
        <>
          <p style={{ margin: '20px' }}>
            Vector Art expertise in digital strategy with innovative tools and metrics, we develop and implement
            innovative social media strategies for maximum business relevance and impact.
          </p>
          <p>
            We can help you build honest, engaging and meaningful conversations, encourage participation and create
            sustained relationships and advocacy. We help you talk with, and be talked about by your customers.
          </p>
        </>
      ),
    },
    {
      title: 'ERP & CRM',
      content: (
        <>
          <p style={{ margin: '20px' }}>
            At Vector Art we provide our client with Fully integrated suite of tools to manage your business from small
            to medium sized enterprises. Our solutions allows you to put your business on complete automation manage
            any of the following front-office and back-office activities Our solutions offer a fully integrated suite
            of tools to manage your business.
          </p>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            <li><IoCheckmarkCircle color="#e82e31" size={20} /> <span style={{ marginLeft: '10px' }}>Sales & Marketing</span></li>
            <li><IoCheckmarkCircle color="#e82e31" size={20} /> <span style={{ marginLeft: '10px' }}>Manufacturing</span></li>
            <li><IoCheckmarkCircle color="#e82e31" size={20} /> <span style={{ marginLeft: '10px' }}>Purchasing</span></li>
            <li><IoCheckmarkCircle color="#e82e31" size={20} /> <span style={{ marginLeft: '10px' }}>Project Management</span></li>
            <li><IoCheckmarkCircle color="#e82e31" size={20} /> <span style={{ marginLeft: '10px' }}>Human Resources</span></li>
            <li><IoCheckmarkCircle color="#e82e31" size={20} /> <span style={{ marginLeft: '10px' }}>Event & Project Management</span></li>
            <li><IoCheckmarkCircle color="#e82e31" size={20} /> <span style={{ marginLeft: '10px' }}>Accounting & More…</span></li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>Vectorart.co - Empower Your Business with Technology Solutions</title>
        <meta name="keywords" content="business,technology,solutions,Vector art,Graphic design" />
        <meta
          name="description"
          content="Empower your online presence with our vectorart.co expert web design, development, and app services."
        />
      </Head>

      <div className="vlt-site-overlay"></div>
      <main className="vlt-main">
        <div className="vlt-page-content">
          {/* Hero Section */}
          <section
            className="has-white-color"
            style={{
              backgroundImage: 'url(assets/img/pages/technology/technologybg.jpg)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <div className="vlt-page-title vlt-page-title--style-4">
              <div className="container">
                <div className="row">
                  <div className="col-md-7">
                    <motion.h1
                      className="vlt-page-title__title"
                      style={{ color: "white", fontSize: "4rem", fontWeight: "700" }}
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                    >
                      Technology
                    </motion.h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="vlt-gap-150"></div>
          </section>

          <div className="vlt-gap-80"></div>

          {/* Section Content */}
          <section>
            <div className="container">
              <div className="row">
                <div className="text-center">
                  <motion.div
                    className="vlt-animated-block"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <h2 className="vlt-section-title__title">
                      Our industry-ready solutions are designed to give your business the advantage. We offer
                      progressive end-to-end solutions, blending our solid business domain experience, technical
                      expertise, profound knowledge of latest industry trends and quality-driven delivery model.
                    </h2>
                  </motion.div>
                  <div className="vlt-gap-80"></div>
                </div>
              </div>

              <div className="row">
                <motion.div
                  className="col-lg-6"
                  style={{ marginBottom: '20px' }}
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                >
                  <img src="assets/img/pages/technology/technology.jpg" alt="technology" />
                </motion.div>

                <div className="col-lg-6" style={{ marginBottom: '20px' }}>
                  {accordionData.map((item, index) => {
                    const isActive = activeAccordions.includes(index);
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <button
                          className={`accordion ${isActive ? 'accactive' : ''}`}
                          onClick={() => toggleAccordion(index)}
                        >
                          <b>{item.title}</b>
                        </button>
                        <motion.div
                          className="panel"
                          animate={{ maxHeight: isActive ? 1000 : 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          {item.content}
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <style jsx>{`
        .accordion {
          background-color: #000;
          color: #fff;
          cursor: pointer;
          padding: 38px;
          width: 100%;
          border: none;
          text-align: left;
          outline: none;
          font-size: 15px;
          transition: 0.4s;
          position: relative;
        }

        .accordion:hover,
        .accactive {
          background-color: rgb(22, 20, 20);
        }

        .accordion:after {
          content: '+';
          color: #fff;
          font-weight: bold;
          float: right;
          margin-left: 5px;
        }

        .accactive:after {
          content: '-';
        }

        .panel {
          width: 100%;
          color: white;
          padding: 0 18px;
          background-color: rgba(78, 78, 78, 1);
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default TechnologyPage;
