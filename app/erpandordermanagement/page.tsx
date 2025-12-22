'use client';

import React from 'react';
import Head from 'next/head';
import { motion , easeOut} from 'framer-motion';
import {
  IoRocket,
  IoHeadset,
  IoSettings,
  IoWallet,
  IoShieldCheckmark,
  IoSearchCircle,
  IoCart,
  IoPricetag
} from "react-icons/io5";

const fadeAOS = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

const ErpOrderManagement: React.FC = () => {
  const features = [
    { icon: "rocket", title: "Go live in less than 180 days" },
    { icon: "headset", title: "Extensive post live support" },
    { icon: "settings", title: "Transparent inventory management" },
    { icon: "wallet", title: "Ease of cash flow management" },
    { icon: "shield-checkmark", title: "Integration with promo standards" },
    { icon: "search-circle", title: "Manage different order types in a go" },
    { icon: "cart", title: "Artwork online proof approval" },
    { icon: "pricetag", title: "Special pricing For different customer groups" }
  ];

  const iconStyle = { color: "#e82e31", fontSize: '130px' };
const iconMap: Record<string, React.ReactElement> = {
    rocket: <IoRocket style={iconStyle} />,
    headset: <IoHeadset style={iconStyle} />,
    settings: <IoSettings style={iconStyle} />,
    wallet: <IoWallet style={iconStyle} />,
    "shield-checkmark": <IoShieldCheckmark style={iconStyle} />,
    "search-circle": <IoSearchCircle style={iconStyle} />,
    cart: <IoCart style={iconStyle} />,
    pricetag: <IoPricetag style={iconStyle} />,
  };

  return (
    <>
      <Head>
        <title>Erp & Order Management | Vectorart.co</title>
        <meta
          name="keywords"
          content="services, order, erp, management, Vector art, Graphic design"
        />
        <meta
          name="description"
          content="Optimize cash flows with VectorArt.co's erp and order management service, designed for efficient and seamless order processing."
        />
      </Head>

      <div className="vlt-site-overlay"></div>

      <main className="vlt-main">
        <div className="vlt-page-content">

          {/* HERO SECTION */}
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
                    <h1
                      className="vlt-page-title__title"
                      style={{
                        color: 'white',
                        fontSize: "4rem",
                        fontWeight: "700"
                      }}
                    >
                      Erp & Order Management
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="vlt-gap-150"></div>
          </section>

          <div className="vlt-gap-80"></div>

          {/* CONTENT */}
          <section className="has-black-color">
            <div className="container">

              {/* SECTION TITLE (AOS fade replacement) */}
              <motion.div
                variants={fadeAOS}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.1 }} // data-aos-delay="100"
                className="row"
                style={{ justifyContent: 'center' }}
              >
                <div className="vlt-gap-30"></div>
                <div className="vlt-animated-block">
                  <h2 className="vlt-section-title__title">WYSWYG</h2>
                  <div className="vlt-gap-30"></div>
                </div>
              </motion.div>

              {/* FEATURES */}
              {[0, 3, 6].map((startIdx) => (
                <div className="row" key={startIdx}>
                  {features.slice(startIdx, startIdx + 3).map((feature, index) => (
                    <motion.div
                      key={index}
                      className="col-lg-4"
                      variants={fadeAOS}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 }}
                    >
                      <div className="row justify-content-center">
                        {iconMap[feature.icon]}
                      </div>
                      <div className="vlt-gap-10"></div>
                      <h6 className="text-center">{feature.title}</h6>
                      <div className="vlt-gap-30"></div>
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>
          </section>

          <div className="vlt-gap-80"></div>
        </div>
      </main>
    </>
  );
};

export default ErpOrderManagement;
