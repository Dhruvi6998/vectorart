'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import { motion } from 'framer-motion';

interface Review {
  name: string;
  message: string;
}

// Declare global grecaptcha type
declare global {
  interface Window {
    grecaptcha: any;
    onRecaptchaLoadCallback?: () => void;
  }
}

export default function PenToolPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const recaptchaRef = useRef<HTMLDivElement>(null);
  const recaptchaWidgetId = useRef<number | null>(null);

  // Get reCAPTCHA site key from environment variable
  const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY;

  useEffect(() => {
    fetchReviews();
  }, []);

  // Initialize reCAPTCHA callback function
  const initializeRecaptcha = useCallback(() => {
    if (window.grecaptcha && recaptchaRef.current && RECAPTCHA_SITE_KEY) {
      try {
        // Clear any existing widget
        if (recaptchaWidgetId.current !== null) {
          window.grecaptcha.reset(recaptchaWidgetId.current);
        }
        
        // Render new widget
        recaptchaWidgetId.current = window.grecaptcha.render(recaptchaRef.current, {
          sitekey: RECAPTCHA_SITE_KEY,
          callback: (token: string) => {
            console.log('reCAPTCHA token received:', token);
            setRecaptchaToken(token);
          },
          'expired-callback': () => {
            console.log('reCAPTCHA expired');
            setRecaptchaToken(null);
          },
          'error-callback': () => {
            console.log('reCAPTCHA error');
            setRecaptchaToken(null);
          },
        });
        setRecaptchaLoaded(true);
        console.log('reCAPTCHA initialized successfully');
      } catch (error) {
        console.error('Error initializing reCAPTCHA:', error);
      }
    }
  }, [RECAPTCHA_SITE_KEY]);

  // Set global callback when component mounts
  useEffect(() => {
    window.onRecaptchaLoad = () => {
      console.log('reCAPTCHA script loaded');
      initializeRecaptcha();
    };

    // Also check if grecaptcha is already loaded (e.g., on hot reload)
    if (window.grecaptcha) {
      console.log('reCAPTCHA already available');
      // Small delay to ensure DOM is ready
      setTimeout(initializeRecaptcha, 100);
    }

    return () => {
      // Cleanup
      if (recaptchaWidgetId.current !== null && window.grecaptcha) {
        try {
          window.grecaptcha.reset(recaptchaWidgetId.current);
        } catch (e) {
          console.error('Error cleaning up reCAPTCHA:', e);
        }
      }
    };
  }, [initializeRecaptcha]);

  const fetchReviews = async () => {
    try {
      const response = await fetch('/api/reviews');
      if (response.ok) {
        const data = await response.json();
        setReviews(data);
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!RECAPTCHA_SITE_KEY) {
      (window as any).Swal.fire({
        title: 'Configuration Error',
        text: 'reCAPTCHA is not properly configured. Please contact support.',
        icon: 'error',
        confirmButtonColor: '#23265d',
      });
      return;
    }

    if (!recaptchaToken) {
      (window as any).Swal.fire({
        title: 'Verification Required',
        text: 'Please complete the reCAPTCHA verification',
        icon: 'warning',
        confirmButtonColor: '#23265d',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/pentool', {
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
        (window as any).Swal.fire({
          title: 'Message Sent!',
          text: 'We got your feedback',
          icon: 'success',
          confirmButtonColor: '#23265d',
        });

        if (data.review) {
          setReviews((prev) => [...prev, data.review]);
        }
        
        setFormData({ name: '', email: '', message: '' });
        
        // Reset reCAPTCHA
        if (window.grecaptcha && recaptchaWidgetId.current !== null) {
          window.grecaptcha.reset(recaptchaWidgetId.current);
          setRecaptchaToken(null);
        }
      } else {
        (window as any).Swal.fire({
          title: 'Error!',
          text: data.error || 'Failed to submit feedback. Please try again.',
          icon: 'error',
          confirmButtonColor: '#23265d',
        });
      }
    } catch (error) {
      console.error('Error submitting review:', error);
      (window as any).Swal.fire({
        title: 'Error!',
        text: 'Failed to submit feedback. Please try again.',
        icon: 'error',
        confirmButtonColor: '#23265d',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const slideUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const shareUrl = 'https://vectorart.co/PenTool2025';
  const shareTitle = 'Vectorart.co: PenTool - 2025';
  const shareMsg = 'Vector Art - PenTool 2025';

  const socialLinks = {
    facebook: `https://www.facebook.com/share.php?u=${encodeURI(shareUrl)}`,
    twitter: `http://twitter.com/share?&url=${encodeURI(shareUrl)}&text=${encodeURIComponent(shareMsg)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURI(shareUrl)}`,
    reddit: `http://www.reddit.com/submit?url=${encodeURI(shareUrl)}&title=${encodeURIComponent(shareTitle)}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareMsg)}: ${encodeURI(shareUrl)}`,
    telegram: `https://telegram.me/share/url?url=${encodeURI(shareUrl)}&text=${encodeURIComponent(shareMsg)}`,
  };

  return (
    <>
      <Head>
        <title>Vectorart.co: PenTool - 2025</title>
        <meta name="keywords" content="PPAI, PPAI 2025, Vector art, Graphic design" />
        <meta name="description" content="Vectorart.co: PenTool - 2025 | High-Quality Vector Art for Creative Projects" />
        <meta property="og:title" content="Vectorart.co: PenTool - 2025" />
        <meta property="og:description" content="Vectorart.co: PenTool - 2025 | High-Quality Vector Art for Creative Projects" />
        <meta property="og:image" content="/assets/img/pages/News/ASI2025.png" />
        <meta property="og:url" content="https://vectorart.co/PenTool2025/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="VectorArt" />
      </Head>

      <Script src="https://cdn.jsdelivr.net/npm/sweetalert2@11" strategy="beforeInteractive" />
      
      {/* Inline script to set callback before loading reCAPTCHA */}
      <Script id="recaptcha-callback" strategy="beforeInteractive">
        {`
          window.onRecaptchaLoad = function() {
            console.log('reCAPTCHA ready to initialize');
            if (window.grecaptcha && window.grecaptcha.render) {
              // The initialization will happen in useEffect
              if (typeof window.onRecaptchaCallback === 'function') {
                window.onRecaptchaCallback();
              }
            }
          };
        `}
      </Script>
      
      {/* Load reCAPTCHA */}
      <Script 
        src="https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit"
        strategy="afterInteractive"
        onLoad={() => {
          console.log('reCAPTCHA script loaded via Script component');
        }}
        onError={() => console.error('Failed to load reCAPTCHA script')}
      />

      <div className="vlt-site-overlay"></div>

      <main className="vlt-main">
        <div className="vlt-page-content">
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
            transition={{ duration: 1 }}
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
                    <motion.h1 
                      variants={slideUpVariants}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="vlt-page-title__title" 
                      style={{ color: 'white', fontSize: "4rem", fontWeight: "700" }}
                    >
                      PenTool - 2025
                    </motion.h1>
                  </div>
                  <div className="col-md-6"></div>
                </div>
              </div>
            </div>
            <div className="vlt-gap-150"></div>
          </motion.section>

          <div className="vlt-gap-80"></div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            transition={{ duration: 1 }}
            className="container" 
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          >
            <motion.div variants={slideUpVariants} className="text-content">
              <h1 style={{ fontSize: '2em', fontWeight: 'bold', margin: 0 }}>
                Precision Meets Innovation – Welcome to Pentool
              </h1>
              <p style={{ fontSize: '1em', lineHeight: 1.5, margin: '1em 0' }}>
                "We are thrilled to announce that{' '}
                <span>
                  <a href="https://vectorart.co" target="_blank" rel="noopener noreferrer">
                    vectorart.co
                  </a>
                </span>
                , At Pentool, we believe that every stroke counts. Our innovative tools are crafted
                for creators who demand precision, efficiency, and creativity in their work. Whether
                you're a graphic designer, digital artist, or anyone passionate about bringing ideas
                to life, Pentool empowers you to unlock your full creative potential. Join us at
                Pentool, where your ideas take shape with clarity and precision. It's time to create
                without limits."
              </p>
            </motion.div>
            <motion.div 
              variants={slideUpVariants}
              transition={{ delay: 0.2 }}
              className="logo" 
              style={{ maxWidth: '50%', textAlign: 'right' }}
            >
              <img
                alt="Vector Art logo"
                height="900"
                src="/assets/img/pages/PenToolImages/5.jpg"
                width="800"
                style={{ borderRadius: '5px' }}
              />
            </motion.div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
            transition={{ duration: 1, delay: 0.3 }}
            className="container"
          >
            <div className="text-content" style={{ maxWidth: '100%', marginTop: '20px' }}>
              <h1 style={{ fontSize: '2em', fontWeight: 'bold', margin: 0 }}>
                Creative Expression at Miami Beach: A Pentool Adventure
              </h1>
              <p style={{ fontSize: '1em', lineHeight: 1.5, margin: '1em 0' }}>
                Explore the vibrant fusion of digital art and natural beauty at Miami Beach, where
                the Pentool becomes a tool for capturing the essence of the waves, sunsets, and the
                spirit of the coast. This artwork combines the precision of digital design with the
                free-flowing inspiration drawn from the ocean's rhythms. Perfect for anyone who
                appreciates the marriage of nature and creativity.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            transition={{ duration: 1, delay: 0.4 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '15px',
              padding: '15px',
              width: '100%',
              maxWidth: '1140px',
              margin: 'auto',
            }}
          >
            <motion.img variants={slideUpVariants} src="/assets/img/pages/PenToolImages/2.jpg" alt="Image 1" style={{ width: '100%', height: '397px', borderRadius: '5px' }} />
            <motion.img variants={slideUpVariants} transition={{ delay: 0.1 }} src="/assets/img/pages/PenToolImages/1.jpg" alt="Image 4" style={{ width: '100%', height: 'auto', borderRadius: '5px' }} />
            <motion.img variants={slideUpVariants} transition={{ delay: 0.2 }} src="/assets/img/pages/PenToolImages/4.jpg" alt="Image 2" style={{ width: '100%', height: '397px', borderRadius: '5px' }} />
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
            transition={{ duration: 1, delay: 0.5 }}
            className="container"
          >
            <div style={{ marginTop: '40px' }}>
              <div className="text-content" style={{ maxWidth: '100%', marginTop: '20px' }}>
                <h1 style={{ fontSize: '2em', fontWeight: 'bold', margin: 0 }}>
                  Empowering Designers, Elevating Creations – Pentool
                </h1>
                <p style={{ fontSize: '1em', lineHeight: 1.5, margin: '1em 0' }}>
                  At Pentool, we believe every designer deserves the best tools to bring their
                  vision to life. Our products are built to enhance your workflow, combining
                  cutting-edge technology with effortless usability. Elevate your creations with
                  Pentool and experience design like never before. Whether you're a seasoned
                  professional or just starting your creative journey, Pentool helps you craft
                  designs that inspire.
                </p>
              </div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                transition={{ duration: 1, delay: 0.6 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '15px',
                  paddingTop: '15px',
                  width: '100%',
                  maxWidth: '1140px',
                  margin: 'auto',
                }}
              >
                <motion.video variants={slideUpVariants} controls style={{ width: '100%', height: 'auto', borderRadius: '5px' }}>
                  <source src="/assets/img/pages/PenToolImages/8.mp4" type="video/mp4" />
                </motion.video>
                <motion.video variants={slideUpVariants} transition={{ delay: 0.1 }} controls style={{ width: '100%', height: 'auto', borderRadius: '5px' }}>
                  <source src="/assets/img/pages/PenToolImages/9.mp4" type="video/mp4" />
                </motion.video>
                <motion.video variants={slideUpVariants} transition={{ delay: 0.2 }} controls style={{ width: '100%', height: 'auto', borderRadius: '5px' }}>
                  <source src="/assets/img/pages/PenToolImages/10.mp4" type="video/mp4" />
                </motion.video>
              </motion.div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants}
                transition={{ duration: 1, delay: 0.7 }}
                className="text-content" 
                style={{ maxWidth: '100%', marginTop: '20px' }}
              >
                <h1 style={{ fontSize: '2em', fontWeight: 'bold', margin: 0 }}>
                  Design Beyond Limits – Powered by Pentool
                </h1>
                <p style={{ fontSize: '1em', lineHeight: 1.5, margin: '1em 0' }}>
                  Push the boundaries of your creativity with Pentool. Our tools are built to give
                  you the freedom and flexibility to create without limitations. Whether you're a
                  seasoned professional or just starting your creative journey, Pentool helps you
                  craft designs that inspire. Pentool is all about turning your ideas into stunning
                  designs. With our precise, easy-to-use tools, you can focus on what matters
                  most—creating. Experience the perfect combination of functionality and innovation
                  that will transform your design process into a masterpiece every time.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                transition={{ duration: 1, delay: 0.8 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '15px',
                  padding: '15px',
                  width: '100%',
                  maxWidth: '1140px',
                  margin: 'auto',
                }}
              >
                <motion.img variants={slideUpVariants} src="/assets/img/pages/PenToolImages/5.jpg" alt="Image 1" style={{ width: '100%', height: 'auto', borderRadius: '5px' }} />
                <motion.img variants={slideUpVariants} transition={{ delay: 0.1 }} src="/assets/img/pages/PenToolImages/6.jpg" alt="Image 4" style={{ width: '100%', height: 'auto', borderRadius: '5px' }} />
                <motion.img variants={slideUpVariants} transition={{ delay: 0.2 }} src="/assets/img/pages/PenToolImages/1.jpg" alt="Image 2" style={{ width: '100%', height: '466px', borderRadius: '5px' }} />
              </motion.div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants}
                transition={{ duration: 1, delay: 0.9 }}
                className="container"
              >
                <div style={{ marginTop: '40px' }}>
                  <div className="text-content" style={{ maxWidth: '100%', marginTop: '20px' }}>
                    <h1 style={{ fontSize: '2em', fontWeight: 'bold', margin: 0 }}>
                      Pentool: Pioneering Design Innovation in New York
                    </h1>
                    <p style={{ fontSize: '1em', lineHeight: 1.5, margin: '1em 0' }}>
                      Pentool is a creative design agency based in the heart of New York City, known
                      for its cutting-edge solutions in digital design, branding, and visual
                      storytelling. With a team of visionary designers, Pentool leverages the latest
                      technologies and creative techniques to bring compelling ideas to life. Whether
                      you're looking to elevate your brand identity, craft a captivating website, or
                      produce stunning graphics, Pentool offers tailored, high-impact design services
                      that make an impression in the fast-paced New York market and beyond. Discover
                      the art of design with Pentool, where creativity meets innovation.
                    </p>
                  </div>

                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    transition={{ duration: 1, delay: 1.0 }}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                      gap: '15px',
                      padding: '15px',
                      width: '100%',
                      maxWidth: '1140px',
                      margin: 'auto',
                    }}
                  >
                    <motion.img variants={slideUpVariants} src="/assets/img/pages/PenToolImages/18.jpg" alt="Image 1" style={{ width: '100%', height: 'auto', borderRadius: '5px' }} />
                    <motion.img variants={slideUpVariants} transition={{ delay: 0.1 }} src="/assets/img/pages/PenToolImages/19.jpg" alt="Image 4" style={{ width: '100%', height: 'auto', borderRadius: '5px' }} />
                    <motion.img variants={slideUpVariants} transition={{ delay: 0.2 }} src="/assets/img/pages/PenToolImages/20.jpeg" alt="Image 2" style={{ width: '100%', height: 'auto', borderRadius: '5px' }} />
                  </motion.div>

                  <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInVariants}
                    transition={{ duration: 1, delay: 1.1 }}
                    className="text-content" 
                    style={{ maxWidth: '100%', marginTop: '20px' }}
                  >
                    <p style={{ fontSize: '1em', lineHeight: 1.5, margin: '1em 0' }}>
                      Pentool is a forward-thinking design studio located in New York City, driven by
                      the belief that great design should inspire and transform. From branding and
                      digital solutions to creative direction and visual identity, Pentool's team of
                      experienced designers works tirelessly to craft innovative experiences that
                      resonate with audiences. Whether you're a startup or an established brand,
                      Pentool's tailored design strategies will help elevate your presence in the
                      fast-paced New York creative landscape. Experience the power of design that
                      pushes boundaries and leaves a lasting impression.
                    </p>
                  </motion.div>

                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    transition={{ duration: 1, delay: 1.2 }}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                      gap: '15px',
                      paddingTop: '15px',
                      width: '100%',
                      maxWidth: '1140px',
                      margin: 'auto',
                    }}
                  >
                    <motion.video variants={slideUpVariants} controls style={{ width: '100%', height: 'auto', borderRadius: '5px' }}>
                      <source src="/assets/img/pages/PenToolImages/15.mp4" type="video/mp4" />
                    </motion.video>
                    <motion.video variants={slideUpVariants} transition={{ delay: 0.1 }} controls style={{ width: '100%', height: 'auto', borderRadius: '5px' }}>
                      <source src="/assets/img/pages/PenToolImages/16.mp4" type="video/mp4" />
                    </motion.video>
                    <motion.video variants={slideUpVariants} transition={{ delay: 0.2 }} controls style={{ width: '100%', height: 'auto', borderRadius: '5px' }}>
                      <source src="/assets/img/pages/PenToolImages/17.mp4" type="video/mp4" />
                    </motion.video>
                  </motion.div>

                  <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInVariants}
                    transition={{ duration: 1, delay: 1.3 }}
                    className="text-content" 
                    style={{ maxWidth: '100%', marginTop: '20px' }}
                  >
                    <h1 style={{ fontSize: '2em', fontWeight: 'bold', margin: 0 }}>
                      Thank You for Joining Us on This Creative Journey!
                    </h1>
                    <p style={{ fontSize: '1em', lineHeight: 1.5, margin: '1em 0' }}>
                      A huge thank you to everyone who joined us at the launch of Pentool! Your
                      support and enthusiasm mean the world to us. We're excited to continue providing
                      you with the precision and innovation you need to bring your creative visions to
                      life. Stay tuned for more updates, and don't forget to connect with us here on
                      LinkedIn or visit Pentool.com for all the latest. Let's create something amazing
                      together!
                    </p>
                  </motion.div>

                  <motion.p 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInVariants}
                    transition={{ duration: 1, delay: 1.4 }}
                    style={{ fontSize: '1em', lineHeight: 1.5, margin: '1em 0' }}
                  >
                    We're back to the drawing board, inspired and energized – ready to help you create
                    the next big thing in vector art.
                  </motion.p>

                  <motion.p 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInVariants}
                    transition={{ duration: 1, delay: 1.5 }}
                    style={{ fontSize: '1em', lineHeight: 1.5, margin: '1em 0' }}
                  >
                    You can always connect with us here on{' '}
                    <span style={{ color: 'black', fontWeight: 'bold' }}>
                      <a href="https://vectorart.co/" target="_blank" rel="noopener noreferrer">
                        Linkedin
                      </a>
                    </span>{' '}
                    or visit our website{' '}
                    <span style={{ color: 'black', fontWeight: 'bold' }}>
                      <a href="https://vectorart.co/" target="_blank" rel="noopener noreferrer">
                        Vectorart.co
                      </a>
                    </span>{' '}
                    to learn more about our services and how we can help bring your creative vision to
                    life.
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Feedback Form Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
            transition={{ duration: 1 }}
          >
            <div className="vlt-gap-50"></div>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <motion.div 
                    variants={slideUpVariants}
                    transition={{ duration: 1, delay: 0 }}
                    className="vlt-animated-block"
                  >
                    <h2>We'd love to hear your feedback!!</h2>
                  </motion.div>
                  <div className="vlt-gap-40"></div>
                </div>

                <div className="col-lg-8">
                  <motion.div 
                    variants={slideUpVariants}
                    transition={{ duration: 1, delay: 0.1 }}
                    className="vlt-animated-block"
                  >
                    <form onSubmit={handleSubmit} autoComplete="off">
                      <div className="vlt-form-row two-col">
                        <div className="vlt-form-group">
                          <input
                            className="vlt-form-control"
                            type="text"
                            id="name"
                            name="name"
                            required
                            placeholder=" "
                            value={formData.name}
                            onChange={handleInputChange}
                          />
                          <label className="vlt-form-label" htmlFor="name">
                            Your name*
                          </label>
                        </div>
                        <div className="vlt-form-group">
                          <input
                            className="vlt-form-control"
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder=" "
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                          <label className="vlt-form-label" htmlFor="email">
                            Your Email*
                          </label>
                        </div>
                      </div>

                      <div className="vlt-form-group">
                        <textarea
                          className="vlt-form-control"
                          id="message"
                          name="message"
                          rows={5}
                          placeholder=" "
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                        />
                        <label className="vlt-form-label" htmlFor="message">
                          Message*
                        </label>
                      </div>

                      {/* reCAPTCHA Widget */}
                      <div style={{ marginBottom: '20px', minHeight: '78px' }}>
                        <div 
                          ref={recaptchaRef}
                          id="g-recaptcha"
                          data-sitekey={RECAPTCHA_SITE_KEY}
                          style={{ display: 'inline-block' }}
                        ></div>
                        
                        {!RECAPTCHA_SITE_KEY && (
                          <div className="alert alert-warning" style={{ marginTop: '10px' }}>
                            reCAPTCHA is not configured. Please set <code>NEXT_PUBLIC_RECAPTCHA_SITE_KEY</code> in your environment variables.
                          </div>
                        )}
                        
                        {RECAPTCHA_SITE_KEY && !recaptchaLoaded && (
                          <div style={{ marginTop: '10px', color: '#666', fontSize: '14px' }}>
                            Loading reCAPTCHA...
                          </div>
                        )}
                      </div>

                      <button
                        className="vlt-btn vlt-btn--secondary vlt-btn--lg"
                        type="submit"
                        disabled={isSubmitting || !RECAPTCHA_SITE_KEY}
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                      </button>
                    </form>

                    {/* Social Share Buttons */}
                    <motion.div
                      variants={slideUpVariants}
                      transition={{ duration: 1, delay: 0.4 }}
                      className="vlt-animated-block"
                      style={{ marginTop: '40px', display: 'flex' }}
                    >
                      <p
                        style={{
                          fontSize: '16px',
                          marginBottom: '20px',
                          marginRight: '20px',
                          textAlign: 'center',
                        }}
                      >
                        Share with Social Media :
                      </p>
                      <div id="share-buttons">
                        <a
                          href={socialLinks.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ padding: '10px' }}
                        >
                          <i className="fab fa-facebook"></i>
                        </a>
                        <a
                          href={socialLinks.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ padding: '10px' }}
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a
                          href={socialLinks.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ padding: '10px' }}
                        >
                          <i className="fab fa-linkedin"></i>
                        </a>
                        <a
                          href={socialLinks.reddit}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ padding: '10px' }}
                        >
                          <i className="fab fa-reddit"></i>
                        </a>
                        <a
                          href={socialLinks.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ padding: '10px' }}
                        >
                          <i className="fab fa-whatsapp"></i>
                        </a>
                        <a
                          href={socialLinks.telegram}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ padding: '10px' }}
                        >
                          <i className="fab fa-telegram"></i>
                        </a>
                      </div>
                    </motion.div>
                  </motion.div>
                  <div className="vlt-gap-60--md"></div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Reviews Display */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            transition={{ duration: 1 }}
            id="ASIreviews"
            className="ASIreviews"
            style={{
              marginTop: '20px',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                variants={slideUpVariants}
                transition={{ delay: index * 0.1 }}
                style={{
                  margin: '10px',
                  backgroundColor: 'white',
                  borderRadius: '10px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  padding: '20px',
                  maxWidth: '600px',
                  width: '100%',
                  textAlign: 'left',
                }}
              >
                <i
                  style={{ color: '#b3e5fc', fontSize: '40px' }}
                  className="fas fa-quote-left"
                ></i>
                <div style={{ fontWeight: 'bold', color: '#333', fontSize: '18px' }}>
                  {review.name}
                </div>
                <p
                  style={{
                    color: '#333',
                    fontSize: '16px',
                    lineHeight: 1.5,
                    margin: '20px 0',
                  }}
                >
                  {review.message}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>

      <style jsx>{`
        .text-content {
          max-width: 70%;
        }

        h2 {
          font-size: 25px;
        }

        @media (max-width: 768px) {
          .logo {
            display: none;
          }

          .container {
            flex-direction: column;
            align-items: flex-start;
          }

          .text-content,
          .logo {
            max-width: 99%;
            text-align: left;
          }

          .logo {
            margin-top: 1em;
          }
        }

        @media (max-width: 768px) {
          .collage-image img {
            margin-left: -7px !important;
          }
        }
      `}</style>
    </>
  );
}