'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HomePage: React.FC = () => {
  useEffect(() => {
    const initSwipers = async () => {
      // Import Swiper modules
      const Swiper = (await import("swiper")).default;
      const { Navigation, Pagination, Autoplay } = await import("swiper/modules");

      // Wait a moment for components to mount
      setTimeout(() => {
        // Testimonials Slider
        new Swiper(".vlt-content-slider .swiper-container", {
          modules: [Navigation, Pagination, Autoplay],
          spaceBetween: 100,
          loop: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          navigation: {
            nextEl: ".vlt-testimonials-slider-anchor .vlt-swiper-button-next",
            prevEl: ".vlt-testimonials-slider-anchor .vlt-swiper-button-prev",
          },
          pagination: {
            el: ".vlt-testimonials-slider-anchor .vlt-swiper-pagination",
            clickable: true,
          },
        });

        // Portfolio Slider
   const portfolioSwiper = new Swiper(".vlt-work-carousel-masonry .swiper-container", {
          modules: [Navigation, Autoplay],
          loop: true,
          speed: 1000,
          spaceBetween: 30,
          grabCursor: true,
          centeredSlides: false,
          slidesPerView: 3,
          watchOverflow: true,
          observer: true,
          observeParents: true,
          autoplay: {
            delay: 1500,
            disableOnInteraction: false,
          },
          navigation: {
            nextEl: ".vlt-work-carousel-masonry .vlt-swiper-button-next",
            prevEl: ".vlt-work-carousel-masonry .vlt-swiper-button-prev",
          },
          breakpoints: {
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          },
          on: {
            init: function() {
              // Update swiper after images load
              const images = document.querySelectorAll('.vlt-work-carousel-masonry img');
              let loadedCount = 0;
              images.forEach(img => {
                if (img.complete) {
                  loadedCount++;
                } else {
                  img.addEventListener('load', () => {
                    loadedCount++;
                    if (loadedCount === images.length) {
                      this.update();
                    }
                  });
                }
              });
              if (loadedCount === images.length) {
                this.update();
              }
            }
          }
        });
      }, 50);
    };

    initSwipers();
  }, []);


  // Framer Motion variants
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const fadeInRightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  };

  const imageMaskVariants = {
    hidden: { 
      clipPath: 'inset(0 100% 0 0)',
    },
    visible: { 
      clipPath: 'inset(0 0% 0 0)',
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  };

  const marqueeServices1 = [
    { name: 'Banner Design', image: '/assets/img/marquee/Bannerdesign.jpg' },
    { name: 'Bobblehead', image: '/assets/img/marquee/Bobblehead.jpg', bold: true },
    { name: 'Book Design', image: '/assets/img/marquee/Bookdesign.jpg' },
    { name: 'Brand Window', image: '/assets/img/marquee/Brandwindow.jpg', bold: true },
    { name: 'Business Card', image: '/assets/img/marquee/Businesscard.jpg' },
    { name: 'Character Design', image: '/assets/img/marquee/Characterdesign.jpg', bold: true },
  ];

  const marqueeServices2 = [
    { name: 'Complex Vector', image: '/assets/img/marquee/Complexvector.jpg' },
    { name: 'Custom Inflatable', image: '/assets/img/marquee/Custominflatable.jpg', bold: true },
    { name: 'Embroidery', image: '/assets/img/marquee/Embroidery.jpg' },
    { name: 'Flyer Design', image: '/assets/img/marquee/Flyerdesign.jpg', bold: true },
    { name: 'Letter Head Design', image: '/assets/img/marquee/Letterheaddesign.jpg' },
    { name: 'Raster To Vector', image: '/assets/img/marquee/Rastertovector.jpg', bold: true },
  ];

  const marqueeServices3 = [
    { name: 'Social Media', image: '/assets/img/marquee/Socialmedia.jpg', bold: true },
    { name: 'Standard Vector', image: '/assets/img/marquee/Standardvector.jpg' },
    { name: 'Vectorart-Simple', image: '/assets/img/marquee/Vectorart-Simple.jpg', bold: true },
    { name: 'Virtual Proof', image: '/assets/img/marquee/Virtualproof.jpg' },
    { name: 'Virtuals', image: '/assets/img/marquee/Virtuals.jpg', bold: true },
    { name: 'Inflatable', image: '/assets/img/marquee/Inflatable.jpg' },
  ];

  const testimonials = [
    {
      content: '" Super quality & fast Turn around time awesome file of Digitizer at great price. "',
      name: 'Steve Capano',
      position: 'Director - Theaugustagroup.',
    },
    {
      content: '" Amazing artwork with the speed in which we turn around artwork "',
      name: 'James Mciver',
      position: 'Account Executive - Inproma, LLC.',
    },
    {
      content: '" We are extremely happy with their services and rely on them as part of our team to provide the best services to our clients. "',
      name: 'Jamie Kindle',
      position: 'CEO Graphics USA.',
    },
  ];

  const portfolioImages = [
    '/assets/img/portfolio/1.jpg',
    '/assets/img/portfolio/2.jpg',
    '/assets/img/portfolio/3.jpg',
    '/assets/img/portfolio/4.jpg',
    '/assets/img/portfolio/5.jpg',
    '/assets/img/portfolio/6.jpg',
    '/assets/img/portfolio/7.jpg',
    '/assets/img/portfolio/8.jpg',
    '/assets/img/portfolio/10.jpg',
    '/assets/img/portfolio/11.jpg',
    '/assets/img/portfolio/12.jpg',
  ];

  return (
    <>
      <div className="vlt-site-overlay"></div>
      <main className="vlt-main">
        <div className="vlt-page-content">
          <section>
            {/* Hero Video Section */}
            <section className="position-relative">
              <div style={{ height: 'auto' }}>
                <div className="vlt-gap-80--md"></div>
                <video width="100%" loop autoPlay muted style={{ objectFit: 'contain' }}>
                  <source src="/assets/img/pages/home/bg3.mp4" type="video/mp4" />
                </video>
              </div>
            </section>

            {/* Marquee Section */}
            <section className="position-relative">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInRightVariants}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <Image
                  className="vlt-particle"
                  src="/assets/img/root/square-plus-pattern.png"
                  alt="square-plus-pattern"
                  width={232}
                  height={232}
                  style={{ position: 'absolute', top: 0, right: 0, maxWidth: '232px' }}
                  loading="lazy"
                />
              </motion.div>
              <div className="vlt-gap-80"></div>

              {/* First Marquee */}
              <div className="container-fluid p-0">
                <div className="vlt-content-marquee" style={{ '--speed': '17s' } as React.CSSProperties}>
                  <div className="vlt-content-marquee__original">
                    {marqueeServices1.map((service, idx) => (
                      <div key={idx} style={{ paddingRight: '2em' }}>
                        <div className="vlt-stroke-text--md">
                          <Link href="#" data-tooltip-image={service.image} target="_self">
                            <span style={{ color: 'black', fontWeight: service.bold ? '700' : 'normal' }}>
                              {service.bold ? <b>| {service.name}</b> : `| ${service.name}`}
                            </span>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="vlt-content-marquee__copy">
                    {marqueeServices1.map((service, idx) => (
                      <div key={idx} style={{ paddingRight: '2em' }}>
                        <div className="vlt-stroke-text--md">
                          <Link href="#" data-tooltip-image={service.image} target="_self">
                            <span style={{ color: 'black', fontWeight: service.bold ? '700' : 'normal' }}>
                              {service.bold ? <b>| {service.name}</b> : `| ${service.name}`}
                            </span>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Second Marquee (Reverse) */}
              <div className="container-fluid p-0">
                <div className="vlt-content-marquee-reverse" style={{ '--speed': '17s' } as React.CSSProperties}>
                  <div className="vlt-content-marquee__original">
                    {marqueeServices2.map((service, idx) => (
                      <div key={idx} style={{ paddingRight: '2em' }}>
                        <div className="vlt-stroke-text--md">
                          <Link href="#" data-tooltip-image={service.image} target="_self">
                            <span style={{ color: 'black', fontWeight: service.bold ? '700' : 'normal' }}>
                              {service.bold ? <b>| {service.name}</b> : `| ${service.name}`}
                            </span>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="vlt-content-marquee__copy">
                    {marqueeServices2.map((service, idx) => (
                      <div key={idx} style={{ paddingRight: '2em' }}>
                        <div className="vlt-stroke-text--md">
                          <Link href="#" data-tooltip-image={service.image} target="_self">
                            <span style={{ color: 'black', fontWeight: service.bold ? '700' : 'normal' }}>
                              {service.bold ? <b>| {service.name}</b> : `| ${service.name}`}
                            </span>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Third Marquee */}
              <div className="container-fluid p-0">
                <div className="vlt-content-marquee" style={{ '--speed': '17s' } as React.CSSProperties}>
                  <div className="vlt-content-marquee__original">
                    {marqueeServices3.map((service, idx) => (
                      <div key={idx} style={{ paddingRight: '2em' }}>
                        <div className="vlt-stroke-text--md">
                          <Link href="#" data-tooltip-image={service.image} target="_self">
                            <span style={{ color: 'black', fontWeight: service.bold ? '700' : 'normal' }}>
                              {service.bold ? <b>| {service.name}</b> : `| ${service.name}`}
                            </span>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="vlt-content-marquee__copy">
                    {marqueeServices3.map((service, idx) => (
                      <div key={idx} style={{ paddingRight: '2em' }}>
                        <div className="vlt-stroke-text--md">
                          <Link href="#" data-tooltip-image={service.image} target="_self">
                            <span style={{ color: 'black', fontWeight: service.bold ? '700' : 'normal' }}>
                              {service.bold ? <b>| {service.name}</b> : `| ${service.name}`}
                            </span>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="vlt-gap-80"></div>
            </section>
          </section>

          {/* About Section */}
          <section style={{ background: "url('/assets/img/pages/home/section1.jpg')", padding: '10px', backgroundSize: 'cover' }}>
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-8">
                  <div className="row">
                    <div className="col-lg-8 offset-lg-4">
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInVariants}
                        transition={{ duration: 1, delay: 0 }}
                        className="vlt-animated-block"
                      >
                        <div className="vlt-section-title vlt-section-title--style-1">
                          <span className="vlt-section-title__subtitle">About us</span>
                          <h1 className="vlt-section-title__title" style={{ fontSize: '46px', lineHeight: 1.25 }}>
                            When it comes to experience and quality, no provider of vector artwork and image editing can compare to Vector Art.
                          </h1>
                        </div>
                      </motion.div>
                      <div className="vlt-gap-80"></div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-5 col-md-6 pl-0">
                      <div className="vlt-simple-image">
                        <motion.div
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          variants={imageMaskVariants}
                          className="vlt-simple-image__mask"
                        >
                          <div className="inside"></div>
                        </motion.div>
                        <Image src="/assets/img/pages/home/Comp 2_v2.gif" alt="Comp 2_v2" width={436} height={436} loading="lazy" style={{ width: '436px' }} />
                      </div>
                    </div>

                    <div className="col-lg-6 offset-lg-1 col-md-6">
                      <div className="vlt-gap-60--md"></div>
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInVariants}
                        transition={{ duration: 1, delay: 0.1 }}
                        className="vlt-animated-block"
                      >
                        <p className="fz-3">
                          We have spent years perfecting our artist training and provide these services to some of the largest and best-known suppliers and distributors in the promotional products industry.
                        </p>
                      </motion.div>
                      <div className="vlt-gap-40"></div>
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInVariants}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="vlt-animated-block"
                      >
                        <p className="fz-3">
                          Vector art is a multi-national Graphics and digital imaging services company. We work with global leaders as well as growing companies to help achieve significant value addition and cost reduction to their graphic design, image production and management operations...
                        </p>
                      </motion.div>
                      <div className="vlt-gap-50"></div>
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInVariants}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="vlt-animated-block"
                      >
                        <Link className="vlt-btn vlt-btn--secondary vlt-btn--md" href="/aboutus">
                          Who we are
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 pr-0 vlt-custom--1599">
                  <div className="vlt-gap-30"></div>
                  <div className="vlt-simple-image">
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={imageMaskVariants}
                      className="vlt-simple-image__mask"
                    >
                      <div className="inside"></div>
                    </motion.div>
                    <Image src="/assets/img/pages/home/Comp 1_v2.gif" alt="Comp 1_v2" width={436} height={436} loading="lazy" style={{ width: '436px' }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="vlt-gap-80"></div>
          </section>

          {/* Solutions Section */}
          <section>
            <div className="container">
              <div className="vlt-gap-40"></div>
              <div className="text-center">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInVariants}
                  transition={{ duration: 1, delay: 0 }}
                  className="vlt-animated-block"
                >
                  <div className="vlt-section-title vlt-section-title--style-2">
                    <h2 className="vlt-section-title__title">Solutions</h2>
                  </div>
                </motion.div>
              </div>
              <div className="vlt-gap-50"></div>

              <div className="row">
                <div className="col-md-6">
                  {/* Service 1 */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInVariants}
                    transition={{ duration: 1, delay: 0.1 }}
                    className="vlt-animated-block"
                  >
                    <div className="vlt-service vlt-service--style-3">
                      <Link className="vlt-service__link" href="/promovirtuals"></Link>
                      <div className="vlt-service__media">
                        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="74">
                          <g fill="none" fillRule="evenodd">
                            <path stroke="currentColor" strokeWidth="2" d="M19.6575263 67c0-5.9900022-3.0862105-16.5075234-7.6575263-16.5075234 4.5713158 0 14.5-13.389099 14.5-19.4924766 0 6.1033776 9.9134211 19.4924766 14.5 19.4924766-4.5865789 0-7.6193684 10.5175212-7.6193684 16.5075234H19.6575263z" />
                            <path stroke="currentColor" strokeLinecap="square" strokeWidth="1.4" d="M9 25.5h16M30 25.5h16" />
                            <path stroke="currentColor" strokeWidth="1.4" d="M26.5 54c1.38 0 2.5-1.1193333 2.5-2.5S27.88 49 26.5 49 24 50.1193333 24 51.5s1.12 2.5 2.5 2.5z" />
                            <path stroke="#E82E31" strokeLinecap="square" strokeWidth="2" d="M1 58.5h7M47 58.5h7" />
                            <path stroke="currentColor" strokeLinecap="square" strokeWidth="2" d="M38 67H15v6h23z" />
                            <path stroke="currentColor" strokeWidth="2" d="M5 3c0 21 22.2413793 21 22.2413793 21S48 24 48 3" />
                            <path fill="#FFF" fillRule="nonzero" stroke="#E82E31" strokeWidth="2" d="M5 7c1.6575 0 3-1.3431 3-3S6.6575 1 5 1 2 2.3431 2 4s1.3425 3 3 3zM49 7c1.6575 0 3-1.3431 3-3s-1.3425-3-3-3-3 1.3431-3 3 1.3425 3 3 3zM26.5 28c1.38 0 2.5-1.1193333 2.5-2.5S27.88 23 26.5 23 24 24.1193333 24 25.5s1.12 2.5 2.5 2.5z" />
                            <path stroke="currentColor" strokeWidth="1.4" d="M7.5 27c.828 0 1.5-.6717 1.5-1.5S8.328 24 7.5 24 6 24.6717 6 25.5 6.672 27 7.5 27zM47.5 27c.828 0 1.5-.6717 1.5-1.5s-.672-1.5-1.5-1.5-1.5.6717-1.5 1.5.672 1.5 1.5 1.5z" />
                            <path stroke="currentColor" strokeLinecap="square" strokeWidth="1.4" d="M26.5 32v17" />
                          </g>
                        </svg>
                      </div>
                      <div className="vlt-service__content">
                        <h5 className="vlt-service__title">Promo Virtuals</h5>
                        <div className="vlt-service__icon">
                          <i className="icon-arrow-top-right"></i>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  <div className="vlt-gap-30"></div>

                  {/* Service 2 */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInVariants}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="vlt-animated-block"
                  >
                    <div className="vlt-service vlt-service--style-3">
                      <Link className="vlt-service__link" href="/technologysolutions"></Link>
                      <div className="vlt-service__media">
                        <svg xmlns="http://www.w3.org/2000/svg" width="65" height="62">
                          <g fill="none" fillRule="evenodd">
                            <path fill="currentColor" fillRule="nonzero" d="M8 9v2H2v41h6v2H0V9zM65 9v45h-8v-2h6V11h-6V9zM46.6605548.25031002H18.2685617c-.7684079.01632392-1.7151316.19992612-2.6292113.69602128-1.5028278.81562433-2.393294 2.25911646-2.3482551 4.3554924l-.0301891 4.22575198.004029 28.90995512.0250812 17.1571775.000906 1.1201174c-2e-7 2.1306754.9633075 3.5783578 2.5318616 4.3848517.9164678.4712148 1.8176116.6375753 2.452883.6503226h28.3456534c.7213546-.0817346 1.6189167-.3381741 2.5262714-.8965333 1.4113595-.8685088 2.3288729-2.2165187 2.4711735-4.0821403l.0194137-.3259175c.1022205-2.123776.1296834-9.6895122.1020866-21.5425731l-.119328-29.61712151c0-2.0868862-.8955954-3.52197505-2.3782953-4.33607969-.9062014-.49756717-1.8403407-.68249282-2.5820875-.69932458zM18.2846591 1.75013724h28.3590912c.5054614.01170919 1.2186817.1529009 1.8769538.51433775.9578946.52595029 1.5338015 1.3927213 1.5948346 2.77240611l.1006967 21.9788259.0338027 16.5414528c-.0028912 7.4064771-.0424908 11.9930743-.1269283 13.1000852-.1034474 1.356239-.7383262 2.2890024-1.761651 2.9187261-.4036599.2484004-.8414535.4312108-1.2795477.5563773l-.2365971.0622461c-.1417536.0338807-.2498406.0530706-.3139947.0608252L18.2905394 60.25l-.1153768-.0074781c-.099567-.0091688-.2419739-.027401-.4124688-.0588761-.4305469-.0794835-.8599949-.2153745-1.2540162-.4179661-1.0874566-.559131-1.7177554-1.5063594-1.7177554-3.051394l-.0409587-38.0338463c.0008291-7.4518706.0134896-12.11144167.0407848-13.37857319-.0326285-1.55102677.5419339-2.48242226 1.5641068-3.0371825.6666119-.36178787 1.3951084-.5030671 1.929804-.51454647z" />
                            <path fill="#E82E31" fillRule="nonzero" d="M34 54h-3v3h3z" />
                            <path fill="currentColor" fillRule="nonzero" d="M45.75 6.25h-27.5v44.5h27.5V6.25zm-1.5 1.5v41.5h-24.5V7.75h24.5z" />
                            <path fill="#E82E31" d="M33.9212605 13l.7236898 2.422014 2.6450353-1.0881042 1.6690733 1.7752623-1.2677313 2.5028268 2.2704493.8341924L40 21.8162008l-1.9289901.8489084.888049 2.2171137-1.6690733 1.7521907-2.6807101-.9670098-.688015 2.2341992L31.4418585 28l-.7287862-2.2403099-2.5252697 1.0854852-1.8512699-2.0640931 1.1415952-2.4076723-2.3392508-.5772876L25 19.3451753l2.804298-.7331764-1.3849486-2.5028268 1.9455533-1.7752623 2.4016819 1.3103394L31.3947167 13h2.5265438zM32.5 23.3125c1.5539063 0 2.8125-1.2591562 2.8125-2.8125s-1.2585937-2.8125-2.8125-2.8125-2.8125 1.2591562-2.8125 2.8125 1.2585937 2.8125 2.8125 2.8125z" />
                            <path fill="currentColor" fillRule="nonzero" d="M33 32.5v2h-9v-2zM33 38.5v2h-9v-2z" />
                          </g>
                        </svg>
                      </div>
                      <div className="vlt-service__content">
                        <h5 className="vlt-service__title">Technology Solutions</h5>
                        <div className="vlt-service__icon">
                          <i className="icon-arrow-top-right"></i>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  <div className="vlt-gap-30"></div>

                  {/* Service 3 */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInVariants}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="vlt-animated-block"
                  >
                    <div className="vlt-service vlt-service--style-3">
                      <Link className="vlt-service__link" href="/erpandordermanagement"></Link>
                      <div className="vlt-service__media">
                        <svg xmlns="http://www.w3.org/2000/svg" width="87" height="58">
                          <g fill="none">
                            <path fill="#E82E31" d="M47.928 31.493l9.7707165-10.9989628 6.0490252 6.8120154c.3667114.4129663.3292144 1.04502-.083752 1.4117314-.3811997.3385029-.9490773.3325914-1.322616.0048698l-.0891154-.0886217L57.698 23.506l-9.7692309 10.9998566L41.162 26.887l-6.4357473 6.8004278c-.3504516.3702446-.9167076.4135361-1.3172249.1193958l-.0964556-.0805709c-.3702446-.3504516-.4135361-.9167076-.1193958-1.3172249l.0805709-.0964556 7.9354441-8.3836255L47.928 31.493z" />
                            <path fill="currentColor" d="M26.4318182-.00001421v8.66668088h5.0227273c1.6708145 0 3.0227272 1.34430579 3.0227272 3.00000003 0 1.6556942-1.3519127 3-3.0227272 3H20.7272727c-2.7728656 0-5.0227272 2.2372021-5.0227272 5l.0046427.2169924c.1141332 2.6620036 2.3181891 4.7830076 5.0180845 4.7830076L26.431 24.666V32.1l-.0626359.0122991C24.1058356 32.597837 22.4090909 34.6007281 22.4090909 37c0 2.7627979 2.2498617 5 5.0227273 5h8.0454545C37.1480872 42 38.5 43.3443058 38.5 45s-1.3519128 3-3.0227273 3H14.0227273C11.2498617 48 9 50.2372021 9 53s2.2498617 5 5.0227273 5h52.4080909c.5860057 0 1.0760598-.0640346 1.6476867-.3160548C69.2740865 57.1568345 70 56.0203209 70 54.3186667V3.72946667c0-1.47269284-.5297757-2.54055519-1.467391-3.15916237-.6326189-.41738078-1.2943249-.5590312-1.9928673-.56963358L26.4318182-.0000142zM28.431 6.666V1.999l38.0935513.00155556C67.4652687 2.01494861 68 2.3677464 68 3.72946667V54.3186667c0 .916357-.2647536 1.3308639-.7283247 1.5352442C67.0158439 55.9667024 66.7610184 56 66.4308182 56H14.0227273C12.3519128 56 11 54.6556942 11 53s1.3519128-3 3.0227273-3h21.4545454C38.2501383 50 40.5 47.7627979 40.5 45s-2.2498617-5-5.0227273-5h-8.0454545c-1.6708145 0-3.0227273-1.3443058-3.0227273-3s1.3519128-3 3.0227273-3h1V22.6666667h-7.7045455c-1.6708145 0-3.0227272-1.3443058-3.0227272-3s1.3519127-3 3.0227272-3h10.7272728c2.7728655 0 5.0227272-2.2372021 5.0227272-5l-.0046427-.2169925c-.1141332-2.6620036-2.3181891-4.78300753-5.0180845-4.78300753L28.431 6.666zM10 13.25c-1.51836684 0-2.75 1.2314063-2.75 2.75s1.23163316 2.75 2.75 2.75c1.5183668 0 2.75-1.2314063 2.75-2.75s-1.2316332-2.75-2.75-2.75zm0 1.5c.69000155 0 1.25.5598953 1.25 1.25s-.55999845 1.25-1.25 1.25-1.25-.5598953-1.25-1.25.55999845-1.25 1.25-1.25zm-7 29.5C1.48163316 44.25.25 45.4814063.25 47S1.48163316 49.75 3 49.75 5.75 48.5185937 5.75 47 4.51836684 44.25 3 44.25zm0 1.5c.69000155 0 1.25.5598953 1.25 1.25S3.69000155 48.25 3 48.25 1.75 47.6901047 1.75 47s.55999845-1.25 1.25-1.25z" />
                            <path fill="currentColor" d="M64 5H39.0869565v7.8518519c0 4.2700962-2.8854823 7.2222222-5.6488261 7.2222222H31v15.7037037h2.8492174c4.6712218 0 9.2812174 2.1104851 9.2812174 5.7675741V44H64V5zm-2 2v35H45.13l.0004348-.4546481-.0049954-.2660375c-.1892785-5.0105069-5.726199-7.5015366-11.276222-7.5015366L33 33.777V22.074l.4381304.0000741.2114128-.0038117c3.8027155-.1369646 7.4374133-3.9513744 7.4374133-9.2184105L41.086 7H62z" />
                            <path fill="#E82E31" d="M55.5 17c1.38125 0 2.5-1.11925 2.5-2.5S56.88125 12 55.5 12 53 13.11925 53 14.5s1.11875 2.5 2.5 2.5zm23.111664 15c2.0300335 0 3.3706244 1.5731087 3.3881709 3.4908508.0170998 1.8689163-1.2281894 3.4036994-3.1833982 3.5039417L78.611664 39H75v-2h3.611664c.8844514 0 1.3963595-.6050262 1.3882546-1.4908508-.0076466-.835741-.4770104-1.4351467-1.2414958-1.5027732L78.611664 34H75v-2h3.611664zM84.5 22c1.38125 0 2.5-1.11925 2.5-2.5S85.88125 17 84.5 17 82 18.11925 82 19.5s1.11875 2.5 2.5 2.5z" />
                          </g>
                        </svg>
                      </div>
                      <div className="vlt-service__content">
                        <h5 className="vlt-service__title">ERP & Order Management</h5>
                        <div className="vlt-service__icon">
                          <i className="icon-arrow-top-right"></i>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  <div className="vlt-gap-30--sm"></div>
                </div>

                <div className="col-md-6 position-relative">
                  {/* Service 4 */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInVariants}
                    transition={{ duration: 1, delay: 0.1 }}
                    className="vlt-animated-block"
                  >
                    <div className="vlt-service vlt-service--style-3">
                      <Link className="vlt-service__link" href="/offshoredevelopmentcenter"></Link>
                      <div className="vlt-service__media">
                        <svg xmlns="http://www.w3.org/2000/svg" width="68" height="67">
                          <g fill="none" fillRule="nonzero">
                            <path fill="currentColor" d="M68 0H0v67h68V0zm-2 2v63H2V2h64z" />
                            <path fill="currentColor" d="M68 14.5v2H0v-2zM7.5 5.25c-1.79466814 0-3.25 1.45561717-3.25 3.25s1.45533186 3.25 3.25 3.25 3.25-1.45561717 3.25-3.25S9.29466814 5.25 7.5 5.25zm0 1.5c.96617519 0 1.75.78397848 1.75 1.75s-.78382481 1.75-1.75 1.75-1.75-.78397848-1.75-1.75.78382481-1.75 1.75-1.75zM17.5 5.25c-1.7946681 0-3.25 1.45561717-3.25 3.25s1.4553319 3.25 3.25 3.25 3.25-1.45561717 3.25-3.25-1.4553319-3.25-3.25-3.25zm0 1.5c.9661752 0 1.75.78397848 1.75 1.75s-.7838248 1.75-1.75 1.75-1.75-.78397848-1.75-1.75.7838248-1.75 1.75-1.75zM50.395292 5.25H27.604708C25.7588644 5.25 24.25 6.69854159 24.25 8.5s1.5088644 3.25 3.354708 3.25h22.790584C52.2411356 11.75 53.75 10.30145841 53.75 8.5s-1.5088644-3.25-3.354708-3.25zm-22.790584 1.5h22.790584C51.4260913 6.75 52.25 7.54096967 52.25 8.5s-.8239087 1.75-1.854708 1.75H27.604708C26.5739087 10.25 25.75 9.45903033 25.75 8.5s.8239087-1.75 1.854708-1.75z" />
                            <path fill="#E82E31" d="M60.5 5.25c-1.7946681 0-3.25 1.45561717-3.25 3.25s1.4553319 3.25 3.25 3.25 3.25-1.45561717 3.25-3.25-1.4553319-3.25-3.25-3.25zm0 1.5c.9661752 0 1.75.78397848 1.75 1.75s-.7838248 1.75-1.75 1.75-1.75-.78397848-1.75-1.75.7838248-1.75 1.75-1.75zM20.75 25.75v1.5h-8.5v-1.5z" />
                            <path fill="currentColor" d="M55.75 25.75v1.5h-31.5v-1.5zM56 31.5v2H11v-2z" />
                            <path fill="#E82E31" d="M31 40H12v19h19V40zm-2 2v15H14V42h15z" />
                            <path fill="currentColor" d="M56 40H37v19h19V40zm-2 2v15H39V42h15z" />
                          </g>
                        </svg>
                      </div>
                      <div className="vlt-service__content">
                        <h5 className="vlt-service__title">Offshore Development Center</h5>
                        <div className="vlt-service__icon">
                          <i className="icon-arrow-top-right"></i>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  <div className="vlt-gap-30"></div>

                  {/* Service 5 */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInVariants}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="vlt-animated-block"
                  >
                    <div className="vlt-service vlt-service--style-3">
                      <Link className="vlt-service__link" href="/consulting"></Link>
                      <div className="vlt-service__media">
                        <svg xmlns="http://www.w3.org/2000/svg" width="99" height="73">
                          <g fill="none">
                            <path fill="currentColor" d="M1.5 23c.828 0 1.5-.672 1.5-1.5S2.328 20 1.5 20 0 20.672 0 21.5.672 23 1.5 23z" />
                            <path fill="#E82E31" d="M55 4c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zM32 71c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z" />
                            <path fill="currentColor" d="M83.5 35c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm14 25c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm-29.6871489-9C64.0611276 51 61 53.9148167 61 57.5352544l.0058323.2720271c.0775732 1.8067398.9251714 3.4720964 2.314502 4.6419094L63.488 62.585l8.473 8.071-.0427833-.047744C73.2045964 72.1124081 75.1232191 73 77.1871489 73 80.9388724 73 84 70.0851833 84 66.4647456l-.0060132-.276454c-.0557058-1.2787633-.4966152-2.4880303-1.2462081-3.5015819L82.562 62.448l.061091-.0575375-10.6748971-10.1677489L71.875 52.29l-.1704042-.1196034C70.5779866 51.4168067 69.228568 51 67.8128511 51zm0 2c1.3049326 0 2.5221743.4902852 3.4199074 1.3452407l.6860233.6533338L71.94 54.977l7.779 7.409-.0520812.0509176.8167014.7235865C81.4471057 64.0141395 82 65.1980928 82 66.4647456 82 68.9581115 79.8556178 71 77.1871489 71c-1.4780882 0-2.8417869-.6308733-3.7489752-1.6916404l-.0702628-.0741322-8.532479-8.1275291-.0767677-.0660429C63.6505123 60.1809928 63 58.9066197 63 57.5352544 63 55.0418885 65.1443822 53 67.8128511 53z" />
                            <path fill="currentColor" d="M59.7071068 44.2928932l7 7-1.4142136 1.4142136-7-7zm-4 4l7 7-1.4142136 1.4142136-7-7z" />
                            <path fill="#E82E31" d="M43.5 24c-4.6947847 0-8.5 3.8052153-8.5 8.5s3.8052153 8.5 8.5 8.5 8.5-3.8052153 8.5-8.5-3.8052153-8.5-8.5-8.5zm0 2c3.5902153 0 6.5 2.9097847 6.5 6.5S47.0902153 39 43.5 39 37 36.0902153 37 32.5s2.9097847-6.5 6.5-6.5z" />
                            <path fill="#E82E31" d="M43.5 35c1.38125 0 2.5-1.11875 2.5-2.5S44.88125 30 43.5 30 41 31.11875 41 32.5s1.11875 2.5 2.5 2.5z" />
                            <path fill="currentColor" d="M43.4993716 10C31.6255279 10 22 19.6260481 22 31.5S31.6255279 53 43.4993716 53C55.3742683 53 65 43.3741557 65 31.5S55.3742683 10 43.4993716 10zm0 2C54.2696936 12 63 20.7304085 63 31.5S54.2696936 51 43.4993716 51C32.7301216 51 24 42.2694066 24 31.5S32.7301216 12 43.4993716 12z" />
                          </g>
                        </svg>
                      </div>
                      <div className="vlt-service__content">
                        <h5 className="vlt-service__title">Consulting</h5>
                        <div className="vlt-service__icon">
                          <i className="icon-arrow-top-right"></i>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  <div className="vlt-gap-30"></div>

                  {/* Service 6 */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInVariants}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="vlt-animated-block"
                  >
                    <div className="vlt-service vlt-service--style-3">
                      <Link className="vlt-service__link" href="/maintainanceandupgrades"></Link>
                      <div className="vlt-service__media">
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="62">
                          <g fill="none" fillRule="evenodd">
                            <path fill="#E82E31" d="M76.1173339 20h3.7640188s.1146672 0 .1173339.49995c-.0026667.7983.004 10.08825 0 11.0001C79.9906865 32 79.8813527 32 79.8813527 32h-3.7640188S76 32 76 31.50005v-11.0001C76 20 76.1173339 20 76.1173339 20z" />
                            <path fill="currentColor" fillRule="nonzero" d="M73.0982588.00053782H3.91273487c-.63131684.0183118-1.35038399.16426804-2.04999898.5487283C.70690905 1.18442902 0 2.30783812 0 3.88235294V47.1176471c0 1.6590183.78141856 2.8079905 2.03011706 3.4200056C2.74320653 50.8871539 3.4339286 51 3.94044189 51H73.0408262c.5177739 0 1.2211002-.124931 1.943967-.510137 1.1600478-.6181739 1.9082803-1.7290164 1.9949889-3.3177188L77 39.6047246l-.0188735-35.7392018c-.0263657-1.56635234-.7353918-2.68169357-1.8790706-3.31477057C74.4061866.16555766 73.6934037.018959 73.0982588.00053782zm-.0301737 1.99955911l.1370383.00753044c.9071921.06663021 1.6774125.52609606 1.7678819 1.70870026l.0071406.21948367c-.0090182.55560664-.0128939 1.98469417-.0121549 5.03395061l.0134957 38.12697659c-.0462253.8365903-.3789676 1.3305869-.937256 1.6280912C73.6618332 48.9286042 73.2598952 49 73.0408262 49H3.94044189c-.22859718 0-.64054083-.0673009-1.03011706-.258241C2.32124715 48.4530388 2 47.9806876 2 47.1176471V3.88235294c0-1.36609729.88194787-1.85075515 1.94242616-1.88225601H73.0680851z" />
                            <path fill="currentColor" fillRule="nonzero" d="M67.5918007 7.00190274l-47.150502-.0010588c-.4374728.01870838-.8758869.1175419-1.3035312.36819655C18.4324318 7.78245816 18 8.50384646 18 9.45833333V41.5416667c0 1.0329419.5028601 1.7811301 1.290801 2.1719136.4386405.217546.8552529.2864197 1.1794258.2864197h47.0472583c.3391861 0 .772498-.0801728 1.2235838-.3305571.7093297-.3937278 1.1753707-1.0963175 1.244091-2.0563799l.0138688-7.7320798-.0115627-24.44482384c-.020938-.9440313-.4533779-1.654772-1.1471643-2.06511335-.4252391-.25150851-.8602062-.35126075-1.248501-.36914327zM20.4863398 8.99982908l47.0594557.00101486c.2241235.01126393.3928712.09759296.4332009.36899671l.0082259.11925219.000601 32.03764806c-.0170457.2157648-.0874462.3218984-.2173917.3940272-.102613.0569575-.223.0792319-.2529465.0792319H20.4702268c-.0433837 0-.1781065-.0222721-.290801-.0781636C20.048475 41.8568907 20 41.7847664 20 41.5416667V9.45833333c0-.33968245.1790883-.44465125.4863398-.45850425zM10.75 11.75v1.5h-2.5v-1.5zM10.75 15.75v1.5h-2.5v-1.5zM10.75 34.75v1.5h-2.5v-1.5zM10.75 38.75v1.5h-2.5v-1.5z" />
                            <path fill="#E82E31" fillRule="nonzero" d="M9 21c-2.20918475 0-4 1.7908153-4 4s1.79081525 4 4 4c2.2091847 0 4-1.7908153 4-4s-1.7908153-4-4-4zm0 2c1.10461525 0 2 .8953847 2 2 0 1.1046153-.89538475 2-2 2-1.10461525 0-2-.8953847-2-2 0-1.1046153.89538475-2 2-2zM21 59.5v2h-5v-2z" />
                            <path fill="currentColor" fillRule="nonzero" d="M62 59.5v2H20v-2z" />
                          </g>
                        </svg>
                      </div>
                      <div className="vlt-service__content">
                        <h5 className="vlt-service__title">Maintainence & Upgrades</h5>
                        <div className="vlt-service__icon">
                          <i className="icon-arrow-top-right"></i>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="vlt-gap-80"></div>
          </section>

          {/* Testimonials Section */}
          <section className="has-white-color" style={{ background: "url(/assets/img/root/testimonial-background.png)" }}>
            <div className="vlt-gap-30"></div>
            <div className="container">
              <div className="row">
                <div className="col-md-8 offset-md-2">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInVariants}
                    transition={{ duration: 1, delay: 0 }}
                    className="vlt-animated-block"
                  >
                    <span className="vlt-display-1 has-primary-color">Testimonials</span>
                  </motion.div>
                  <div className="vlt-gap-10"></div>

                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInVariants}
                    transition={{ duration: 1, delay: 0.1 }}
                    className="vlt-animated-block"
                  >
                    <div className="vlt-content-slider">
                      <div className="swiper-container">
                        <div className="swiper-wrapper">
                          {testimonials.map((testimonial, idx) => (
                            <div key={idx} className="swiper-slide">
                              <div className="vlt-testimonial vlt-testimonial--style-1">
                                <div className="vlt-testimonial__content">{testimonial.content}</div>
                                <div className="vlt-testimonial__meta">
                                  <div>
                                    <h6 className="vlt-testimonial__title">{testimonial.name}</h6>
                                    <span className="vlt-testimonial__function">{testimonial.position}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="vlt-gap-20"></div>

                    <div className="vlt-slider-controls vlt-slider-controls--style-1 vlt-testimonials-slider-anchor has-white-color">
                      <div className="vlt-swiper-button-prev">
                        <i className="icon-arrow-left"></i>
                      </div>
                      <div className="vlt-swiper-pagination"></div>
                      <div className="vlt-swiper-button-next">
                        <i className="icon-arrow-right"></i>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="vlt-gap-30"></div>
          </section>

          {/* Work Insights Section */}
          <section className="has-black-color">
            <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
              <div className="vlt-gap-80"></div>
              <div className="text-center">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInVariants}
                  transition={{ duration: 1, delay: 0 }}
                  className="vlt-animated-block"
                >
                  <span className="vlt-display-1 has-primary-color">Work Insights</span>
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInVariants}
                  transition={{ duration: 1, delay: 0 }}
                  className="vlt-animated-block"
                >
                  <div className="vlt-section-title vlt-section-title--style-2">
                    <h4 className="vlt-section-title__title" style={{ fontSize: '35px' }}>
                      Sculpting Success: Where Creativity Meets Conversion in Every Frame
                    </h4>
                                  </div>
                </motion.div>
              </div>
              <div className="vlt-gap-40"></div>
              <div className="container">
                <video width="100%" loop autoPlay muted style={{ objectFit: 'contain' }}>
                  <source src="/assets/img/pages/home/promoproductvideo.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="vlt-gap-80"></div>

              {/* Portfolio Section */}
              <div className="text-center">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInVariants}
                  transition={{ duration: 1, delay: 0 }}
                  className="vlt-animated-block"
                >
                  <span className="vlt-display-1 has-primary-color">Portfolio</span>
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInVariants}
                  transition={{ duration: 1, delay: 0 }}
                  className="vlt-animated-block"
                >
                  <div className="vlt-section-title vlt-section-title--style-2">
                    <h4 className="vlt-section-title__title" style={{ fontSize: '35px' }}>
                      Crafting Digital Experiences with Passion and Precision!
                    </h4>
                  </div>
                </motion.div>
              </div>
              <div className="vlt-gap-40"></div>

              <div className="d-flex flex-grow-1 flex-shrink-1">
                <div className="container-fluid p-0 align-self-center">
                  <div className="vlt-content-slider vlt-work-carousel-masonry">
                    <div className="swiper-container">
                      <div className="swiper-wrapper">
                        {portfolioImages.map((img, idx) => (
                          <div key={idx} className="swiper-slide">
                            <div className="grid-item filter-photography">
                              <article className="vlt-work vlt-work--style-6">
                                <div className="vlt-work__media">
                                  <Link className="vlt-work__link has-cursor" href="#"></Link>
                                  <Image src={img} alt={`Portfolio${idx + 1}`} width={600} height={600} loading="lazy" />
                                </div>
                              </article>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="vlt-gap-20"></div>
              <div className="flex-grow-0 flex-shrink-0">
                <div className="container">
                  <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-auto">
                      <a className="vlt-social-icon vlt-social-icon--style-1" href="https://www.facebook.com/vectorart.co/" target="_blank" rel="noopener noreferrer">
                        Fb.
                      </a>
                      <a className="vlt-social-icon vlt-social-icon--style-1" href="https://twitter.com/vart_services" target="_blank" rel="noopener noreferrer">
                        Tw.
                      </a>
                      <a className="vlt-social-icon vlt-social-icon--style-1" href="https://www.instagram.com/vectorartusa/" target="_blank" rel="noopener noreferrer">
                        In.
                      </a>
                      <a className="vlt-social-icon vlt-social-icon--style-1" href="https://www.linkedin.com/company/vectorart/" target="_blank" rel="noopener noreferrer">
                        Ln.
                      </a>
                    </div>
                    <div className="col-auto">
                      <div className="vlt-slider-controls vlt-slider-controls--style-1 vlt-work-carousel-masonry">
                        <div className="vlt-swiper-button-prev">Prev</div>
                        <span className="sep">|</span>
                        <div className="vlt-swiper-button-next">Next</div>
                      </div>
                    </div>
                  </div>
                  <div className="vlt-gap-50"></div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="has-primary-background-color has-white-color">
            <div className="vlt-gap-80"></div>
            <div className="container">
              <div className="text-center">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInVariants}
                  transition={{ duration: 1, delay: 0 }}
                  className="vlt-animated-block"
                >
                  <div className="vlt-stroke-text vlt-stroke-text--lg">
                    <Link href="/contactus" target="_self">
                      Lets Work
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="vlt-gap-80"></div>
          </section>
        </div>
      </main>
    </>
  );
};

export default HomePage;
