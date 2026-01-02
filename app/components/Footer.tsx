'use client'
import React, { useState, useEffect, useRef } from 'react';
import { IoCall, IoMail, IoNavigate } from "react-icons/io5";
import Link from "next/link";
import { motion } from 'framer-motion';

interface Currency {
  code: string;
  symbol: string;
  name: string;
  url: string;
}

const Footer: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  
  // State for tracking visibility
  const [paymentVisible, setPaymentVisible] = useState(false);
  const [memberVisible, setMemberVisible] = useState(false);
  
  // Refs for animation sections
  const paymentSectionRef = useRef<HTMLDivElement>(null);
  const memberSectionRef = useRef<HTMLDivElement>(null);

  const currencies: Currency[] = [
    { code: "INR", symbol: "₹", name: "Indian Rupee", url: "https://rzp.io/rzp/jobspayment" },
    { code: "USD", symbol: "$", name: "US Dollar", url: "https://rzp.io/rzp/jobspaymentsusd" },
    { code: "EUR", symbol: "€", name: "Euro", url: "https://rzp.io/rzp/jobspaymenteur" }
  ];

  // Framer Motion variants that mimic AOS fade animation
  const fadeVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  // IntersectionObserver for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '-100px'
    };

    const paymentObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !paymentVisible) {
          setPaymentVisible(true);
        }
      });
    }, observerOptions);

    const memberObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !memberVisible) {
          setMemberVisible(true);
        }
      });
    }, observerOptions);

    if (paymentSectionRef.current) {
      paymentObserver.observe(paymentSectionRef.current);
    }

    if (memberSectionRef.current) {
      memberObserver.observe(memberSectionRef.current);
    }

    return () => {
      if (paymentSectionRef.current) {
        paymentObserver.unobserve(paymentSectionRef.current);
      }
      if (memberSectionRef.current) {
        memberObserver.unobserve(memberSectionRef.current);
      }
    };
  }, [paymentVisible, memberVisible]);

  const positionDropdown = () => {
    if (!dropdownRef.current || !wrapperRef.current) return;

    const containerRect = wrapperRef.current.getBoundingClientRect();
    const buttonWidth = containerRect.width;
    const leftPosition = containerRect.left + (buttonWidth / 2);

    dropdownRef.current.style.top = (containerRect.bottom + 5) + 'px';
    dropdownRef.current.style.left = leftPosition + 'px';
  };

  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isDropdownOpen) {
      setIsDropdownOpen(false);
    } else {
      positionDropdown();
      setIsDropdownOpen(true);
    }
  };

  const hideDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleCurrencyClick = (url: string) => {
    window.open(url, '_blank');
    hideDropdown();
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        hideDropdown();
      }
    };

    const handleResize = () => {
      if (isDropdownOpen) {
        positionDropdown();
      }
    };

    const handleScroll = () => {
      if (isDropdownOpen) {
        positionDropdown();
      }
    };

    document.addEventListener('click', handleClickOutside);
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isDropdownOpen]);

  return (
    <>
      <style jsx>{`
        @keyframes rotateCircle {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        #currencyDropdown {
          display: ${isDropdownOpen ? 'block' : 'none'};
          position: fixed;
          z-index: 1000;
        }

        #dropdown-chevron {
          transform: ${isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
          transition: transform 0.3s ease;
        }
      `}</style>

      {/* Payment Options Section */}
      <motion.section
        ref={paymentSectionRef}
        initial="hidden"
        animate={paymentVisible ? "visible" : "hidden"}
        variants={fadeVariants}
      >
        <div className="vlt-gap-30"></div>
        <div className="text-center">
          <div className="vlt-animated-block">
            <h2 className="vlt-section-title__title">Payment Options</h2>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        animate={paymentVisible ? "visible" : "hidden"}
        variants={fadeVariants}
      >
        <div className="vlt-gap-30"></div>
        <div className="row" style={{ textAlign: 'center', alignItems: 'center' }}>
          <div className="col-md-6">
            <div className="ButtonContainer" id="currencyDropdownWrapper" ref={wrapperRef}>
              <button
                className="PaymentButton-Button PaymentButton-Button--rzpTheme"
                id="currencyToggleBtn"
                ref={toggleBtnRef}
                onClick={toggleDropdown}
              >
                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.077 6.476l-.988 3.569 5.65-3.589-3.695 13.54 3.752.004 5.457-20L7.077 6.476z" fill="#fff"></path>
                  <path d="M1.455 14.308L0 20h7.202L10.149 8.42l-8.694 5.887z" fill="#fff"></path>
                </svg>
                <div className="PaymentButton-center">
                  <div className="PaymentButton-contents">
                    <span className="PaymentButton-text">Pay Now</span>
                    <div className="PoweredBy">Secured by Razorpay</div>
                  </div>
                  <svg id="dropdown-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
              </button>
            </div>
          </div>

          <div className="col-md-6">
            <h4>Pay By Capital One Bank</h4>
            <img src='/assets/img/capitalone.jpg' style={{ width: '300px', height: 'auto', borderRadius: '10px' }} alt="Capital One" />
            <p>Email us for bank details: <a href='mailto:info@vartservices.com'>info@vartservices.com</a></p>
          </div>
        </div>
      </motion.section>

      {/* Proud Member Of Section */}
      <section>
        <div className="vlt-gap-30"></div>
        <div className="container-fluid">
          <motion.div 
            ref={memberSectionRef}
            className="row" 
            style={{ alignItems: 'center' }}
            initial="hidden"
            animate={memberVisible ? "visible" : "hidden"}
            variants={fadeVariants}
          >
            <div className="col-12 col-lg-4">
              <div className="text-center">
                <div className="vlt-animated-block">
                  <h3 className="vlt-section-title__title">Proud Member Of</h3>
                </div>
              </div>
              <div className="vlt-gap-30--sm"></div>
            </div>
            <div className="col-12 col-lg-8">
              <div className="row" style={{ justifyContent: 'space-around' }}>
                <img src="/assets/img/pages/footer/distributor-central.png" alt="distributor central" style={{ height: '80px', width: 'auto' }} />
                <img src="/assets/img/pages/footer/ppai.png" alt="ppai" style={{ height: '80px', width: 'auto' }} />
                <img src="/assets/img/pages/footer/upic.png" alt="upic" style={{ height: '80px', width: 'auto' }} />
                <img src="/assets/img/pages/footer/partnerproof.png" alt="partner proof" style={{ height: '80px', width: 'auto' }} />
              </div>
            </div>
          </motion.div>
        </div>
        <div className="vlt-gap-30"></div>
      </section>

      <footer className="vlt-footer vlt-footer--style-2" style={{ paddingBottom: '50px' }}>
        <div className="container" style={{ marginLeft: '0px', marginRight: '0px', maxWidth: '100%' }}>
          <div className="row">
            {/* Widget 1 - JOIN SVG with Framer Motion */}
            <div className="col-12 col-sm-6 col-md col-lg">
              <div className="vlt-widget vlt-widget--text vlt-widget--white">
                <div style={{ fontFamily: 'Arial', textAlign: 'left' }}>
                  <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'white', marginLeft: '74px' }}>Join Us</div>
                  <div style={{ width: '300px', marginLeft: '-42px' }}>
                    <a href="contactus.php">
                      <svg width="300" height="200" viewBox="0 0 300 300">
                        <defs>
                          <path id="circlePath" d="M150,150 m-100,0 a100,100 0 1,1 200,0 a100,100 0 1,1 -200,0" />
                        </defs>
                        <motion.g
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                          style={{ transformOrigin: "150px 150px" }}
                        >
                          <text fontSize="25" fontFamily="Arial" textLength="628">
                            <textPath href="#circlePath" startOffset="0" fill="white">
                              JOIN US • JOIN US • JOIN US • JOIN US •&nbsp;
                            </textPath>
                          </text>
                        </motion.g>
                        <text x="150" y="155" textAnchor="middle" fontSize="30" fill="white" fontFamily="Arial">→</text>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Widget 2 - Company */}
            <div className="col-12 col-sm-6 col-md col-lg">
              <div className="vlt-widget vlt-widget--text vlt-widget--white">
                <h5 className="text-light">Company</h5>
                <ul>
                  <li>
                    <motion.div whileHover={{ color: '#e82e31' }} transition={{ duration: 0.3 }}>
                      <Link href="/aboutus" style={{color: "inherit"}}>About Us</Link>
                    </motion.div>
                  </li>
                  <li>
                    <motion.div whileHover={{ color: '#e82e31' }} transition={{ duration: 0.3 }}>
                      <Link href="/contact" style={{color: "inherit"}}>Contact Us</Link>
                    </motion.div>
                  </li>
                  <li>
                    <motion.div whileHover={{ color: '#e82e31' }} transition={{ duration: 0.3 }}>
                      <Link href="/privacypolicy" style={{color: "inherit"}}>Privacy Policy</Link>
                    </motion.div>
                  </li>
                  <li>
                    <motion.div whileHover={{ color: '#e82e31' }} transition={{ duration: 0.3 }}>
                      <Link href="/termsandconditions" style={{color: "inherit"}}>Terms & Conditions</Link>
                    </motion.div>
                  </li>
                  <li>
                    <motion.div whileHover={{ color: '#e82e31' }} transition={{ duration: 0.3 }}>
                      <Link href="/legaldisclaimer" style={{color: "inherit"}}>Legal Disclaimer</Link>
                    </motion.div>
                  </li>
                  <li>
                    <motion.div whileHover={{ color: '#e82e31' }} transition={{ duration: 0.3 }}>
                      <Link href="/payonline" style={{color: "inherit"}}>Pay Online</Link>
                    </motion.div>
                  </li>
                  <li>
                    <motion.div whileHover={{ color: '#e82e31' }} transition={{ duration: 0.3 }}>
                      <Link href="/pentool" style={{color: "inherit"}}>Pentool</Link>
                    </motion.div>
                  </li>
                </ul>
                <div className="vlt-gap-30--sm"></div>
              </div>
            </div>

            {/* Widget 3 - Services */}
            <div className="col-12 col-sm-6 col-md col-lg">
              <div className="vlt-widget vlt-widget--text vlt-widget--white">
                <h5 className="text-light">Services</h5>
                <ul>
                  <li>
                    <motion.div whileHover={{ color: '#e82e31' }} transition={{ duration: 0.3 }}>
                      <Link href="/graphicdesign" style={{color: "inherit"}}>Graphic Design</Link>
                    </motion.div>
                  </li>
                  <li>
                    <motion.div whileHover={{ color: '#e82e31' }} transition={{ duration: 0.3 }}>
                      <Link href="/digitizing" style={{color: "inherit"}}>Digitizing</Link>
                    </motion.div>
                  </li>
                  <li>
                    <motion.div whileHover={{ color: '#e82e31' }} transition={{ duration: 0.3 }}>
                      <Link href="/imageediting" style={{color: "inherit"}}>Image Editing</Link>
                    </motion.div>
                  </li>
                  <li>
                    <motion.div whileHover={{ color: '#e82e31' }} transition={{ duration: 0.3 }}>
                      <Link href="/technology" style={{color: "inherit"}}>Technology</Link>
                    </motion.div>
                  </li>
                  <li>
                    <motion.div whileHover={{ color: '#e82e31' }} transition={{ duration: 0.3 }}>
                      <Link href="/artandordermanagement" style={{color: "inherit"}}>Art & Order Management</Link>
                    </motion.div>
                  </li>
                  <li>
                    <motion.div whileHover={{ color: '#e82e31' }} transition={{ duration: 0.3 }}>
                      <Link href="/designanddataservices" style={{color: "inherit"}}>Design & Data Services</Link>
                    </motion.div>
                  </li>
                  <li>
                    <motion.div whileHover={{ color: '#e82e31' }} transition={{ duration: 0.3 }}>
                      <Link href="/digitalmarketing" style={{color: "inherit"}}>Digital Marketing</Link>
                    </motion.div>
                  </li>
                </ul>
                <div className="vlt-gap-30--sm"></div>
              </div>
            </div>

            {/* Widget 4 - Solutions */}
            <div className="col-12 col-sm-6 col-md col-lg">
              <div className="vlt-widget vlt-widget--text vlt-widget--white">
                <h5 className="text-light">Solutions</h5>
                <ul>
                  <li>
                    <motion.div whileHover={{ color: '#e82e31' }} transition={{ duration: 0.3 }}>
                      <Link href="/promovirtuals" style={{ color: "inherit" }}>
                        Virtual Sampling – Promo Virtuals
                      </Link>
                    </motion.div>
                  </li>
                  <li>
                    <motion.div whileHover={{ color: '#e82e31' }} transition={{ duration: 0.3 }}>
                      <Link href="/technologysolutions" style={{ color: "inherit" }}>
                        Technology Solutions
                      </Link>
                    </motion.div>
                  </li>
                  <li>
                    <motion.div whileHover={{ color: '#e82e31' }} transition={{ duration: 0.3 }}>
                      <Link href="/erpandordermanagement" style={{ color: "inherit" }}>
                        ERP & Order Management
                      </Link>
                    </motion.div>
                  </li>
                  <li>
                    <motion.div whileHover={{ color: '#e82e31' }} transition={{ duration: 0.3 }}>
                      <Link href="/offshoredevelopmentcenter" style={{ color: "inherit" }}>
                        Offshore Development Center
                      </Link>
                    </motion.div>
                  </li>
                  <li>
                    <motion.div whileHover={{ color: '#e82e31' }} transition={{ duration: 0.3 }}>
                      <Link href="/consulting" style={{ color: "inherit" }}>
                        Consulting
                      </Link>
                    </motion.div>
                  </li>
                  <li>
                    <motion.div whileHover={{ color: '#e82e31' }} transition={{ duration: 0.3 }}>
                      <Link href="/maintainanceandupgrades" style={{ color: "inherit" }}>
                        Maintenance & Upgrades
                      </Link>
                    </motion.div>
                  </li>
                  <li>
                    <Link
                      href="/news"
                      id="newsLinkforpodcast"
                      style={{
                        backgroundColor: "red",
                        padding: "0px 84px",
                        borderRadius: "10px",
                        color: "white",
                      }}
                    >
                      News
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/podcast"
                      id="newsLink"
                      style={{
                        backgroundColor: "red",
                        padding: "0px 76px",
                        borderRadius: "10px",
                        color: "white",
                      }}
                    >
                      Podcast
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/uploadartwork"
                      style={{
                        backgroundColor: "red",
                        padding: "0px 40px",
                        borderRadius: "10px",
                        color: "white",
                      }}
                    >
                      Start a free trial
                    </Link>
                  </li>
                </ul>
                <div className="vlt-gap-30--sm"></div>
              </div>
            </div>

            {/* Widget 5 - Pay Online */}
            <div className="col-12 col-sm-6 col-md col-lg" style={{ paddingLeft: '70px' }}>
              <div className="vlt-widget vlt-widget--white">
                <h5 className="text-light">Pay Online</h5>
                <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                  <li><img src="/assets/img/capitalone.jpg" alt="capitalone" style={{ height: '40px', marginBottom: '10px' }} /></li>
                  <li><img src="/assets/img/razorpay.png" alt="razorpay" style={{ height: '40px', marginBottom: '10px' }} /></li>
                  <li><img src="/assets/img/pages/footer/Visa_Inc._logo.png" alt="Visa" style={{ height: '30px', marginBottom: '10px' }} /></li>
                  <li><img src="/assets/img/pages/footer/master.png" alt="MasterCard" style={{ width: '90px', marginBottom: '10px' }} /></li>
                  <li><img src="/assets/img/pages/footer/ICICI-Bank.png" alt="ICICI" style={{ height: '30px', marginBottom: '10px' }} /></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <section style={{ backgroundColor: '#000000eb' }}>
        <div className="container">
          <div className="vlt-gap-10"></div>
          <div className="row text-light" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="col-12 col-md-4" style={{ display: 'flex' }}>
              <a href="tel:+16506101108" style={{ color: "white" }}>Follow us :</a>
              <div className="vlt-gap-10--sm"></div>
              <div className="social-icons" style={{ marginLeft: '20px' }}>
                <motion.a 
                  href="https://www.instagram.com/vectorartusa/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: 'white', margin: '0 10px', textDecoration: 'none', fontSize: '20px', display: 'inline-block' }}
                  whileHover={{ scale: 2, color: '#e1306c' }}
                  transition={{ duration: 0.3 }}
                >
                  <i className="fab fa-instagram"></i>
                </motion.a>
                <motion.a 
                  href="https://www.facebook.com/vectorart.co/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: 'white', margin: '0 10px', textDecoration: 'none', fontSize: '20px', display: 'inline-block' }}
                  whileHover={{ scale: 2, color: '#3b5998' }}
                  transition={{ duration: 0.3 }}
                >
                  <i className="fab fa-facebook-f"></i>
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/company/vectorart/posts/?feedView=all" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: 'white', margin: '0 10px', textDecoration: 'none', fontSize: '20px', display: 'inline-block' }}
                  whileHover={{ scale: 2 }}
                  transition={{ duration: 0.3 }}
                >
                  <i className="fab fa-linkedin-in"></i>
                </motion.a>
                <motion.a 
                  href="https://www.youtube.com/@VectorartUSA" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: 'white', margin: '0 10px', textDecoration: 'none', fontSize: '20px', display: 'inline-block' }}
                  whileHover={{ scale: 2, color: '#ff0000' }}
                  transition={{ duration: 0.3 }}
                >
                  <i className="fab fa-youtube"></i>
                </motion.a>
              </div>
            </div>
          </div>
          <div className="vlt-gap-10"></div>
        </div>
      </section>

      <section style={{ backgroundColor: '#000000eb' }}>
        <div className="container">
          <div className="vlt-gap-10"></div>
          <div className="row text-light">
            <div className="col-12 col-md-4" style={{ display: "flex", alignItems: "center" }}>
              <IoCall style={{ marginRight: "8px", color: "#e82e31" }} />
              <a href="tel:+16506101108" style={{ color: "white", textDecoration: "none" }}>
                +1 (650) 610-1108
              </a>
              <div className="vlt-gap-10--sm"></div>
            </div>

            <div className="col-12 col-md-3" style={{ display: "flex", alignItems: "center" }}>
              <IoMail style={{ marginRight: "8px", color: "#e82e31" }} />
              <a href="mailto:info@vectorart.co" style={{ color: "white", textDecoration: "none" }}>
                info@vectorart.co
              </a>
              <div className="vlt-gap-10--sm"></div>
            </div>

            <div className="col-12 col-md-5" style={{ display: "flex", alignItems: "center" }}>
              <IoNavigate style={{ marginRight: "8px", color: "#e82e31" }} />
              <span style={{ color: "white" }}>252-35 91 ave Bellerose Jamica 11246 NY USA</span>
              <div className="vlt-gap-10--sm"></div>
            </div>
          </div>
          <div className="vlt-gap-10"></div>
        </div>
      </section>

      {/* Cursor */}
      <div className="vlt-cursor">
        <div className="outer">
          <div className="circle"></div>
        </div>
        <div className="inner">
          <div className="icon"><i className="icon-arrow-top-right"></i></div>
        </div>
      </div>

      {/* Currency Dropdown */}
      <ul id="currencyDropdown" ref={dropdownRef}>
        {currencies.map((currency, index) => (
          <React.Fragment key={currency.code}>
            <li onClick={() => handleCurrencyClick(currency.url)}>
              <span className="currency-symbol">{currency.symbol}</span>
              <div className="currency-details">
                <div className="currency-code">Pay in {currency.code}</div>
                <div className="currency-name">{currency.name}</div>
              </div>
            </li>
            {index < currencies.length - 1 && <hr />}
          </React.Fragment>
        ))}
      </ul>
    </>
  );
};

export default Footer;