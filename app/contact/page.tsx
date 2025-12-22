'use client';

import { useState } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import { motion , easeOut} from 'framer-motion';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    message: '',
    agreeToNewsLetter: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Animation variants
  const fadeVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: easeOut
      }
    }
  };

  // State to track which elements have animated
  const [animatedElements, setAnimatedElements] = useState({
    title: false,
    form: false,
    office: false,
    headquarters: false,
    social: false,
    map: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Get reCAPTCHA token
    const recaptchaToken = (window as any).grecaptcha.getResponse();

    if (!recaptchaToken) {
      alert('Please complete the reCAPTCHA verification');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Show success message using SweetAlert2
        (window as any).Swal.fire({
          title: 'Message Sent!',
          text: "We got your message! Our team will get back to you shortly.",
          icon: 'success',
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          companyName: '',
          message: '',
          agreeToNewsLetter: false,
        });
        (window as any).grecaptcha.reset();
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      (window as any).Swal.fire({
        title: 'Error',
        text: error instanceof Error ? error.message : 'Failed to send message. Please try again.',
        icon: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us - Vector Art</title>
        <meta name="keywords" content="Vector art, Graphic design" />
        <meta
          name="description"
          content="Get in touch with us for all your inquiries, feedback, and assistance. We're here to help! Contact us today."
        />
      </Head>

      {/* Load reCAPTCHA */}
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="lazyOnload"
      />

      {/* Site overlay */}
      <div className="vlt-site-overlay"></div>

      {/* Main */}
      <main className="vlt-main">
        {/* Page content */}
        <div className="vlt-page-content">
          {/* Page title section */}
          <section
            className="has-white-color"
            style={{
              backgroundImage: 'url(/assets/img/pages/aboutus/aboutusbg.jpg)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <div className="vlt-page-title vlt-page-title--style-4">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <h1 className="vlt-page-title__title" style={{ color: 'white', fontSize: "4rem" , fontWeight:"700"}}>
                      Contact Us
                    </h1>
                  </div>
                  <div className="col-md-6"></div>
                </div>
              </div>
            </div>
            <div className="vlt-gap-150"></div>
          </section>

          <section>
            <div className="vlt-gap-120"></div>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  {/* Animated block */}
                  <motion.div 
                    className="vlt-animated-block"
                    initial="hidden"
                    animate={animatedElements.title ? "visible" : "hidden"}
                    onViewportEnter={() => setAnimatedElements(prev => ({ ...prev, title: true }))}
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeVariants}
                  >
                    <h2>Get in Touch</h2>
                  </motion.div>
                  <div className="vlt-gap-60"></div>
                </div>

                <div className="col-lg-8">
                  {/* Animated block */}
                  <motion.div 
                    className="vlt-animated-block"
                    initial="hidden"
                    animate={animatedElements.form ? "visible" : "hidden"}
                    onViewportEnter={() => setAnimatedElements(prev => ({ ...prev, form: true }))}
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeVariants}
                  >
                    {/* Contact form */}
                    <form method="POST" onSubmit={handleSubmit}>
                      <div className="vlt-form-row two-col">
                        <div className="vlt-form-group">
                          <input
                            className="vlt-form-control"
                            type="text"
                            name="name"
                            required
                            placeholder=" "
                            value={formData.name}
                            onChange={handleInputChange}
                          />
                          <label className="vlt-form-label">Your name*</label>
                        </div>
                        <div className="vlt-form-group">
                          <input
                            className="vlt-form-control"
                            type="email"
                            name="email"
                            required
                            placeholder=" "
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                          <label className="vlt-form-label">Email address*</label>
                        </div>
                      </div>

                      <div className="vlt-form-row two-col">
                        <div className="vlt-form-group">
                          <input
                            className="vlt-form-control"
                            type="tel"
                            name="phone"
                            placeholder=" "
                            value={formData.phone}
                            onChange={handleInputChange}
                          />
                          <label className="vlt-form-label">Phone number</label>
                        </div>
                        <div className="vlt-form-group">
                          <input
                            className="vlt-form-control"
                            type="text"
                            name="companyName"
                            placeholder=" "
                            value={formData.companyName}
                            onChange={handleInputChange}
                          />
                          <label className="vlt-form-label">Company Name</label>
                        </div>
                      </div>

                      <div className="vlt-form-group">
                        <textarea
                          className="vlt-form-control"
                          name="message"
                          rows={5}
                          placeholder=" "
                          value={formData.message}
                          onChange={handleInputChange}
                        ></textarea>
                        <label className="vlt-form-label">Message*</label>
                      </div>

                      <div className="vlt-form-group">
                        <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <input
                            type="checkbox"
                            name="agreeToNewsLetter"
                            required
                            checked={formData.agreeToNewsLetter}
                            onChange={handleInputChange}
                            style={{ width: 'auto', margin: 0 }}
                          />
                          <span>I Agree to Receive Promotional Discounts & Newsletters</span>
                        </label>
                      </div>

                      {/* Google reCAPTCHA */}
                      <div className="vlt-form-group">
                        <div
                          className="g-recaptcha"
                          data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY}
                        ></div>
                      </div>

                      <div className="vlt-gap-40"></div>

                      {/* Button */}
                      <button
                        className="vlt-btn vlt-btn--secondary vlt-btn--lg"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Submit'}
                      </button>
                    </form>
                  </motion.div>
                  <div className="vlt-gap-60--md"></div>
                </div>

                <div className="col-lg-4">
                  <div className="vlt-pl-70 vlt-pl-0--md">
                    <div className="row">
                      <div className="col-lg-12 col-md-6">
                        <motion.div
                          className="vlt-animated-block"
                          initial="hidden"
                          animate={animatedElements.office ? "visible" : "hidden"}
                          onViewportEnter={() => setAnimatedElements(prev => ({ ...prev, office: true }))}
                          viewport={{ once: true, amount: 0.3 }}
                          variants={fadeVariants}
                        >
                          <h5>Vector Art Corporate Office</h5>
                          <div className="vlt-gap-20"></div>
                          <p className="lh-2">
                            252-35 91 ave Bellerose Jamica 11246 NY USA
                            <br /> +1 860 261 2601 <br /> info@vectorart.co
                          </p>
                        </motion.div>
                        <div className="vlt-gap-60"></div>
                      </div>

                      <div className="col-lg-12 col-md-6">
                        <motion.div
                          className="vlt-animated-block"
                          initial="hidden"
                          animate={animatedElements.headquarters ? "visible" : "hidden"}
                          onViewportEnter={() => setAnimatedElements(prev => ({ ...prev, headquarters: true }))}
                          viewport={{ once: true, amount: 0.3 }}
                          variants={fadeVariants}
                        >
                          <h5>Headquarters</h5>
                          <div className="vlt-gap-20"></div>
                          <p className="lh-2">
                            6 Business Point, Paliram Rd, Lohana Colony, Andheri West,
                            Mumbai, Maharashtra 400058, India
                          </p>
                        </motion.div>
                        <div className="vlt-gap-40"></div>
                        <motion.div
                          className="vlt-animated-block"
                          initial="hidden"
                          animate={animatedElements.social ? "visible" : "hidden"}
                          onViewportEnter={() => setAnimatedElements(prev => ({ ...prev, social: true }))}
                          viewport={{ once: true, amount: 0.3 }}
                          variants={fadeVariants}
                        >
                          <a
                            className="vlt-social-icon vlt-social-icon--style-4"
                            href="https://www.instagram.com/vectorartusa/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="socicon-instagram"></i>
                          </a>
                          <a
                            className="vlt-social-icon vlt-social-icon--style-4"
                            href="https://www.facebook.com/vectorart.co/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="socicon-facebook"></i>
                          </a>
                          <a
                            className="vlt-social-icon vlt-social-icon--style-4"
                            href="https://twitter.com/vart_services"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="socicon-twitter"></i>
                          </a>
                          <a
                            className="vlt-social-icon vlt-social-icon--style-4"
                            href="https://www.linkedin.com/company/vectorart"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="socicon-linkedin"></i>
                          </a>
                          <a
                            className="vlt-social-icon vlt-social-icon--style-4"
                            href="https://www.youtube.com/@VectorartUSA"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="socicon-youtube"></i>
                          </a>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="vlt-gap-120"></div>
            <div className="container-fluid position-relative">
              <img
                className="vlt-particle"
                src="/assets/img/root/square-plus-pattern.png"
                data-animation-name="fadeInUp"
                alt="square-plus-pattern.png"
                style={{
                  position: 'absolute',
                  top: '-140px',
                  right: '-120px',
                  maxWidth: '232px',
                  // @ts-ignore
                  '--animate-delay': '.5s',
                }}
                loading="lazy"
              />
              <motion.div 
                className="vlt-animated-block"
                initial="hidden"
                animate={animatedElements.map ? "visible" : "hidden"}
                onViewportEnter={() => setAnimatedElements(prev => ({ ...prev, map: true }))}
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeVariants}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=..."
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </motion.div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}