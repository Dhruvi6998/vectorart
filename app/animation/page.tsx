"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AnimationPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Accordion logic
    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach((acc) => {
      acc.addEventListener("click", function (this: HTMLElement) {
        this.classList.toggle("accactive");
        const panel = this.nextElementSibling as HTMLElement;

        if (panel.style.maxHeight) {
          panel.style.maxHeight = "";
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
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
                <h1 className="vlt-page-title__title" style={{ color: "white", fontSize: "4rem", fontWeight: "700"}}>
                  Animation
                </h1>
                <h2 hidden></h2>
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
          <div
            className="row"
            style={{ margin: 20 }}
            data-aos="fade"
            data-aos-delay="100"
          >
            {/* Company AV */}
            <button className="accordion">
              <b>Company AV</b>
            </button>
            <div className="panel">
              <p style={{ margin: 20 }}>
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/V6oNLyngf3o"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </p>
            </div>

            {/* Logo Reveal */}
            <button className="accordion">
              <b>Logo Reveal</b>
            </button>
            <div className="panel">
              <p style={{ margin: 20 }}>
                <div className="row">
                  <div className="col-lg-6">
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/dYKM0astrQo"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>

                  <div className="col-lg-6">
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/DSAwNx3wDAk"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>

                  <div className="col-lg-6">
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/VWMnCzpCbeE"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>

                  <div className="col-lg-6">
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/mXuHvL4L0a4"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>

                  <div className="col-lg-6">
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/BIZj72wGKAY"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </p>
            </div>

            {/* Raster To Vector */}
            <button className="accordion">
              <b>Raster To Vector</b>
            </button>
            <div className="panel">
              <p style={{ margin: 20 }}></p>
            </div>
          </div>
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
          transition: max-height 0.5s ease-out;
          max-height: 0;
        }
      `}</style>
    </>
  );
}
