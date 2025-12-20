// app/podcast/page.js
'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// ScrollAnimation component to replace AOS
const ScrollAnimation = ({ 
  children, 
  animation = 'fade-up',
  duration = 0.6,
  delay = 0,
  once = true,
  className = ''
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.1 });

  const variants = {
    'fade-up': {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 }
    },
    'fade-down': {
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0 }
    },
    'fade-left': {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 }
    },
    'fade-right': {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 }
    },
    'fade': {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    'zoom-in': {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 }
    },
    'zoom-out': {
      hidden: { opacity: 0, scale: 1.2 },
      visible: { opacity: 1, scale: 1 }
    }
  };

  const selectedVariant = variants[animation] || variants['fade-up'];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={selectedVariant}
      transition={{ 
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function Podcast() {
  return (
    <>
      {/* Site overlay */}
      <div className="vlt-site-overlay"></div>

      {/* Main */}
      <main className="vlt-main">
        {/* Page content */}
        <div className="vlt-page-content">
          {/* Hero */}
          <section>
            <div style={{ marginTop: '90px', backgroundImage: "url('/assets/img/pages/Podcast/8.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '50vh', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
              <div style={{ textAlign: 'center', color: 'white', padding: '1rem' }}>
                <div className="image-container">
                  <ScrollAnimation animation="zoom-in" duration={0.8}>
                    <div className="container-image" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
                      <a href="https://www.youtube.com/@VectorArt-u3q" target="_blank" rel="noopener noreferrer">
                        <img alt="VectorArt Podcast logo" height="300" src="/assets/img/pages/Podcast/Vectorart-podcast logo.jpg" style={{ width: '20rem', height: 'auto', margin: '0.5rem' }} width="300" />
                      </a>
                    </div>
                  </ScrollAnimation>
                  
                  <div className="data-container">
                    <ScrollAnimation animation="fade-down" duration={0.8} delay={0.2}>
                      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', color: 'white', display: 'flex' }}>VECTORART PODCAST</h1>
                    </ScrollAnimation>
                    
                    <ScrollAnimation animation="fade-up" duration={0.8} delay={0.3}>
                      <div style={{ marginLeft: '25px' }}>
                        <p style={{ textAlign: 'start' }}>Promotional unites industry experts to explore trends, strategies, and the future of promotional marketing.<br />Get exclusive insights and success stories that drive the industry forward!</p>
                        <p style={{ textAlign: 'start' }}>Visit Our Website <a href="https://www.vectorart.co"><b>VectorArt</b></a></p>
                        <p style={{ marginBottom: '1rem', fontSize: '0.875rem', textAlign: 'start' }}>*We create original vector art for creatives worldwide!*</p>
                      </div>
                    </ScrollAnimation>
                    
                    <ScrollAnimation animation="fade-up" duration={0.8} delay={0.4}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem', marginLeft: '25px' }}>
                        <a href="https://www.youtube.com/channel/UCK9B0YFZCO_CWlaTw16bPDA" target="_blank" rel="noopener noreferrer" className="social-btn"><i className="fab fa-youtube" style={{ marginRight: '0.5rem', color: 'red' }}></i><b>Subscribe</b></a>
                        <a href="https://open.spotify.com/show/7A7v0AR7Bcf7wAVGbvlMmm?si=GaqG4ITAQLOrmsVJ_a2yIQ&nd=1&dlsi=212eb11d189240e5" target="_blank" rel="noopener noreferrer" className="social-btn"><i className="fab fa-spotify" style={{ marginRight: '0.5rem', color: 'green' }}></i><b>Spotify</b></a>
                        <a href="https://soundcloud.com/rohit-jaiswal-518225476" target="_blank" rel="noopener noreferrer" className="social-btn"><i className="fab fa-soundcloud" style={{ marginRight: '0.5rem', color: 'orange' }}></i><b>SoundCloud</b></a>
                        <a href="https://www.facebook.com/vectorart.co" target="_blank" rel="noopener noreferrer" className="social-btn"><i className="fab fa-facebook-f" style={{ marginRight: '0.5rem', color: '#1877F2' }}></i><b>Facebook</b></a>
                        <a href="https://www.instagram.com/vectorartusa/" target="_blank" rel="noopener noreferrer" className="social-btn"><i className="fab fa-instagram" style={{ marginRight: '0.5rem', color: '#E4405F' }}></i><b>Instagram</b></a>
                        <a href="https://www.linkedin.com/company/7929083/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="social-btn"><i className="fab fa-linkedin" style={{ marginRight: '0.5rem', color: '#0077B5' }}></i><b>LinkedIn</b></a>
                      </div>
                    </ScrollAnimation>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Episodes Grid */}
          <section>
            <div className="card-cont">
              {/* Season 2 */}
              <ScrollAnimation animation="fade-down" duration={0.6}>
                <div className="season-header">
                  <h2 className="season-title">Season 2</h2>
                  <span className="season-sub">Episodes 1–13</span>
                </div>
              </ScrollAnimation>

              <div className="season-grid">
                {/* S2E13 */}
                <ScrollAnimation animation="fade-up" duration={0.6} delay={0}>
                  <div className="podcast-card">
                    <Link href="/episode/s2e13">
                      <img className="podcast-image" src="/assets/img/pages/Podcast/Vectorart-podcast logo.jpg" alt="Igniting Brands: John Heinz" />
                    </Link>
                    <div className="podcast-body">
                      <p className="podcast-meta">Season 2 Episode 13</p>
                      <h3 className="podcast-title">
                        <Link href="/episode/s2e13">
                          Igniting Brands: John Heinz of Spark Branded Solutions on Powering the Promo Industry
                        </Link>
                      </h3>
                      <p className="podcast-date">October 13, 2025</p>
                      <p className="description">
                        Host: ROHIT JAISWAL<br />
                        Guest: John Heinz<br />
                        Creativity and strategy ignite brands in the promotional products industry.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                {/* S2E12 */}
                <ScrollAnimation animation="fade-up" duration={0.6} delay={0.1}>
                  <div className="podcast-card">
                    <Link href="/episode/s2e12">
                      <img className="podcast-image" src="/assets/img/pages/Podcast/Vectorart-podcast logo.jpg" alt="Investing in Impact" />
                    </Link>
                    <div className="podcast-body">
                      <p className="podcast-meta">Season 2 Episode 12</p>
                      <h3 className="podcast-title">
                        <Link href="/episode/s2e12">
                          Investing in Impact: Brandily's Take on Promotional Spend
                        </Link>
                      </h3>
                      <p className="podcast-date">October 3, 2025</p>
                      <p className="description">
                        Host: ROHIT JAISWAL<br />
                        Guest: Sarah Lilley<br />
                        Impact-driven promotional investments that maximize ROI and visibility.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                {/* S2E11 */}
                <ScrollAnimation animation="fade-up" duration={0.6} delay={0.2}>
                  <div className="podcast-card">
                    <Link href="/episode/s2e11">
                      <img className="podcast-image" src="/assets/img/pages/Podcast/Vectorart-podcast logo.jpg" alt="Inside Fully Promoted" />
                    </Link>
                    <div className="podcast-body">
                      <p className="podcast-meta">Season 2 Episode 11</p>
                      <h3 className="podcast-title">
                        <Link href="/episode/s2e11">
                          Inside Fully Promoted: Franchise Strategies That Work
                        </Link>
                      </h3>
                      <p className="podcast-date">October 1, 2025</p>
                      <p className="description">
                        Host: ROHIT JAISWAL<br />
                        Guest: Tyler Sherwood<br />
                        Franchise growth tactics, brand identity, and scaling across markets.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                {/* S2E10 */}
                <ScrollAnimation animation="fade-up" duration={0.6} delay={0.3}>
                  <div className="podcast-card">
                    <Link href="/episode/s2e10">
                      <img className="podcast-image" src="/assets/img/pages/Podcast/Vectorart-podcast logo.jpg" alt="Elevating Brands with Custom Gifts" />
                    </Link>
                    <div className="podcast-body">
                      <p className="podcast-meta">Season 2 Episode 10</p>
                      <h3 className="podcast-title">
                        <Link href="/episode/s2e10">Elevating Brands with Custom Gifts</Link>
                      </h3>
                      <p className="podcast-date">September 19, 2025</p>
                      <p className="description">
                        Host: ROHIT JAISWAL<br />
                        Guest: Rich Patterson<br />
                        Creating elevated, engaging, cherished products with PBJ Merch Co.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                {/* S2E9 */}
                <ScrollAnimation animation="fade-up" duration={0.6} delay={0}>
                  <div className="podcast-card">
                    <Link href="/episode/s2e9">
                      <img className="podcast-image" src="/assets/img/pages/Podcast/Vectorart-podcast logo.jpg" alt="Lane Seven's Blueprint" />
                    </Link>
                    <div className="podcast-body">
                      <p className="podcast-meta">Season 2 Episode 9</p>
                      <h3 className="podcast-title">
                        <Link href="/episode/s2e9">
                          Lane Seven's Blueprint: Smarter Branding Strategies from Alyssa Inkrott
                        </Link>
                      </h3>
                      <p className="podcast-date">September 15, 2025</p>
                      <p className="description">
                        Host: ROHIT JAISWAL<br />
                        Guest: Alyssa Inkrott<br />
                        Apparel storytelling and smarter brand identity strategies.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                {/* S2E8 */}
                <ScrollAnimation animation="fade-up" duration={0.6} delay={0.1}>
                  <div className="podcast-card">
                    <Link href="/episode/s2e8">
                      <img className="podcast-image" src="/assets/img/pages/Podcast/Vectorart-podcast logo.jpg" alt="Inside the Promo Industry" />
                    </Link>
                    <div className="podcast-body">
                      <p className="podcast-meta">Season 2 Episode 8</p>
                      <h3 className="podcast-title">
                        <Link href="/episode/s2e8">
                          Inside the Promo Industry: Colin Loughran of Five Fisherwick
                        </Link>
                      </h3>
                      <p className="podcast-date">September 10, 2025</p>
                      <p className="description">
                        Host: ROHIT JAISWAL<br />
                        Guest: Colin Loughran<br />
                        Innovative branding strategies and the future of promo.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                {/* S2E7 */}
                <ScrollAnimation animation="fade-up" duration={0.6} delay={0.2}>
                  <div className="podcast-card">
                    <Link href="/episode/s2e7">
                      <img className="podcast-image" src="/assets/img/pages/Podcast/Vectorart-podcast logo.jpg" alt="Bottled Up Branding" />
                    </Link>
                    <div className="podcast-body">
                      <p className="podcast-meta">Season 2 Episode 7</p>
                      <h3 className="podcast-title">
                        <Link href="/episode/s2e7">
                          Bottled Up Branding: The Power of Promotional Drinkware
                        </Link>
                      </h3>
                      <p className="podcast-date">September 3, 2025</p>
                      <p className="description">
                        Host: ROHIT JAISWAL<br />
                        Guest: Priscila Angus<br />
                        Premium drinkware, eco-conscious design, and impactful branding.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                {/* S2E6 */}
                <ScrollAnimation animation="fade-up" duration={0.6} delay={0.3}>
                  <div className="podcast-card">
                    <Link href="/episode/s2e6">
                      <img className="podcast-image" src="/assets/img/pages/Podcast/Vectorart-podcast logo.jpg" alt="Blankets That Speak Louder Than Logos" />
                    </Link>
                    <div className="podcast-body">
                      <p className="podcast-meta">Season 2 Episode 6</p>
                      <h3 className="podcast-title">
                        <Link href="/episode/s2e6">
                          Blankets That Speak Louder Than Logos
                        </Link>
                      </h3>
                      <p className="podcast-date">August 22, 2025</p>
                      <p className="description">
                        Host: ROHIT JAISWAL<br />
                        Guest: Jenny Barcus<br />
                        Premium woven throws tell stories far beyond a logo.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                {/* S2E5 */}
                <ScrollAnimation animation="fade-up" duration={0.6} delay={0}>
                  <div className="podcast-card">
                    <Link href="/episode/s2e5">
                      <img className="podcast-image" src="/assets/img/pages/Podcast/Vectorart-podcast logo.jpg" alt="From Logo to Legacy" />
                    </Link>
                    <div className="podcast-body">
                      <p className="podcast-meta">Season 2 Episode 5</p>
                      <h3 className="podcast-title">
                        <Link href="/episode/s2e5">
                          From Logo to Legacy: Turning Promotional Products into Brand Experiences
                        </Link>
                      </h3>
                      <p className="podcast-date">August 14, 2025</p>
                      <p className="description">
                        Host: ROHIT JAISWAL<br />
                        Guest: Megh Chahl<br />
                        Branded merchandise for awareness, relationships, and lasting impressions.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                {/* S2E4 */}
                <ScrollAnimation animation="fade-up" duration={0.6} delay={0.1}>
                  <div className="podcast-card">
                    <Link href="/episode/s2e4">
                      <img className="podcast-image" src="/assets/img/pages/Podcast/Vectorart-podcast logo.jpg" alt="The Future of Brand Loyalty Starts with Gen-Z" />
                    </Link>
                    <div className="podcast-body">
                      <p className="podcast-meta">Season 2 Episode 4</p>
                      <h3 className="podcast-title">
                        <Link href="/episode/s2e4">
                          The Future of Brand Loyalty Starts with Gen-Z
                        </Link>
                      </h3>
                      <p className="podcast-date">August 2, 2025</p>
                      <p className="description">
                        Host: ROHIT JAISWAL<br />
                        Guest: Caden Knebel<br />
                        Etchify, loyalty, and engagement through a Gen-Z lens.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                {/* S2E3 */}
                <ScrollAnimation animation="fade-up" duration={0.6} delay={0.2}>
                  <div className="podcast-card">
                    <Link href="/episode/s2e3">
                      <img className="podcast-image" src="/assets/img/pages/Podcast/Vectorart-podcast logo.jpg" alt="Promotional Products Reimagined" />
                    </Link>
                    <div className="podcast-body">
                      <p className="podcast-meta">Season 2 Episode 3</p>
                      <h3 className="podcast-title">
                        <Link href="/episode/s2e3">
                          Promotional Products Reimagined: Smart Strategies for Maximum Brand Impact
                        </Link>
                      </h3>
                      <p className="podcast-date">July 29, 2025</p>
                      <p className="description">
                        Host: ROHIT JAISWAL<br />
                        Guest: Riley Friar<br />
                        Trends, pitfalls, and strategy behind merchandise campaigns.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                {/* S2E2 */}
                <ScrollAnimation animation="fade-up" duration={0.6} delay={0.3}>
                  <div className="podcast-card">
                    <Link href="/episode/s2e2">
                      <img className="podcast-image" src="/assets/img/pages/Podcast/Vectorart-podcast logo.jpg" alt="B2B vs B2C" />
                    </Link>
                    <div className="podcast-body">
                      <p className="podcast-meta">Season 2 Episode 2</p>
                      <h3 className="podcast-title">
                        <Link href="/episode/s2e2">
                          B2B vs B2C – Lessons in Leadership from Both Sides
                        </Link>
                      </h3>
                      <p className="podcast-date">June 26, 2025</p>
                      <p className="description">
                        Host: ROHIT JAISWAL<br />
                        Guest: Nicole Stachowicz<br />
                        Contrasting strategies, communication, and decision-making.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                {/* S2E1 */}
                <ScrollAnimation animation="fade-up" duration={0.6} delay={0}>
                  <div className="podcast-card">
                    <Link href="/episode/s2e1">
                      <img className="podcast-image" src="/assets/img/pages/Podcast/Vectorart-podcast logo.jpg" alt="Beyond the Logo" />
                    </Link>
                    <div className="podcast-body">
                      <p className="podcast-meta">Season 2 Episode 1</p>
                      <h3 className="podcast-title">
                        <Link href="/episode/s2e1">
                          Beyond the Logo: Building Brand Loyalty Through Promo Solutions
                        </Link>
                      </h3>
                      <p className="podcast-date">June 20, 2025</p>
                      <p className="description">
                        Host: ROHIT JAISWAL<br />
                        Guest: Samantha Fullerton<br />
                        Promo solutions shaping lasting brand loyalty.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>

              {/* Season 1 */}
              <ScrollAnimation animation="fade-down" duration={0.6}>
                <div className="season-header" style={{ marginTop: "32px" }}>
                  <h2 className="season-title">Season 1</h2>
                  <span className="season-sub">Episodes 1–12</span>
                </div>
              </ScrollAnimation>

              <div className="season-grid">
                {/* S1E12 */}
                <ScrollAnimation animation="fade-up" duration={0.6} delay={0}>
                  <div className="podcast-card">
                    <Link href="/episode/s1e12">
                      <img className="podcast-image" src="/assets/img/pages/Podcast/16.jpeg" alt="Headwear with Purpose" />
                    </Link>
                    <div className="podcast-body">
                      <p className="podcast-meta">Season 1 Episode 12</p>
                      <h3 className="podcast-title">
                        <Link href="/episode/s1e12">
                          Headwear with Purpose: Designing Promo that Tells a Story
                        </Link>
                      </h3>
                      <p className="podcast-date">April 25, 2025</p>
                      <p className="description">
                        Host: ROHIT JAISWAL<br />
                        Guest: FEDERICO PASINI<br />
                        Purpose-driven, sustainable headwear and ethical production.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                {/* S1E11 */}
                <ScrollAnimation animation="fade-up" duration={0.6} delay={0.1}>
                  <div className="podcast-card">
                    <Link href="/episode/s1e11">
                      <img className="podcast-image" src="/assets/img/pages/Podcast/15.jpeg" alt="The Anatomy of a Perfect Cap" />
                    </Link>
                    <div className="podcast-body">
                      <p className="podcast-meta">Season 1 Episode 11</p>
                      <h3 className="podcast-title">
                        <Link href="/episode/s1e11">
                          The Anatomy of a Perfect Cap: Exploring Premium Fabrics & Designs
                        </Link>
                      </h3>
                      <p className="podcast-date">April 23, 2025</p>
                      <p className="description">
                        Host: ROHIT JAISWAL<br />
                        Guest: MAX LEONARD<br />
                        American twill, brushed cotton, mesh backs, and poly twill.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                {/* S1E10 */}
                <ScrollAnimation animation="fade-up" duration={0.6} delay={0.2}>
                  <div className="podcast-card">
                    <Link href="/episode/s1e10">
                      <img className="podcast-image" src="/assets/img/pages/Podcast/14.jpeg" alt="Sustainable promotional products" />
                    </Link>
                    <div className="podcast-body">
                      <p className="podcast-meta">Season 1 Episode 10</p>
                      <h3 className="podcast-title">
                        <Link href="/episode/s1e10">
                          The latest trends and innovations in sustainable promotional products
                        </Link>
                      </h3>
                      <p className="podcast-date">April 22, 2025</p>
                      <p className="description">
                        Host: ROHIT JAISWAL<br />
                        Guest: JESYCA HOPE<br />
                        Recycled materials, bamboo, organic cotton, reusable items.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                {/* S1E9 */}
                <ScrollAnimation animation="fade-up" duration={0.6} delay={0.3}>
                  <div className="podcast-card">
                    <Link href="/episode/s1e9">
                      <img className="podcast-image" src="/assets/img/pages/Podcast/13.jpg" alt="Rebranding Do's & Don'ts" />
                    </Link>
                    <div className="podcast-body">
                      <p className="podcast-meta">Season 1 Episode 09</p>
                      <h3 className="podcast-title">
                        <Link href="/episode/s1e9">
                          The Do's & Don'ts of Rebranding with Promotional Products
                        </Link>
                      </h3>
                      <p className="podcast-date">April 9, 2025</p>
                      <p className="description">
                        Host: ROHIT JAISWAL<br />
                        Guest: GLORIA LAFONT<br />
                        Aligned products, consistent messaging, tracking engagement.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                {/* S1E8 */}
                <ScrollAnimation animation="fade-up" duration={0.6} delay={0}>
                  <div className="podcast-card">
                    <Link href="/episode/s1e8">
                      <img className="podcast-image" src="/assets/img/pages/Podcast/12.jpg" alt="AI & Personalization in Promo" />
                    </Link>
                    <div className="podcast-body">
                      <p className="podcast-meta">Season 1 Episode 08</p>
                      <h3 className="podcast-title">
                        <Link href="/episode/s1e8">
                          AI & Personalization in Promotional Products: The Next Big Thing
                        </Link>
                      </h3>
                      <p className="podcast-date">April 4, 2025</p>
                      <p className="description">
                        Host: ROHIT JAISWAL<br />
                        Guest: CAT GAGLIARDO<br />
                        AI-driven personalization, engagement, privacy balance.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                {/* S1E7 */}
                <ScrollAnimation animation="fade-up" duration={0.6} delay={0.1}>
                  <div className="podcast-card">
                    <Link href="/episode/s1e7">
                      <img className="podcast-image" src="/assets/img/pages/Podcast/12.jpeg" alt="Psychology of Freebies" />
                    </Link>
                    <div className="podcast-body">
                      <p className="podcast-meta">Season 1 Episode 07</p>
                      <h3 className="podcast-title">
                        <Link href="/episode/s1e7">
                          The Psychology of Freebies: Why Customers Love Branded Giveaways
                        </Link>
                      </h3>
                      <p className="podcast-date">April 3, 2025</p>
                      <p className="description">
                        Host: ROHIT JAISWAL<br />
                        Guest: ALEX BRADLEY<br />
                        Triggers that drive loyalty, trust, engagement, and ROI.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                {/* S1E6 */}
                <ScrollAnimation animation="fade-up" duration={0.6} delay={0.2}>
                  <div className="podcast-card">
                    <Link href="/episode/s1e6">
                      <img className="podcast-image" src="/assets/img/pages/Podcast/11.png" alt="From Swag to Sales" />
                    </Link>
                    <div className="podcast-body">
                      <p className="podcast-meta">Season 1 Episode 06</p>
                      <h3 className="podcast-title">
                        <Link href="/episode/s1e6">
                          From Swag to Sales: How Promotional Items Can Drive Business Growth
                        </Link>
                      </h3>
                      <p className="podcast-date">April 2, 2025</p>
                      <p className="description">
                        Host: ROHIT JAISWAL<br />
                        Guest: HILLARY SCALETTA<br />
                        Recognition, loyalty, integration into strategy.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                {/* S1E5 */}
                <ScrollAnimation animation="fade-up" duration={0.6} delay={0.3}>
                  <div className="podcast-card">
                    <Link href="/episode/s1e5">
                      <img className="podcast-image" src="/assets/img/pages/Podcast/10.jpg" alt="Stand Out & Scale Up" />
                    </Link>
                    <div className="podcast-body">
                      <p className="podcast-meta">Season 1 Episode 05</p>
                      <h3 className="podcast-title">
                        <Link href="/episode/s1e5">
                          Stand Out & Scale Up: The Role of Promotional Products in Small Business Success
                        </Link>
                      </h3>
                      <p className="podcast-date">March 18, 2025</p>
                      <p className="description">
                        Host: ROHIT JAISWAL<br />
                        Guest: ROSS GREENSTEIN<br />
                        Visibility, engagement, referrals, and growth.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                {/* S1E4 */}
                <ScrollAnimation animation="fade-up" duration={0.6} delay={0}>
                  <div className="podcast-card">
                    <Link href="/episode/s1e4">
                      <img className="podcast-image" src="/assets/img/pages/Podcast/9.png" alt="America's Gifting Culture" />
                    </Link>
                    <div className="podcast-body">
                      <p className="podcast-meta">Season 1 Episode 04</p>
                      <h3 className="podcast-title">
                        <Link href="/episode/s1e4">
                          Promotional product: A key Part of America's Gifting Culture
                        </Link>
                      </h3>
                      <p className="podcast-date">March 13, 2025</p>
                      <p className="description">
                        Host: ROHIT JAISWAL<br />
                        Guest: KRISTINA BEAL<br />
                        Tradition, impressions, and connections.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                {/* S1E3 */}
                <ScrollAnimation animation="fade-up" duration={0.6} delay={0.1}>
                  <div className="podcast-card">
                    <Link href="/episode/s1e3">
                      <img className="podcast-image" src="/assets/img/pages/Podcast/7.png" alt="Nurturing the Next Generation" />
                    </Link>
                    <div className="podcast-body">
                      <p className="podcast-meta">Season 1 Episode 03</p>
                      <h3 className="podcast-title">
                        <Link href="/episode/s1e3">
                          Nurturing the Next Generation: Wisdom from a 4-Decade Career
                        </Link>
                      </h3>
                      <p className="podcast-date">February 26, 2025</p>
                      <p className="description">
                        Host: ROHIT JAISWAL<br />
                        Guest: THE UNCLE EARL<br />
                        Mentoring, leadership, resilience, adaptability.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                {/* S1E2 */}
                <ScrollAnimation animation="fade-up" duration={0.6} delay={0.2}>
                  <div className="podcast-card">
                    <Link href="/episode/s1e2">
                      <img className="podcast-image" src="/assets/img/pages/Podcast/6.png" alt="Top Distributors & Suppliers" />
                    </Link>
                    <div className="podcast-body">
                      <p className="podcast-meta">Season 1 Episode 02</p>
                      <h3 className="podcast-title">
                        <Link href="/episode/s1e2">
                          Top Promotional Products Distributors & Suppliers in the USA
                        </Link>
                      </h3>
                      <p className="podcast-date">February 15, 2025</p>
                      <p className="description">
                        Host: ROHIT JAISWAL<br />
                        Guest: CASSANDRA CHIODO<br />
                        Leading companies for branded merchandise and giveaways.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                {/* S1E1 */}
                <ScrollAnimation animation="fade-up" duration={0.6} delay={0.3}>
                  <div className="podcast-card">
                    <Link href="/episode/s1e1">
                      <img className="podcast-image" src="/assets/img/pages/Podcast/3.png" alt="Unlocking Growth" />
                    </Link>
                    <div className="podcast-body">
                      <p className="podcast-meta">Season 1 Episode 01</p>
                      <h3 className="podcast-title">
                        <Link href="/episode/s1e1">
                          Unlocking Growth: The $26 Billion Promotional Products Industry
                        </Link>
                      </h3>
                      <p className="podcast-date">January 15, 2025</p>
                      <p className="description">
                        Host: ROHIT JAISWAL<br />
                        Guest: JESSICA VAN METER<br />
                        Trends, strategies, and opportunities in promo.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </section>

          {/* Videos Slider Section */}
          <section>
            <div>
              <div className="box-cont" style={{ margin: '0 auto', padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
                <ScrollAnimation animation="fade-right" duration={0.8}>
                  <div style={{ width: '100%', marginBottom: '24px', flex: 1 }}>
                    <h2 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#4a5568', marginBottom: '8px' }}>VECTORART VIDEOS</h2>
                    <h1 style={{ fontSize: '1.875rem', fontWeight: '700', color: '#2d3748', marginBottom: '16px' }}>Vectorart podcast on YouTube</h1>
                    <p style={{ fontSize: '1.125rem', color: '#4a5568', marginBottom: '24px' }}>From podcasts and webinars to research and culture, Vectorart repository of videos offers something for everyone.</p>
                    <a href="https://www.youtube.com/@VectorArt-u3q" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', backgroundColor: '#e53e3e', color: '#fff', fontSize: '0.875rem', fontWeight: '600', padding: '12px 24px', borderRadius: '4px' }}>GO TO OUR YOUTUBE PAGE &gt;</a>
                  </div>
                </ScrollAnimation>
                
                <ScrollAnimation animation="fade-left" duration={0.8} delay={0.2}>
                  <div className="slider-container">
                    <div className="slider">
                      <iframe width="100%" height="500" src="https://www.youtube.com/embed/TCsqYEzMlZE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                      <iframe width="100%" height="500" src="https://www.youtube.com/embed/lEzV3lI5bOg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                      <iframe width="100%" height="500" src="https://www.youtube.com/embed/Q1rpr0jXUdE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section>
            <div style={{ backgroundColor: '#f7fafc' }}>
              <ScrollAnimation animation="zoom-in" duration={0.8}>
                <div style={{ backgroundColor: '#1a202c', textAlign: 'center', padding: '4rem 0' }}>
                  <div style={{ backgroundColor: '#2d3748', display: 'inline-block', padding: '0.5rem 1rem', marginBottom: '1rem' }}>
                    <p style={{ color: '#a0aec0', fontSize: '0.875rem' }}>NEW</p>
                    <h1 style={{ color: '#ffffff', fontSize: '2.25rem', fontWeight: '700' }}>Vectorart - Podcast</h1>
                  </div>
                  <p style={{ color: '#e2e8f0', fontSize: '1.125rem', padding: '0 1rem' }}>
                    Are you ready to share the remarkable journey of your life—the experiences, challenges, and triumphs that have shaped who you are today?
                  </p>
                  <p style={{ color: '#e2e8f0', fontSize: '1.125rem', marginBottom: '2rem', padding: '0 1rem' }}>
                    Let's talk.
                  </p>
                  <a href="https://www.vectorart.co/contactus" style={{ backgroundColor: '#ffffff', color: '#e53e3e', border: '1px solid #e53e3e', padding: '0.5rem 1.5rem', display: 'inline-block', fontWeight: '600', transition: 'background-color 0.3s, color 0.3s' }}>Send us a Message</a>
                </div>
              </ScrollAnimation>
            </div>
          </section>
        </div>
      </main>

      <style jsx>{`
        .data-container h1 { margin-left: 25px; }
        .image-container { display: flex; align-items: center; justify-content: center; }
        .container-image { transition: transform 0.5s; }
        .container-image:hover { transform: scale(1.05); cursor: pointer; }
        .social-btn {
          background-color: white; color: black; padding: 0.5rem 1rem; border-radius: 90px; display: flex; align-items: center; text-decoration: none;
        }
        @media (max-width: 768px) {
          .image-container { display: block; }
          .data-container h1 { margin-left: 0; }
        }
        .card-cont { max-width: 85%; margin: 0 auto; padding: 32px; }
        .season-header { margin: 16px 0; display: flex; align-items: baseline; gap: 12px; }
        .season-title { font-size: 1.5rem; font-weight: 700; color: #2d3748; margin: 0; }
        .season-sub { font-size: 0.95rem; color: #718096; }
        .season-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
        @media (max-width: 1200px) { .season-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 992px) { .season-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) { .season-grid { grid-template-columns: 1fr; } }
        .podcast-card {
          background-color: white; box-shadow: 0 4px 6px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden;
          transition: transform 0.3s; display: flex; flex-direction: column;
        }
        .podcast-card:hover { transform: scale(1.03); }
        .podcast-image { width: 100%; height: auto; display: block; cursor: pointer; }
        .podcast-body { padding: 16px; }
        .podcast-meta { color: #38a169; font-weight: 600; margin-bottom: 8px; }
        .podcast-title { font-size: 1rem; font-weight: 700; margin: 0 0 8px; line-height: 1.35; }
        .podcast-title a { color: #2d3748; text-decoration: none; }
        .podcast-title a:hover { color: #e53e3e; }
        .podcast-date { color: #718096; font-size: 0.9rem; margin-bottom: 8px; }
        .box-cont { max-width: 100%; }
        .slider-container { width: 100%; overflow: hidden; position: relative; }
        .slider { display: flex; transition: transform 0.5s ease; }
        .slider iframe { min-width: 100%; }
        @media (min-width: 768px) { .box-cont { max-width: 80%; } }
      `}</style>
    </>
  );
}