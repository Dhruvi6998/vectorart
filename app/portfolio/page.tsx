'use client';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Define the structure for a portfolio item
interface PortfolioItem {
  src: string;
  alt: string;
  filterClass: string;
}

// Data structure for the portfolio items (extracted from the original HTML)
const portfolioItems: PortfolioItem[] = [
  // Complex
  { src: "assets/img/pages/portfolio/complex1.jpg", alt: "play to win", filterClass: "filter-complex" },
  { src: "assets/img/pages/portfolio/complex2.jpg", alt: "yukon flats", filterClass: "filter-complex" },
  { src: "assets/img/pages/portfolio/complex3.jpg", alt: "nude oil dead flies", filterClass: "filter-complex" },
  { src: "assets/img/pages/portfolio/complex4.jpg", alt: "blue crow", filterClass: "filter-complex" },
  { src: "assets/img/pages/portfolio/complex5.jpg", alt: "alter bridge", filterClass: "filter-complex" },
  { src: "assets/img/pages/portfolio/complex6.jpg", alt: "blood teeth", filterClass: "filter-complex" },
  { src: "assets/img/pages/portfolio/complex7.jpg", alt: "mammoth wvh", filterClass: "filter-complex" },
  { src: "assets/img/pages/portfolio/complex8.jpg", alt: "ghost graphic design", filterClass: "filter-complex" },
  { src: "assets/img/pages/portfolio/complex9.jpg", alt: "ghost graphic design", filterClass: "filter-complex" },
  { src: "assets/img/pages/portfolio/complex10.jpg", alt: "ghost graphic design", filterClass: "filter-complex" },
  { src: "assets/img/pages/portfolio/complex11.jpg", alt: "ghost graphic design", filterClass: "filter-complex" },
  { src: "assets/img/pages/portfolio/complex12.jpg", alt: "ghost graphic design", filterClass: "filter-complex" },
  { src: "assets/img/pages/portfolio/complex13.jpg", alt: "ghost graphic design", filterClass: "filter-complex" },
  { src: "assets/img/pages/portfolio/complex14.jpg", alt: "ghost graphic design", filterClass: "filter-complex" },
  { src: "assets/img/pages/portfolio/complex15.jpg", alt: "ghost graphic design", filterClass: "filter-complex" },
  { src: "assets/img/pages/portfolio/complex16.jpg", alt: "ghost graphic design", filterClass: "filter-complex" },
  { src: "assets/img/pages/portfolio/complex17.jpg", alt: "ghost graphic design", filterClass: "filter-complex" },
  { src: "assets/img/pages/portfolio/complex18.jpg", alt: "ghost graphic design", filterClass: "filter-complex" },
  { src: "assets/img/pages/portfolio/complex19.jpg", alt: "ghost graphic design", filterClass: "filter-complex" },
  { src: "assets/img/pages/portfolio/complex20.jpg", alt: "ghost graphic design", filterClass: "filter-complex" },
  { src: "assets/img/pages/portfolio/complex21.jpg", alt: "ghost graphic design", filterClass: "filter-complex" },

  // Digitizing
  { src: "assets/img/pages/portfolio/digitizing1.jpg", alt: "majin buu", filterClass: "filter-digitizing" },
  { src: "assets/img/pages/portfolio/digitizing2.jpg", alt: "goku", filterClass: "filter-digitizing" },
  { src: "assets/img/pages/portfolio/digitizing3.jpg", alt: "super saiyan", filterClass: "filter-digitizing" },
  { src: "assets/img/pages/portfolio/digitizing4.jpg", alt: "son goten", filterClass: "filter-digitizing" },
  { src: "assets/img/pages/portfolio/digitizing5.jpg", alt: "frieza", filterClass: "filter-digitizing" },
  { src: "assets/img/pages/portfolio/digitizing6.jpg", alt: "let's clean maids", filterClass: "filter-digitizing" },
  { src: "assets/img/pages/portfolio/digitizing7.jpg", alt: "piccolo", filterClass: "filter-digitizing" },
  { src: "assets/img/pages/portfolio/digitizing8.jpg", alt: "cell", filterClass: "filter-digitizing" },
  { src: "assets/img/pages/portfolio/digitizing9.jpg", alt: "cell", filterClass: "filter-digitizing" },
  { src: "assets/img/pages/portfolio/digitizing10.jpg", alt: "cell", filterClass: "filter-digitizing" },
  { src: "assets/img/pages/portfolio/digitizing11.jpg", alt: "cell", filterClass: "filter-digitizing" },
  { src: "assets/img/pages/portfolio/digitizing12.jpg", alt: "cell", filterClass: "filter-digitizing" },
  { src: "assets/img/pages/portfolio/digitizing13.jpg", alt: "cell", filterClass: "filter-digitizing" },
  { src: "assets/img/pages/portfolio/digitizing14.jpg", alt: "cell", filterClass: "filter-digitizing" },
  { src: "assets/img/pages/portfolio/digitizing15.jpg", alt: "cell", filterClass: "filter-digitizing" },
  { src: "assets/img/pages/portfolio/digitizing16.jpg", alt: "cell", filterClass: "filter-digitizing" },
  { src: "assets/img/pages/portfolio/digitizing17.jpg", alt: "cell", filterClass: "filter-digitizing" },
  { src: "assets/img/pages/portfolio/digitizing18.jpg", alt: "cell", filterClass: "filter-digitizing" },
  { src: "assets/img/pages/portfolio/digitizing19.jpg", alt: "cell", filterClass: "filter-digitizing" },
  { src: "assets/img/pages/portfolio/digitizing20.jpg", alt: "cell", filterClass: "filter-digitizing" },
  { src: "assets/img/pages/portfolio/digitizing21.jpg", alt: "cell", filterClass: "filter-digitizing" },
  { src: "assets/img/pages/portfolio/digitizing22.jpg", alt: "cell", filterClass: "filter-digitizing" },
  { src: "assets/img/pages/portfolio/digitizing23.jpg", alt: "cell", filterClass: "filter-digitizing" },
  { src: "assets/img/pages/portfolio/digitizing24.jpg", alt: "cell", filterClass: "filter-digitizing" },
  { src: "assets/img/pages/portfolio/digitizing25.jpg", alt: "cell", filterClass: "filter-digitizing" },
  { src: "assets/img/pages/portfolio/digitizing26.jpg", alt: "cell", filterClass: "filter-digitizing" },
  // Logo Design
  { src: "assets/img/pages/portfolio/logodesign1.jpg", alt: "the citadel club of greater washington", filterClass: "filter-logodesign" },
  { src: "assets/img/pages/portfolio/logodesign2.jpg", alt: "razar graphics", filterClass: "filter-logodesign" },
  { src: "assets/img/pages/portfolio/logodesign3.jpg", alt: "logo my umbrella", filterClass: "filter-logodesign" },
  { src: "assets/img/pages/portfolio/logodesign4.jpg", alt: "logo my products", filterClass: "filter-logodesign" },
  { src: "assets/img/pages/portfolio/logodesign5.jpg", alt: "trade o coin", filterClass: "filter-logodesign" },

  // Mockup
  { src: "assets/img/pages/portfolio/mockup1.jpg", alt: "geico", filterClass: "filter-mockup" },
  { src: "assets/img/pages/portfolio/mockup2.jpg", alt: "seminole book", filterClass: "filter-mockup" },
  { src: "assets/img/pages/portfolio/mockup3.jpg", alt: "gilson engineering bag", filterClass: "filter-mockup" },
  { src: "assets/img/pages/portfolio/mockup4.jpg", alt: "big cypress mask", filterClass: "filter-mockup" },
  { src: "assets/img/pages/portfolio/mockup5.jpg", alt: "united way of west tenesse", filterClass: "filter-mockup" },
  { src: "assets/img/pages/portfolio/mockup6.jpg", alt: "dynasty death and discovery", filterClass: "filter-mockup" },
  { src: "assets/img/pages/portfolio/mockup7.jpg", alt: "women clothing", filterClass: "filter-mockup" },
  { src: "assets/img/pages/portfolio/mockup8.jpg", alt: "coastal beach", filterClass: "filter-mockup" },

  // Raster To Vector
  { src: "assets/img/pages/portfolio/rastertovector1.jpg", alt: "fire rescue", filterClass: "filter-rastertovector" },
  { src: "assets/img/pages/portfolio/rastertovector2.jpg", alt: "children earth", filterClass: "filter-rastertovector" },
  { src: "assets/img/pages/portfolio/rastertovector3.jpg", alt: "youth day edmonton", filterClass: "filter-rastertovector" },
  { src: "assets/img/pages/portfolio/rastertovector4.jpg", alt: "desert thunder cycle works", filterClass: "filter-rastertovector" },
  { src: "assets/img/pages/portfolio/rastertovector5.jpg", alt: "agent clean exterior cleaning", filterClass: "filter-rastertovector" },

  // Simple
  { src: "assets/img/pages/portfolio/simple1.jpg", alt: "elect robert dawkins", filterClass: "filter-simple" },
  { src: "assets/img/pages/portfolio/simple2.jpg", alt: "glenn stone roofing and gutters", filterClass: "filter-simple" },
  { src: "assets/img/pages/portfolio/simple4.jpg", alt: "potomac metals incorporated", filterClass: "filter-simple" },
  { src: "assets/img/pages/portfolio/simple5.jpg", alt: "arcl", filterClass: "filter-simple" },
  { src: "assets/img/pages/portfolio/simple6.jpg", alt: "arizona police association", filterClass: "filter-simple" },
  { src: "assets/img/pages/portfolio/simple7.jpg", alt: "airline avionics", filterClass: "filter-simple" },

  // Standard
  { src: "assets/img/pages/portfolio/standard1.jpg", alt: "god says I am", filterClass: "filter-standard" },
  { src: "assets/img/pages/portfolio/standard2.jpg", alt: "black & white boat graphic image", filterClass: "filter-standard" },
  { src: "assets/img/pages/portfolio/standard3.jpg", alt: "blt truck", filterClass: "filter-standard" },
  { src: "assets/img/pages/portfolio/standard5.jpg", alt: "pennsylvania ASA softball", filterClass: "filter-standard" },
  { src: "assets/img/pages/portfolio/standard6.jpg", alt: "reinvent yourself", filterClass: "filter-standard" },
  { src: "assets/img/pages/portfolio/standard7.jpg", alt: "afrotc detachment 670 oklahoma state university", filterClass: "filter-standard" },
  { src: "assets/img/pages/portfolio/standard8.jpg", alt: "normangee tractor", filterClass: "filter-standard" },
  { src: "assets/img/pages/portfolio/standard9.jpg", alt: "normangee tractor", filterClass: "filter-standard" },
  { src: "assets/img/pages/portfolio/standard10.jpg", alt: "normangee tractor", filterClass: "filter-standard" },
  { src: "assets/img/pages/portfolio/standard11.jpg", alt: "normangee tractor", filterClass: "filter-standard" },
  { src: "assets/img/pages/portfolio/standard12.jpg", alt: "normangee tractor", filterClass: "filter-standard" },
  { src: "assets/img/pages/portfolio/standard13.jpg", alt: "normangee tractor", filterClass: "filter-standard" },
  { src: "assets/img/pages/portfolio/standard14.jpg", alt: "normangee tractor", filterClass: "filter-standard" },
  { src: "assets/img/pages/portfolio/standard15.jpg", alt: "normangee tractor", filterClass: "filter-standard" },
  { src: "assets/img/pages/portfolio/standard16.jpg", alt: "normangee tractor", filterClass: "filter-standard" },
  { src: "assets/img/pages/portfolio/standard17.jpg", alt: "normangee tractor", filterClass: "filter-standard" },
  { src: "assets/img/pages/portfolio/standard18.jpg", alt: "normangee tractor", filterClass: "filter-standard" },
  { src: "assets/img/pages/portfolio/standard19.jpg", alt: "normangee tractor", filterClass: "filter-standard" },
  { src: "assets/img/pages/portfolio/standard20.jpg", alt: "normangee tractor", filterClass: "filter-standard" },
  { src: "assets/img/pages/portfolio/standard21.jpg", alt: "normangee tractor", filterClass: "filter-standard" },
  { src: "assets/img/pages/portfolio/standard22.jpg", alt: "normangee tractor", filterClass: "filter-standard" },
  { src: "assets/img/pages/portfolio/standard23.jpg", alt: "normangee tractor", filterClass: "filter-standard" },
  { src: "assets/img/pages/portfolio/standard24.jpg", alt: "normangee tractor", filterClass: "filter-standard" },
  { src: "assets/img/pages/portfolio/standard25.jpg", alt: "normangee tractor", filterClass: "filter-standard" },
  { src: "assets/img/pages/portfolio/standard26.jpg", alt: "normangee tractor", filterClass: "filter-standard" },
  { src: "assets/img/pages/portfolio/standard27.jpg", alt: "normangee tractor", filterClass: "filter-standard" },
  { src: "assets/img/pages/portfolio/standard28.jpg", alt: "normangee tractor", filterClass: "filter-standard" },
  { src: "assets/img/pages/portfolio/standard29.jpg", alt: "normangee tractor", filterClass: "filter-standard" },
  { src: "assets/img/pages/portfolio/standard30.jpg", alt: "normangee tractor", filterClass: "filter-standard" },
  { src: "assets/img/pages/portfolio/standard31.jpg", alt: "normangee tractor", filterClass: "filter-standard" },
  { src: "assets/img/pages/portfolio/standard32.jpg", alt: "normangee tractor", filterClass: "filter-standard" },
  { src: "assets/img/pages/portfolio/standard33.jpg", alt: "normangee tractor", filterClass: "filter-standard" },
  { src: "assets/img/pages/portfolio/standard34.jpg", alt: "normangee tractor", filterClass: "filter-standard" },
  { src: "assets/img/pages/portfolio/standard35.jpg", alt: "normangee tractor", filterClass: "filter-standard" },
  { src: "assets/img/pages/portfolio/standard36.jpg", alt: "normangee tractor", filterClass: "filter-standard" },
];

const filterOptions = [
  { label: 'All', filter: '*' },
  { label: 'Complex', filter: 'filter-complex' },
  { label: 'Digitizing', filter: 'filter-digitizing' },
  { label: 'Logo Design', filter: 'filter-logodesign' },
  { label: 'Mockup', filter: 'filter-mockup' },
  { label: 'Raster To Vector', filter: 'filter-rastertovector' },
  { label: 'Simple', filter: 'filter-simple' },
  { label: 'Standard', filter: 'filter-standard' },
];

// Animation variants for fade effect (similar to AOS fade)
const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('*');

  // Filter items based on active filter
  const filteredItems = activeFilter === '*' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.filterClass === activeFilter);

  return (
    <>
      <Head>
        <title>Portfolio: Explore Logo and Digital Designs by Vectorart.co</title>
        <meta name="keywords" content="design,solutions,services,Vector art,Graphic design" />
        <meta name="description" content="Explore our diverse portfolio of creative designs, from logos to digital creations. Witness the potential for your brand with Vector Art's imaginative work." />
      </Head>

      {/*Site overlay*/}
      <div className="vlt-site-overlay"></div>

      {/*Main*/}
      <main className="vlt-main">
        {/*Page content*/}
        <div className="vlt-page-content">
          {/*Page title*/}
          <section className="has-white-color" style={{ backgroundImage: "url(assets/img/pages/aboutus/aboutusbg.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <div className="vlt-page-title vlt-page-title--style-4">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <motion.h1 
                      className="vlt-page-title__title" 
                      style={{ color: "white", fontSize: "4rem", fontWeight: "700" }}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      Portfolio
                    </motion.h1>
                    <h2 hidden></h2>
                  </div>
                  <div className="col-md-6">
                    {/* Empty column, left as is */}
                  </div>
                </div>
              </div>
            </div>
            <div className="vlt-gap-150"></div>
          </section>

          <div className="vlt-gap-80"></div>

          <section>
            <div className="vlt-gap-80"></div>
            <div className="container-fluid">
              <motion.div 
                className="row" 
                style={{ justifyContent: "center" }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInVariants}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <ul className="vlt-isotope-filters" id="vlt-filter-blog-04">
                  {filterOptions.map((option, index) => (
                    <li 
                      key={index} 
                      className={activeFilter === option.filter ? 'active' : ''} 
                      onClick={() => setActiveFilter(option.filter)}
                      style={{ cursor: 'pointer' }}
                    >
                      <span>{option.label}</span>
                    </li>
                  ))}
                </ul>
                <div className="vlt-gap-30"></div>
              </motion.div>

              <div>
                <div className="vlt-gap-30"></div>
                <motion.div
                  className="vlt-isotope-grid"
                  data-columns="4"
                  data-layout="masonry"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.05
                      }
                    }
                  }}
                >
                  <div className="grid-sizer"></div>

                  {filteredItems.map((item, index) => (
                    <motion.div 
                      key={`${item.src}-${index}`} 
                      className={`grid-item ${item.filterClass}`}
                      variants={fadeInVariants}
                      transition={{ duration: 0.5 }}
                      layout
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                    >
                      <img
                        src={item.src}
                        alt={item.alt}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>

          <div className="vlt-gap-30"></div>
          <div className="text-center">
            <div id="vlt-load-more-blog-04">
              <a className="vlt-isotope-load-more" href="ajax/blog-04-load-more.html">
                <i className="icon-arrow-down"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="vlt-gap-80"></div>
      </main>
    </>
  );
}

export default PortfolioPage;