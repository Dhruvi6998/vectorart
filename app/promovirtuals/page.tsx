'use client';
import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

const PromoVirtuals: React.FC = () => {
  const sliderImages = [
    'img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg', 'img6.jpg',
    'img7.jpg', 'img8.jpg', 'img9.jpg', 'img10.jpg', 'img11.jpg', 'img12.jpg',
    'img13.jpg', 'img14.jpg', 'img15.jpg', 'img16.jpg', 'img17.jpg', 'img18.jpg'
  ];

  const features = [
    {
      icon: 'feature-icon1.png',
      title: 'Configure Imprints',
      description: "The imprint area and location is set up to match the supplier's specifications. This ensures for the imprint displayed to be accurate."
    },
    {
      icon: 'feature-icon2.png',
      title: 'Define Imprint Colors',
      description: 'The supplier can define the imprint colors allowed for the products where color restrictions may apply.'
    },
    {
      icon: 'feature-icon3.png',
      title: 'Select Imprint Method',
      description: 'Users can select their preferred imprint method from the choices defined by the supplier. The virtual proof will display results per method selected.'
    },
    {
      icon: 'feature-icon7.png',
      title: 'Easy To Share',
      description: 'Once a virtual proof is generated it can be emailed, saved and print.'
    },
    {
      icon: 'feature-icon5.png',
      title: 'Easy Setup',
      description: "The tool captures supplier's product data through a simple product data xls. upload and images through a zip upload."
    },
    {
      icon: 'feature-icon6.png',
      title: 'Easy Link To Website',
      description: "The imprint area and location is set up to match the supplier's specifications. This ensures for the imprint displayed to be accurate."
    },
    {
      icon: 'feature-icon4.png',
      title: 'Remove White Background From The Logo',
      description: 'This option isessential where the logo has a white background that should not be displayed.'
    },
    {
      icon: 'feature-icon8.png',
      title: 'Any Platform',
      description: 'The tool works on PC, mac and tablets – IOS and ANDROID.'
    }
  ];

  // Reusable animation variant that mimics AOS "fade-up"
  const fadeUp = (delay: number = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true }, // Mimics AOS default (prevents re-triggering on scroll up)
    transition: { 
      duration: 0.7, 
      delay: delay / 1000, 
      ease: [0.215, 0.61, 0.355, 1.0] // Mimics AOS "ease-out-quad"
    }
  });

  return (
    <>
      <Head>
        <title>Elevate with Promo Virtual&apos;s Logo Design service|Vectorart.co</title>
        <meta name="keywords" content="design, imprint, virtual, Vector art , Graphic design" />
        <meta name="description" content="Discover uniqueness with Promo Virtual's logo design. We consider imprint rules, colors, and location for the perfect virtual sample." />
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
                    <h1 className="vlt-page-title__title" style={{ color: 'white' , fontSize: '4rem' , fontWeight: "700"}}>
                      Promo Virtuals
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
                {/* Framer Motion replaced AOS fade delay 100 */}
                <motion.div 
                  className="col-lg-6" 
                  {...fadeUp(100)}
                >
                  {/*Content slider*/}
                  <div 
                    className="vlt-content-slider" 
                    data-navigation-anchor=".vlt-about-slider-anchor" 
                    data-gap="" 
                    data-loop="" 
                    data-speed="" 
                    data-autoplay="true" 
                    data-autoplay-speed="3000" 
                    data-slides-centered="" 
                    data-slide-settings="{}" 
                    data-free-mode="" 
                    data-slider-offset="" 
                    data-mousewheel=""
                  >
                    <div className="swiper-container">
                      <div className="swiper-wrapper">
                        {sliderImages.map((image, index) => (
                          <div className="swiper-slide" key={index}>
                            <img 
                              src={`assets/img/pages/promovirtuals/${image}`} 
                              alt={image} 
                              loading="lazy" 
                              style={{ height: '600px' }} 
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/*Slider controls*/}
                  <div className="vlt-slider-controls vlt-slider-controls--style-3 vlt-about-slider-anchor has-black-color has-white-background-color position-absolute b-0 r-0">
                    <div className="vlt-swiper-button-prev">
                      <i className="icon-arrow-left"></i>
                    </div>
                    <div className="vlt-swiper-pagination"></div>
                    <div className="vlt-swiper-button-next">
                      <i className="icon-arrow-right"></i>
                    </div>
                  </div>
                </motion.div>

                <div className="vlt-gap-80"></div>

                {/* Framer Motion replaced AOS fade delay 400 */}
                <motion.div 
                  className="col-lg-6" 
                  {...fadeUp(400)}
                >
                  <h6 style={{ textAlign: 'center', marginBottom: '25px' }}>
                    &quot;THE VIRTUAL WORLD WHICH WE PRESENT YOU WITH, MIRRORS THE PHYSICAL WORLD IN EVERY SINGLE WAY&quot;
                  </h6>
                  <p style={{ fontSize: '25px' }}>
                    Promo Virtual&apos;s Virtual Samples truly bring out the uniqueness of each product and imprint method. We give utmost importance to authenticity.
                  </p>
                  <p style={{ fontSize: '25px' }}>
                    Creating a virtual sample is not just about placing a logo on any product. Imprint rules, color rules, location rules and final
                  </p>
                  <p style={{ fontSize: '25px' }}>
                    image quality are all to be considered before creating the perfect virtual sample. We have always strived for perfection and this is the reason why our clients deeply value our association.
                  </p>
                </motion.div>

                <div className="vlt-gap-80"></div>
              </div>
            </div>
          </section>

          <div className="vlt-gap-80"></div>

          {/* Framer Motion replaced AOS fade delay 100 */}
          <motion.section 
            className="has-black-color" 
            {...fadeUp(100)}
          >
            <div className="container">
              <div className="row" style={{ justifyContent: 'center' }}>
                <div className="vlt-gap-30"></div>
                <div>
                  {/*Animated block*/}
                  <div className="vlt-animated-block">
                    {/*Section title*/}
                    <h2 className="vlt-section-title__title">Features</h2>
                    <div className="vlt-gap-30"></div>
                  </div>
                </div>
              </div>

              <div className="row">
                {features.slice(0, 3).map((feature, index) => (
                  <div className="col-lg-4" key={index}>
                    <div className="row justify-content-center">
                      <img 
                        src={`assets/img/pages/promovirtuals/${feature.icon}`} 
                        alt={feature.title.toLowerCase()} 
                      />
                    </div>
                    <div className="vlt-gap-10"></div>
                    <h6 className="text-center">{feature.title}</h6>
                    <p className="text-center" style={{ fontSize: '13px' }}>
                      {feature.description}
                    </p>
                    <div className="vlt-gap-30"></div>
                  </div>
                ))}
              </div>

              <div className="row">
                {features.slice(3, 6).map((feature, index) => (
                  <div className="col-lg-4" key={index}>
                    <div className="row justify-content-center">
                      <img 
                        src={`assets/img/pages/promovirtuals/${feature.icon}`} 
                        alt={feature.title.toLowerCase()} 
                      />
                    </div>
                    <div className="vlt-gap-10"></div>
                    <h6 className="text-center">{feature.title}</h6>
                    <p className="text-center" style={{ fontSize: '13px' }}>
                      {feature.description}
                    </p>
                    <div className="vlt-gap-30"></div>
                  </div>
                ))}
              </div>

              <div className="row">
                {features.slice(6, 8).map((feature, index) => (
                  <div className="col-lg-4" key={index}>
                    <div className="row justify-content-center">
                      <img 
                        src={`assets/img/pages/promovirtuals/${feature.icon}`} 
                        alt={feature.title.toLowerCase()} 
                      />
                    </div>
                    <div className="vlt-gap-10"></div>
                    <h6 className="text-center">{feature.title}</h6>
                    <p className="text-center" style={{ fontSize: '13px' }}>
                      {feature.description}
                    </p>
                    {index === 1 && <div className="vlt-gap-30"></div>}
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          <div className="vlt-gap-80"></div>
        </div>
      </main>
    </>
  );
};

export default PromoVirtuals;