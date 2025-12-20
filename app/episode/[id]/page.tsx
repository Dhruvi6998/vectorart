// app/episode/[id]/page.js
'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

const episodes = {
 
  s2e13: {
    season: 2,
    episode: 13,
    title: 'Igniting Brands: John Heinz of Spark Branded Solutions on Powering the Promo Industry',
    date: 'October 13, 2025',
    host: 'ROHIT JAISWAL',
    guest: 'John Heinz',
    description: `Creativity and strategy ignite brands in the promotional products industry.<br />
From concept to delivery, Spark transforms branded merchandise into memorable experiences.<br />
🔥 Tune in as we explore:<br />
The evolution of branded merchandise in modern marketing<br />
How Spark crafts experiences that connect brands and people<br />
The importance of creative strategy in the promo space<br />
<b>🎧 Don’t forget to like, comment, and subscribe for more insights from leaders shaping the promo world.</b>`,
    youtubeId: 'FiuFHvjiQG0',
    thumbnail: '/assets/img/pages/Podcast/Vectorart-podcast logo.jpg',
    spotifyUrl: 'https://open.spotify.com/episode/6YJwxblHuVrKggvUPrAjb8',
    soundcloudUrl: 'https://soundcloud.com/rohit-jaiswal-518225476'
  },

  s2e12: {
    season: 2,
    episode: 12,
    title: "Investing in Impact: Brandily's Take on Promotional Spend",
    date: 'October 3, 2025',
    host: 'ROHIT JAISWAL',
    guest: 'Sarah Lilley',
    description: `Impact-driven promotional investments that maximize ROI and visibility.
Discover how Brandily is reshaping the way businesses approach promotional spending with an emphasis on impact-driven investments.

🔑 What you’ll learn:<br />
How promotional spending impacts long-term growth<br />
Key strategies for maximizing ROI<br />
Why aligning promotions with brand values creates stronger connections<br />
Practical advice for businesses looking to scale with promotional products<br />
<b>👉 Don’t forget to like, comment, and subscribe!</b>`,
    youtubeId: '6rNuDGxOPa0',
    thumbnail: '/assets/img/pages/Podcast/Vectorart-podcast logo.jpg',
    spotifyUrl: 'https://open.spotify.com/episode/6ztqXWZme3PLpnlSn010co',
    soundcloudUrl: 'https://soundcloud.com/rohit-jaiswal-518225476'
  },

  s2e11: {
    season: 2,
    episode: 11,
    title: 'Inside Fully Promoted: Franchise Strategies That Work',
    date: 'October 1, 2025',
    host: 'ROHIT JAISWAL',
    guest: 'Tyler Sherwood',
    description: `Franchise growth tactics, brand identity, and scaling across markets.<br />
From building strong brand identity to scaling across multiple markets 🌍, this episode delivers real-world franchise insights.`,
    youtubeId: 'Tui8JvGRu1s',
    thumbnail: '/assets/img/pages/Podcast/Vectorart-podcast logo.jpg',
    spotifyUrl: 'https://open.spotify.com/episode/3Cg9639IK3I5sjz55vJQXi',
    soundcloudUrl: 'https://soundcloud.com/rohit-jaiswal-518225476'
  },

  s2e10: {
    season: 2,
    episode: 10,
    title: 'Elevating Brands with Custom Gifts',
    date: 'September 19, 2025',
    host: 'ROHIT JAISWAL',
    guest: 'Rich Patterson',
    description: `Creating elevated, engaging, and cherished products with PBJ Merch Co.<br />
How custom gifts strengthen brand identity and emotional connection.`,
    youtubeId: '2K0k2sKKctg',
    thumbnail: '/assets/img/pages/Podcast/Vectorart-podcast logo.jpg',
    spotifyUrl: 'https://open.spotify.com/episode/472Eql12Nm1T6Gu5s5h51b',
    soundcloudUrl: 'https://soundcloud.com/rohit-jaiswal-518225476'
  },
  s2e9: {
    season: 2,
    episode: 9,
    title: "Lane Seven's Blueprint: Smarter Branding Strategies from Alyssa Inkrott",
    date: 'September 15, 2025',
    host: 'ROHIT JAISWAL',
    guest: 'Alyssa Inkrott',
    description: `Apparel storytelling and smarter brand identity strategies.<br />
From apparel that tells a story to authentic branding, Alyssa shares what it takes to build brands that truly connect.`,
    youtubeId: 'xYSjdO1JseM',
    thumbnail: '/assets/img/pages/Podcast/Vectorart-podcast logo.jpg',
    spotifyUrl: 'https://open.spotify.com/episode/0negmIBGNanbqqprZJn6vR',
    soundcloudUrl: 'https://soundcloud.com/rohit-jaiswal-518225476'
  },

  s2e8: {
    season: 2,
    episode: 8,
    title: 'Inside the Promo Industry: Colin Loughran of Five Fisherwick',
    date: 'September 10, 2025',
    host: 'ROHIT JAISWAL',
    guest: 'Colin Loughran',
    description: `Innovative branding strategies and the future of promo.<br />
We dive deep into creativity, strategy, and building long-term client relationships.`,
    youtubeId: 'RcWiQ1K1Xv4',
    thumbnail: '/assets/img/pages/Podcast/Vectorart-podcast logo.jpg',
    spotifyUrl: 'https://open.spotify.com/episode/5hLMGcpRZFao2GUDJbpQbN',
    soundcloudUrl: 'https://soundcloud.com/rohit-jaiswal-518225476'
  },

  s2e7: {
    season: 2,
    episode: 7,
    title: 'Bottled Up Branding: The Power of Promotional Drinkware',
    date: 'September 3, 2025',
    host: 'ROHIT JAISWAL',
    guest: 'Priscila Angus',
    description: `Premium drinkware, eco-conscious design, and impactful branding.<br />
How thoughtful drinkware elevates everyday brand experiences.`,
    youtubeId: 'hnX39oC7EgE',
    thumbnail: '/assets/img/pages/Podcast/Vectorart-podcast logo.jpg',
    spotifyUrl: 'https://open.spotify.com/episode/0xPGqrkASpbVeVlxPvuHDo',
    soundcloudUrl: 'https://soundcloud.com/rohit-jaiswal-518225476'
  },

  s2e6: {
    season: 2,
    episode: 6,
    title: 'Blankets That Speak Louder Than Logos',
    date: 'August 22, 2025',
    host: 'ROHIT JAISWAL',
    guest: 'Jenny Barcus',
    description: `Premium woven throws tell stories far beyond a logo.<br />
Rethinking branding through warmth, quality, and meaning.`,
    youtubeId: 'DqGKz5rp3vY',
    thumbnail: '/assets/img/pages/Podcast/Vectorart-podcast logo.jpg',
    spotifyUrl: 'https://open.spotify.com/episode/0WecLWisiszpwaThuCuZXf',
    soundcloudUrl: 'https://soundcloud.com/rohit-jaiswal-518225476'
  },

  s2e5: {
    season: 2,
    episode: 5,
    title: 'From Logo to Legacy: Turning Promotional Products into Brand Experiences',
    date: 'August 14, 2025',
    host: 'ROHIT JAISWAL',
    guest: 'Megh Chahl',
    description: `Branded merchandise for awareness, relationships, and lasting impressions.<br />
How Genumark creates memorable brand experiences.`,
    youtubeId: 'itrNqSBR_As',
    thumbnail: '/assets/img/pages/Podcast/Vectorart-podcast logo.jpg',
    spotifyUrl: 'https://open.spotify.com/episode/5s7bz6X2OO4nRfiA0JxZ6W',
    soundcloudUrl: 'https://soundcloud.com/rohit-jaiswal-518225476'
  },

  s2e4: {
    season: 2,
    episode: 4,
    title: 'The Future of Brand Loyalty Starts with Gen-Z',
    date: 'August 2, 2025',
    host: 'ROHIT JAISWAL',
    guest: 'Caden Knebel',
    description: `Etchify, loyalty, and engagement through a Gen-Z lens.<br />
Startup insights, vision, and scaling at just 18.`,
    youtubeId: '5NqO-9-Olig',
    thumbnail: '/assets/img/pages/Podcast/Vectorart-podcast logo.jpg',
    spotifyUrl: 'https://open.spotify.com/episode/5IArWibnxknltjRgmbDibP',
    soundcloudUrl: 'https://soundcloud.com/rohit-jaiswal-518225476'
  },

  s2e3: {
    season: 2,
    episode: 3,
    title: 'Promotional Products Reimagined: Smart Strategies for Maximum Brand Impact',
    date: 'July 29, 2025',
    host: 'ROHIT JAISWAL',
    guest: 'Riley Friar',
    description: `Trends, pitfalls, and strategy behind merchandise campaigns.<br />
How to maximize brand impact with smarter promo decisions.`,
    youtubeId: 'SHcwa1h5mYs',
    thumbnail: '/assets/img/pages/Podcast/Vectorart-podcast logo.jpg',
    spotifyUrl: 'https://open.spotify.com/episode/7E48ToZVlOLR3PyVbYhoB5',
    soundcloudUrl: 'https://soundcloud.com/rohit-jaiswal-518225476'
  },

  s2e2: {
    season: 2,
    episode: 2,
    title: 'B2B vs B2C – Lessons in Leadership from Both Sides',
    date: 'June 26, 2025',
    host: 'ROHIT JAISWAL',
    guest: 'Nicole Stachowicz',
    description: `Contrasting strategies, communication, and decision-making.<br />
Leadership lessons across B2B and B2C worlds.`,
    youtubeId: 'xxVedKJx3b4',
    thumbnail: '/assets/img/pages/Podcast/Vectorart-podcast logo.jpg',
    spotifyUrl: 'https://open.spotify.com/show/7A7v0AR7Bcf7wAVGbvlMmm',
    soundcloudUrl: 'https://soundcloud.com/rohit-jaiswal-518225476'
  },

  s2e1: {
    season: 2,
    episode: 1,
    title: 'Beyond the Logo: Building Brand Loyalty Through Promo Solutions',
    date: 'June 20, 2025',
    host: 'ROHIT JAISWAL',
    guest: 'Samantha Fullerton',
    description: `Promo solutions shaping lasting brand loyalty.<br />
Connection, strategy, and long-term brand impact.`,
    youtubeId: 'PbIIXGSwtUI',
    thumbnail: '/assets/img/pages/Podcast/Vectorart-podcast logo.jpg',
    spotifyUrl: 'https://open.spotify.com/show/7A7v0AR7Bcf7wAVGbvlMmm',
    soundcloudUrl: 'https://soundcloud.com/rohit-jaiswal-518225476'
  },

  s1e12: {
    season: 1,
    episode: 12,
    title: 'Headwear with Purpose: Designing Promo that Tells a Story',
    date: 'April 25, 2025',
    host: 'ROHIT JAISWAL',
    guest: 'FEDERICO PASINI',
    description: `Purpose-driven, sustainable headwear and ethical production.<br />
Storytelling and sustainability shaping global headwear trends.`,
    youtubeId: 'TCsqYEzMlZE',
    thumbnail: '/assets/img/pages/Podcast/16.jpeg',
    spotifyUrl: 'https://open.spotify.com/episode/5Z0txAJOubNAWAP7bZxlYM',
    soundcloudUrl: 'https://soundcloud.com/rohit-jaiswal-518225476'
  },

  s1e11: {
    season: 1,
    episode: 11,
    title: 'The Anatomy of a Perfect Cap: Exploring Premium Fabrics & Designs',
    date: 'April 23, 2025',
    host: 'ROHIT JAISWAL',
    guest: 'MAX LEONARD',
    description: `American twill, brushed cotton, mesh backs, and poly twill.<br />
A deep dive into premium headwear design.`,
    youtubeId: 'lEzV3lI5bOg',
    thumbnail: '/assets/img/pages/Podcast/15.jpeg',
    spotifyUrl: 'https://open.spotify.com/episode/6NsYYSCkXqFx26KE3omO5a',
    soundcloudUrl: 'https://soundcloud.com/rohit-jaiswal-518225476'
  },

  s1e10: {
    season: 1,
    episode: 10,
    title: 'The latest trends and innovations in sustainable promotional products',
    date: 'April 22, 2025',
    host: 'ROHIT JAISWAL',
    guest: 'JESYCA HOPE',
    description: `Recycled materials, bamboo, organic cotton, reusable items.<br />
Eco-friendly swag reshaping promotional marketing.`,
    youtubeId: 'Q1rpr0jXUdE',
    thumbnail: '/assets/img/pages/Podcast/14.jpeg',
    spotifyUrl: 'https://open.spotify.com/episode/4zjAbeWV9NIXPTbqtV4JiZ',
    soundcloudUrl: 'https://soundcloud.com/rohit-jaiswal-518225476'
  },

  s1e9: {
    season: 1,
    episode: 9,
    title: "The Do's & Don'ts of Rebranding with Promotional Products",
    date: 'April 9, 2025',
    host: 'ROHIT JAISWAL',
    guest: 'GLORIA LAFONT',
    description: `Aligned products, consistent messaging, tracking engagement.<br />
Lessons from successful rebranding campaigns.`,
    youtubeId: '-t55-xYCBIE',
    thumbnail: '/assets/img/pages/Podcast/13.jpg',
    spotifyUrl: 'https://open.spotify.com/episode/7D28MllJtpoGk6l47z2tlC',
    soundcloudUrl: 'https://soundcloud.com/rohit-jaiswal-518225476'
  },

  s1e8: {
    season: 1,
    episode: 8,
    title: 'AI & Personalization in Promotional Products: The Next Big Thing',
    date: 'April 4, 2025',
    host: 'ROHIT JAISWAL',
    guest: 'CAT GAGLIARDO',
    description: `AI-driven personalization, engagement, and privacy balance.<br />
How AI is transforming the promo industry.`,
    youtubeId: 'O9vfceusZ8g',
    thumbnail: '/assets/img/pages/Podcast/12.jpg',
    spotifyUrl: 'https://open.spotify.com/episode/04xelmKHhy7HxOKVFcQkaT',
    soundcloudUrl: 'https://soundcloud.com/rohit-jaiswal-518225476'
  },

  s1e7: {
    season: 1,
    episode: 7,
    title: 'The Psychology of Freebies: Why Customers Love Branded Giveaways',
    date: 'April 3, 2025',
    host: 'ROHIT JAISWAL',
    guest: 'ALEX BRADLEY',
    description: `Triggers that drive loyalty, trust, engagement, and ROI.<br />
Why freebies work—and how to use them right.`,
    youtubeId: 'VmPboRkFRHk',
    thumbnail: '/assets/img/pages/Podcast/12.jpeg',
    spotifyUrl: 'https://open.spotify.com/episode/7cdGJ5MaJZIxixYzcaVKV7',
    soundcloudUrl: 'https://soundcloud.com/rohit-jaiswal-518225476'
  },

  s1e6: {
    season: 1,
    episode: 6,
    title: 'From Swag to Sales: How Promotional Items Can Drive Business Growth',
    date: 'April 2, 2025',
    host: 'ROHIT JAISWAL',
    guest: 'HILLARY SCALETTA',
    description: `Recognition, loyalty, and integration into marketing strategy.<br />
Turning swag into real business results.`,
    youtubeId: 'YSz0XHeTB0A',
    thumbnail: '/assets/img/pages/Podcast/11.png',
    spotifyUrl: 'https://open.spotify.com/episode/04eNuwPLFR7aKlQQ2wwhlW',
    soundcloudUrl: 'https://soundcloud.com/rohit-jaiswal-518225476'
  },

  s1e5: {
    season: 1,
    episode: 5,
    title: 'Stand Out & Scale Up: The Role of Promotional Products in Small Business Success',
    date: 'March 18, 2025',
    host: 'ROHIT JAISWAL',
    guest: 'ROSS GREENSTEIN',
    description: `Visibility, engagement, referrals, and growth.<br />
How small businesses can scale using promo.`,
    youtubeId: 'B3MtldUMudI',
    thumbnail: '/assets/img/pages/Podcast/10.jpg',
    spotifyUrl: 'https://open.spotify.com/episode/1WwHMewWvZrE1lzl0KBc1e',
    soundcloudUrl: 'https://soundcloud.com/rohit-jaiswal-518225476'
  },

  s1e4: {
    season: 1,
    episode: 4,
    title: "Promotional product: A key Part of America's Gifting Culture",
    date: 'March 13, 2025',
    host: 'ROHIT JAISWAL',
    guest: 'KRISTINA BEAL',
    description: `Tradition, impressions, and connections.<br />
The role of promotional products in American gifting culture.`,
    youtubeId: '76Gh2-38KwE',
    thumbnail: '/assets/img/pages/Podcast/9.png',
    spotifyUrl: 'https://open.spotify.com/episode/3JJMojejNl2PJMksWIuZCx',
    soundcloudUrl: 'https://soundcloud.com/rohit-jaiswal-518225476'
  },

  s1e3: {
    season: 1,
    episode: 3,
    title: 'Nurturing the Next Generation: Wisdom from a 4-Decade Career',
    date: 'February 26, 2025',
    host: 'ROHIT JAISWAL',
    guest: 'THE UNCLE EARL',
    description: `Mentoring, leadership, resilience, and adaptability.<br />
Wisdom from a 40+ year career.`,
    youtubeId: 'agvnQCvBmqA',
    thumbnail: '/assets/img/pages/Podcast/7.png',
    spotifyUrl: 'https://open.spotify.com/episode/0HSYohA3j58oGLe9ORbsVp',
    soundcloudUrl: 'https://soundcloud.com/rohit-jaiswal-518225476'
  },

  s1e2: {
    season: 1,
    episode: 2,
    title: 'Top Promotional Products Distributors & Suppliers in the USA',
    date: 'February 15, 2025',
    host: 'ROHIT JAISWAL',
    guest: 'CASSANDRA CHIODO',
    description: `Leading companies for branded merchandise and giveaways.<br />
Insights into top distributors in the USA.`,
    youtubeId: 'E0pGLiFeqqg',
    thumbnail: '/assets/img/pages/Podcast/6.png',
    spotifyUrl: 'https://open.spotify.com/episode/7aJzarDrJUjgr4DH8Dh6PY',
    soundcloudUrl: 'https://soundcloud.com/rohit-jaiswal-518225476'
  },

  s1e1: {
    season: 1,
    episode: 1,
    title: 'Unlocking Growth: The $26 Billion Promotional Products Industry',
    date: 'January 15, 2025',
    host: 'ROHIT JAISWAL',
    guest: 'JESSICA VAN METER',
    description: `Trends, strategies, and opportunities in promo.<br />
A deep dive into the $26B promotional products industry.`,
    youtubeId: '4_OQkH9OJSo',
    thumbnail: '/assets/img/pages/Podcast/3.png',
    spotifyUrl: 'https://open.spotify.com/episode/2T3f76HrOZ7RzecPMrwMXZ',
    soundcloudUrl: 'https://soundcloud.com/rohit-jaiswal-518225476'
  }
};

export default function Episode() {
  const params = useParams();
  const id = params.id;
  
  if (!id || !episodes[id]) {
    return (
      <div style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h1>Episode not found</h1>
        <Link href="/podcast" style={{ color: '#e53e3e', textDecoration: 'underline' }}>Back to Podcast</Link>
      </div>
    );
  }

  const episode = episodes[id];

  return (
    <>
      <div className="vlt-site-overlay"></div>

      <main className="vlt-main">
        <div className="vlt-page-content" style={{ marginTop: '90px' }}>
          {/* Back Button */}
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '20px' }}>
            <Link href="/podcast" style={{ display: 'inline-flex', alignItems: 'center', color: '#e53e3e', textDecoration: 'none', fontWeight: '600', marginBottom: '20px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '8px' }}>
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to All Episodes
            </Link>
          </div>

          {/* Episode Content */}
          <section>
            <div className="episode-container">
              {/* Video Section (Right Side on Desktop) */}
              <div className="video-section">
                <div className="video-wrapper">
                  <iframe 
                    width="100%" 
                    height="100%"
                    src={`https://www.youtube.com/embed/${episode.youtubeId}?autoplay=1`}
                    title={episode.title} 
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* Share and Listen Section Below Video */}
                <div className="video-actions">
                  <div className="social-share compact">
                    <h3>Share This Episode</h3>
                    <div className="share-buttons">
                      <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} target="_blank" rel="noopener noreferrer" className="share-btn facebook">
                        <i className="fab fa-facebook-f"></i> Facebook
                      </a>
                      <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text=${encodeURIComponent(episode.title)}`} target="_blank" rel="noopener noreferrer" className="share-btn twitter">
                        <i className="fab fa-twitter"></i> Twitter
                      </a>
                      <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} target="_blank" rel="noopener noreferrer" className="share-btn linkedin">
                        <i className="fab fa-linkedin-in"></i> LinkedIn
                      </a>
                    </div>
                  </div>

                  <div className="listen-platforms compact">
                    <h3>Listen On</h3>
                    <div className="platform-buttons">
                      <a href={`https://www.youtube.com/watch?v=${episode.youtubeId}`} target="_blank" rel="noopener noreferrer" className="platform-btn youtube">
                        <i className="fab fa-youtube"></i> YouTube
                      </a>
                      <a href={episode.spotifyUrl} target="_blank" rel="noopener noreferrer" className="platform-btn spotify">
                        <i className="fab fa-spotify"></i> Spotify
                      </a>
                      <a href={episode.soundcloudUrl} target="_blank" rel="noopener noreferrer" className="platform-btn soundcloud">
                        <i className="fab fa-soundcloud"></i> SoundCloud
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Details Section (Left Side on Desktop) */}
              <div className="details-section">
                <div className="episode-badge">
                  Season {episode.season} Episode {episode.episode}
                </div>

                <h1 className="episode-title">{episode.title}</h1>

                <div className="episode-meta">
                  <div className="meta-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span>{episode.date}</span>
                  </div>

                  <div className="meta-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span>Host: <strong>{episode.host}</strong></span>
                  </div>

                  <div className="meta-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    <span>Guest: <strong>{episode.guest}</strong></span>
                  </div>
                </div>

                <div className="episode-description">
                  <h2>About This Episode</h2>
                  <div dangerouslySetInnerHTML={{ __html: episode.description }} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <style jsx>{`
        .episode-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 20px;
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 40px;
          align-items: start;
        }

        .video-section {
          order: 2;
          position: sticky;
          top: 110px;
        }

        .video-wrapper {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          overflow: hidden;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .video-wrapper iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .video-actions {
          margin-top: 50px;
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .details-section {
          order: 1;
        }

        .episode-badge {
          display: inline-block;
          background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .episode-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 24px;
          line-height: 1.2;
        }

        .episode-meta {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 32px;
          padding: 20px;
          background: #f7fafc;
          border-radius: 8px;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #4a5568;
        }

        .meta-item svg {
          flex-shrink: 0;
          color: #e53e3e;
        }

        .episode-description {
          margin-bottom: 32px;
        }

        .episode-description h2 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 16px;
        }

        .episode-description :global(p) {
          font-size: 1.125rem;
          line-height: 1.8;
          color: #4a5568;
        }

        .social-share,
        .listen-platforms {
          margin-bottom: 32px;
        }

        .social-share h3,
        .listen-platforms h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 16px;
        }

        .share-buttons,
        .platform-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .share-btn,
        .platform-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
          transition: transform 0.2s, box-shadow 0.2s;
          color: white;
        }

        .share-btn:hover,
        .platform-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .facebook {
          background: #1877F2;
        }

        .twitter {
          background: #1DA1F2;
        }

        .linkedin {
          background: #0077B5;
        }

        .youtube {
          background: #FF0000;
        }

        .spotify {
          background: #1DB954;
        }

        .soundcloud {
          background: #FF5500;
        }

        @media (max-width: 1024px) {
          .episode-container {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .video-section {
            order: 1;
            position: relative;
            top: 0;
          }

          .details-section {
            order: 2;
          }

          .episode-title {
            font-size: 2rem;
          }
        }

        @media (max-width: 768px) {
          .episode-title {
            font-size: 1.75rem;
          }

          .share-buttons,
          .platform-buttons {
            flex-direction: column;
          }

          .share-btn,
          .platform-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
}