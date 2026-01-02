"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function AnimationPage() {
  useEffect(() => {
    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach((acc) => {
      acc.addEventListener("click", function (this: HTMLElement) {
        this.classList.toggle("accactive");

        const panel = this.nextElementSibling as HTMLElement;

        if (panel.classList.contains("open")) {
          panel.classList.remove("open");
        } else {
          panel.classList.add("open");
        }
      });
    });

    return () => {
      accordions.forEach((acc) => {
        acc.replaceWith(acc.cloneNode(true));
      });
    };
  }, []);

  return (
    <>
      {/* Page Header Section */}
      <section
        className="has-white-color"
        style={{
          backgroundImage: "url(/assets/img/pages/animation/animationbg.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="vlt-page-title vlt-page-title--style-4">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <h1
                  className="vlt-page-title__title"
                  style={{
                    color: "white",
                    fontSize: "4rem",
                    fontWeight: "700",
                  }}
                >
                  Animation
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="vlt-gap-150"></div>
      </section>

      {/* Accordion Section */}
      <section>
        <div className="vlt-gap-80"></div>
        <div className="container">
          <motion.div
            className="row"
            style={{ margin: 20 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Company AV */}
            <button className="accordion">
              <b>Company AV</b>
            </button>
            <div className="panel">
              <div style={{ margin: 20 }}>
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/V6oNLyngf3o"
                  title="Company AV"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Logo Reveal */}
            <button className="accordion">
              <b>Logo Reveal</b>
            </button>
            <div className="panel">
              <div style={{ margin: 20 }}>
                <div className="row">
                  {[
                    "dYKM0astrQo",
                    "DSAwNx3wDAk",
                    "VWMnCzpCbeE",
                    "mXuHvL4L0a4",
                    "BIZj72wGKAY",
                  ].map((id) => (
                    <div className="col-lg-6" key={id}>
                      <iframe
                        width="100%"
                        height="315"
                        src={`https://www.youtube.com/embed/${id}`}
                        title={id}
                        allowFullScreen
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Raster To Vector */}
            <button className="accordion">
              <b>Raster To Vector</b>
            </button>
            <div className="panel">
              <div style={{ margin: 20 }}>
                {/* Add content here if needed */}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Accordion Styles */}
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
          transition: background-color 0.4s;
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
        }

        .accactive:after {
          content: "-";
        }

        .panel {
          width: 100%;
          color: white;
          background-color: rgba(78, 78, 78, 1);
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.6s ease;
        }

        .panel.open {
          max-height: 3000px;
        }
      `}</style>
    </>
  );
}
