"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Custom hook to replicate AOS behavior
function AnimatedSection({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 1, delay: delay / 1000 }}
    >
      {children}
    </motion.div>
  );
}

export default function DesignAndDataServices() {
  return (
    <>
      <div className="vlt-site-overlay"></div>

      <main className="vlt-main">
        <div className="vlt-page-content">
          {/* Page Title Section */}
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
                    <h1 className="vlt-page-title__title" style={{ color: "white", fontSize: "4rem", fontWeight: "700" }}>
                      Design & Data Services
                    </h1>
                  </div>
                  <div className="col-md-3"></div>
                </div>
              </div>
            </div>
            <div className="vlt-gap-150"></div>
          </section>

          <div className="vlt-gap-80"></div>

          {/* In Brief Section */}
          <section>
            <div className="container">
              <div className="row">
                <div className="text-center">
                  <AnimatedSection delay={100}>
                    <h2 className="vlt-section-title__title">In Brief</h2>
                    <p>
                      Distributor buying decisions are biased in favor of suppliers who quickly deliver
                      highly accuracy data and visually appealing product images within the setting of a
                      website, presentation or catalog. Developing comprehensive datasets and keeping
                      them up-to-date consumes a lot of time and resources. As does the generation of
                      great looking product images and user interfaces. Vector Art design and data
                      services deliver every data, image and design output you need, relieve your teams
                      of the time burdens and cost overheads, and ensure substantial savings. Our linked
                      Design & Data Services help ensure that your distributors access and convert your
                      product data to sales.
                    </p>
                  </AnimatedSection>

                  <div className="vlt-gap-80"></div>
                </div>
              </div>

              {/* Data & Design Services Section */}
              <div className="row">
                <div className="text-center">
                  <AnimatedSection delay={100}>
                    <h3 className="vlt-section-title__title">Data & Design Services</h3>
                    <p>
                      Distributor buying decisions are biased in favor of suppliers who quickly deliver
                      highly accuracy data and visually appealing product images within the setting of a
                      website, presentation or catalog. Developing comprehensive datasets and keeping
                      them up-to-date consumes a lot of time and resources. As does the generation of
                      great looking product images and user interfaces. Vector Art design and data
                      services deliver every data, image and design output you need, relieve your teams
                      of the time burdens and cost overheads, and ensure substantial savings. Our linked
                      Design & Data Services help ensure that your distributors access and convert your
                      product data to sales.
                    </p>
                  </AnimatedSection>
                </div>
              </div>

              {/* Filters + Content */}
              <section>
                <div className="vlt-gap-80"></div>
                <div className="container">
                  <AnimatedSection delay={100}>
                    <div className="text-center">
                      <ul className="vlt-isotope-filters" id="vlt-filter-blog-07">
                        <li className="active" data-filter=".filter-product-information-management">
                          <span>Product Information Management</span>
                        </li>
                        <li data-filter=".filter-product-research"><span>Product Research</span></li>
                        <li data-filter=".filter-catalog-design-production">
                          <span>Catalog Design & Production</span>
                        </li>
                        <li data-filter=".filter-image-editing-related-services">
                          <span>Image Editing & Related Services</span>
                        </li>
                        <li data-filter=".filter-brochure-flyer-design-services">
                          <span>Brochure & Flyer Design Services</span>
                        </li>
                      </ul>
                    </div>
                  </AnimatedSection>

                  <div
                    className="vlt-isotope-grid"
                    data-columns="1"
                    data-layout="masonry"
                    data-x-gap="0|0"
                    data-y-gap="0|0"
                    data-controls="#vlt-filter-blog-07"
                    data-load-more-selector="#vlt-load-more-blog-07"
                  >
                    <div className="grid-sizer"></div>

                    {/* Item 1 */}
                    <div className="grid-item filter-product-information-management">
                      <article className="vlt-post vlt-post--style-2">
                        <div className="vlt-post__content">
                          <div className="row">
                            <p style={{ marginBottom: 30 }}>
                           Vector Art turnkey Product Information Management solutions are helping suppliers to focus on using data rather than managing it. Vector Art collates, organizes, refines and updates your product data quickly and accurately. Your catalogs, websites and partner sites always carry the right information and optimized images. We usually work in three steps:
                            </p>

                            <div className="col-lg-8">
                              <p><b>1. Collate data from multiple sources & formats</b></p>
                              <p>
                              We help you hunt and gather product information, photographs, images, old catalog dBs, Mac/Indesign/Corel files, .xls files, text files, jpegs, pdfs and pricing tables. Wherever it resides, we find it and compile it ready for the next stage.
                              </p>

                              <p><b>2. Organize the information as a structured asset</b></p>
                              <p>
            A centralized database holds de-duplicated, up-to-date product information and retouched product images in the right sizes.You can now use it to drive your business. It can power all your customer-facing websites, catalogs and marketing material and it works with your order management and inventory systems at the back end.
                              </p>

                              <p><b>3. Enter data into databases & applications</b></p>
                              <p>
                               Your product information has to reach and work with multiple internal and external systems and destinations: industry portals, partner sites, distributor portals and more. We make sure it is everywhere it should be, in real time, accurate and doing business for you.
                              </p>
                            </div>

                            <div className="col-lg-4">
                              <img
                                src="/assets/img/pages/designanddataservices/img1.jpg"
                                alt="product information management"
                              />
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>

                    {/* Item 2 */}
                    <div className="grid-item filter-product-research">
                      <article className="vlt-post vlt-post--style-2">
                        <div className="vlt-post__content">
                          <div className="row">
                            <div className="col-lg-8">
                              <p><b>Thorough, continuous research is at the core of successful online businesses.</b></p>
                              <p>
                              And that's exactly what we offer you. Our research team provides you with invaluable information on competitor products and pricing, buying trends, distributor behavior, ongoing campaigns and more, allowing you to position your product optimally for each customer group and to win business.
<br /> <br /> 
Our research is powered by a team of expert researchers who can transform your online investments into measureable dollars.
                              </p>
                            </div>
                            <div className="col-lg-4">
                              <img
                                src="/assets/img/pages/designanddataservices/img2.jpg"
                                alt="product research"
                              />
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>

                    {/* Item 3 */}
                    <div className="grid-item filter-catalog-design-production">
                      <article className="vlt-post vlt-post--style-2">
                        <div className="vlt-post__content">
                          <div className="row">
                            <p style={{ marginBottom: 30 }}>
                             Vector Art turnkey Product Information Management solutions are helping suppliers to focus on using data rather than managing it. Vector Art collates, organizes, refines and updates your product data quickly and accurately. Your catalogs, websites and partner sites always carry the right information and optimized images. We usually work in three steps:
                            </p>

                            <div className="col-lg-8">
                              <p><b>Vector Art creates catalogs that synergize across web, digital, print and mobile platforms.</b></p>
                              <p>
                               It's a single window solution that has your catalogs ready for business within days. Your customers get a compelling and consistent experience. You realize greater returns from your catalog programs and save on time and money. The crux of our cross-media publishing solution is "Create Once, Publish and Monetize Multiple Times".
                              </p>
                              <p><b>The promotional industry is becoming truly multi-channel.</b></p>
                              <p>A seamless experience across multiple mediums is vital to building distributor engagement. And that is the deliverable that we promise and keep in mind through our design, data and publishing phases for your catalogs.</p>
                            <p><b>All you have to do is to provide us with the inputs you can.</b></p>
                            <p>We will help fill in the missing pieces through photography and data services. And if you want us to write copy for your products, our team of specialized copy writers will do just that.</p>
                            </div>

                            <div className="col-lg-4">
                              <img
                                src="/assets/img/pages/designanddataservices/img3.jpg"
                                alt="catalog design and production"
                              />
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>

                    {/* Item 4 */}
                    <div className="grid-item filter-image-editing-related-services">
                      <article className="vlt-post vlt-post--style-2">
                        <div className="vlt-post__content">
                          <div className="row">
                            <div className="col-lg-8">
                              <p><b>Product Image Editing</b></p>
                              <p>We do it all. Remove backgrounds from product photographs, optimize images for the web, enhance/clean up product shots and more. On time, in budget.

</p>
                              <p><b>Clipping Path</b></p>
                              <p>Vector Art delivers fully hand drawn clipping paths and masks, even for complex shapes, so you get the highest quality product images ready for print</p>
                            <p><b>Product Templates/mockups</b></p>
                            <p>Let Vector Art handle all your one time or irregular studio work including getting product images ready for print and web, virtual samples and template creation.</p>
                            <p><b>Dedicated Studio</b></p>
                            <p>Realize the full cost and service benefits of offshoring your production art, within days. We create and manage dedicated teams that work exclusively for you.</p>
                            <p><b>On Demand Artwork</b></p>
                            <p>Back up your busy art studio. Let Vector Art's 24/7 studio manage your overspills and emergencies. Our experienced team can meet all your needs across all formats.</p>
                            </div>

                            <div className="col-lg-4">
                              <img
                                src="/assets/img/pages/designanddataservices/img4.jpg"
                                alt="image editing services"
                              />
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>

                    {/* Item 5 */}
                    <div className="grid-item filter-brochure-flyer-design-services">
                      <article className="vlt-post vlt-post--style-2">
                        <div className="vlt-post__content">
                          <div className="row">
                            <div className="col-lg-8">
                              <p><b>PDF Brochures</b></p>
                              <p>Vector Art custom designs PDF brochures with seasonal or event-specific themes, ready to be downloaded from your websites. They are effective and low-cost.</p>
                              <p><b>Flip Brochures</b></p>
                              <p>Flip ahead. Vector Art's advanced flip technology gives your customers powerful search, bookmarking, commenting and email tools within a fast digital catalog format.</p>
                            <p><b>Print Brochures</b></p>
                            <p>Vector Art designs corporate brochures with custom branded cover and products. Print them digitally and pitch existing and new corporate customers at low cost.</p>
                            
                            <p><b>Email Flyers</b></p>
                            <p>Vector Art's innovatively designed flyers are optimized for email blasts and help you win business. Try us on demand or subscribe to our monthly service.</p>
<p><b>PDF Flyers</b></p>
<p>Vector Art can create a range of custom designed PDF flyers for users to download from your website or for mailing/printing, made for Close Outs, Offers, New Products and more.</p>
                           </div>
                            <div className="col-lg-4">
                              <img
                                src="/assets/img/pages/designanddataservices/img5.jpg"
                                alt="brochure and flyer design"
                              />
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </section>

              <div className="vlt-gap-150"></div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}