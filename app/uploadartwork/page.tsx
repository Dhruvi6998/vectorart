// app/upload-artwork/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { motion, Variants } from 'framer-motion';
import Script from 'next/script';

// Declare global grecaptcha type
declare global {
  interface Window {
    grecaptcha: any;
  }
}

// TS-safe fadeUp variant generator
const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: "easeInOut"
    }
  }
});

export default function UploadArtwork() {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    orderInformation: '',
    agree: false
  });
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

  // Get reCAPTCHA site key from environment variable
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY_ARTWORK;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!recaptchaSiteKey) {
      await Swal.fire({
        title: 'Configuration Error',
        text: 'reCAPTCHA is not properly configured. Please contact support.',
        icon: 'error'
      });
      return;
    }

    // Get reCAPTCHA token
    const recaptchaResponse = window.grecaptcha.getResponse();
    
    if (!recaptchaResponse) {
      await Swal.fire({
        title: 'Verification Required',
        text: 'Please complete the reCAPTCHA verification.',
        icon: 'warning'
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value.toString());
      });
      if (file) formDataToSend.append('file', file);
      formDataToSend.append('recaptchaToken', recaptchaResponse);

      const response = await fetch('/api/uploadartwork', { 
        method: 'POST', 
        body: formDataToSend 
      });
      const result = await response.json();

      if (response.ok) {
        await Swal.fire({
          title: 'Message Sent!',
          text: 'We got your message! Our team will get back to you shortly.',
          icon: 'success'
        });
        setFormData({ 
          name: '', 
          companyName: '', 
          email: '', 
          phone: '', 
          orderInformation: '', 
          agree: false 
        });
        setFile(null);
        (e.target as HTMLFormElement).reset();
        window.grecaptcha.reset();
      } else {
        await Swal.fire({ 
          title: 'Error!', 
          text: result.error || 'Something went wrong.', 
          icon: 'error' 
        });
        window.grecaptcha.reset();
      }
    } catch (error) {
      await Swal.fire({ 
        title: 'Error!', 
        text: 'Failed to send message.', 
        icon: 'error' 
      });
      window.grecaptcha.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Load reCAPTCHA script */}
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`}
        onLoad={() => setRecaptchaLoaded(true)}
        strategy="lazyOnload"
      />

      <div className="vlt-site-overlay"></div>

      <main className="vlt-main">
        <div className="vlt-page-content">
          {/* Hero Section */}
          <section className="has-white-color" style={{ 
            backgroundImage: 'url(/assets/img/pages/aboutus/aboutusbg.jpg)', 
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover' 
          }}>
            <div className="vlt-page-title vlt-page-title--style-4">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <h1 className="vlt-page-title__title" style={{ 
                      color: 'white', 
                      fontSize: "4rem", 
                      fontWeight: "700" 
                    }}>
                      Artwork Upload
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="vlt-gap-150"></div>
          </section>

          {/* Form Section */}
          <section>
            <div className="vlt-gap-120"></div>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp(0)}
                  >
                    <h2 className="text-center">Artwork Upload Form</h2>
                  </motion.div>

                  <div className="vlt-gap-30"></div>

                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp(0.1)}
                  >
                    <h4>If you are interested in producing your printed product (t-shirts, business cards, promotional product, etc.), we will need your artwork file.</h4>
                  </motion.div>

                  <div className="vlt-gap-60"></div>
                </div>

                <div className="col-lg-12">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp(0.2)}
                  >
                    <form onSubmit={handleSubmit}>
                      <div className="vlt-form-row two-col">
                        <div className="vlt-form-group">
                          <input
                            className="vlt-form-control"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder=" "
                          />
                          <label className="vlt-form-label">Name*</label>
                        </div>
                        <div className="vlt-form-group">
                          <input
                            className="vlt-form-control"
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleInputChange}
                            required
                            placeholder=" "
                          />
                          <label className="vlt-form-label">Company name*</label>
                        </div>
                      </div>

                      <div className="vlt-form-row two-col">
                        <div className="vlt-form-group">
                          <input
                            className="vlt-form-control"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder=" "
                            required
                          />
                          <label className="vlt-form-label">Email address*</label>
                        </div>
                        <div className="vlt-form-group">
                          <input
                            className="vlt-form-control"
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder=" "
                            required
                          />
                          <label className="vlt-form-label">Phone number</label>
                        </div>
                      </div>

                      <div className="vlt-form-group">
                        <input
                          type="file"
                          className="vlt-form-control"
                          name="file"
                          onChange={handleFileChange}
                        />
                      </div>

                      <div className="vlt-form-group">
                        <textarea
                          className="vlt-form-control"
                          name="orderInformation"
                          value={formData.orderInformation}
                          onChange={handleInputChange}
                          rows={5}
                          placeholder=" "
                        ></textarea>
                        <label className="vlt-form-label">Order information or notes</label>
                      </div>

                      <div className="vlt-form-group">
                        <input
                          type="checkbox"
                          className="vlt-form-control"
                          name="agree"
                          checked={formData.agree}
                          onChange={handleInputChange}
                          required
                        />
                        <label style={{ marginLeft: '8px' }}>
                          I Agree to Receive Promotional Discounts & Newsletters
                        </label>
                      </div>

                      {/* reCAPTCHA */}
                      <div className="vlt-form-group" style={{ marginBottom: '20px' }}>
                        {recaptchaSiteKey ? (
                          <div 
                            className="g-recaptcha" 
                            data-sitekey={recaptchaSiteKey}
                          ></div>
                        ) : (
                          <div className="alert alert-warning">
                            reCAPTCHA is not configured. Please set <code>NEXT_PUBLIC_RECAPTCHA_SITE_KEY</code> in your environment variables.
                          </div>
                        )}
                      </div>

                      <button
                        className="vlt-btn vlt-btn--secondary vlt-btn--lg"
                        type="submit"
                        disabled={isSubmitting || !recaptchaSiteKey}
                      >
                        {isSubmitting ? 'Sending...' : 'Submit'}
                      </button>
                    </form>
                  </motion.div>

                  <div className="vlt-gap-60"></div>

                  <motion.div
                    className="col-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp(0.3)}
                  >
                    <h5>Vector Art is the best to send us [common extensions include: .ai, .eps, .fla & .cdr]. We also accept design in raster formats [common extensions include: .jpg, .psd, .png & .gif], the higher the resolution the better. For more information on what files and file types work best.</h5>
                  </motion.div>

                  <div className="vlt-gap-30"></div>

                  <motion.div
                    className="col-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp(0.4)}
                  >
                    <h5>Please mail on info@vectorart.co if you have any questions or concerns.</h5>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}