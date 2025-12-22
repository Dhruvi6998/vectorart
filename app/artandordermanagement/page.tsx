'use client';

import React, { useState, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function ArtOrderManagement() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleAccordion = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  const accordionData = [
    {
      title: 'End To End Order Processing Including Art & Proofs',
      content:
        'Processing orders consumes investments and management. Our end-to-end art and order service is the gold standard in the industry. We process over 1 million orders every year.',
    },
    {
      title: 'Production Art',
      content: (
        <>
          <p>
            <b>Dedicated Studio:</b> Our 24/7 production studio supports your
            eCommerce and promotional workflows with precision, scalability,
            and reliability across all formats.
          </p>
          <p>
            <b>On-Demand Artwork:</b> Back up your busy art studio. Let Vector
            Art handle overflow and rush jobs without compromising quality.
          </p>
        </>
      ),
    },
    {
      title: 'Proofs / Proof Approval Process',
      content:
        'We manage the complete proofing lifecycle—creation, approval, and tracking—ensuring production timelines are always met.',
    },
    {
      title: 'Production Order Entry',
      content:
        'Our offshore team enters orders directly into your systems within 12 hours, reducing operational costs by up to 50%.',
    },
    {
      title: 'Sample Order Entry',
      content:
        'Secure VPN-based access to your ERP systems enables accurate and efficient production and sample order entry.',
    },
    {
      title: 'Mailbox Management',
      content:
        'We manage Art, Proofs, Quotes, Samples, and Fax mailboxes with clearly defined workflows and SLAs.',
    },
    {
      title: 'Virtual Samples',
      content:
        'Our Photoshop experts create highly accurate virtual samples aligned with real-world materials and imprint methods.',
    },
    {
      title: 'Vector Artwork',
      content:
        'We convert raster files into clean, production-ready vector artwork—fast, precise, and rush-ready at no extra cost.',
    },
  ];

  return (
    <>
      <Head>
        <title>Efficient Art & Order Management | VectorArt.co</title>
        <meta
          name="description"
          content="Streamline art and order management with VectorArt.co. Save time, reduce costs, and deliver faster with guaranteed quality."
        />
      </Head>

      <main className="vlt-main">
        {/* Hero */}
     
          {/* HERO */}
          <section
            className="has-white-color"
            style={{
              backgroundImage: "url(assets/img/pages/aboutus/aboutusbg.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="vlt-page-title vlt-page-title--style-4">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <h1
                      className="vlt-page-title__title"
                      style={{
                        color: "white",
                        fontSize: "4rem",
                        fontWeight: "700",
                      }}
                    >
                     Art and Order Management
                    </h1>
                  </div>
                  <div className="col-md-6"></div>
                </div>
              </div>
            </div>
            <div className="vlt-gap-150"></div>
          </section>

          
        {/* Intro */}
        <section className="container intro">
          <h2>In Brief</h2>
          <p>
          In everything we do, the starting point is always the same – your success. Our service mission is to understand and rapidly amplify the strengths that make you a success, and equally, identify and manage your top challenges and opportunities.
          </p>
          <p>
            Our transition team studies in detail your processes, the systems that support them and connects with the people that drive them. They then design and implement a delivery service that fits your needs exactly. We replicate the best parts, and work with you to improve things wherever we see an opportunity.
          </p>
          <p>
            The outcome is fast, high quality, value-added delivery of processed art and orders, day in day out. So you save on costs, management time and uncertainty. And you liberate the time to truly engage with customers.
          </p>
        </section>

        {/* Accordion + Image */}
        <section className="container content">
          <div className="grid">
            <div>
              {accordionData.map((item, i) => (
                <div key={i} className="accordion-item">
                  <button
                    className={`accordion-btn ${
                      activeIndex === i ? 'active' : ''
                    }`}
                    onClick={() => toggleAccordion(i)}
                    aria-expanded={activeIndex === i}
                  >
                    {item.title}
                    <span className="icon">
                      {activeIndex === i ? '–' : '+'}
                    </span>
                  </button>

                 <div
  ref={el => {
    panelRefs.current[i] = el; // assignment still happens
  }}
  className="accordion-panel"
  style={{
    maxHeight:
      activeIndex === i
        ? `${panelRefs.current[i]?.scrollHeight}px`
        : '0px',
  }}
>
  <div className="panel-content">{item.content}</div>
</div>

                </div>
              ))}
            </div>

            <div>
              <Image
                src="/assets/img/pages/artandordermanagement/artandordermanagement.jpg"
                alt="Art and Order Management"
                width={600}
                height={420}
                className="image"
              />
            </div>
          </div>
        </section>

        {/* Advantage */}
        <section className="container advantage">
          <h3>The Vector Triple Advantage</h3>
          <div className="grid">
            <div className="buttons">
              <span style = {{backgroundColor:"#e82e31"}}>Guaranteed Savings</span>
              <span style = {{backgroundColor:"#e82e31"}}>Guaranteed Delivery</span>
              <span style = {{backgroundColor:"#e82e31"}}>Guaranteed Value</span>
            </div>
            <div>
              <p>
                We redesign your cost economics to deliver up to 50% savings
                year after year—guaranteed.
              </p>
              <p>
                Our guaranteed delivery program ensures predictable turnaround,
                including same-day rush processing.
              </p>
              <p>
                We turn your operational data into insights that drive growth and
                smarter decisions.
              </p>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        .hero {
          padding: 140px 0;
          background-size: cover;
          color: #fff;
        }

        h1 {
          font-size: 3.5rem;
          font-weight: 700;
        }

        h2,
        h3 {
          text-align: center;
          margin-bottom: 24px;
        }

        .intro {
          max-width: 900px;
          margin: 80px auto;
          text-align: center;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
        }

        .accordion-btn {
          width: 100%;
          padding: 26px;
          background: #111;
          color: #fff;
          border: none;
          text-align: left;
          font-weight: 600;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
        }

        .accordion-btn.active,
        .accordion-btn:hover {
          background: #1e1e1e;
        }

        .accordion-panel {
          overflow: hidden;
          transition: max-height 0.4s ease;
          background: #3a3a3a;
        }

        .panel-content {
          padding: 20px;
          color: #f1f1f1;
          line-height: 1.7;
        }

        .image {
          width: 100%;
          height: auto;
          border-radius: 6px;
        }

        .advantage {
          margin: 120px auto;
        }

        .buttons span {
          display: block;
          background: #000;
          color: #fff;
          padding: 18px;
          margin-bottom: 12px;
          text-align: center;
          font-weight: 600;
        }
      `}</style>
    </>
  );
}
