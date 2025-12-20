'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { IoCard, IoMegaphone, IoBagCheck} from "react-icons/io5";
import { IoCheckmarkCircle } from "react-icons/io5";
import { motion, easeOut } from 'framer-motion';

const ExampleAndPlansPage: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const pricingData = [
    { particular: 'Virtual Sample', price: '$2', isLink: false },
    { particular: 'Vector Art – Simple', price: '$5', isLink: false },
    { particular: 'Digitizing, Price per thousand', price: 'Request a quote', isLink: true},
    { particular: 'Logo design (2 options)', price: 'Request a quote', isLink: true},
    { particular: 'Email Blast (3 versions) 1 option', price: 'Request a quote', isLink: true },
    { particular: 'Branding Packages: Logo redeign, web banners, & Business card layout', price: 'Request a quote', isLink: true },
    { particular: 'Vectorart – Standard', price: 'Request a quote', isLink: true },
    { particular: 'Vectorart – Complex', price: 'Request a quote', isLink: true },
    { particular: 'Vectorart – Challenging', price: 'Request a quote', isLink: true },
    { particular: 'Vectorart – Speciality', price: 'Request a quote', isLink: true },
    { particular: 'E-blast / Flyer / Banner', price: 'Request a quote', isLink: true },
    { particular: 'Logo Design (1 options)', price: 'Request a quote', isLink: true },
    { particular: 'T-shirt Design with virtual mockup', price: 'Request a quote', isLink: true },
    { particular: 'Order Entry', price: 'Request a quote', isLink: true },
    { particular: 'Line Art', price: 'Request a quote', isLink: true },
    { particular: 'Line Art', price: 'Request a quote', isLink: true },
    { particular: 'Website Design – https://www.thepenguy.com (Example Site)', price: 'Request a quote', isLink: true },
    { particular: 'Animation', price: 'Request a quote', isLink: true },
    { particular: 'Short Film Video', price: 'Request a quote', isLink: true },
    { particular: 'Short Video 2 mins – Store Launch or Product Video', price: 'Request a quote', isLink: true },
    { particular: 'Short Video (1-2-3 Mins) – Product Showcase with Wow factor', price: 'Request a quote', isLink: true },
    { particular: 'Maya', price: 'Request a quote', isLink: true },
    { particular: 'Catalog', price: 'Request a quote', isLink: true },
  ];

  const accordionData = [
    {
      title: 'Simple Jobs',
      image: 'assets/img/pages/exampleandplans/Simple-Before-After1-300x300.jpg',
      features: [
        'Color and/or text changes to existing vector files',
        'Vectorization of simple logos (one image and no more than four words of text)',
        'Files formatted in different versions and sizes',
        'Virtual samples of logos on promotional items'
      ],
      simplePricing: '$5',
      priorityPricing: '$5'
    },
    {
      title: 'Standard Jobs',
      image: 'assets/img/pages/exampleandplans/Standard-Before-After-300x300.jpg',
      features: [
        'Vectorization of more complex logos',
        'Vectorization of simple logos (one image and no more than four words of text)',
        'Files formatted in different versions and sizes',
        'Virtual samples of logos on promotional items'
      ],
      simplePricing: '$10',
      priorityPricing: '$19'
    },
    {
      title: 'Complex Jobs',
      image: 'assets/img/pages/exampleandplans/Complex-Before-After-300x300.jpg',
      features: [
        "Creation of logo or design work from client's instructions, including sketches, ideas, reference material, etc.",
        'Vectorization of complicated logos (multiple images and/or difficult text)',
        'Reproduction of gradients'
      ],
      simplePricing: '$24',
      priorityPricing: '$36'
    },
    {
      title: 'Challenging Jobs',
      image: 'assets/img/pages/exampleandplans/Complex-Before-After-300x300.jpg',
      features: [
        'Vectorization of logo or design work containing illustrations, cartoons, etc.',
        'Creation of simple marketing materials (single-sided flyers, business cards, etc.)',
        'Fonts that must be recreated from scratch',
        "Creation of simple illustrations from client's sketch or reference material"
      ],
      simplePricing: '$48',
      priorityPricing: '$69'
    },
    {
      title: 'Speciality Jobs',
      image: 'assets/img/pages/exampleandplans/speciality-before-after-300x300.jpg',
      features: [
        'Creation of a new logo with up to three different options from the artist',
        'Vectorization of complicated artwork (paintings, photographs, etc.)',
        'Vectorization of logos or artwork with multiple challenging images',
        "Creation of complex design work from client's sketch or reference materials"
      ],
      simplePricing: '$65 & Plus',
      priorityPricing: 'Quote'
    }
  ];

  // Framer Motion variants
  const fadeVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <>
      <Head>
        <title>Example & Plans | Vectorart.co Quality Design at Competitive price</title>
        <meta name="keywords" content="design, pricing, order, logo, simple, Vector art , Graphic design" />
        <meta name="description" content="we tailoring professional design solutions with storage services at a competitive price, meeting all your creative needs through close client collaboration." />
      </Head>

      <div className="vlt-site-overlay"></div>
      <main className="vlt-main">
        <div className="vlt-page-content">
          {/* Page Title Section */}
          <section className="has-white-color" style={{ backgroundImage: 'url(assets/img/pages/aboutus/aboutusbg.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className="vlt-page-title vlt-page-title--style-4">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <h1
                      className="vlt-page-title__title"
                      style={{ color: "white", fontSize: "4rem", fontWeight: "700" }}
                    >
                      Example & Plans
                    </h1>
                  </div>
                  <div className="col-md-6"></div>
                </div>
              </div>
            </div>
            <div className="vlt-gap-150"></div>
          </section>

          <div className="vlt-gap-80"></div>

          {/* Main Content Section */}
          <section>
            <div className="container">
              <div className="row">
                <div className="text-center">
                  <div className="vlt-animated-block">
                    <motion.h3 
                      className="vlt-section-title__title"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      variants={fadeVariant}
                    >
                      Put our creative team to work for you
                    </motion.h3>
                    <motion.h5
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      variants={fadeVariant}
                    >
                      We are a leading comprehensive artwork service provider.
                    </motion.h5>
                    <div className="vlt-gap-30"></div>
                    <motion.p
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      variants={fadeVariant}
                    >
                      Vector Art works closely with our clients to understand their requirements and offers professional quality design with storage services at ultra-competitive rates to assist you with all of your creative needs. Whether you need a new logo for your company or help creating an advertisement, Vector Art has got you covered.
                    </motion.p>
                  </div>
                </div>
              </div>

              <div className="vlt-gap-80"></div>

              {/* Pricing Table */}
              <motion.div 
                className="row"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                variants={fadeVariant}
              >
                <table>
                  <thead>
                    <tr>
                      <th>Particular</th>
                      <th>Pricing as low as</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingData.map((row, idx) => (
                      <tr key={idx}>
                        <td>{row.particular}</td>
                        <td>
                          {row.isLink ? (
                            <Link href="/contact">{row.price}</Link>
                          ) : (
                            row.price
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>

              <div className="vlt-gap-80"></div>

              {/* Features Grid */}
              <motion.div 
                className="row"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                variants={fadeVariant}
              >
                <div className="col-lg-4 text-center">
                  <IoCard style={{ fontSize: '70px' , color: '#e82e31'  }} />
                  <h5>Best Price</h5>
                  <p>Pricing starting from $5 to suit your needs.</p>
                </div>

                <div className="col-lg-4 text-center">
                  <IoMegaphone style={{ fontSize: '70px' , color: '#e82e31' }} />
                  <h5>Discount Offers</h5>
                  <p>Offering a wide range of discounts for bulk orders. Our Plans</p>
                </div>

                <div className="col-lg-4 text-center">
                  <IoBagCheck style={{ fontSize: '70px' , color: '#e82e31' }} />
                  <h5>Our Plans</h5>
                  <p>Intuitive Pricing based on client needs</p>
                </div>
              </motion.div>
            </div>
          </section>

          <div className="vlt-gap-80"></div>

          {/* Web Packages Section */}
          <section className="has-white-color" style={{ backgroundColor: 'black' }}>
            <div className="vlt-gap-80"></div>
            <div className="container-fluid">
              <div className="row" style={{ justifyContent: 'center' }}>
                <div>
                  <motion.div 
                    className="vlt-animated-block"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    variants={fadeVariant}
                  >
                    <h2 className="vlt-section-title__title text-light text-center">Our Web Packages</h2>
                    <p className="vlt-section-title__text text-center">We offer a wide range of packages to choose.</p>
                  </motion.div>
                  <div className="vlt-gap-90"></div>
                </div>
              </div>

              <div className="row">
                {/* Basic Plan */}
                <div className="col-md-3">
                  <motion.div 
                    className="vlt-animated-block"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    variants={fadeVariant}
                  >
                    <div className="vlt-pricing-table">
                      <div className="vlt-pricing-table__header">
                        <h4 className="vlt-pricing-table__title">Basic Plan</h4>
                      </div>
                      <div className="vlt-pricing-table__price">
                        <span className="currency">$</span>
                        <span className="price">75</span>
                      </div>
                      <div className="vlt-pricing-table__content text-dark">
                        <ul>
                          <li className="active"><i className="icon-check"></i>Number of Pages: upto 5</li>
                          <li className="active"><i className="icon-check"></i>Additional Pages: $25</li>
                          <li className="active"><i className="icon-check"></i>Homepage Image Slider: Yes</li>
                          <li className="active"><i className="icon-check"></i>Included Stock Images: 3</li>
                          <li className="active"><i className="icon-check"></i>Integrated Contact Forms: Yes</li>
                          <li className="active"><i className="icon-check"></i>Photo Gallery: Yes</li>
                          <li className="active"><i className="icon-check"></i>Embed Video: Yes</li>
                          <li className="active"><i className="icon-check"></i>Social Media Buttons: Yes</li>
                          <li className="active"><i className="icon-check"></i>Google Analytics: Yes</li>
                          <li className="active"><i className="icon-check"></i>Responsive Design: Included</li>
                          <li className="active"><i className="icon-check"></i>Website Hosting: $25 / Month</li>
                        </ul>
                      </div>
                      <div className="vlt-pricing-table__action">
                        <a className="vlt-btn vlt-btn--secondary vlt-btn--lg" href="https://partnerproofs.com/login" target="_blank" rel="noopener noreferrer">Order Now!</a>
                      </div>
                    </div>
                  </motion.div>
                  <div className="vlt-gap-60--sm"></div>
                </div>

                {/* Standard Plan */}
                <div className="col-md-3">
                  <motion.div 
                    className="vlt-animated-block"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    variants={fadeVariant}
                  >
                    <div className="vlt-pricing-table vlt-pricing-table--featured" style={{ backgroundImage: 'url(assets/img/root/pricing-table.png)' }}>
                      <div className="vlt-pricing-table__header">
                        <h4 className="vlt-pricing-table__title">Standard Plan</h4>
                      </div>
                      <div className="vlt-pricing-table__price">
                        <span className="currency">$</span>
                        <span className="price">200</span>
                        <span className="period">/mo</span>
                      </div>
                      <div className="vlt-pricing-table__content">
                        <ul>
                          <li className="active"><i className="icon-check"></i>Number of Pages: upto 10</li>
                          <li className="active"><i className="icon-check"></i>Additional Pages: $25</li>
                          <li className="active"><i className="icon-check"></i>Homepage Image Slider: Yes</li>
                          <li className="active"><i className="icon-check"></i>Included Stock Images: 3</li>
                          <li className="active"><i className="icon-check"></i>Integrated Contact Forms: Yes</li>
                          <li className="active"><i className="icon-check"></i>Photo Gallery: Yes</li>
                          <li className="active"><i className="icon-check"></i>Embed Video: Yes</li>
                          <li className="active"><i className="icon-check"></i>Social Media Buttons: Yes</li>
                          <li className="active"><i className="icon-check"></i>Google Analytics: Yes</li>
                          <li className="active"><i className="icon-check"></i>Responsive Design: Included</li>
                          <li className="active"><i className="icon-check"></i>Website Hosting: $25 / Month</li>
                        </ul>
                      </div>
                      <div className="vlt-pricing-table__action">
                        <a className="vlt-btn vlt-btn--tertiary vlt-btn--lg" href="https://partnerproofs.com/login" target="_self" rel="noopener noreferrer">Order Now!</a>
                      </div>
                    </div>
                  </motion.div>
                  <div className="vlt-gap-60--sm"></div>
                </div>

                {/* Logo Package */}
                <div className="col-md-3 position-relative">
                  <img className="vlt-particle" src="assets/img/root/square-plus-pattern-long.png" data-animation-name="fadeInRight" alt="square-plus-pattern-long.png" style={{ position: 'absolute', bottom: '-240px', right: '-130px', maxWidth: '210px', ['--animate-delay' as any]: '.5s' }} loading="lazy" />
                  <motion.div 
                    className="vlt-animated-block"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    variants={fadeVariant}
                  >
                    <div className="vlt-pricing-table">
                      <div className="vlt-pricing-table__header">
                        <h4 className="vlt-pricing-table__title">Logo Package</h4>
                      </div>
                      <div className="vlt-pricing-table__price">
                        <span className="currency">$</span>
                        <span className="price">50</span>
                      </div>
                      <div className="vlt-pricing-table__content text-dark">
                        <ul>
                          <li className="active"><i className="icon-check"></i>Logo Options 2</li>
                          <li className="active"><i className="icon-check"></i>Additional options : $25</li>
                        </ul>
                      </div>
                      <div className="vlt-pricing-table__action">
                        <a className="vlt-btn vlt-btn--secondary vlt-btn--lg" href="https://partnerproofs.com/login" target="_blank" rel="noopener noreferrer">Order Now!</a>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Advanced Plan */}
                <div className="col-md-3 position-relative">
                  <motion.div 
                    className="vlt-animated-block"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    variants={fadeVariant}
                  >
                    <div className="vlt-pricing-table vlt-pricing-table--featured" style={{ backgroundImage: 'url(assets/img/root/pricing-table.png)' }}>
                      <div className="vlt-pricing-table__header">
                        <h4 className="vlt-pricing-table__title">Advanced</h4>
                      </div>
                      <div className="vlt-pricing-table__price">
                        <span className="currency">$</span>
                        <span className="price">250</span>
                        <span className="period">/mo</span>
                      </div>
                      <div className="vlt-pricing-table__content">
                        <ul>
                          <li className="active"><i className="icon-check"></i>Logo Design</li>
                          <li className="active"><i className="icon-check"></i>Company Banner</li>
                          <li className="active"><i className="icon-check"></i>Business Card Layout</li>
                          <li className="active"><i className="icon-check"></i>Single-sided flyer layout: $50/Image</li>
                          <li className="active"><i className="icon-check"></i>Three custom rotating banner images for Website</li>
                        </ul>
                      </div>
                      <div className="vlt-pricing-table__action">
                        <a className="vlt-btn vlt-btn--tertiary vlt-btn--lg" href="https://partnerproofs.com/login" target="_self" rel="noopener noreferrer">Order Now!</a>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="vlt-gap-80"></div>
          </section>

          {/* Accordion Section */}
          <section>
            <div className="vlt-gap-80"></div>
            <div className="container">
              <motion.div 
                className="row" 
                style={{ marginBottom: '20px' }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                variants={fadeVariant}
              >
                <div className="col-lg-12">
                  {accordionData.map((item, idx) => (
                    <React.Fragment key={idx}>
                      <button
                        className={`accordion ${openAccordion === idx ? 'accactive' : ''}`}
                        onClick={() => toggleAccordion(idx)}
                      >
                        <b>{item.title}</b>
                      </button>
                      <motion.div
                        className="panel"
                        initial={{ maxHeight: 0 }}
                        animate={{ maxHeight: openAccordion === idx ? '1000px' : 0 }}
                        transition={{ duration: 0.5, ease: easeOut }}
                      >
                        <div className="container">
                          <div className="row" style={{ margin: '20px' }}>
                            <div className="col-lg-6">
                              <img src={item.image} alt={item.title} />
                              <div className="vlt-gap-30"></div>
                            </div>
                            <div className="col-lg-6">
                              {item.features.map((feature, fIdx) => (
                                <p key={fIdx}>
                                  <IoCheckmarkCircle size={24} color="#e82e31" /> {feature}
                                </p>
                              ))}
                              <div className="vlt-gap-10"></div>
                              <div className="row">
                                <div style={{ margin: '10px' }}>
                                  <a
                                    className="vlt-btn vlt-btn--secondary vlt-btn--sm"
                                    href="https://partnerproofs.com/login"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    Simple Pricing {item.simplePricing}
                                  </a>
                                </div>
                                <div style={{ margin: '10px' }}>
                                  <a
                                    className="vlt-btn vlt-btn--secondary vlt-btn--sm"
                                    href="https://partnerproofs.com/login"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    Priority Pricing {item.priorityPricing}
                                  </a>
                                </div>
                              </div>
                              <div className="vlt-gap-30"></div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </React.Fragment>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Accordion CSS */}
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

              :global(.quote-link) {
                color: #000 !important;
                text-decoration: none !important;
                transition: color 0.3s ease;
              }

              :global(.quote-link:hover) {
                color: #e82e31 !important;
                text-decoration: none !important;
              }
            `}</style>
          </section>

        </div>
      </main>
    </>
  );
};

export default ExampleAndPlansPage;