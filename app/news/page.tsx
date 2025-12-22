'use client';

import Link from 'next/link';
import { motion, cubicBezier} from 'framer-motion';

// --- Animation Variants (Mimes AOS "fade-up" behavior) ---
const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: delay / 1000, // Converts AOS ms to seconds
         ease: cubicBezier(0.215, 0.61, 0.355, 1),// Smooth cubic-bezier easing
    },
  }),
};

const newsData = [
  {
    id: 'vectorart-premier-league-2025',
    image: '/assets/img/pages/News/vpl2025.png',
    imageWidth: '200px',
    title: 'Vector Premier League (VPL) 2025',
    excerpt: 'Experience a stunning cricket of a VPL Vector Art Premier League cricket team in action on the turf. This video showcases dynamic motion, clean vector lines, and high-energy cricket visuals—2025, sports. If you love cricket, motion graphics, or vector-style artwork, this one\'s for you!',
    internal: true
  },
  {
    id: 'asi-orlando-2025',
    image: '/assets/img/pages/News/20.jpg',
    imageWidth: '200px',
    title: 'Vector Art Founders Shine at ASI Orlando 2025: A Remarkable 3-Day Journey',
    excerpt: 'The founders of Vector Art had an amazing time at the ASI Show, spending three days connecting with many of our existing clients. It was great to hear their feedback, gather valuable insights, and collect testimonials that highlight the positive impact of our work on their businesses and how it has helped them grow and succeed.'
  },
  {
    id: 'ppai-2025',
    image: '/assets/img/pages/News/21.jpeg',
    imageWidth: '200px',
    title: 'Vector Art Founders Shine at PPAI 2025: An Unforgettable Experience',
    excerpt: 'The anticipated PPAI 2025 event brought together industry leaders, innovators, and creatives for an exciting three-day journey of networking, learning, and inspiration. The Vector Art Founders made a remarkable impact, showcasing their expertise, designs, and commitment to excellence in the promotional products industry.'
  },
  {
    id: 'ppai-expo-2025',
    image: '/assets/img/pages/News/gd10.jpg',
    imageWidth: '200px',
    title: 'Join Us at the PPAI Expo 2025!',
    excerpt: 'We\'re thrilled to announce our participation in the PPAI Expo 2025, the largest promotional products trade show in the US. Visit our booth at 6066 to discover how we can help elevate your brand. Let\'s connect, collaborate, and create lasting impressions together at the PPAI Expo! For more details, feel free to reach out or stay tuned for updates. We can\'t wait to see you there!'
  },
  {
    id: 'ai-coming',
    image: '/assets/img/pages/News/AI IMAGE.jpg',
    imageWidth: '200px',
    title: 'We\'re Coming with AI',
    excerpt: 'We\'re excited to announce a groundbreaking update to our website—AI-powered features are now part of our platform! This upgrade will enhance your experience with smarter tools, personalized insights, and streamlined interactions, making our website more intuitive, efficient, and tailored to your needs. Stay tuned for updates.'
  },
  {
    id: 'vpl-2024',
    image: '/assets/img/pages/News/vpl.png',
    imageWidth: '200px',
    title: 'Vector Premier League (VPL)',
    excerpt: 'The Vector Premier Cricket League is an action-packed tournament where top-tier players from around the region battle it out for the prestigious championship trophy. Get ready for high-energy matches, fierce competition, and unforgettable cricket action! Join us on 28th November for this thrilling event, as teams compete for glory and cricketing supremacy!'
  },
  {
    id: 'booth-6066',
    image: '/assets/img/pages/News/PPAI Social Media 2025.png',
    imageWidth: '150px',
    title: 'Visit Us at Booth #6066, Mandalay Bay, Las Vegas (Jan 14-16)',
    excerpt: 'Visit the Vector Art booth for premium services like branded merchandise design, vectorization, virtual proofs, custom digitizing, and more—no hidden fees! Enjoy fast turnaround, top-quality results, and up to 20% savings on your artwork costs.'
  },
  {
    id: 'ppai-magazine',
    image: '/assets/img/pages/News/Magazine.png',
    imageWidth: '250px',
    title: 'PPAI Magazine September 2024',
    excerpt: 'The September 2024 issue of PPAI Magazine highlights the latest trends, innovations, and success stories in the promotional products industry. Packed with expert insights, sustainability spotlights, and emerging tech trends, this edition is a must-read for professionals looking to stay ahead in a dynamic market.',
    external: 'https://flipbook.ppai.org/2024-09-01/112/'
  },
  {
    id: 'dgi-apparel',
    image: '/assets/img/pages/News/gd10.jpg',
    imageWidth: '150px',
    title: 'New Member Spotlight: DGI Apparel - PPAI - Promotional Products Association',
    excerpt: 'DGI Apparel joins PPAI, offering high-quality, customizable apparel with a focus on innovation and sustainability in the promotional products industry, setting a new standard for client satisfaction.',
    external: 'https://www.ppai.org/media-hub/new-member-spotlight-dgi-apparel/'
  }
];

export default function NewsPage() {
  return (
    <>
      <style jsx>{`
        .news-title-custom {
          cursor: pointer;
          display: inline-block;
          transition: 
            color 0.3s ease,
            transform 0.3s ease;
        }

        .news-title-custom:hover {
          color: #e82e31;
          transform: scale(1.05);
        }

        .news-title-custom:active {
          transform: scale(0.92);
          opacity: 0.85;
        }
      `}</style>

      <div className="vlt-site-overlay"></div>
      <main className="vlt-main">
        <div className="vlt-page-content">
          {/* Hero Section */}
          <section className="has-white-color" style={{backgroundImage: 'url(assets/img/pages/aboutus/aboutusbg.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <div className="vlt-page-title vlt-page-title--style-4">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <h1 className="vlt-page-title__title" style={{color: 'white' , fontSize: "4rem" , fontWeight: "700"}}>News</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="vlt-gap-150"></div>
          </section>

          <div className="vlt-gap-80"></div>

          {/* Headlines Section */}
          <section>
            <div className="container">
              <div className="row">
                <div className="text-center">
                  <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    custom={100}
                    variants={fadeUpVariants}
                    className="vlt-animated-block"
                  >
                    <h2 className="vlt-section-title__title">Top Headlines</h2>
                    <p>Discover the latest news, updates, and milestones from Vectorart. From product launches to industry insights and achievements, stay connected and explore how we're making an impact in our field. Join us on our journey and celebrate our progress together!</p>
                  </motion.div>
                  <div className="vlt-gap-80"></div>
                </div>
              </div>
            </div>

            <div className="container-fluid">
              <div className="row">
                {newsData.map((news) => (
                  <div key={news.id} className="col-lg-3">
                    <motion.div 
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-50px" }}
                      custom={200} // This is the delay in ms
                      variants={fadeUpVariants}
                      className="vlt-animated-block"
                    >
                      <div className="vlt-service vlt-service--style-2">
                        
                        {/* Image Section with Hover Effect */}
                        <motion.div 
                          className="vlt-service__media" 
                          style={{ color:'#101010' }}
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          {news.external ? (
                            <a 
                              className="vlt-project-showcase__image" 
                              href={news.external}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img 
                                src={news.image}
                                alt={news.title}
                                loading="lazy" 
                                style={{width: news.imageWidth}}
                              />
                            </a>
                          ) : (
                            <Link 
                              className="vlt-project-showcase__image" 
                              href={`/news/${news.id}`}
                            >
                              <img 
                                src={news.image}
                                alt={news.title}
                                loading="lazy" 
                                style={{width: news.imageWidth}}
                              />
                            </Link>
                          )}
                        </motion.div>

                        <div className="vlt-service__content">
                          {news.external ? (
                            <a 
                              href={news.external}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <h5 className="vlt-service__title news-title-custom">
                                {news.title}
                              </h5>
                            </a>
                          ) : (
                            <Link 
                              href={`/news/${news.id}`}
                            >
                              <h5 className="vlt-service__title news-title-custom">
                                {news.title}
                              </h5>
                            </Link>
                          )}

                          <p className="vlt-service__text">
                            {news.excerpt}
                          </p>

                          <div className="vlt-gap-30"></div>

                          {news.external ? (
                            <a 
                              className="vlt-btn vlt-btn--secondary vlt-btn--md"
                              href={news.external}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Read More
                            </a>
                          ) : (
                            <Link
                              className="vlt-btn vlt-btn--secondary vlt-btn--md"
                              href={`/news/${news.id}`}
                            >
                              Read More
                            </Link>
                          )}
                        </div>
                      </div>
                      <div className="vlt-gap-60--md"></div>
                    </motion.div>
                  </div>
                ))}
              </div>
              <div className="vlt-gap-80"></div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}