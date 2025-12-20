"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// This replaces AOS fade/delay logic
const aosProps = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay: delay / 1000 }
});

export default function ImageEditingPage() {
  const [activeAccordions, setActiveAccordions] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    setActiveAccordions((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const accordionData = [
    {
      title: "Product Retouching",
      content: `Vector Art specializes in detailed photo retouch and Photoshop post production.
Whether the images are low quality, blurry, or poorly represented by the camera,
it’s easy to adjust them to fit the quality your business deserves. We offer
professional photo retouching for online stores and brands to make your products
shine. Special conditions on large batches and recurring orders. Free trial and
consultation available within 24 hrs.`,
    },
    {
      title: "Fashion Retouching",
      content: `This is perfect for businesses that sell the same product in different colors, allowing a perfect showcase of how the image might look at the other end. This increases confidence in your products and gives your potential clients a clear idea of what each variation will actually look like. Any fabric, fur, lace and wedding dresses. Clipping path, shape and color correction, dust removal etc. Retouching of standalone clothes and model photo sessions, including model retouching. Photo editing with ‘ghost mannequin’ effect, merge of front and neck parts of the clothes into one three-dimensional photo.`,
    },
    {
      title: "Jewelry Retouching",
      content: `Vector Art specializes in Winning photos of rings, necklaces, bracelets and earrings are unthinkable today without jewelry retouching service. When you deal with jewelry the professional retouching is crucial for the high sales in our era of online stores with photo catalogs. Our jewelry photo editing services focus not only on high-end segment of major manufacturers or resellers, demanding the highest attention to details for their catalogs, constant and ultimate quality, but also on beginning designers, enhancing their non-professional photos.`,
    },
    {
      title: "Clipping Paths",
      content: `A clipping path service is a process of removing a background from an image. We provide accurate photo cutting of simple and complex objects such as transparent items, delicate items with furry or thin borders, hair, etc.. White background allows focus on the object and shows emphasis on the details of the objects such as colors, texture and shape Transparent background provide benefits in certain situations. They are excellent for banner advertisements, and are typically used for the clipping path.`,
    },
    {
      title: "Color Corrections",
      content: `Color enhancement is demanded for successful printing and web publishing which includes temperature, skin tone adjustment, saturation, exposure, contrast and brightness correction, highlights and shadows balance control. This is where Vector Art comes in, as we offer a truly unique color replacement service for online stores and Promotional product catalogues. With the help of our color changing service, you don’t need to worry about this becoming a problem anymore – we can make sure your products shine as good online as they do in real life.`,
    },
    {
      title: "Restoration",
      content: `Color enhancement is demanded for successful printing and web publishing which includes temperature, skin tone adjustment, saturation, exposure, contrast and brightness correction, highlights and shadows balance control. This is where Vector Art comes in, as we offer a truly unique color replacement service for online stores and Promotional product catalogues. With the help of our color changing service, you don’t need to worry about this becoming a problem anymore – we can make sure your products shine as good online as they do in real life.`,
    },
  ];

  return (
    <main className="vlt-main">
      <div className="vlt-site-overlay"></div>

      <div className="vlt-page-content">
        <section
          className="has-white-color"
          style={{
            backgroundImage: "url(/assets/img/pages/imageediting/imageeditingbg.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="vlt-page-title vlt-page-title--style-4">
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                  {/* REPLACED AOS WITH MOTION */}
                  <motion.h1
                    {...aosProps(0)}
                    className="vlt-page-title__title"
                    style={{ color: "white", fontSize: "4rem", fontWeight: "700" }}
                  >
                    Image Editing
                  </motion.h1>
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
              <div className="text-center">
                {/* REPLACED AOS WITH MOTION */}
                <motion.div {...aosProps(100)} className="vlt-animated-block">
                  <h2 className="vlt-section-title__title">
                    We offer our experience and expertise right up to the final image editing stage
                    so that the photographs are ready for re-prints and end use.
                  </h2>
                </motion.div>
              </div>
              <div className="vlt-gap-80"></div>
            </div>

            <div className="row">
              {/* REPLACED AOS WITH MOTION */}
              <motion.div {...aosProps(300)} className="col-lg-6" style={{ marginBottom: "20px" }}>
                <Image
                  src="/assets/img/pages/imageediting/imageediting.jpg"
                  alt="image editing"
                  width={600}
                  height={400}
                />
              </motion.div>

              {/* REPLACED AOS WITH MOTION */}
              <motion.div {...aosProps(500)} className="col-lg-6" style={{ marginBottom: "20px" }}>
                {accordionData.map((item, index) => (
                  <div key={index}>
                    <button
                      className={`accordion ${activeAccordions.includes(index) ? "accactive" : ""}`}
                      onClick={() => toggleAccordion(index)}
                    >
                      <b>{item.title}</b>
                    </button>
                    {/* MOTION USED FOR PANEL ANIMATION */}
                    <motion.div
                      className="panel"
                      initial={false}
                      animate={{ 
                        maxHeight: activeAccordions.includes(index) ? "500px" : "0" 
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <p style={{ margin: "20px" }}>{item.content}</p>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* YOUR ORIGINAL CSS UNCHANGED */}
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
              content: "+";
              color: #fff;
              font-weight: bold;
              float: right;
              margin-left: 5px;
            }

            .accactive:after {
              content: "-";
            }

            .panel {
              width: 100%;
              color: white;
              padding: 0 18px;
              background-color: rgba(78, 78, 78, 1);
              overflow: hidden;
            }
          `}</style>
        </section>

        <div className="vlt-gap-80"></div>
      </div>
    </main>
  );
}