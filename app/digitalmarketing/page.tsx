"use client";

import { useEffect } from "react";
import { motion, easeOut } from "framer-motion";

export default function DigitalMarketing() {
  useEffect(() => {
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

  // Reusable fade animation (AOS-like)
  const fade = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: (delay = 0) => ({
      duration: 0.8,
      delay,
      ease: easeOut,
    }),
    viewport: { once: true },
  };

  return (
    <>
      {/* Header Image Section */}
      <section
        className="has-white-color"
        style={{
          backgroundImage:
            "url(/assets/img/pages/digitalmarketing/digitialmarketingbg.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="vlt-page-title vlt-page-title--style-4">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <motion.h1
                  {...fade}
                  transition={fade.transition(0)}
                  className="vlt-page-title__title"
                  style={{ color: "white", fontSize: "4rem", fontWeight: 700 }}
                >
                  Digital Marketing
                </motion.h1>
              </div>
            </div>
          </div>
        </div>
        <div className="vlt-gap-150"></div>
      </section>

      <div className="vlt-gap-80"></div>

      {/* Section 1 */}
      <section>
        <div className="container">
          <div className="row">
            <motion.div
              className="col-lg-6"
              {...fade}
              transition={fade.transition(0.1)}
            >
              <img
                src="/assets/img/pages/digitalmarketing/img1.jpg"
                alt="digital marketing"
              />
            </motion.div>

            <div className="col-lg-6 text-center">
              <motion.h2
                {...fade}
                transition={fade.transition(0.6)}
                className="vlt-section-title__title"
              >
                In Brief
              </motion.h2>

              <motion.p {...fade} transition={fade.transition(0.7)}>
             Digital is disruptive. It’s forcing suppliers to radically rethink marketing. Distributors are getting more digital each day, conducting so much of their business process online, on smart devices, on the go and on their desks. Suppliers are still grappling with how to leverage this change.
              </motion.p>

              <motion.p {...fade} transition={fade.transition(0.8)}>
               Digital is disruptive. It’s forcing suppliers to radically rethink marketing. Distributors are getting more digital each day, conducting so much of their business process online, on smart devices, on the go and on their desks. Suppliers are still grappling with how to leverage this change.
              </motion.p>

              <div className="vlt-gap-80"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section>
        <div className="container text-center">
          <motion.h2
            {...fade}
            transition={fade.transition(0.1)}
            className="vlt-section-title__title"
          >
            Our Marketing Services
          </motion.h2>

          <div className="vlt-gap-80"></div>

          <div className="row">
            {/* Left */}
            <motion.div
              className="col-lg-6"
              {...fade}
              transition={fade.transition(0.3)}
            >
              <button className="accordion"><b>Research</b></button>
              <div className="panel"><p>ROIs on digital marketing budgets can be measured sharply. Unlike traditional strategies built around catalog blitz, trade shows and personal calls. The Vector Art research team is constantly focused on distributor behavior online. We work with some of the most advanced analytics tools out there. We can help you understand their intentions, preferences and actions, often in real time. And translate those insights into campaigns that bring in traffic, leads, inquiries and orders.</p></div>

              <button className="accordion"><b>Strategy & Execution</b></button>
              <div className="panel"><p>What goals to set? Which distributors to target and how? How and when to use email, search, social, mobile and industry portals? How to attract new distributors, distinguish them from repeat visitors and how to engage them? How to integrate traditional and new channels? How to plan, sequence and execute campaigns? We will get it right for you. We have the right insights across digital and traditional channels and platforms. We also have the right mix of expertise to ensure a comprehensive and effective strategy. Our expert teams orchestrate, create, activate and coordinate all aspects of execution from content and creative to social, mobile and email.</p></div>

              <button className="accordion"><b>Search Engine Optimization (SEO)</b></button>
              <div className="panel"><p>Most suppliers find it hard to accept that the second most important source of web traffic is from search engines. Busy distributors don’t always remember your url and key it in. They search on portals and search engines to find exactly what they’re looking for. If your site or pages pop up in search results, they click through to that page. It’s increasingly important for supplies websites to be highly search engine optimized. Vector Art’s technology and SEO team work in tandem. They have the experience of optimizing over 200 supplier websites. We can help your site get to the top and stay there.</p></div>

              <button className="accordion"><b>Online Reputation Management & PR</b></button>
              <div className="panel"><p>We help suppliers to actively manage their brand reputations. Distributors want to know you better before they engage. Peer reviews, online feedback and resonance are increasingly shaping brand reputations. New distributors who may never have met or dealt with you will rely on online data to evaluate you. Negative or adverse feedback online can impact your reputation in the long run. We keep a vigil on what is being said online about suppliers. We identify any conversation that may have adverse impact and we quickly move to ameliorate its effect.</p></div>
            </motion.div>

            {/* Right */}
            <motion.div
              className="col-lg-6"
              {...fade}
              transition={fade.transition(0.6)}
            >
              <button className="accordion"><b>Social Media</b></button>
              <div className="panel"><p>Distributors are very social, digitally. They are a very active on Linked in, Google+ and facebook. Tomorrow they will be active elsewhere, as they discover the value of other social channels. We help suppliers understand and leverage rapidly changing social ecosystems. We look for and find where distributors like to spend time on line. We observe their social behavior, listen to their conversations, and get armed with insights. We then help suppliers engage with distributors using meaningful, relevant content that is in synch with a planned cross channel strategy. And we help convert that engagement into measurable traffic and conversion on web.</p></div>

              <button className="accordion"><b>Mobile</b></button>
              <div className="panel"><p>An increasing number of Distributors and reps are working on the go. As with social media, the use of tablets and mobiles is rising sharply within the Distributor community. Suppliers need to have an active engagement capability – one that seeks to find and connect with distributors whenever and wherever they go mobile. We help Suppliers with what it takes to make useful mobile connections – a shift from static to real-time marketing. From fixed web content to dynamic delivery of product/promotional content that serves the Distributor’s current contexts and customer conversations. Our dedicated mobile team is moving the goal posts, fast.</p></div>

              <button className="accordion"><b>Content Creation & Management</b></button>
              <div className="panel"><p>In the business context, the web is a medium of non-stop, communications between buyers and sellers.It is no different for the promotional industry, closed as it is. End customers expect distributors to assist them throughout their purchasing journey with ideas and information in real time, delivered on web, mobile, search and mal. And the distributor in-turn, turns to the supplier. We help suppliers to preempt those needs, identify and create the right content and make available relevant content when and where distributors want it. In a form that distributors can use and customize quickly to engage and close prospects and customers.</p></div>

              <button className="accordion"><b>Measurement & Analytics</b></button>
              <div className="panel"><p>Your digital investments must turn to quality ROI. They must leverage investments in more traditional marketing activities such as trade shows and catalogs. At Vector Art, we execute integrated campaigns that deliver results. We use our past experience, data repositories, top-tier tools and analytics capabilities to forecast outcomes that you can expect from campaigns. As activities progress we monitor and measure outcomes daily to optimize campaigns. We study each campaign to unearth learning and use them to improve the next campaign. Most importantly, we share detailed reports and insights with you so that you see outcomes and participate in improvements.</p></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Styles */}
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
                content: '+';
                color: #fff;
                font-weight: bold;
                float: right;
                margin-left: 5px;
              }

              .accactive:after {
                content: '-';
              }

              .panel {
                width: 100%;
                color: white;
                padding: 0 18px;
                background-color: rgba(78, 78, 78, 1);
                overflow: hidden;
              }
      `}</style>
    </>
  );
}
