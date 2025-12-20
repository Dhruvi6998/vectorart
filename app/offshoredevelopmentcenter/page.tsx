"use client";

import Head from 'next/head';
import React, { useEffect } from 'react';
import { IoCheckmarkCircle } from "react-icons/io5";
import { motion, easeOut} from 'framer-motion';

export default function OffshoreDevelopmentCenter() {
  
  // Reusable animation variant
  const fadeUp = (delay: number = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay: delay / 1000, ease: easeOut}
  });

  // Optimized Accordion logic
  useEffect(() => {
    const acc = document.getElementsByClassName('accordion');
    
    const toggleAccordion = function(this: HTMLElement) {
      this.classList.toggle('active');
      const panel = this.nextElementSibling as HTMLElement;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = '';
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    };

    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener('click', toggleAccordion);
    }

    // Cleanup listeners on unmount
    return () => {
      for (let i = 0; i < acc.length; i++) {
        acc[i].removeEventListener('click', toggleAccordion);
      }
    };
  }, []);

  return (
    <>
      <Head>
        <title>Off Shore Development Center | Vectorart.co</title>
        <meta name="keywords" content="development, center, Vector art , Graphic design" />
        <meta name="description" content="Vectorart.co is your offshore hub for development center, top resources, qualified professionals, and optimal outcomes." />
      </Head>

      <div className="vlt-site-overlay"></div>

      <main className="vlt-main">
        <div className="vlt-page-content">
          <section
            className="has-white-color"
            style={{
              backgroundImage: "url('/assets/img/pages/aboutus/aboutusbg.jpg')",
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}
          >
            <div className="vlt-page-title vlt-page-title--style-4">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <h1 className="vlt-page-title__title" style={{ color: 'white' , fontSize: "4rem" , fontWeight:"700"}}>
                      Off Shore Development Center
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="vlt-gap-150"></div>
          </section>

          <div className="vlt-gap-80"></div>

          <section>
            <div className="container">
              {/* Framer Motion replaced AOS */}
              <motion.div 
                className="row" 
                {...fadeUp(100)}
              >
                <div className="text-center">
                  <div className="vlt-animated-block">
                    <h3 className="vlt-section-title__title">In Brief</h3>
                    <p>
                      We provide an offshore development center based in Mumbai, India – just so you get the best of the resource pool of qualified and experienced professionals, infrastructure, and timely executed work.
                    </p>
                    <p>
                      Most of our customers leverage their partnership and build relationships with us by utilizing our offshore dedicated software development center that extends its IT expertise and efficiency to its clients keeping everything cost effective.
                    </p>
                    <p>
                      Opting for this arrangement helps you save on two important costs: infrastructure and hiring staff. The Vector Art team on contract to you works exclusively on your projects, and directly reports to you as well. In effect, you would be managing your project with complete control over the Full Time Equivalent (FTE) resources, as if they were at your own office. This also helps you tackle urgent and time-sensitive projects in a much more efficient manner.
                    </p>
                  </div>
                  <div className="vlt-gap-80"></div>
                </div>
              </motion.div>
            </div>
          </section>

          <section className="has-black-background-color has-white-color">
            <div className="vlt-gap-30"></div>
            <motion.div 
              className="container" 
              {...fadeUp(100)}
            >
              <div className="row">
                <div className="text-center">
                  <div className="vlt-animated-block">
                    <h3 className="vlt-section-title__title text-light">Our Expertise</h3>
                  </div>

                  <div className="vlt-gap-80"></div>

                  <div className="row">
                    <div className="col-lg-3">
                      <div className="text-center align-center">
                        <img src="/assets/img/pages/offshoredevelopmentcenter/net.jpg" alt=".net logo" />
                        <div className="vlt-gap-10"></div>
                        <p>
                          Our .NET employees have over 5 years average experience in web/software development for Promotional suppliers and distributors. Our team has developed a number of complex and large-size .NET applications. We guarantee and commit to provide top quality and highly secured solutions in our service.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div className="text-center align-center">
                        <img src="/assets/img/pages/offshoredevelopmentcenter/java.jpg" alt="java logo" />
                        <div className="vlt-gap-10"></div>
                        <p>
                          Our Java developers have an average of 5 years experience out of which typically 1-2 years is in the handheld/mobile space. We can assist you in enhancing your current web/software/mobile systems or help you develop new solutions catered to your needs.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div className="text-center align-center">
                        <img src="/assets/img/pages/offshoredevelopmentcenter/microsoft.jpg" alt="microsoft logo" />
                        <div className="vlt-gap-10"></div>
                        <p>
                          With experience in Dynamics AX & NAV both on the functional and technical side, we can help you in supporting your existing ERP or providing enhancement/implementation solutions for a completely new system based on Dynamics AX or NAV.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div className="text-center align-center">
                        <img src="/assets/img/pages/offshoredevelopmentcenter/php-mysql.jpg" alt="php mysql logo" />
                        <div className="vlt-gap-10"></div>
                        <p>
                          Our expert PHP programmers cater to your specific need using the perfection combination of PHP tools and features that give the website every edge and touch for accelerated performance and hi-end navigation experience.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="vlt-gap-30"></div>
          </section>

          <div className="vlt-gap-80"></div>

          <section className="has-white-color">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="vlt-animated-block">
                    <motion.h2 
                      className="vlt-section-title__title" 
                      style={{ display: 'flex', justifyContent: 'center' }} 
                      {...fadeUp(100)}
                    >
                      Software development skills
                    </motion.h2>

                    <div className="vlt-gap-80"></div>

                    <div className="row">
                      <motion.div 
                        className="col-lg-6" 
                        style={{ marginBottom: '20px' }} 
                        {...fadeUp(100)}
                      >
                        <img src="/assets/img/pages/offshoredevelopmentcenter/Development-Languages1.png" alt="Development Languages" />
                      </motion.div>

                      <motion.div 
                        className="col-lg-6" 
                        style={{ marginBottom: '20px' }} 
                        {...fadeUp(400)}
                      >
                        <button className="accordion"><b>Languages</b></button>
                        <div className="panel">
                          <div style={{ padding: '10px' }}>
                            {['ASP.NET', 'C#', 'VB.NET', 'Coldfusion', 'VBScript', 'Java', 'JSP', 'PL/SQL', 'HTML / DHTML / XML', 'PHP', 'Action Scripting'].map(lang => (
                              <p key={lang} style={{ margin: '0px 0px 5px 0px' }}><IoCheckmarkCircle /> {lang}</p>
                            ))}
                          </div>
                        </div>

                        <button className="accordion"><b>Libraries</b></button>
                        <div className="panel">
                          <div style={{ padding: '10px' }}>
                            {['AJAX', 'OLEDB/ADO', 'Win API', 'J2EE', 'JDK', 'SWING'].map(lib => (
                              <p key={lib} style={{ margin: '0px 0px 5px 0px' }}><IoCheckmarkCircle /> {lib}</p>
                            ))}
                          </div>
                        </div>

                        <button className="accordion"><b>Technologies</b></button>
                        <div className="panel">
                          <div style={{ padding: '10px' }}>
                            {['COM/DCOM', 'COM+', 'ASP', 'CORBA', 'EJB', 'JSP/Servlets'].map(tech => (
                              <p key={tech} style={{ margin: '0px 0px 5px 0px' }}><IoCheckmarkCircle /> {tech}</p>
                            ))}
                          </div>
                        </div>

                        <button className="accordion"><b>Application Servers</b></button>
                        <div className="panel">
                          <div style={{ padding: '10px' }}>
                            {['COM/DCOM', 'MTS+', 'MS IIS', 'Apache', '.NET Framework'].map(srv => (
                              <p key={srv} style={{ margin: '0px 0px 5px 0px' }}><IoCheckmarkCircle /> {srv}</p>
                            ))}
                          </div>
                        </div>

                        <button className="accordion"><b>Database Servers</b></button>
                        <div className="panel">
                          <div style={{ padding: '10px' }}>
                            {['Oracle', 'MS SQL Server', 'MS Access', 'MySQL'].map(db => (
                              <p key={db} style={{ margin: '0px 0px 5px 0px' }}><IoCheckmarkCircle /> {db}</p>
                            ))}
                          </div>
                        </div>

                        <button className="accordion"><b>Tools</b></button>
                        <div className="panel">
                          <div style={{ padding: '10px' }}>
                            <p style={{ margin: '0px 0px 5px 0px' }}><IoCheckmarkCircle /> Visual Studio</p>
                            <p style={{ margin: '0px 0px 5px 0px' }}><IoCheckmarkCircle /> VSS</p>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    <div className="vlt-gap-80"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}